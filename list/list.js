import {Item, DATA} from './data';
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';


export default function List() {
    const [selectedId, setSelectedId] = useState();
  
    const renderItem = ({item}) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          initialNumToRender='10'
        />
      </SafeAreaView>
    );
  };
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });