import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : (data.results || []);
        setUsers(results);
        console.log('Users endpoint:', endpoint);
        console.log('Fetched users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [endpoint]);

  return (
    <>
      <div>
        <h2 className="mb-4 card-title">Users <a href="https://reactjs.org" className="btn btn-link">Learn React</a></h2>
        <div className="card mb-4">
          <div className="card-body">
            <form className="mb-3">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Add User</button>
            </form>
            <button className="btn btn-info mb-3" onClick={() => setShowModal(true)}>Show Modal</button>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.username || 'N/A'}</td>
                    <td>{user.email || JSON.stringify(user)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Modal Bootstrap */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Users Modal</h5>
                  <button type="button" className="close btn btn-danger" onClick={() => setShowModal(false)}>&times;</button>
                </div>
                <div className="modal-body">
                  <p>Detalles del usuario.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
