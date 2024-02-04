import {
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native"

//constants
import { ALPAHBET } from "../../constants/alphabet"

function Learn() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 15,
      }}
    >
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
        Българската азбука
      </Text>

      <FlatList
        keyExtractor={(item, index) => `${item.id}-${index}`}
        data={ALPAHBET}
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          gap: 5,
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
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
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 22,
                  color: "#2c2c2c",
                }}
              >{` - ${item.title.toUpperCase()}`}</Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Learn
