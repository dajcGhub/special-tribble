
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light mb-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div>
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Bienvenido a Octofit Tracker</h2>
                  <p className="card-text">Tu app de fitness para equipos, actividades, leaderboard y más.</p>
                  <button className="btn btn-info" onClick={() => setShowModal(true)}>Mostrar Modal Global</button>
                </div>
              </div>
              {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Modal Global</h5>
                        <button type="button" className="close btn btn-danger" onClick={() => setShowModal(false)}>&times;</button>
                      </div>
                      <div className="modal-body">
                        <p>¡Este es un ejemplo de modal global en la página principal!</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
