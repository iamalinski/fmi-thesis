import { useState } from "react"
import {
  SafeAreaView,
  TextInput,
  Image,
  Text,
  View,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native"

//constants
import { ALPAHBET } from "../../constants/alphabet"

function Translate() {
  const [text, setText] = useState("")
  const [translatedText, setTranslatedText] = useState({
    text: "",
    translation: [],
  })

  function handleTransalte() {
    const textArray = text.split("")
    const localTranslatedText = []

    textArray.map((letter) => {
      const letterData = ALPAHBET.find((item) => {
        if (item.title === letter.toLowerCase()) {
          return item
        }

        return item.title === "unknown"
      })

      localTranslatedText.push(letterData)
    })

    setTranslatedText({
      text,
      translation: localTranslatedText,
    })
    setText("")
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
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        {translatedText.text.length ? (
          <>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 18,
                color: "#2c2c2c",
                marginBottom: 10,
                paddingBottom: 5,
                borderBottomWidth: 1,
                borderBottomColor: "#2c2c2c",
              }}
            >
              {translatedText.text}
            </Text>
            <FlatList
              numColumns={Math.floor(Dimensions.get("window").width / 60)}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              data={translatedText.translation}
              contentContainerStyle={{
                gap: 1,
              }}
              renderItem={({ item }) => {
                return (
                  <Image
                    source={item.icon}
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: "#e5e5e5",
                      borderRadius: 2,
                      borderWidth: 1,
                      borderColor: "#d1d1d1",
                      margin: 1,
                    }}
                    resizeMode="contain"
                  />
                )
              }}
            />
          </>
        ) : (
          <></>
        )}
      </View>

      <View
        style={{
          height: 50,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            flex: 1,
            marginRight: 5,
          }}
          placeholder="Въведете текст на кирилица..."
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
        <Pressable
          style={{
            height: "100%",
            width: 100,
            backgroundColor: "#2c2c2c",
            alignItems: "center",
            justifyContent: "center",
            opacity: text.length ? 1 : 0.4,
          }}
          onPress={handleTransalte}
          disabled={!text.length}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
            }}
          >
            Превод
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Translate
