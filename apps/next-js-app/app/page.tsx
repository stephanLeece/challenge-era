import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/components/button";
import { colors } from "@repo/ui/tokens/colors";
import styles from "./page.module.css";
import { getProfile } from "@repo/profile-service";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {
  console.log("Colors:", colors);
  const profile = await getProfile({ name: "msescortplus" });
  const profiilePictures = profile?.pictures || [];
  console.log("Profile Pictures:", profiilePictures);
  return (
    <div className={styles.page}>
      {profiilePictures?.map((picture, index) => (
        <img
          key={index}
          src={`https://www.hunqz.com/img/usr/original/0x0/${picture.url_token}.jpg`}
          alt={`Profile Picture ${index + 1}`}
        />))}
    </div>
  );
}
