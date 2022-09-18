import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  Text,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface GameCardProps extends TouchableOpacityProps {
  data: {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
      ads: number;
    };
  };
}

export function GameCard({ data, ...props }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>

          <Text style={styles.ads}>{data._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
