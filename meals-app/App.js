import { StyleSheet, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              // default styles
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white", // для текста
              contentStyle: { backgroundColor: "#3f2f25" }, // для фона
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   const headTitle = route.params.headerTitle;
              //   return {
              //     title: headTitle,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: "Meal Detail",
                // headerTitleStyle: {fontSize: 24},
                // headerTitleAlign: 'center',
                headerRight: () => (
                  <View style={styles.iconsContainer}>
                    <Feather
                      name="home"
                      size={24}
                      color="white"
                      onPress={() => alert("This is a home-button!")}
                    />
                    <Feather
                      name="settings"
                      size={24}
                      color="white"
                      onPress={() => alert("This is a settings-button!")}
                    />
                  </View>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 70,
    justifyContent: "space-between",
  },
});
