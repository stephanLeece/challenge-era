import { getProfile } from "@repo/profile-service";
import { Button } from "@repo/ui/button";

export default async function Home() {
  const profile = await getProfile({ name: "msescortplus" });
  const profiilePictures = profile?.pictures || [];
  console.log("Profile Pictures:", profiilePictures);
  return (
    <div>
      <Button appName="next-js-app">
        description
      </Button>
        {profiilePictures?.map((picture, index) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={index}
          src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
          alt={`Profile Picture ${index + 1}`}
        />))}

    </div>
  );
}


