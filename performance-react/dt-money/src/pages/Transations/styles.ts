import styled, { css } from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  overflow-y: scroll;
  max-height: 50vh;

  &::-webkit-scrollbar {
  width: 8px; 
  height: 8px; 
}

&::-webkit-scrollbar-thumb {
  background: ${props => props.theme['green-500']}; 
  border-radius: 4px; 
}

&::-webkit-scrollbar-thumb:hover {
  background-color:  ${props => props.theme['green-700']}; ; 
}

&::-webkit-scrollbar-track {
  background: ${props => props.theme['gray-300']};
  border-radius: 4px;
}

* {
  scrollbar-width: thin; 
  scrollbar-color: ${props => props.theme['gray-500']}; ; 
}
  
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  


  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  td {
    width: 100%;
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  white-space: nowrap;
  ${(props) =>
    props.variant === "income"
      ? css`
          color: ${props.theme["green-300"]};
        `
      : css`
          color: ${props.theme["red-300"]};
        `}
`;
