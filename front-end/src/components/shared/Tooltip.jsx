import { InformationCircleIcon } from "@heroicons/react/24/outline";
const Tooltip = ({ tip }) => {
  return (
    <div className="group cursor-pointer relative">
      <InformationCircleIcon className="w-5 h-5 text-gray-500" />
      <div className="bg-white p-4 absolute rounded-md border-[1px] shadow-lg hidden group-hover:block top-0 left-6 z-10">
        {tip}
      </div>
    </div>
  );
};

export default Tooltip;
