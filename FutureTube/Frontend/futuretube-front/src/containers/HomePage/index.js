import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"
import VideoCard from "../VideoCard";
import {MainContainer} from "../../style/divContainers";
import styled from "styled-components"

const VideosContainer = styled.div` 
    grid-template-column: 1fr 1fr 1fr 1fr 1fr;
    grid
`




const Home = (props) => {
    return (
        <MainContainer>
            <Header text="Home"/>
            <VideoCard/>
        </MainContainer>
    )

}

export default connect()(Home)