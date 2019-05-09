import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  background-color: var(--red-color);
  padding: 20px 10px;

  h1 {
    color: var(--white-color);
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  margin-bottom: 30px;
  /* margin: 30px 0px 0px 20px; */
  background-color: var(--yellow-color);
`;
