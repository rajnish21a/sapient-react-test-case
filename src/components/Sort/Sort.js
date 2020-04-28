import React from "react";


const sort = (props)=>{
  return (
    <div className="col-md-6">
        <div className="sort-id mt-7">
            {/* <!-- Sort By ID --> */}
            <form className="sorting">
              <select name="sort" value="Id" onChange={(e)=>{props.selected(e)}} className="custom-select float-right">
                <option value="Id">Sort By ID</option>
                <option value="acending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </form>
          </div>
    </div>
  )
}

export default sort;