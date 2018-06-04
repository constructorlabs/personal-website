import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Docker from "./images/Docker.js";
import Github from "./images/github-icon.js";
import Graphql from "./images/graphql.js";
import Webpack from "./images/webpack.js";
import Redis from "./images/redis.js";
import ReactLogo from "./images/react.js";
import Nginx from "./images/nginx.js";
import Javascript from "./images/javascript.js";
import Node from "./images/node.js";
import styled from "styled-components";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Wrapper = styled.div`
  width: 100vw;
  filter: grayscale(100%);
  &:hover {
    transition: 0.5s ease-in-out;
    filter: grayscale(0%);
  }
`;

const MyComponent = () => (
  <Wrapper>
    <AutoPlaySwipeableViews>
      <Javascript width="70px" fill="#F7DF1E" />
      <Github width="70px" fill="#d54599" />
      <Graphql width="70px" fill="#d54599" />
      <Webpack width="70px" fill="#d54599" />
      <Node width="70px" fill="#d54599" />
      <Redis width="70px" fill="#d54599" />
      <ReactLogo width="70px" fill="#d54599" />
      <Nginx width="70px" fill="#090" />
      <Docker width="70px" fill="#d54599" />
    </AutoPlaySwipeableViews>
  </Wrapper>
);

export default MyComponent;
