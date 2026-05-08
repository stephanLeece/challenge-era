import { useEffect, useState } from "react";
import { getProfile, ProfileResponse } from "@repo/profile-service";
import { Grid } from "@repo/ui/grid";
import { Image} from "@repo/ui/image";

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

  const profiilePictures = profile?.pictures ?? [];

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
     <Grid>
        {profiilePictures?.map((picture, index) => (
          <Image
            key={index}
            src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
            alt={`Profile Picture ${index + 1}`}
          />))}
      </Grid>
    </>
  );
}

export default App;