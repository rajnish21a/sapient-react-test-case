import React from "react";

const search= (props)=>{
  return (
    <div className="search-container mt-2 mb-2"> 
    <div className="input-group mb-3">
        <label className="d-block">Search by Name</label>
        <input type="text" className="form-control" onInput={(e)=>{props.inputed(e)}} placeholder="Search"/>
        {/* <div className="input-group-append">
          <button className="btn btn-dark" on type="submit">Search</button>
        </div> */}
      </div>
    </div>
  )
}

export default search; 