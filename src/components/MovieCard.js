import React from "react";
import '../styles.css';

export default function MovieCard({ movie}) {

    const handleError = (e) => {
        e.target.src = 'images/default.png'; // Fallback image  
    }

    const getRatingClass = (rating) => {
        if (rating >= 8)
            return 'rating-good';
        if (rating >= 5 && rating < 8)
            return 'rating-ok'; 
        return 'rating-bad'; // For ratings below 5
    }
    return (
        <div className="movie-card" key={movie.id}>
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div>
    );
}