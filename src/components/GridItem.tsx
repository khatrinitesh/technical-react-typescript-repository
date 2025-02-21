import React, { useEffect } from "react";
import { useGridItemStore } from "../store/useGridItemStore";

const GridItem = () => {

    const items = useGridItemStore((state) => state.items);
  const addItem = useGridItemStore((state) => state.addItem);

  useEffect(() => {
    // Add some items to the grid
    const newItem = {
      id: '1',
      x: 10,
      y: 10,
      width: 30,
      height: 30,
    };
    addItem(newItem);

    const newItem2 = {
      id: '2',
      x: 50,
      y: 20,
      width: 40,
      height: 40,
    };
    addItem(newItem2);
  }, [addItem]);
  return (
    <>
    <div
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)', // Adjust to 12-column layout
        gridTemplateRows: 'repeat(12, 1fr)',    // Adjust to 12-row layout
        gap: '10px',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f7f7f7',
      }}
    >
      {items.map((item) => (
        <GridItem key={item.id} {...item} />
      ))}
    </div>
    </>
  )
};

export default GridItem;

const Grid = ({
  id,
  x,
  y,
  width,
  height,
}: {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}) => {
  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          width: `${width}%`,
          height: `${height}%`,
          left: `${x}%`,
          top: `${y}%`,
          backgroundColor: "#f5a623",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </>
  );
};
