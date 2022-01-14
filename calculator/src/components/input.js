export default function Input(props) {
  const styles = {
    backgroundColor: "black",
    width: "360px",
    color: "white",
  };
  return (
    <div>
      <h1>{props.buttonValue}</h1>
    </div>
  );
}
