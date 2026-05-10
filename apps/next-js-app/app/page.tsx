import { Typography } from "@repo/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Typography as="h2" className="text-hunqz-light mb-4">
        This is the home page, no profile pictures here!
      </Typography>
      <Link href={"/profiles/msescortplus"}>
        <Typography as="h2" className="text-hunqz-light">
          Why not check out an example profile page?
        </Typography>
      </Link>
    </>
  );
}
