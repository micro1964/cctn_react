import React, {useState, useEffect} from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid(){

    const [movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState("");
    

    useEffect(() => {
        fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            setMovies(data);    
        })
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setMovies(filteredMovies);
    }

    return(
        
        <div>

            <input 
                type="text"
                className="search-input"
                placeholder="Search Courses..."
                value={searchTerm} 
                onChange={handleSearch}
                /> 
                <div className="movies-grid">
            {
            movies.map(movie => (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))
            }
        </div>
        </div>
    );
}