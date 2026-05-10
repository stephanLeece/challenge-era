import { Typography } from "@repo/ui/typography";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Typography as="h2" className="text-hunqz-light mb-4">
        This is the home page, no profile pictures here!
      </Typography>
      <Link to={"/profiles/msescortplus"}>
        <Typography as="h2" className="text-hunqz-light">
          Why not check out an example profile page?
        </Typography>
      </Link>
    </>
  );
}
