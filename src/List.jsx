import React from "react";

let  List =(props)=>{
    return (
        <div class="col-8 m-4">
        <ul class="list-group">
           <li  onClick={()=>props.handleFilter("All Genre")}
           class={`list-group-item ${props.selectedFilter === "All Genre" ? "active" : ""}`}>All Genre</li>
            {
                props.genreData.map((el)=>{
                   return (
                    <div>
                         <li onClick={()=>props.handleFilter(el.name)}
                         key={el._id} class={`list-group-item ${props.selectedFilter === el.name ? "active" : ""}`}>{el.name}</li>
                    </div>
                   )
                   
                })
            }
            
          </ul>
  </div>
    )
}

export default List;