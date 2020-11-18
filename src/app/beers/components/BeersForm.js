import React from "react";
import { connect } from "react-redux";
import actions from "../../beers/duck/actions";
const BeersForm = (props) => {
  const movieInput = React.createRef();

  const addMovie = (event) => {
    event.preventDefault();
    props.add(movieInput.current.value);
  };

 
    return <form onSubmit={addMovie}>
    <input ref={movieInput} />
    <button type='submit'>Add movie</button>
  </form>
  
};
const mapDispatchToProps = (dispatch) => ({
  add: (movie) => dispatch(actions.add(movie)),
});

export default connect(null, mapDispatchToProps)(BeersForm);
