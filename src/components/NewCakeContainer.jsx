import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <React.Fragment>
      <h2>Number of cakes {props.numberOfCakes}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
