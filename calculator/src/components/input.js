export default function Input(props) {
  const styles = {
    backgroundColor: "black",
    width: "360px",
    color: "white",
  };
  return (
    <div>
      <h1>
        {props.operationValue.output === null
          ? props.buttonValue
          : props.operationValue.ouput}
      </h1>
    </div>
  );
}
