import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  background: var(--black-color);
  height: 80px;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  span {
    color: var(--secundary-color);
    font-size: 30px;
    margin-left: 10px;
    margin-right: 20px;
  }

  h1 {
    color: var(--white-color);
    flex: 1;
  }
`;

export const RightSide = styled.div`
  i {
    color: var(--regular-color);
    font-size: 20px;
  }
`;
