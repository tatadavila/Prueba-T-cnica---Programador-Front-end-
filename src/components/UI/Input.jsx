export const Input = ({setText, text}) => {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};
