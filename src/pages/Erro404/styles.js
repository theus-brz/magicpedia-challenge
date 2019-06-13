import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #e0dbe0;

  height: 450px;
  width: 550px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    font-size: 25px;
    color: #493548;
    text-align: center;
  }
`;

export const Navigate = styled(Link)`
  text-decoration: none;

  &:hover {
    opacity: 0.4;
  }

  p {
    margin-top: 20px;
  }
`;
