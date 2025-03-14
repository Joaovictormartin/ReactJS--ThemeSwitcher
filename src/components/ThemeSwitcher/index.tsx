import { useTheme } from "styled-components";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import { useThemeContext } from "../../providers/theme";

import { SwitchContainer, SwitchLabel, Switch, Dot } from "./styles";

export const ButtonThemeSwitcher = () => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <SwitchContainer>
      <SwitchLabel htmlFor="theme-toggle">
        <Switch>
          <input
            type="checkbox"
            id="theme-toggle"
            onChange={toggleTheme}
            style={{ display: "none" }}
            checked={isDarkMode === "light"}
          />

          <Dot isDarkMode={isDarkMode === "light"}>
            {isDarkMode === "light" ? (
              <IoSunnyOutline size={20} color={theme.colors.title} />
            ) : (
              <IoMoonOutline color={theme.colors.white} size={20} />
            )}
          </Dot>
        </Switch>
      </SwitchLabel>
    </SwitchContainer>
  );
};
