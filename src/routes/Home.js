import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";

function Home () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (await (fetch("https://yts.mx/api/v2/list_movies.json?minimum_ration=8.8&sort_by=year"))).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return(
        <div>
            {loading ? (
                <strong>Loding...</strong>
            ) : (
                <div>
                    {movies.map((movie) => {
                        return(
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image} 
                                title={movie.title} 
                                summary={movie.summary} 
                                genres={movie.genres} 
                            />
                        );
                    })}
                </div>
            )}
            
        </div>
    )
}

export default Home;