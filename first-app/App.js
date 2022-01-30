import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	const [outputText, setOutputText] = useState('Hi, Veronika!!'); // 	'Hi, Veronika!!' -- is a default value
  return (
    <View style={styles.container}>
			<Text>{outputText}</Text>
      <Button title='Change Text' onPress={() => setOutputText('Congratulations!')} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
