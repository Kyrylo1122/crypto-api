import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

export const isTrendGoUp = (trend) =>
  trend ? (
    <HiTrendingUp color="yellowgreen" size="1.5rem" />
  ) : (
    <HiTrendingDown color="tomato" size="1.5rem " />
  );
