import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

const icon = require("./assets/icon.png");
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01VRmI2QRTnH9LX26f2FbHXGYE-vt_PJWXg&s",
        }}
        style={{ width: 215, height: 294 }}
      /> */}
      {/* <Text style={{ color: "white", padding: 10 }}>
        Las cadenas de teto siempre deben estar renderizadas en un componente
        texto..
      </Text> */}
      {/* <Button
        title="Pulsa aquí"
        onPress={() => {
          alert("Alerta de prueba ");
        }}
      /> */}
      <TouchableHighlight
        underlayColor="09f"
        onPress={() => {
          alert("Alerta de prueba");
        }}
      >
        <Text style={{ color: "white" }}>Presione Aqui</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

