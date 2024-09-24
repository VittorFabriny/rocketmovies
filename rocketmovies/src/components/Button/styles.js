import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, isActive }) =>
    isActive ? `#0d0c0f` : `${theme.COLORS.PINK}`};
  color: ${({ theme, isActive }) =>
    isActive ? `${theme.COLORS.PINK}` : `${theme.COLORS.BACKGROUND_500}`};

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;

  font-family: "Roboto Slab", serif;
  font-weight: 500;

  gap: 8px;

  &:disabled {
    opacity: 0.5;
  }
`;
