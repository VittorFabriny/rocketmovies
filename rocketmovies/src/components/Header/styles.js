import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  padding: 0 123px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 18px;
    white-space: nowrap;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      align-self: flex-end;
    }
  }
`;
