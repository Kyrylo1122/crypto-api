import { Box } from "../Box";
import Container from "../Container";
import { HeaderEl, Logo } from "./index.style";

export default function Header({ children }) {
  return (
    <HeaderEl>
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Logo to="/main">CoinInfo</Logo>
          {children ? children : null}
        </Box>
      </Container>
    </HeaderEl>
  );
}
