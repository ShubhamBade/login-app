import { View, StatusBar } from "react-native";
import { LoginAppNavigation } from "./src/navigations/LoginAppNavigation";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <LoginAppNavigation />
    </View>
  );
}
