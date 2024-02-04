import { Text, View, Button, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"

function Chose() {
  const navigation = useNavigation()

  function handleNavigate(screenName) {
    navigation.navigate(screenName)
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          textAlign: "center",
          color: "#2c2c2c",
          marginBottom: 30,
        }}
      >
        Искам да
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 300,
          maxWidth: '100%',
        }}
      >
        <Button
          title="Се обучавам"
          onPress={() => {
            handleNavigate("learn")
          }}
          color="#2c2c2c"
        />
        <Button
          title="Комуникирам"
          onPress={() => {
            handleNavigate("translate")
          }}
          color="#2c2c2c"
        />
      </View>
    </SafeAreaView>
  )
}

export default Chose
