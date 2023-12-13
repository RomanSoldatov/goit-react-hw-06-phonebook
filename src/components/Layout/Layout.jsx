import React from 'react';
import { Container, MainBlock } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <MainBlock>{children}</MainBlock>
    </Container>
  );
};
