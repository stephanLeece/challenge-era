import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getProfile, ProfileResponse } from "@repo/profile-service";
import { Grid } from "@repo/ui/grid";
import { GridImage } from "@repo/ui/grid-image";
import { Typography } from "@repo/ui/typography";
import { LoadingSpinner } from "@repo/ui/loading-spinner";

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
      return (<>
        <Typography as="h2" className="text-hunqz-light">
          Loading profile...
        </Typography>
        <LoadingSpinner />
      </>
      );
    }

    if (error || !profile) {
      return (
        <Typography as="h2" className="text-hunqz-red">
          {error ?? "An unexpected error occurred while loading the profile."}
        </Typography>
      );
    }

    return (
      <>
        <Typography as="h2" className="text-hunqz-light">
          Profile Pictures for {profile.name}
        </Typography>
        <Typography as="p" className="text-hunqz-light">
          {profile.headline}
        </Typography>
        <Grid>
          {profilePictures?.map((picture, index) => (
            <GridImage
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
      {renderContent()}
    </>
  );
}
