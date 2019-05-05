import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 250px;
  background: var(--menu-color);
  color: var(--light-color);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainLogo = styled.div`
  height: 80px;
  background: var(--black-color);

  img {
    width: 100%;
    height: 80px;
  }
`;

export const ClientLogo = styled.div`
  height: 80px;
  background: var(--primaryDark-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: var(--white-color);
  }
`;

export const Nav = styled.ul`
  list-style: none;

  li {
    padding: 10px;
    border-bottom: 1px solid;
    border-bottom-color: var(--menuBorderBottom-color);

    a {
      color: inherit;
      text-decoration: none;
      font-size: 15px;
      line-height: 60px;

      &:hover {
        color: var(--menuTextHover-color);
      }

      i {
        font-size: 20px;
        margin-right: 10px;
      }
    }

    &:last-child {
      border: none;
    }
  }
`;
