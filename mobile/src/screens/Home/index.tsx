import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { styles } from "./styles";

import logoImg from "../../assets/logo-nlw-esports.png";
import { useNavigation } from "@react-navigation/native";
interface game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function Home() {
  const [games, setGames] = useState<game[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: game) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch("http://192.168.0.105:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo"
          subtitle="Selecione o game que deseja jogar.."
        />

        <FlatList
          data={games}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
