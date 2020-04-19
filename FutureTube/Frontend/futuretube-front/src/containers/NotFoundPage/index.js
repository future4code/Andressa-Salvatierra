import React from "react";
import styled from "styled-components"
import Header from "../Header"
import { MainContainer } from "../../style/divContainers";
import Typography from "@material-ui/core/Typography"

const NotFound = styled.div`
    padding-top: 100px;
    text-align: center;
`

export default function NotFoundPage() {
  return (
    <MainContainer>
        <Header text="Ops"/>
        <NotFound>
          <Typography color="secondary" variant="h3">Página não encontrada!</Typography>
        </NotFound>
    </MainContainer>

  );
}