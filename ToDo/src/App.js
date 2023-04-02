import {View, StyleSheet} from 'react-native';
import React,{useState} from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import List from './Components/List';
const App = () => {

  const [items, setItems] = useState([]);

  const handleAddItem = (text) => {
    setItems([...items, text]);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header />
        <List items={items} />
      </View>
      <View style={styles.cardComponent}>
        <Card onAddItem={handleAddItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#483d8b',
    flex: 1,
  },
  cardComponent: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default App;
