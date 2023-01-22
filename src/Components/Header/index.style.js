import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderEl = styled.header`
  position: fixed;
  top: 0;

  padding: 30px 0;
  width: 100%;

  background-color: white;

  border-bottom: 1px solid var(--light-grey);
  border-radius: 5px;

  font-family: Bakbak One, sans-serif;
  text-align: left;
`;

export const Logo = styled(Link)`
  color: var(--accent-color);
  font-size: 54px;

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
