import { Text, SafeAreaView, View, Image, FlatList } from "react-native"

//constants
import { ALPAHBET } from "../../constants/alphabet"

//styles
import core from "../../styles/core"

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
          color: core.primaryColor,
          marginBottom: 10,
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: core.primaryColor,
        }}
      >
        Българската азбука
      </Text>

      <FlatList
        keyExtractor={(item, index) => `${item.id}-${index}`}
        data={ALPAHBET}
        numColumns="3"
        style={{
          width: "100%",
        }}
        columnWrapperStyle={{
          gap: 5,
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
                flex: 1,
                padding: 10,
                borderRadius: 2,
                backgroundColor: "#6C63FF",
              }}
            >
              <Image
                source={item.icon}
                style={{
                  width: 58,
                  height: 58,
                  backgroundColor: "#fff",
                  borderRadius: 3,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 22,
                  color: "#fff",
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
