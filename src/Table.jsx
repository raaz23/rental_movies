import React, { useState } from "react";
import "./Table.css";
import Pagination from "./Pagination";
import Search from "./Search";

const Table = (props) => {
  const allMovies = props.MoviesData;
  const currFilter = props.selectedFilter;
  
  const itemsPerPage = 4;

  let FilterArr = allMovies.filter((el) => {
    if (currFilter === el.genre.name || currFilter === "All Genre") {
      return true;
    }
    return false;
  });

  

  const numberOfPages = Math.ceil(FilterArr.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const startIndex = (currentPage - 1) * itemsPerPage;

 //const endIndex = Math.min(FilterArr.length,currentPage*4);

     const endIndex =startIndex+4;

      // search k liye hai  sab ko lowercase input aarha hai search se aur hamara movies ka jo title hai usko 

        const searchTerm = props.search.toLowerCase();
        FilterArr = FilterArr.filter((el) => {
          return el.title.toLowerCase().includes(searchTerm);
        });
      
      
    
  const UptoFourArr = FilterArr.slice(startIndex, endIndex);

  return (
    <div className="col-10 mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {UptoFourArr.map((el) => (
            <tr key={el._id}>
              <td>{el.title}</td>
              <td>{el.genre.name}</td>
              <td>{el.numberInStock}</td>
              <td>{el.dailyRentalRate}</td>
              <td >
                <i
                  onClick={() => props.handleLike(el._id)}
                  className={`bx ${el.liked ? "bxs-heart" : "bx-heart"}`}
                ></i>
              </td>
              <td onClick={() => props.deleteHandler(el._id)}>
                <button className="DeleteButton">Delete</button>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>

      <Pagination
        numPage={numberOfPages}
        currPage={currentPage}
        handlePageClick={handlePageClick}   
      />
    </div>
  );
};

export default Table;
