import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: rgba(255, 133, 155, 0.05);

    display: flex;
    align-items: center;

    padding: 0 124px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 8px;

      color: ${({ theme }) => theme.COLORS.PINK};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  button {
    margin-top: 24px;
}

`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
`;

