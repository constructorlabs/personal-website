import React, { Component } from "react";
import Logos from "./Logos.js";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 98vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
  text-align: center;
  color: grey;
`;
const Row = styled.div`
  width: auto;
`;

const Item = styled.div`
  text-align: center;
`;
const H1 = styled.div`
  font-size: 7vw;
`;

const H2 = styled.div`
  font-size: 1.75vw;
`;

const Contact = styled.div`
  padding: 2vw;
`;

const Link = styled.div`
  padding: 2vw;
  font-size: 1.5vw;
  text-decoration: none;
  color: grey;
  @:hover {
    background-color: black;
    transition: white 0.15s ease-in;
  }
`;

const LogoWrapper = styled.div`
  padding-top: 4em;
`;
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Item>
            <H1>James McAllister</H1>
            <H2>Full Stack Javascript Software Developer</H2>
            <Contact>
              <Link href="mailto:jrfmcallister@gmail.com">
                jrfmcallister@gmail.com
              </Link>
              <Link href="tel:+447445437230">07445 437 230</Link>
            </Contact>
          </Item>
          <LogoWrapper>
            <Logos />
          </LogoWrapper>
        </Row>
      </Wrapper>
    );
  }
}

export default App;
