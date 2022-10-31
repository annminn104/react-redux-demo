import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  return (
    <React.Fragment>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFuncition = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFuncition,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
