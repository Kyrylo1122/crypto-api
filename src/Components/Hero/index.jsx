import { Box } from "../Box";
import HeroLeftSide from "./HeroLeftside";
import HeroRightside from "./HeroRightside";

export default function Hero() {
  return (
    <Box as="section" display="flex" p="200px 0" textAlign="left">
      <HeroLeftSide />
      <HeroRightside />
    </Box>
  );
}
