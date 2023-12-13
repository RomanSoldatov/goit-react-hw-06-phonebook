import React from 'react';
import { SectionWrapper } from './Section.styled';
import { Header } from 'components/Header/Header';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Header title={title} />
      {children}
    </SectionWrapper>
  );
};
