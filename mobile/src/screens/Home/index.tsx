import { Image, View, FlatList } from "react-native";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar.."
      />

      <FlatList
        data={GAMES}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard
            key={item.id}
            id={item.id}
            name={item.name}
            ads={item.ads}
            cover={item.cover}
          />
        )}
      />
    </View>
  );
}
