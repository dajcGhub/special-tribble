import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4">Teams <a href="https://reactjs.org" className="btn btn-link">Learn React</a></h2>
      <div className="card mb-4">
        <div className="card-body">
          <form className="mb-3">
            <div className="form-group">
              <label htmlFor="teamName">Team Name</label>
              <input type="text" className="form-control" id="teamName" placeholder="Enter team name" />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add Team</button>
          </form>
          <button className="btn btn-info mb-3" onClick={() => setShowModal(true)}>Show Modal</button>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{team.name || 'N/A'}</td>
                  <td>{team.members ? team.members.join(', ') : JSON.stringify(team)}</td>
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
                <h5 className="modal-title">Teams Modal</h5>
                <button type="button" className="close btn btn-danger" onClick={() => setShowModal(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal example for Teams.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
