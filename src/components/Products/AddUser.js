import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

export const AddUser = ({ history }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    dob: '',
    role: '',
    contact: '',
  });
  const [error, setPrice] = useState('');

  const { name, email, role, dob, contact } = state;

  const handleSubmit = event => {
    event.preventDefault();
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      return toast.error('Invalid Email');
    }
    if (name.trim().length < 3 || name.trim().length > 30) {
      return toast.error(`Name can be in between 3 to 30 characters`);
    }
    toast.success('Data Saved');
  };

  const handelChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-lg" style={{ width: '30rem' }}>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-group">
                <label  className="form-label">
                  Email address
                </label>
                <input
                  onChange={handelChange}
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={email}
                />
              </div>
              <div className="mb-3 form-group">
                <label  className="form-label">
                  Name
                </label>
                <input
                  onChange={handelChange}
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                  value={name}
                />
              </div>

              <div className="mb-3 form-group">
                <label className="form-label">
                  Contact
                </label>
                <input
                  onChange={handelChange}
                  name="contact"
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={contact}
                />
              </div>
              <div className="mb-3 form-group">
                <label className="form-label">
                  Date Of Birth
                </label>
                <input
                  onChange={handelChange}
                  name="dob"
                  type="date"
                  className="form-control"
                  id="exampleInputPassword1"
                  max="2021-01-01"
                  value={dob}
                />
              </div>
              <div className="form-group">
                <label >Select Role</label>
                <select
                  name="role"
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={handelChange}
                  value={role}
                >
                  <option value="owner">Owner</option>
                  <option value="admin">Admin</option>
                  <option value="operator">Operator</option>
                  <option value="owner">User</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
