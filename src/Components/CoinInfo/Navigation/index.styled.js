import styled from "styled-components";
import { Link } from "react-scroll";

export const NavLink = styled(Link)`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.5);
    color: var(--blue);
  }
`;
export const Item = styled.li`
  font-size: 24px;
  :not(:last-child) {
    margin-right: 10px;
  }
  & > a {
    color: var(--accent-color);
  }
`;
