import React, { useState } from "react";

function Tugas9() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="warna">
      <h1> {count}</h1>
      {count >= 10 && <p>State count sudah lebih dari 10!!</p>}
      <button onClick={handleClick}>Tambah</button>
    </div>
  );
}

export default Tugas9;
