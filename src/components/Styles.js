import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const Header = styled.p`
  color: green;
  margin: 2rem auto;
  font-size: 32px;
  font-weight: bold;
`;

export const Main = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  color: green;
  padding-right: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  margin: auto;
`;

export const Button = styled.button`
  width: 120px;
  height: 43px;
  color: green;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 20px;
  /* padding-bottom: 20px; */
  p {
    font-size: 18px;
    font-weight: bold;
  }
`;
