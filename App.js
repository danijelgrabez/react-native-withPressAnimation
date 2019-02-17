import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styled from 'styled-components';
import Button from './components/Button';
import { normalize } from './utils';

const Wrapper = styled.View`
  align-self: center;
  justify-content: center;
  background-color: #000;
  flex: 1;
  width: 100%;
`;

const App = props => (
  <Wrapper>
    <Button>Press me</Button>
  </Wrapper>
);

export default App;