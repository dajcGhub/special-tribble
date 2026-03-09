import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : (data.results || []);
        setActivities(results);
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4 card-title">Activities <a href="https://reactjs.org" className="btn btn-link">Learn React</a></h2>
      <div className="card mb-4">
        <div className="card-body">
          <form className="mb-3">
            <div className="form-group">
              <label htmlFor="activityName">Activity Name</label>
              <input type="text" className="form-control" id="activityName" placeholder="Enter activity name" />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add Activity</button>
          </form>
          <button className="btn btn-info mb-3" onClick={() => setShowModal(true)}>Show Modal</button>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{activity.name || 'N/A'}</td>
                  <td>{activity.details || JSON.stringify(activity)}</td>
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
                <h5 className="modal-title">Activity Modal</h5>
                <button type="button" className="close btn btn-danger" onClick={() => setShowModal(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <p>Detalles de la actividad.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal example for Activities.</p>
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

export default Activities;
