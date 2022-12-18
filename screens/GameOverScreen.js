import Title from "../components/UI/Title";
import { View, StyleSheet } from "react-native";

function GameOverScreen() {
    return (
        <View style={styles.Center}>
            <Title>Oyun Bitti !</Title>
        </View>
    );
}

const styles = StyleSheet.create({
    Center: {
        textAlign: "center",
        flex: 1,
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20,
    },
});

export default GameOverScreen;