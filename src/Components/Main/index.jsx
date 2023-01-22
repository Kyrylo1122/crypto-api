import { Outlet } from "react-router-dom";

import React from "react";
import { Main } from "./index.styled";
import CoinSetContainer from "../CoinSetContainer";
import Container from "../Container";
import Hero from "../Hero";
import Header from "../Header";

export default function MainTag() {
  return (
    <Main>
      <Header />
      <Container>
        <Hero />
        <CoinSetContainer />
      </Container>
    </Main>
  );
}
