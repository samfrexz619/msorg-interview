import { ReactElement, useState } from 'react';

import TabTitle, { Props as TabTitleProps } from './TabTitle';

interface Props {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
};

const TheTab = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex } = props;

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);

  return (
    <div className='flex gap-x-5 w-full'>
      <ul>
        {
          children.map((child, index) => (
            <TabTitle
              key={child.props.title}
              title={child.props.title}
              index={index}
              isActive={index === selectedTabIndex}
              setSelectedTab={setSelectedTabIndex}
            />
          ))
        }
      </ul>
      <div className='w-full bg-[#FFF8F2] rounded-[24px] p-7'>
        {children[selectedTabIndex]}
      </div>
    </div>
  );
}

export default TheTab;