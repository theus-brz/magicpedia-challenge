import styled from 'styled-components';

export const Container = styled.div`
  background: #e0dbe0;
  width: 1000px;
  height: 450px;
`;

export const Header = styled.div`
  background: #493548;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;

  button {
    background: transparent;
    border: 0;

    img {
      height: 25px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  height: 390px;
`;

export const Items = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  align-items: center;

  h1 {
    text-align: center;
    color: #383838;
    margin-bottom: 10px;
    font-family: sans-serif;
    font-size: 16px;
  }

  img {
    border-radius: 10px;
    margin-right: 25px;
  }

  &:first-child img {
    margin-left: 25px;
  }
`;

export const Load = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
