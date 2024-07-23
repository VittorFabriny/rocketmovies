import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  height: 223px;

  padding: 32px;

  border-radius: 16px;

  background-color: rgba(255, 133, 155, 0.05);

  text-align: start;

  h1 {
    font-family: "Roboto Slab", serif;
    font-weight: bold;

    font-size: 24px;
  }

  p {
    max-height: 60px;

    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
