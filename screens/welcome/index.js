import { Text, Image, SafeAreaView, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

//images
import welcomeImage from "../../assets/welcome/education.png"
import topLeftWaveImage from "../../assets/welcome/top-left-wave.png"
import bottomRightWaveImage from "../../assets/welcome/bottom-right-wave.png"

//styles
import core from "../../styles/core"

function Welcome() {
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
      <Image
        source={welcomeImage}
        style={{
          width: 200,
          height: 145,
        }}
        resizeMode="contain"
      />
      <Image
        source={topLeftWaveImage}
        style={{
          width: 77,
          height: 300,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        resizeMode="contain"
      />
      <Image
        source={bottomRightWaveImage}
        style={{
          width: 31,
          height: 200,
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          textAlign: "center",
          color: core.primaryColor,
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
          color: core.primaryColor,
          marginBottom: 30,
        }}
      >
        В това приложение ще Ви научим как да комуникирате с хора в
        неравностойно положение.
      </Text>

      <Pressable onPress={handleNavigate} style={core.primaryButton}>
        <Text style={core.primaryButtonText}>Да започваме</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Welcome
