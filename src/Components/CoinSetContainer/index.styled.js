import styled from "styled-components";

export const Main = styled.main`
  padding-top: 100px;
`;

export const LoadMoreBtn = styled.button`
  margin-top: 25px;
  padding: 20px 30px;
  font-size: 24px;
  border: 2px solid var(--accent-color);
  background-color: transparent;
  color: var(--accent-color);
  font-weight: 600;
  transition: transform 200ms ease-in-out;
  outline: none;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
