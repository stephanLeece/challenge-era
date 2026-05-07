import { Button } from "@repo/ui/components/button";
import styles from "./page.module.css";
import { getProfile } from "@repo/profile-service";

export default async function Home() {
  const profile = await getProfile({ name: "msescortplus" });
  const profiilePictures = profile?.pictures || [];
  console.log("Profile Pictures:", profiilePictures);
  return (
    <div className={styles.page}>
      <Button appName="Next.js">Click Me</Button>
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
