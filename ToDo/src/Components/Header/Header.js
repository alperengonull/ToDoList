import { View, Text, } from 'react-native'
import React from 'react'
import styles from './Header.style'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <Text style={styles.header_text}>Yapılacaklar</Text>
      <Text style={styles.header_text}>0</Text>
      </View>
    </View>
  )
}

export default SearchBar;