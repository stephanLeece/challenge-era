import { Typography } from "@repo/ui/typography";
import { LoadingSpinner } from "@repo/ui/loading-spinner";

export default function Loading() {
  return <>
    <Typography as="h2" className="text-white">
      Loading
    </Typography>
    <LoadingSpinner />
  </>
};


