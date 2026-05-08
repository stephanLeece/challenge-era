import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getProfile, ProfileResponse } from "@repo/profile-service";
import { Grid } from "@repo/ui/grid";
import { Image } from "@repo/ui/image";
import { Navbar } from "@repo/ui/navbar";

const proxyBaseUrl = import.meta.env.VITE_HUNQZ_PROXY_PATH;

export function ProfileDetails() {
  const { profileId } = useParams();
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      if (!profileId) {
        return;
      }
      try {
        setLoading(true);
        setError(null);

        const data = await getProfile({
          name: profileId,
          baseUrl: proxyBaseUrl,
        });

        setProfile(data);
      } catch (e) {
        console.log({e})
        setError(`Whoops! ${e}`);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  const profilePictures = profile?.pictures ?? [];

  const renderContent = () => {
    if (loading) {
      return (
        <p className="text-xl uppercase font-bold text-white">
          Loading profile...
        </p>
      );
    }

    if (error) {
      return (
        <p className="text-xl uppercase font-bold text-white">
          {error}
        </p>
      );
    }

    return (
      <>
        <h1 className="text-white text-lg">
          Profile Pictures for {profile?.name}
        </h1>
        <Grid>
          {profilePictures?.map((picture, index) => (
            <Image
              key={index}
              src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
              alt={`Profile Picture ${index + 1}`}
            />
          ))}
        </Grid>
      </>
    );
  };

  return (
    <>
      <Navbar>
        <p className="text-xl uppercase font-bold text-red-600">Hunqz</p>
      </Navbar>
      <main className="px-4">
        {renderContent()}
      </main>
    </>
  );
}
