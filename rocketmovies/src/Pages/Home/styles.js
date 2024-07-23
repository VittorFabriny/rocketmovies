import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > main {
    padding: 0 123px;
    margin-top: 50px;

    overflow-y: auto;

    > div:not(:first-of-type) {
      margin-top: 24px;
    }
    > .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 38px;

      > h1 {
        font-family: "Roboto Slab", serif;
        font-weight: 400;
      }
    }
  }

  button {
    max-width: 206px;
  }

  .iconWrapper {
    font-size: 12px;
    margin: 8px 0 15px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .tagsWrapper {
    display: flex;

    gap: 8px;

    margin-top: 15px;
  }
`;
