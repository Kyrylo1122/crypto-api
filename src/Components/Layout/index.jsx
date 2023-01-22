import { Outlet } from "react-router-dom";
import { Box } from "../Box";
export default function Layout() {
  return (
    <Box pb="50px">
      <Outlet />
    </Box>
  );
}
