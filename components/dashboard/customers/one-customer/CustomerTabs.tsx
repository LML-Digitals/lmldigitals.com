import { motion } from "framer-motion";

const tabs = ["Summary", "Payments", "Discounts", "Effects"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span
        className={selected ? "text-white relative z-50 " : "relative z-50 "}
      >
        {text}
      </span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-blue-500/80"
        ></motion.span>
      )}
    </button>
  );
};

interface ButtonProps {
  selected: string;
  setSelected: (text: string) => void;
}

const ButtonShapeTabs = ({ selected, setSelected }: ButtonProps) => {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-16">
      {tabs.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

export default ButtonShapeTabs;
