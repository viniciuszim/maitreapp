import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #27282c;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainLogo = styled.div`
  height: 80px;
  background: #0d0d0f;
`;

export const ClientLogo = styled.div`
  height: 80px;
  background: #202124;
`;

export const Nav = styled.ul`
  list-style: none;

  li {
    padding: 10px;
    border-bottom: 1px solid;
    border-bottom-color: #212124;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 15px;
      line-height: 50px;

      &:hover {
        color: #965352;
      }
    }

    &:last-child {
      border: none;
    }
  }
`;
