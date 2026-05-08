import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home.tsx';
import { Profiles } from './pages/profiles.tsx';
import { ProfileDetails } from './pages/profile-details.tsx';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/profiles">Profiles</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/:profileId" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
}

export default App;