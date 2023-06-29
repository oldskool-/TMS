import React from "react";
import Paragraph from "./ParagraphSand.jsx";
import Measurement from "./MeasurementSand.tsx";

const Specification = ({specs}) => {
    
  return (
    <div className="spec-list">
      <h2>Specification</h2>
      
      {specs.map((spec) => (
        <div className="spce-item" key={ spec.id }>
          { (spec.type === "paragraph") && <Paragraph block={spec} fkey={ spec.foreign_id } /> }
          {console.log(spec.foreign_is)}
          { (spec.type === "measurement") && <Measurement block={spec} /> }
        </div>
      ))}

    </div>
  );
}



export default Specification