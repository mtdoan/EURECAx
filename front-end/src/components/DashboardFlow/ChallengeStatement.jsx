import { Tooltip } from "components/shared";
import { useId } from "react";

const inputs = [
  {
    label: "How might we",
    key: "howMightWe",
    tip: (
      <div className="w-60">
        How might we [action]
        <br />
        <i>
          e.g. How might we build a dashboard and local LLM that supports
          problem solving
        </i>
      </div>
    ),
  },
  {
    label: "for",
    key: "for",
    tip: (
      <div className="w-60">
        For [stakeholder]
        <br />
        <i>e.g. for Defence and their partner</i>
      </div>
    ),
  },
  {
    label: "in order to",
    key: "inOrderTo",
    tip: (
      <div className="w-60">
        In order to [achieve]
        <br />
        <i>e.g. in order to accelerate outcomes</i>
      </div>
    ),
  },
];

const ChallengeStatement = ({ onChange, value }) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-8">
      {inputs.map(({ label, key, tip }) => (
        <div key={key} className="flex flex-col gap-1">
          <label
            htmlFor={`${key}-${id}`}
            className="text-xs flex flex-row gap-1 items-center [&_i]:text-gray-600"
          >
            {label}...
            <Tooltip tip={tip} />
          </label>
          <input
            id={`${key}-${id}`}
            type="text"
            className="bg-transparent text-gray-700 px-0 py-1 border-0 border-b-2 focus:border-blue-500 focus:outline-none focus:ring-0"
            onChange={(evt) => onChange(evt, label)}
            value={value[label]}
          />
        </div>
      ))}
    </div>
  );
};

export default ChallengeStatement;
