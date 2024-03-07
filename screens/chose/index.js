import { Text, View, SafeAreaView, Pressable, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

//images
import leftArrowIcon from "../../assets/chose/icons/left-arrow.png"
import rightArrowIcon from "../../assets/chose/icons/right-arrow.png"
import choseImage from "../../assets/chose/chose.png"
import bottomLeftShapeImage from "../../assets/chose/bottom-left-shape.png"
import topRightShapeImage from "../../assets/chose/top-right-shape.png"

//styles
import core from "../../styles/core"

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
      <Image
        source={choseImage}
        style={{
          width: 200,
          height: 145,
        }}
        resizeMode="contain"
      />
      <Image
        source={topRightShapeImage}
        style={{
          width: 400,
          height: 400,
          position: "absolute",
          top: -50,
          right: -50,
          opacity: 0.1,
          zIndex: 0,
        }}
        resizeMode="contain"
      />
      <Image
        source={bottomLeftShapeImage}
        style={{
          width: 400,
          height: 400,
          position: "absolute",
          bottom: -50,
          left: -50,
          opacity: 0.1,
          zIndex: 0,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          paddingBottom: 31,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "700",
            textAlign: "center",
            color: core.primaryColor,
          }}
        >
          Искам да
        </Text>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            bottom: 0,
            gap: 170,
          }}
        >
          <Image
            source={leftArrowIcon}
            style={{
              width: 63,
              height: 49,
            }}
            resizeMode="contain"
          />
          <Image
            source={rightArrowIcon}
            style={{
              width: 63,
              height: 49,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          gap: 10,
          paddingHorizontal: 15,
          marginBottom: 15,
        }}
      >
        <Pressable
          onPress={() => {
            handleNavigate("learn")
          }}
          style={{
            ...core.primaryButton,
            flex: 1,
          }}
        >
          <Text style={core.primaryButtonText}>Се обучавам</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            handleNavigate("translate")
          }}
          style={{
            ...core.primaryButton,
            flex: 1,
          }}
        >
          <Text style={core.primaryButtonText}>Комуникирам</Text>
        </Pressable>
      </View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "400",
          textAlign: "center",
          color: core.primaryColor,
          marginBottom: 30,
        }}
      >
        Вашият избор ще определи направлението, в което искате да получите
        насока.
      </Text>
    </SafeAreaView>
  )
}

export default Chose
