import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' /> 

      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{  // default styles
            headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white', // для текста
              contentStyle: {backgroundColor: '#3f2f25'}, // для фона
          }}
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }} 
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen} 
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   const headTitle = route.params.headerTitle;
            //   return {
            //     title: headTitle,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
