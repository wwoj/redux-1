// import React from "react";
// import { connect } from "react-redux";
// import moviesReducer from "../../movies/duck/reducers";

// const ActorsContainer = (props) => (
//   <ul>
//     {props.actors.list.map(actor => 
//       <li>{actor.age} {actor.name}</li>
//     )}
//   </ul>
// );
// const mapStateToProps = (state) => ({ actors: state.actors });
// export default connect(mapStateToProps, {})(ActorsContainer);
////////////////
// import React from "react";
// import { connect } from "react-redux";
// import moviesReducer from "../../movies/duck/reducers";

// const ActorsContainer = (props) => (
//   <ul>
//     {props.beers.list.map(actor => 
//       <li>{actor.age} {actor.name}</li>
//     )}
//   </ul>
// );
// const mapStateToProps = (state) => ({ beers: state.beers });
// export default connect(mapStateToProps, {})(ActorsContainer);
/////////////
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllMovies } from '../duck/operations.js'

const MoviesContainer = ({beers, getAllMovies}) => {
    useEffect(() => { getAllMovies() }, [])
  
    return <ul>
      {beers.list.map(beer => <li>{beer.name}</li>)}
    </ul>
  }

  const mapStateToProps = (state) => ({ beers: state.beers });
  
  const mapDispatchToProps = dispatch => ({
    getAllMovies: () => dispatch(getAllMovies())
  })
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(MoviesContainer)