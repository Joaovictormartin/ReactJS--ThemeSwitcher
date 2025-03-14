import { useThemeContext } from "../../providers/theme";
import { ButtonThemeSwitcher } from "../../components/ThemeSwitcher";

import { Container, Text } from "./styles";

export const HomePage = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <Container>
      <Text>Escolha uma tema:</Text>
      <ButtonThemeSwitcher />
      <Text>Tema escolhido: {isDarkMode}</Text>
    </Container>
  );
};
