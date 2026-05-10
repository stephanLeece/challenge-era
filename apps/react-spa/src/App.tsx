import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home.tsx';
import { Profiles } from './pages/profiles.tsx';
import { ProfileDetails } from './pages/profile-details.tsx';
import { Navbar } from '@repo/ui/navbar';
import { Typography } from '@repo/ui/typography';

function App() {
  return (
    <div className="bg-hunqz-dark min-h-screen">
      <Navbar>
        <Typography as="h1" className="uppercase text-hunqz-red">
          Hunqz
        </Typography>
      </Navbar>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:profileId" element={<ProfileDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;