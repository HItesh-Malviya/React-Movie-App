import React from 'react'
import MovieCard from './MovieCard';


export default function MovieList(props) {

 




    // const {title, plot, price, rating, stars, fav, isInCart} = this.state;
    const {movies, addStars, decStars, toggleFav, toggleCart} =  props;

    // if we use Class instead of Function Components
    // const {movies, addStars, decStars, toggleFav, toggleCart} = this.props;



    return (

      <div className="main">
        {movies.map((movie) => (
          <MovieCard movies={movie}
            key={movies.id}
            onIncStars = {addStars}
            onDecStars = {decStars}
            onClickFav = {toggleFav}
            onClickAddtocart = {toggleCart}/> 

        ))}
      </div>

    )
  }

