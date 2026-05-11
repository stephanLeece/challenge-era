import { getProfile } from "@repo/profile-service";
import { Grid } from "@repo/ui/grid";
import { GridImage } from "@repo/ui/grid-image";
import { Typography } from "@repo/ui/typography";
import { notFound } from 'next/navigation'

export default async function ProfileDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id: profileName } = await params;

  let profile;
  try {
    profile = await getProfile({ name: profileName });
  } catch {
    notFound();
  }

  const profiilePictures = profile?.pictures || [];
  return (
    <>
      <Typography as="h2" className="text-hunqz-light">
        Profile Pictures for {profile?.name}
      </Typography>
      <Typography as="p" className="text-hunqz-light">
        {profile.headline}
      </Typography>
      <Grid>
        {profiilePictures?.map((picture, index) => (
          <GridImage
            key={index}
            src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
            alt={`Profile Picture ${index + 1}`}
          />))}
      </Grid>
    </>
  );
}