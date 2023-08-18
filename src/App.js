import React from 'react';
import Navbar from "./navbar";
import List from './List';
import Search from "./Search";
import Table from './Table';
import Login from "./Login";
import Rental from './Rental';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component{

  state={
    genre:[],
    movies:[],
    selectedFilter:"All Genre",
    search:"",
  }

  handleFilter=(filter)=>{
     return this.setState({selectedFilter:filter});
  }
  handleLike=(id)=>{
  let index=this.state.movies.findIndex((el) => {
    return el._id===id;
  });

  let DuplicateArr=this.state.movies.map((el)=> {return el});
  
  DuplicateArr[index].liked = !DuplicateArr[index].liked;

  this.setState({movies:DuplicateArr});

  };

 deleteHandler=(id)=>{
  let currArr = this.state.movies.filter((el) => el._id !== id);
    this.setState({movies:currArr});
 }

 SearchUpdate=(input)=>{
  this.setState({search:input});
}


componentDidMount(){
let f=async ()=>{
  
  let Movies= await fetch("http://localhost:4000/movies");
  let MoviesJson=await Movies.json();

 let Genre= await fetch("http://localhost:4000/genre");
  let GenreJson=await Genre.json();


  this.setState({genre:GenreJson, movies:MoviesJson,});
  
}
f();
}
render() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Rental" element={<Rental />} />

          <Route path="/" element={(
            <div className='row'>
              <div className="col-3">
                <List
                  selectedFilter={this.state.selectedFilter}
                  handleFilter={this.handleFilter}
                  genreData={this.state.genre}
                />
              </div>
              <div className="col-9">
                <Search
                  genre={this.state.selectedFilter}
                  search={this.state.search}
                  SearchUpdate={this.SearchUpdate}
                  allMovies={this.state.movies}
                />
                <Table
                  search={this.state.search}
                  deleteHandler={this.deleteHandler}
                  handleLike={this.handleLike}
                  selectedFilter={this.state.selectedFilter}
                  MoviesData={this.state.movies}
                />
              </div>
            </div>
          )} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
}

export default App;