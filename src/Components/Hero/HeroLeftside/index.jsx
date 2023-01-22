import { Box } from "../../Box";
import HeroForm from "../HeroForm";
import { HeroText, HeroTitle } from "./index.styled";

export default function HeroLeftSide() {
  return (
    <Box flex="1">
      <HeroTitle>
        Jump start your crypto <br /> experience
      </HeroTitle>
      <HeroText>
        Coininfo is the easiest place to get info about cryptocurrency. Sign up
        and get started today.
      </HeroText>
      <HeroForm />
    </Box>
  );
}
