import React from 'react';
import Table from '../Table/Table';
import Container from '../Container/Container';
import Intro from '../Intro/Intro';

const MainPage = () => {
  return (
    <Container>
      <section>
        <Intro />
        <Table />
      </section>
    </Container>
  );
};

export default MainPage;
