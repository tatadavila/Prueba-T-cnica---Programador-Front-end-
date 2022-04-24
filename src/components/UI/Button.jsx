// @styles
import "../../styles/UI.scss";

export const Button = ({ name, click }) => {
  return <button className="btn" onClick={click}>{name}</button>;
};
