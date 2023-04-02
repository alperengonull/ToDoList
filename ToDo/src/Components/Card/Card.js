import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from 'react';
import styles from './Card.style';

const Card = ({onAddItem}) => {

  const [text,setText] = useState('');

  const handleToDo = () =>{
    if (text) {
      onAddItem(text);
      setText('');
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        value={text}  
        onChangeText={setText}
          />
        <TouchableOpacity
        style={styles.button}
        onPress={handleToDo}
        >
          <Text style={styles.button_text}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
