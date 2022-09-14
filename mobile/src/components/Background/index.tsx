import { ReactNode } from "react";
import { ImageBackground } from "react-native";

import { styles } from "./styles";
import backgroundImage from "../../assets/background-galaxy.png";

interface Props {
  children: ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
