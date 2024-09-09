import styled from "styled-components";

export const Container = styled.div`
  main {
    width: 1137px;
    margin: 40px auto 0;
  }

  a {
    display: flex;
    align-items: center;

    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .titleWrapper {
    display: flex;
    align-items: center;

    gap: 19px;

    margin-top: 24px;

    h1 {
      font-family: "Roboto Slab", serif;
      font-weight: 500;
      font-size: 36px;
    }
  }

  .ratingWrapper {
    display: flex;
    gap: 10px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .authorWrapper {
    display: flex;
    align-items: center;

    gap: 16px;

    margin-top: 24px;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 16px;
      height: 16px;

      border-radius: 50%;
    }
  }

  .dateWrapper {
    display: flex;
    align-items: center;

    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .tagsWrapper {
    display: flex;
    gap: 8px;
    margin-top: 40px;

    > div {
      background-color: #282124;
    }
  }

  p {
    margin-top: 40px;
  }
`;
