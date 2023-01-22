import styled from "styled-components";
export const Title = styled.h1`
  font-family: Bakbak One, sans-serif;
`;
export const Span = styled.span`
  color: var(--accent-color);
`;
export const Price = styled.p`
  font-family: monospace, sans-serif;
  font-weight: 400;
  font-size: 20px;
  & > span {
    font-size: 24px;

    font-weight: 500;
  }
`;
