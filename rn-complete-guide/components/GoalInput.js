import React, {useState} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState(""); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
  <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='CANCEL' color='red' onPress={props.onCancel}/>
        </View>
        <View style={styles.button}>
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '45%',
  },
});

export default GoalInput;
