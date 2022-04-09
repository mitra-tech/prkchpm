import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0;
`;

export const Header = styled.p`
  color: #000;
  margin: 5rem auto;
  font-size: 36px;
  font-weight: bold;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const Main = styled.div`
  margin: auto;
  display: grid;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-template-columns: 10fr 3fr 5fr 3fr 10fr;
`;

export const Label = styled.label`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  grid-column-start: 2;
  grid-column-end: 3;
  margin: auto;
`;

export const Input = styled.input`
  margin: auto;
  width: 400px;
  height: 40px;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  grid-column-start: 3;
  grid-column-end: 4;
`;

export const Button = styled.button`
  width: 120px;
  height: 43px;
  grid-column-start: 4;
  grid-column-end: 5;
  background-color: #2ba65c;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
  border: 1px #2ba65c solid;
  p {
    font-size: 18px;
    font-weight: 700;
    background-color: #2ba65c;
  }
`;

export const NotificationContainer = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
`;

export const SearchResult = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: grid;
  grid-template-columns: 8fr 0.5fr 3fr 8fr;
`;

export const Counter = styled.p`
  color: #2ba65c;
  font-size: 36px;
  font-weight: 800;
  grid-column-start: 2;
  grid-column-end: 3;
  margin: auto;
`;

export const FoundText = styled.p`
  font-size: 28px;
  font-weight: 700;
  grid-column-start: 3;
  grid-column-end: 4;
  margin: auto;
`;
export const NotFoundText = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
