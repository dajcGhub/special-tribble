import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : (data.results || []);
        setLeaderboard(results);
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <>
      <div>
        <h2 className="mb-4 card-title">Leaderboard <a href="https://reactjs.org" className="btn btn-link">Learn React</a></h2>
        <div className="card mb-4">
          <div className="card-body">
            <form className="mb-3">
              <div className="form-group">
                <label htmlFor="leaderboardName">Leaderboard Name</label>
                <input type="text" className="form-control" id="leaderboardName" placeholder="Enter leaderboard name" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Add Entry</button>
            </form>
            <button className="btn btn-info mb-3" onClick={() => setShowModal(true)}>Show Modal</button>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{entry.name || 'N/A'}</td>
                    <td>{entry.score || JSON.stringify(entry)}</td>
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
                  <h5 className="modal-title">Leaderboard Modal</h5>
                  <button type="button" className="close btn btn-danger" onClick={() => setShowModal(false)}>&times;</button>
                </div>
                <div className="modal-body">
                  <p>Detalles del leaderboard.</p>
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

export default Leaderboard;
