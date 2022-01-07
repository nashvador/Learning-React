export default function Buttons() {
  const styles = {
    display: "grid",
    width: "480px",
    height: "480px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    backgroundColor: "blue",
    padding: "10px",
  };
  return (
    <div className="calculator-grid" style={styles}>
      <div style={{ gridColumn: "1/4" }}>C</div>
      <div>Backspace</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>+</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>+</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>+</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>+</div>
    </div>
  );
}
