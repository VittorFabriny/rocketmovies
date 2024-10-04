import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 16px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};


  font-size: 12px;
`;
