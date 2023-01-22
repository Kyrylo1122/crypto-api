import styled from "styled-components";

export const MarketStatsTitle = styled.h2`
  font-family: Bakbak One, sans-serif;
  font-size: 36px;
  text-align: center;
`;
export const MarketStatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const MarketStatsItem = styled.li`
  padding: 20px 0;
  width: calc(100% / 3);

  display: flex;
  flex-direction: column;

  font-family: Roboto Mono, sans-serif;
  font-weight: 700;
  color: var(--dark-grey);

  & > span {
    color: black;
  }
`;
