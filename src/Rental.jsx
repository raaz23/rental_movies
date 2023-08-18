import React, { useState } from 'react';
import "./Rental.css";


const Rental = () => {
    const [showRentOptions, setShowRentOptions] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

   
    const togglePremium = () => {
        setShowRentOptions(!showRentOptions);
        setSelectedMovie(null); // Reset selected movie when toggling
    };

    const moviesData = [
        { id: 1, title: "Beauty and the Beast", premium: true, rating: 8.1 },
        { id: 2, title: "Logan", premium: true, rating: 6.9 },
        { id: 3, title: "X-Men: Apocalypse", premium: true, rating: 8.6 },
        { id: 4, title: "Man of Steel", premium: true, rating: 7.2 },
        { id: 5, title: "Titanic", premium: true, rating: 9.2 },
        { id: 6, title: "Avatar", premium: true, rating: 9.8 },
        { id: 7, title: "Gravity", premium: true, rating: 6.4 },
        { id: 8, title: "How to Be Single", premium: true, rating: 7.7 },
        { id: 9, title: "Captain America: Civil War", premium: true, rating: 8.2 },
        { id: 10, title: "The Dark Knight", premium: true, rating: 8.8 },
        // Add more movie objects...
    ];

    const handleRentClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="row">
            <div className="col-10 m-2 secondTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Movies</th>
                            <th scope="col">Premium</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Rent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moviesData.map((movie) => (
                            <tr key={movie.id}>
                                <th scope="row">{movie.id}</th>
                                <td>{movie.title}</td>
                                <td><center><i className='bx bx-lock-alt'></i></center></td>
                                <td><center>{movie.rating} <i className='bx bxs-star'></i></center></td>
                    
                                <td>
                                    {showRentOptions ? (
                                        <button onClick={() => handleRentClick(movie.title)}>Rent</button>
                                        
                                    ) : "-"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={togglePremium}>Buy Premium </button> <button onClick={togglePremium}> Back </button>
                {selectedMovie && (
                    <div className="successMessage">
                        Congratulations!  
                        You have successfully rented "{selectedMovie}"
                    </div>
                )}
                 
            </div>
        </div>
    );
};

export default Rental;
