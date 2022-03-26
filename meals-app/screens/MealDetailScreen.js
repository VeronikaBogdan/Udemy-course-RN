import {Text} from "react-native";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId; //можем использовать, т.к. оно оределено в mealItem.js

  return (
    <Text>This is Meal Detail screen (Meal ID)</Text>
  );
}

export default MealDetailScreen;