import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchUsers, deleteLastUser } from "../redux";

const UserContianer = ({ userData, fetchUsers }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <>
      <h2>User List</h2>
      {userData && userData.users && userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      <button onClick={() => dispatch(deleteLastUser(userData.users))}>Delete user last</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContianer);
