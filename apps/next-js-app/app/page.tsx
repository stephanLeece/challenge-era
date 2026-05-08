import { getProfile } from "@repo/profile-service";
import { Grid } from "@repo/ui/grid";
import { Image} from "@repo/ui/image";

export default async function Home() {
  const profile = await getProfile({ name: "msescortplus" });
  const profiilePictures = profile?.pictures || [];
  console.log("Profile Pictures:", profiilePictures);
  return (
    <div>
      <Grid>
        {profiilePictures?.map((picture, index) => (
          <Image
            key={index}
            src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
            alt={`Profile Picture ${index + 1}`}
          />))}
      </Grid>
    </div>
  );
}


