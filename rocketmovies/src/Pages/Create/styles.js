import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    max-width: 1137px;
    margin: 40px auto 0;
  }

  .titleWrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-bottom: 40px;
  }

  h1 {
    font-family: "Roboto Slab", serif;
  }

  a {
    display: flex;
    align-items: center;

    gap: 10px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .inputWrapper {
    display: flex;
    gap: 40px;

    margin-bottom: 40px;
  }

  textarea {
    height: 274px;
  }

  section {
    margin-top: 40px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  .markerWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 16px;

    height: 88px;

    border-radius: 10px;

    background-color: #0d0c0f;

    margin-top: 24px;
    padding-left: 16px;
  }

  .buttonWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 40px;
    margin-top: 40px;
  }
`;
