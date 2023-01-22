import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CoinLink = styled(NavLink)`
  color: inherit;
  &:hover,
  &:focus {
    cursor: pointer;
    color: inherit;
  }
`;

export const CoinName = styled.span`
  margin-left: 10px;
`;
