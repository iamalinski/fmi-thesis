import { Text, View, Button, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"

function Home() {
  const navigation = useNavigation()

  function handleNavigate() {
    navigation.navigate("chose")
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          textAlign: "center",
          color: "#2c2c2c",
          marginBottom: 2,
        }}
      >
        Здрвейте!
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "400",
          textAlign: "center",
          color: "#2c2c2c",
          marginBottom: 30,
        }}
      >
        В това приложение ще Ви научим как да комуникирате с хора в
        неравностойно положение.
      </Text>

      <Button title="Да започваме" onPress={handleNavigate} color="#2c2c2c" />
    </SafeAreaView>
  )
}

export default Home
