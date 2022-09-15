import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType,
  Text,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface GameCardProps extends TouchableOpacityProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

export function GameCard({ id, name, ads, cover, ...props }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground style={styles.cover} source={cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.ads}>{ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
