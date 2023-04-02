import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './List.style';

const List = ({items}) => {
  const renderItem = ({item}) => (
    <View style={styles.list}>
      <Text style={styles.list_text}>{item}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default List;
