import { NavLink } from "./index.styled";
import { Box } from "../../Box";
import { Item } from "./index.styled";

const navigation = ["Market", "Chart", "Description"];

export default function Navigation() {
  return (
    <Box display="flex">
      {navigation.map((nav) => (
        <Item key={nav}>
          <NavLink to={nav} smooth={true}>
            {nav}
          </NavLink>
        </Item>
      ))}
    </Box>
  );
}
