import React from "react";
//import classes from "./FilterCheckBox.module.css";
import Aux from "../../../../hoc/Auxiliary/Auxi";




const filterCheckBox = (props)=>{
  const filterCheckB  = props.inputHeads.map((filtercheckboxes,idxx)=>{
    return (
        <div className="form-check" key={'checkbox'+idxx} >
          <label className="form-check-label">
          <input type="checkbox" className="form-check-input"  value={filtercheckboxes} onClick={(e)=>{props.checkeddd(e)}}/> {filtercheckboxes}
          </label>
        </div>
    )
  })

  return (
    <Aux>
      {filterCheckB}
    </Aux>
  )
}

export default filterCheckBox;