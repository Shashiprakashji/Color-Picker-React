import { useState } from "react";

function Picker() {
  const [color, setColor] = useState("#FFFFFF");
  function handleColor(event) {
    setColor(event.target.value);
  }
  return (
    <>
      <div className="colorPicker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>selectedColor: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColor} />
      </div>
    </>
  );
}
export default Picker;
