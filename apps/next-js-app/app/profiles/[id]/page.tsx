import { getProfile } from "@repo/profile-service";
import { Grid } from "@repo/ui/grid";
import { Image } from "@repo/ui/image";
import { notFound } from 'next/navigation'

export default async function ProfileDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id: profileName } = await params;
  
  let profile;
  try {
    profile = await getProfile({ name: profileName });
  } catch (e) {
    notFound();
  }


  const profiilePictures = profile?.pictures || [];
  return (
    <main className="px-4">
      <h1 className="text-white text-lg">Profile Pictures for {profile?.name}</h1>
      <Grid>
        {profiilePictures?.map((picture, index) => (
          <Image
            key={index}
            src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
            alt={`Profile Picture ${index + 1}`}
          />))}
      </Grid>
    </main>
  );
}