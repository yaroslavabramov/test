import React from 'react';
import styled from 'styled-components';
import './App.css';

import Form from './Form';

const Wrapper = styled.div `
  margin-top: 220px;
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div `
  width: 630px;
`;

const Header = styled.h1`

`;

export default () => (
  <Wrapper>
    <Content>
      <Header>Отправить сообщение</Header>
      Анонимные сообщения рассматриваются
      <Form />
    </Content>
  </Wrapper>
);
