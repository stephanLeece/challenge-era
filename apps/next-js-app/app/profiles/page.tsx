import { Typography } from "@repo/ui/typography";
import Link from "next/link";

export default function Profiles() {
  return (
    <>
      <Typography as="h2" className="text-hunqz-light mb-4">
        This is where lots of profiles would be shown!
      </Typography>
      <Link href={"/profiles/msescortplus"}>
        <Typography as="h2" className="text-hunqz-light">
          Why not check out an example profile page?
        </Typography>
      </Link>
    </>
  );
}
