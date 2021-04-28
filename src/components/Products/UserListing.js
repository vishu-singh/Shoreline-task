import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './userAction';

export const UserListing = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  let users = useSelector(state => state.User.users);
  const showProducts = () => {
    if (users.length) {
      return (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.id} > 
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );

      //   );
      // });
    }
  };

  const handleRouteForAdd = () => {
    props.history.push({
      pathname: `/users/add`,
    });
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row  ">
          <div
            className="btn btn-success ml-auto mr-5"
            onClick={handleRouteForAdd}
          >
            <i className="fas fa-plus-circle"> Add New </i>
          </div>
        </div>

        <div className="row p-5 ">{showProducts()}</div>
      </div>
    </>
  );
};
