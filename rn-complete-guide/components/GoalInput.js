import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState(""); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="Course Goal"
      onChangeText={goalInputHandler}
      value={enteredGoal}
      style={styles.input}
    />
    <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
  </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
});

export default GoalInput;
