import { useReducer } from "react";
import Button from "./Button";
import ChallengeStatement from "./ChallengeStatement";
import StatusBar from "./StatusBar";
import InputCard from "./InputCard";
import { generateText } from "util/sampleData";
import { ExportJsonLink } from "components/shared";

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
    notes: [...Array(maxSteps).fill("")],
    isEventEditable: true,
    ...eventStepTitles,
  });
  const isAtFirstStep = state.step == 1;
  const isAtLastStep = state.step == maxSteps;

  const handleClickAiSuggestions = (eventStep) => {
    const text = generateText(eventStep.subtitle.toLowerCase());
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

  return (
    <div className="w-full h-full p-1">
      <div className="w-full h-full p-6 bg-white">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">
            Generate {eventSteps[state.step - 1].title}
          </h1>
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
                      onClick={() => handleClickAiSuggestions(eventStep)}
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
                        dispatch({
                          type: "textInput",
                          payload: {
                            keys: [eventStep.title, key],
                            value: evt.target.value,
                          },
                        });
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
            <Button
              label={isAtLastStep ? "Execute" : "Next"}
              className="bg-primary-700 text-white"
              onClick={() => dispatch({ type: "incrementStep" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFlow;
