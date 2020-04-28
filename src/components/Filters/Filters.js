import React from "react";
import classes from "./Filters.module.css";
import Filter from "./Filter/Filter";


const filters = (props)=>{

return (
<div className="col-sm-12 col-md-3">
<div className="d-flex justify-content-between">
<h2>Filters</h2>
<h2 className={classes.rounded_circle}>+</h2>
</div>
  <Filter filterType={props.filterPropertiess} checkedd={props.checked}/>
</div>
)
}


export default filters;
