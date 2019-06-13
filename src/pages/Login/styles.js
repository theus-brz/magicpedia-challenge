import styled from 'styled-components';

export const Container = styled.form`
  background: #e0dbe0;

  header {
    background: #493548;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 25px;

    img {
      height: 25px;
    }
  }

  > div {
    padding: 25px;
  }
`;

export const Entry = styled.div`
  width: 450px;
  background: #e4d7e4;

  border-radius: 10px;
  border: 1px solid #d4c4d4;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  margin-bottom: 25px;

  input {
    display: flex;
    flex: 1;

    border: 0;
    padding: 20px 0 20px 20px;
    background: transparent;

    color: #666;
    font-weight: bold;
    font-size: 14px;
  }

  img {
    width: 25px;
    height: 25px;

    margin-right: 20px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: #523a51;
    color: #fff;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: 40px;

    &:hover {
      background: #6d576b;
    }
  }

  p {
    color: #666;
    text-decoration: none;
    font-size: 13px;
    line-height: 32px;

    &:hover {
      color: #6d576b;
    }
  }
`;

export const Error = styled.p`
  color: #ff817e;
  margin: 0 0 5px 0;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
