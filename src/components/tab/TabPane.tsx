import { ReactElement } from "react";

interface Props {
  title: ReactElement | string;
  children: ReactElement | ReactElement[];
}
const TabPane = ({ children }: Props): JSX.Element => (
  <div className="">{children}</div>
)



export default TabPane;