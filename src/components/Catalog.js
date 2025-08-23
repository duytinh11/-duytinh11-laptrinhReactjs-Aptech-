import { useState } from "react";

function Catalog(props) {
  const cat = props.cat;
  const [active, setActive] = useState("Active");
  const [color, setColor] = useState("");

  const disable = () => {
    setActive("Deactive");
  };

  const favourite = () => {
    if(color =="")
    setColor("text-danger"); // đổi màu sang đỏ
    else 
    setColor(""); // đổi màu sang xanh
  };

  return (
    <div>
      <h1>{cat.name}</h1>
      <h2>Total Item: {cat.count} products</h2>
      <p>{active}</p>
      <button onClick={disable} type="button">
        Di%sable
      </button>
      <p>
        <i
          onClick={favourite}
          className={"bi bi-cup-hot-fill " + color}
        ></i>
      </p>
    </div>
  );
}

export default Catalog;
