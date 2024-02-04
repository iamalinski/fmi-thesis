import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import Home from "./screens/home"
import Chose from "./screens/chose"
import Translate from "./screens/translate"
import Learn from "./screens/learn"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{
            title: "Начало",
          }}
          component={Home}
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
  )
}
