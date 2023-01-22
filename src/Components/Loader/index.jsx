import { CirclesWithBar } from "react-loader-spinner";
import { Box } from "../Box";
export default function Loader() {
  return (
    <Box
      top="0"
      left="0"
      height="100vh"
      width="100vw"
      position="fixed"
      backgroundColor="var(--grey)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CirclesWithBar
        height="100"
        width="100"
        color="red"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        outerCircleColor="var(--accent-color)"
        innerCircleColor="var(--accent-color)"
        barColor="var(--accent-color)"
        ariaLabel="circles-with-bar-loading"
      />
    </Box>
  );
}
