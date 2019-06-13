import React from 'react';

import { Container, Navigate } from './styles';

const Erro404 = () => (
  <Container>
    <strong>Opa!</strong>
    <strong>Parece que você encontrou um erro 404!</strong>

    <Navigate to="/">
      <p>Clique aqui para voltar ao Login</p>
    </Navigate>
  </Container>
);

export default Erro404;
