import { useReducer, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'

// assets
import Button from "./Button";
import ChallengeStatement from "./ChallengeStatement";
import StatusBar from "./StatusBar";
import InputCard from "./InputCard";
import { generateText } from "util/sampleData";
import { ExportJsonLink } from "components/shared";
import BackIcon from "../dashboard/icons/backIcon";

const eventSteps = [
  {
    title: "Challenge Statement",
    subtitle: "EVENT",
  },
  {
    title: "Understand Event",
    subtitle: "UNDERSTAND",
  },
  {
    title: "Refine Event",
    subtitle: "REFINE",
  },
  {
    title: "Explore Event",
    subtitle: "EXPLORE",
  },
  {
    title: "Create Event",
    subtitle: "CREATE",
  },
  {
    title: "Action Event",
    subtitle: "ACTION",
  },
];
const maxSteps = 6;
const reducer = (state, action) => {
  switch (action.type) {
    case "updateNote": {
      const notes = state.notes;
      notes[action.payload.key] = action.payload.value;
      return {
        ...state,
        notes,
      };
    }
    case "incrementStep": {
      return {
        ...state,
        step: Math.min(state.step + 1, maxSteps),
        stepProgress: Math.min(state.stepProgress + 1, maxSteps),
      };
    }
    case "decrementStep": {
      return {
        ...state,
        step: Math.max(state.step - 1, 0),
      };
    }
    case "textInput": {
      // use multiple keys instead of one key. This is for accessing a nested object
      const keys = action.payload?.keys;
      if (keys) {
        let currentObj = state;
        keys.forEach((key, idx) => {
          // keep going down the child attributes of an object until the final
          // attr is reached
          if (idx === keys.length - 1) {
            currentObj[key] = action.payload.value;
          } else {
            currentObj = currentObj[key];
          }
        });
        return { ...state };
      }
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    }
    case "isEventEditable": {
      return {
        ...state,
        isEventEditable: action.payload.value,
      };
    }
  }
};
const eventStepTitles = eventSteps.reduce((prev, evt) => {
  return {
    ...prev,
    [evt.title]:
      evt.title === "Challenge Statement"
        ? { "How might we": "", for: "", "in order to": "" }
        : "",
  };
}, {});

const DashboardFlow = () => {
  const [state, dispatch] = useReducer(reducer, {
    step: 1,
    stepProgress: 1,
    notes: [...Array(maxSteps).fill("")],
    isEventEditable: true,
    ...eventStepTitles,
  });
  const isAtFirstStep = state.step == 1;
  const isAtLastStep = state.step == maxSteps;

  const handleClickAiSuggestions = (eventStep, text) => {
    // const text = generateText(eventStep.subtitle.toLowerCase());
    dispatch({
      type: "isEventEditable",
      payload: { value: false },
    });
    const speed = 2000;
    const len = text.length;
    const typewriter = (counter, lettersSkipped) => {
      if (counter < len) {
        setTimeout(
          () => {
            counter += lettersSkipped;
            dispatch({
              type: "textInput",
              payload: {
                key: eventStep.title,
                value: text.slice(0, counter),
              },
            });
            typewriter(counter, lettersSkipped);
          },
          speed / (len / lettersSkipped),
        );
      }
    };
    typewriter(0, 5);
    // Generate a fake simulated disabling effect after 1s
    setTimeout(() => {
      dispatch({
        type: "isEventEditable",
        payload: { value: true },
      });
    }, speed + 100);
  };

  const getJsonData = () => {
    const jsonData = eventSteps.map((step, idx) => {
      const content = state[step.title];
      return {
        title: step.title,
        content:
          step.title === "Challenge Statement"
            ? Object.entries(content).reduce(
              (prev, curr, idx, arr) =>
              (prev += `${curr[0]} ${curr[1]}${idx === arr.length - 1 ? "." : ", "
                }`),
              "",
            )
            : content,
        notes: state.notes[idx],
      };
    });
    return jsonData;
  };

  // Canvas functions
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("User"));
  const [canvas, setCanvas] = useState("");

  const [hmw, setHmw] = useState("");
  const [forInput, setForInput] = useState("");
  const [iot, setIot] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("Canvas", JSON.stringify(canvas))
  }, [canvas])

  const openDialog = async () => {
    if (document.getElementsByClassName("warning-backdrop")) {
      document.getElementsByClassName("warning-backdrop")[0].style.display = "block";
    }
  }

  const closeDialog = async () => {
    if (document.getElementsByClassName("warning-backdrop")) {
      document.getElementsByClassName("warning-backdrop")[0].style.display = "none";
    }
  }

  const checkCanvasExists = async () => {
    if (user.canvasid == null || user.canvasid == "") {
      alert("New canvas created");
      registerCanvas();
    } else {
      openDialog();
    }
  }

  const registerCanvas = async () => {
    try {
      const response = await axios.post(global.route + `/api/canvases`, {
        userid: user._id,
        eventData: "How might we " + hmw + " for " + forInput + " in order to " + iot,
        understandData: state["Understand Event"],
        refineData: state["Refine Event"],
        exploreData: state["Explore Event"],
        createData: state["Create Event"],
        actionData: state["Action Event"],
      }, { withCredentials: true });
      setCanvas(response.data);

      const response2 = await axios.put(global.route + `/api/users/profile`, {
        canvasid: response.data._id,
      }, { withCredentials: true })

      localStorage.setItem("User", JSON.stringify(response2.data));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const overwriteCanvas = async () => {
    try {
      closeDialog();

      await axios.delete(global.route + `/api/canvases/${user.canvasid}`, { withCredentials: true });
      localStorage.removeItem("Canvas");

      const response2 = await axios.put(global.route + `/api/users/profile`, {
        canvasid: "",
      }, { withCredentials: true });
      localStorage.setItem("User", JSON.stringify(response2.data));

      registerCanvas();
    } catch (error) {
      console.error(error)
    }
  }

  const handleNext = async () => {
    if (isAtFirstStep) {
      // get info from LLM

      try {
        setIsLoading(true);
        let prompt = "How might we " + hmw + " for " + forInput + " in order to " + iot;
        const response = await axios.post(global.llm + `/llm`, {
          promptText: prompt,
        }, { withCredentials: true });

        // console.log(response.data.outputArr[0])
        dispatch({ type: "textInput", payload: { key: "Understand Event", value: response.data.outputArr[0] } });
        dispatch({ type: "textInput", payload: { key: "Refine Event", value: response.data.outputArr[1] } });
        dispatch({ type: "textInput", payload: { key: "Explore Event", value: response.data.outputArr[2] } });
        dispatch({ type: "textInput", payload: { key: "Create Event", value: response.data.outputArr[3] } });
        dispatch({ type: "textInput", payload: { key: "Action Event", value: response.data.outputArr[4] } });

      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
      dispatch({ type: "incrementStep" })
    } else if (isAtLastStep) {
      // create canvas

      checkCanvasExists()
    } else {
      // next stage

      dispatch({ type: "incrementStep" })
    }

    if (state.step >= state.stepProgress) {
      setTimeout(() => {
        const eventStep = eventSteps[state.step]
        if (eventStep != undefined)
          handleClickAiSuggestions(eventStep, state[eventStep.title])
      }, 0);
    }
  }

  const handleChange = async (eventStepTitle, evtValue, key) => {
    if (key == "How might we") {
      setHmw(evtValue)
    } else if (key == "for") {
      setForInput(evtValue)
    } else if (key == "in order to") {
      setIot(evtValue)
    }

    dispatch({
      type: "textInput",
      payload: {
        keys: [eventStepTitle, key],
        value: evtValue,
      },
    });
  }

  return (
    <div className="w-full h-full p-1">
      <div className="w-full h-full p-6 bg-white">
        <div className="flex flex-col gap-8">
          <div style={{"display":"flex"}}>
              <h1 className="font-bold">
                Generate {eventSteps[state.step - 1].title}
              </h1>
              <div className="back-button" onClick={()=> navigate("/")} >
                <BackIcon />
              </div>
          </div>
          <StatusBar step={state.step} maxSteps={6} />
          <div className="flex flex-row w-full gap-4">
            {eventSteps.map((eventStep, idx) => (
              <InputCard
                key={eventStep.title}
                disabled={isAtFirstStep || !state.isEventEditable}
                className={`h-[55vh] w-3/4 [&_textarea]:text-gray-700 ${idx + 1 === state.step ? "block" : "hidden"
                  }`}
                onChange={(evt) => {
                  dispatch({
                    type: "textInput",
                    payload: { key: eventStep.title, value: evt.target.value },
                  });
                }}
                value={isAtFirstStep ? "" : state[eventStep.title]}
              >
                <div className="flex flex-row">
                  <h2 className="capitalize font-bold mr-auto">
                    {eventStep.subtitle}
                  </h2>
                  {!isAtFirstStep && (
                    <Button
                      className="bg-white !text-gray-800 text-sm !w-20"
                      label="AI"
                      onClick={() => handleClickAiSuggestions(eventSteps[state.step - 1], state[eventStep.title])}
                      icon={
                        <img
                          src="/ai-icon.svg"
                          height={18}
                          width={18}
                          className="invert"
                        />
                      }
                    />
                  )}
                </div>
                <div className="pt-2">
                  {isAtFirstStep ? (
                    <ChallengeStatement
                      onChange={(evt, key) => {
                        handleChange(eventStep.title, evt.target.value, key)
                      }}
                      value={state["Challenge Statement"]}
                    />
                  ) : (
                    <div className="text-sm pb-2">
                      {state.step == maxSteps ? "Documents" : "Components"}
                    </div>
                  )}
                </div>
              </InputCard>
            ))}
            <InputCard
              className="w-1/4"
              value={state.notes[state.step - 1]}
              onChange={(evt) =>
                dispatch({
                  type: "updateNote",
                  payload: { key: state.step - 1, value: evt.target.value },
                })
              }
              placeholder="Jot some things down..."
            >
              <h2 className="font-bold">Notes</h2>
            </InputCard>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              disabled={isAtFirstStep}
              label="Previous"
              onClick={() => dispatch({ type: "decrementStep" })}
              className={`disabled:opacity-0 ${isAtFirstStep ? "opacity-0" : "opacity-100"
                }`}
            />
            <ExportJsonLink
              className={`!bg-green-500 text-white ml-auto ${isAtLastStep ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              data={getJsonData()}
            />
            {
              isLoading == true ?
                <RotatingLines
                  strokeColor="rgba(0, 108, 253, 0.5)"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="26"
                  visible={true}
                /> : ""
            }
            <Button
              label={isAtLastStep ? "Execute" : "Next"}
              className="bg-primary-700 text-white"
              // onClick={() => dispatch({ type: "incrementStep" })}
              onClick={() => handleNext()}/>
          </div>

          <div className="warning-backdrop">
            <div className="warning-container">
              <text className="warning-heading">
                Warning
              </text>
              <text className="warning-subheading">
                Are you sure you want to create a new canvas?
              </text>
              <text className="warning-description">
                This will overwrite your current data.
              </text>

              <div className="warning-action">
                <button className="cancel-button" onClick={() => closeDialog()}>
                  Cancel
                </button>
                <button className="continue-button" onClick={() => overwriteCanvas()}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFlow;
