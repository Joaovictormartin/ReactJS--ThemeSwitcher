import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.title};
`;
