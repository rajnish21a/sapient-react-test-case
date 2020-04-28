import React from "react";
import Aux from "../../hoc/Auxiliary/Auxi";

const searchFilters= (props)=>{
  const searchFilter = [...props.filterListSearch].map((unitFilter, idxxx)=>{
    return <button type="button" className="btn btn-dark mr-2" key={'selected_filter'+idxxx}>{unitFilter}</button>
  })

  return (
    <>
      <h2>Selected Filter</h2>
      {searchFilter}
    </>
  )
}

export default searchFilters; 