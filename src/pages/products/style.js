import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 20px 20px;

  h1 {
    color: var(--white-color);
  }
  img {
    width: 100%;
  }
  h2 {
    color: var(--white-color);
    margin-bottom: 15px;
  }
`;

export const BoxContainer = styled.div`
  margin-bottom: 30px;
  background-color: var(--menu-color);

  h3 {
    color: var(--white-color);
    font-weight: bold;
    margin-bottom: 10px;
  }

  i {
    margin-right: 5px;
  }
  .infos {
    color: var(--dark-color);
  }
  .detalhes {
    color: var(--white-color);
    font-size: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  button {
    margin-bottom: 0px;
  }
`;
