import { useEffect, useState } from "react";
import { getProfile, ProfileResponse } from "@repo/profile-service";
import { Button } from "@repo/ui/components/button";

const proxyBaseUrl = import.meta.env.VITE_HUNQZ_PROXY_PATH;



function App() {
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        setError(null);

        const data = await getProfile({
          name: "msescortplus",
          baseUrl: proxyBaseUrl,
        });

        setProfile(data);
      } catch (e) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  const pictures = profile?.pictures ?? [];

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Button appName="SPA">Click Me</Button>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
          alt={`Profile Picture ${index + 1}`}
        />
      ))}
    </>
  );
}

export default App;