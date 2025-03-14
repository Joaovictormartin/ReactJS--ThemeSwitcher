import styled from "styled-components";

interface DotProps {
  isDarkMode: boolean;
}

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Switch = styled.div`
  width: 56px;
  height: 32px;
  position: relative;
  border-radius: 25px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Dot = styled.div<DotProps>`
  position: absolute;
  top: 3px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: transform 0.3s ease, background-color 0.3s ease;
  transform: ${({ isDarkMode }) => (isDarkMode ? "translateX(24px)" : "translateX(0)")};
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.yello : theme.colors.gray};

  display: flex;
  justify-content: center;
  align-items: center;
`;
