import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { GameParams } from "../../@types/navigation";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";

import { Heading } from "../../components/Heading";
import { DuoCard } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";

interface Duos {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function Game() {
  const [duos, setDuos] = useState<Duos[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.0.105:3333/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://192.168.0.105:3333/games/${game.id}/ads`)
      .then((res) => res.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.invisible} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          data={duos}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncio publicado para esse jogo ainda :(
            </Text>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected("")}
        />
      </SafeAreaView>
    </Background>
  );
}
