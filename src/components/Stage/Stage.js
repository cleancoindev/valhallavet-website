import React, { Component } from 'react';
import styled from 'styled-components';
import Parallax from 'parallax-js';

import city from './stage.png';

import { Clouds, Stars, Moon, Sun, Space } from '../Scenes';

const Wrapper = styled.div`
  background: url(${city}) no-repeat center;
  background-size: contain;
  position: relative;
  display: block;
  height: 65vh;
  width: 65vw;
`;

class Stage extends Component {
  constructor() {
    super();

    this.state = {
      parentRef: undefined,
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.parallax = new Parallax(this.ref.current, {
      relativeInput: true
    });
  }

  componentWillUnmount() {
    this.parallax.disable()
  }
  render() {
    return (
      <Wrapper innerRef={this.ref}>
        <Space depth="-0.01" />
        <Moon depth="-0.03" />
        <Clouds depth="0.08" />
        <Sun depth="-0.03" />
        <Stars depth="-0.02" />
      </Wrapper>
    );
  }
}

export default Stage;