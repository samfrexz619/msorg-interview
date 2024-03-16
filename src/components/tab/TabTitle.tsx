import { useCallback } from "react";

export interface Props {
  title: string;
  index: number;
  isActive?: boolean;
  setSelectedTab: (index: number) => void
}
const TabTitle = (props: Props): JSX.Element => {
  const { title, index, isActive, setSelectedTab } = props

  const handleClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li className="mb-4">
      <button onClick={handleClick} className={`w-[150px] h-[96px] ${isActive ? 'bg-[#FF6B00] text-white' : 'bg-[#FFF8F2] text-[#1B1C1E]'} rounded-[10px]`}>
        {title}
      </button>
    </li>
  );
}

export default TabTitle;