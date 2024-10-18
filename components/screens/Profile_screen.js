import React from 'react';
import {useSelector} from 'react-redux';
import {Text, StyleSheet, Button, FlatList, SafeAreaView, StatusBar, View, TouchableOpacity, Image} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Item 1',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '2',
    title: 'Item 2',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '3',
    title: 'Item 3',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '4',
    title: 'Item 4',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '5',
    title: 'Item 5',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '6',
    title: 'Item 6',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '7',
    title: 'Item 7',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '8',
    title: 'Item 8',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '9',
    title: 'Item 9',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '10',
    title: 'Item 10',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '11',
    title: 'Item 11',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '12',
    title: 'Item 12',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '13',
    title: 'Item 13',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '14',
    title: 'Item 14',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '15',
    title: 'Item 15',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '16',
    title: 'Item 16',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '17',
    title: 'Item 17',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '18',
    title: 'Item 18',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '19',
    title: 'Item 19',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '20',
    title: 'Item 20',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '21',
    title: 'Item 21',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },
  {
    id: '22',
    title: 'Item 22',
    imageUrl: "https://smart-lab.ru/uploads/2023/images/03/02/71/2023/09/29/df13b5.jpg"
  },

];

export default function ProfileScreen({navigation}) {
    const userName = useSelector((state) => state.reducer);

    const renderItem = ({item}) => {
      const selectedId = item.id

      return (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Item', {selectedId})}>
            <Image style={{ height: 200, width: 200 }}  source={{uri : item.imageUrl}} />
          </TouchableOpacity>
      );
  };   

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Приятно познакомиться, {userName}!</Text>
            <Button title="Перейти на главный экран" onPress={() => {navigation.navigate('Home')}}/>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{height: 3, backgroundColor: 'lightblue'}}></View>}
                maxToRenderPerBatch={10}
                initialNumToRender={10}
                windowSize={2}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginVertical: 30,
        fontSize: 18,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      justifyContent: 'center', 
      alignItems: 'center',
    },
});