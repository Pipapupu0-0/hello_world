import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const DATA = [
    {
      id: 1,
      title: 'Наконец-то заработало',  
    },
];

const Item = ({item, onPress, backgroundColor, textcolor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Image style={{flex: 1} } resizeMode='cover' source='C:\Users\vikam\AndroidStudioProjects\Hello_world\hello_world\components\images\m1000x1000.jfif'></Image>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });