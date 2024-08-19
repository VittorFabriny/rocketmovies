import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;

  gap: 16px;

  padding: 16px;

  color: ${({ theme, isNew }) => (isNew ? `${theme.COLORS.GRAY_500}` : "")};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : ""};

  border-radius: 10px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  svg {
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
