import React from "react";
import { useColorPickerStore } from "../store/useColorPickerStore";

const ColorPicker: React.FC = () => {
  const { selectedColor, setColor } = useColorPickerStore();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setColor(color); // Update color in Zustand store
  };
  return (
    <>

<div
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor, // Apply the selected color here
          border: '1px solid #ccc',
        }}></div>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Choose a Color</h2>
        <input
          type="color"
          value={selectedColor} // Bind to the selected color from the store
          onChange={handleColorChange}
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
        />
        <p>Selected Color: {selectedColor}</p>
      </div>
    </>
  );
};

export default ColorPicker;
