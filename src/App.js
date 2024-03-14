
import React, { Component } from 'react'


import MovieList from "./MovieList";

import Navbar from "./Navbar";
import { movies } from './moviesData';


export default class App extends Component {


  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount :0

    }

    // this.addStars = this.addStars.bind(this);
  }

  handleAddStars =(movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie)

    if(movies[movieId].stars < 5){
      movies[movieId].stars += 0.5
    }
    this.setState({
      movies
  });


  }

  handleRemoveStars =(movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie)

    if(movies[movieId].stars > 0){
      movies[movieId].stars -= 0.5
    }
    this.setState({
      movies
  });


  }

  handleToggleFav = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
        movies
    })
  }

  handleAddtocart = (movie)=> {
    let {movies, cartCount} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    if(movies[movieId].isInCart){
      cartCount = cartCount+1
    }else(
      cartCount = cartCount-1
    )



    this.setState({
        movies,
        cartCount
    })
  }

 




//   addStars = () => {
//     // Form 1
//     // this.setState({
//     //     stars: this.state.stars+0.5
//     // });

//     // Form 2(prevState Depends)

//     this.setState ((pS) => {
//         return {
//             stars: pS.stars += 0.5
//         }
//     });
//     // this.state.stars += 0.5;
//     // console.log(this.state.stars);
// }

// removeStars = () => {

//     if(this.state.stars <= 0){
//         return;
//     }
   
//     this.setState ((pS) => {
//         return {
            
//             stars: pS.stars -= 0.5
//         }
//     });
   
// }

// handleFav =() =>{
//     this.setState({
//         fav: !this.state.fav    
//     })
// }

// handleCart =() =>{
//     this.setState({
//         isInCart: !this.state.isInCart
//     })
// }



  render() {
    const {movies, cartCount} = this.state;
    return (

      <>
    <Navbar cartCount = {cartCount}/>
    <MovieList movies = {movies}
    addStars = {this.handleAddStars}
    decStars = {this.handleRemoveStars}
    toggleFav = {this.handleToggleFav}
    toggleCart = {this.handleAddtocart} />
    </>
    )
  }
}



