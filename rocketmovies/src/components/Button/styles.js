import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    
    font-family: 'Roboto Slab', serif;
    font-weight: 500;

    gap: 8px;

    &:disabled {
        opacity: 0.5;
    }
`;