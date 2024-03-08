import { useState } from "react"
import {
  SafeAreaView,
  TextInput,
  Image,
  Text,
  View,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native"

//constants
import { ALPAHBET } from "../../constants/alphabet"

//styles
import core from "../../styles/core"

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
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        {translatedText.text.length ? (
          <>
            <View
              style={{
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  padding: 10,
                  borderRadius: 12,
                  borderBottomRightRadius: 2,
                  backgroundColor: "#6C63FF",
                  alignSelf: "flex-end",
                  maxWidth: 265,
                }}
              >
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  {translatedText.text}
                </Text>
              </View>
              <View
                style={{
                  ...core.messageSender,
                  alignSelf: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                  }}
                >
                  Аз
                </Text>
              </View>
            </View>

            <View>
              <View
                style={{
                  padding: 10,
                  borderRadius: 12,
                  borderBottomLeftRadius: 2,
                  backgroundColor: "#F50057",
                  alignSelf: "flex-start",
                  maxWidth: 265,
                  height:
                    60 * Math.ceil(translatedText.translation.length / 4) + 20,
                }}
              >
                <FlatList
                  numColumns={4}
                  keyExtractor={(item, index) => `${item.id}-${index}`}
                  data={translatedText.translation}
                  renderItem={({ item }) => {
                    return (
                      <Image
                        source={item.icon}
                        style={{
                          width: 58,
                          height: 58,
                          backgroundColor: "#fff",
                          borderRadius: 3,
                          margin: 1,
                        }}
                        resizeMode="contain"
                      />
                    )
                  }}
                />
              </View>
              <View style={{ ...core.messageSender, alignSelf: "flex-start" }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: core.primaryColor,
                  }}
                >
                  Преводач
                </Text>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </ScrollView>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          borderWidth: 1,
          borderColor: "#6C63FF",
          borderRadius: 5,
          padding: 5,
          backgroundColor: '#F6F6FF'
        }}
      >
        <TextInput
          style={{
            paddingHorizontal: 10,
            flex: 1,
            marginRight: 5,
            height: "100%",
          }}
          placeholder="Въведете текст на кирилица..."
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
        <Pressable
          onPress={handleTransalte}
          style={{
            ...core.primaryButton,
            width: 100,
            opacity: text.length ? 1 : 0.4,
            paddingVertical: 10,
          }}
          disabled={!text.length}
        >
          <Text style={core.primaryButtonText}>Превод</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Translate
