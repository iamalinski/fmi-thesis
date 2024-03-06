import { SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"

//screens
import Welcome from "./screens/welcome"
import Chose from "./screens/chose"
import Translate from "./screens/translate"
import Learn from "./screens/learn"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{
            contentStyle: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen
            name="welcome"
            options={{
              title: "Начало",
              headerShown: false,
            }}
            component={Welcome}
          />
          <Stack.Screen
            name="chose"
            options={{
              title: "Избор на направление",
            }}
            component={Chose}
          />
          <Stack.Screen
            name="translate"
            options={{
              title: "Преводач",
            }}
            component={Translate}
          />
          <Stack.Screen
            name="learn"
            options={{
              title: "Обучение",
            }}
            component={Learn}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
