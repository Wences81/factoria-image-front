import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  width: 30%;
  border-width: 0;
  border-radius: 5px;
  line-height: 40px;
  text-transform: uppercase;
  font-size: 10px;
  background-color: royalblue;
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 40px 50px;
  margin: 0;
  list-style: none;
  max-width: 400px;
`;

export const Name = styled.p`
  display: block;
  padding: 0 15px;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
