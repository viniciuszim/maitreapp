import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 40px;
`;

export const TableSelected = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--yellow-color);
  margin-bottom: 20px;

  h2 {
    color: var(--black-color);
  }
`;

export const ButtonsContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const OrderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--menu-color);
`;

export const NoOrderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--white-color);
  }
`;
