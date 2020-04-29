import React from "react";
//import classes from "./Filter.module.css";
import Aux from "../../../hoc/Auxiliary/Auxi";
import FilterCheckBox from "./FilterCheckBox/FilterCheckBox";


const filter = (props)=>{
  const FILTER_TYPES=props.filterType;
  const unitFilter  = Object.keys(FILTER_TYPES).map((filterr,idx)=>{
    return (
      <div className="border p-3 mt-3" key={'filter'+idx}>
        <h3 style={{textTransform: 'capitalize'}}>{filterr}</h3>
            <FilterCheckBox checkeddd={props.checkedd} inputHeads={FILTER_TYPES[filterr]} />
      </div>
    )
  })

  return (
    <Aux>
      {unitFilter}
    </Aux>
  )
}

export default filter;