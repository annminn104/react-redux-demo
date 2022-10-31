import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </React.Fragment>
  );
};

export default HooksCakeContainer;
