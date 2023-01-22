import styled from "styled-components";
export const Table = styled.table`
  font-family: Roboto, sans-serif;
  font-size: 24px;

  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--light-grey);
  border-radius: 5px;

  & th {
    color: var(--grey);
    font-weight: 400;

    padding: 20px 0;
    border-bottom: 1px solid var(--light-grey);
  }
  & td {
    font-family: Monospace;
    font-weight: 500;
    padding: 20px 0;
  }
`;
