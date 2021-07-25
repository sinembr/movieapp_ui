//Created with rfcp snippet
import React from 'react'
// import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import { Grid } from 'semantic-ui-react'


function MovieList({movies}) {
  //console.log('here=> ', movies)
  /*const movieList = movies.map(movie=>{
    //return <h3 key={movie.id}>{movie.title}</h3>
  return <MovieCard key={movie.id} movie={movie}/>
  });
  */
    
  const movieList = (
  <Grid>
    <Grid.Row columns={3}>
      {movies.map((movie)=>(
      <Grid.Column key={movie.id}>
        <MovieCard movie={movie} />
      </Grid.Column>))}
    </Grid.Row>
  </Grid>)
  const emptyMessage = <div>There is no any movies yet</div>
  console.log(movies)
  return (
    <h3>
      {movies.length === 0 ? emptyMessage : movieList}
    </h3>
  )
}

MovieList.propTypes = {};

export default MovieList

