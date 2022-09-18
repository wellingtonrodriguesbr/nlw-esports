import { CheckCircle, X } from "phosphor-react-native";
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { THEME } from "../../theme";
import { Heading } from "../Heading";

import * as clipBoard from "expo-clipboard";

import { styles } from "./styles";
import { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...props }: Props) {
  const [isCopy, setIsCopy] = useState(false);

  async function handleCopyDiscordToClipBoard() {
    setIsCopy(true);
    await clipBoard.setStringAsync(discord);

    Alert.alert(
      "Usúario copiado!",
      "Vá até o seu Discord e cole para encontrar essa pessoa."
    );

    setIsCopy(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...props}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <X size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            title="Let's play"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione ao seu Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipBoard}
            disabled={isCopy}
          >
            <Text style={styles.discord}>
              {isCopy ? <ActivityIndicator /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
