import styled from "styled-components";

export const CoinCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CoinImage = styled.img`
  max-width: 3rem;
`;

export const CoinInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoinSymbol = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
`;

export const CoinName = styled.p`
  color: var(--primary-neutral-color);
`;

export const CoinProfit = styled.span`
  color: ${({ profit }) => (profit ? "green" : "red")};
`;
