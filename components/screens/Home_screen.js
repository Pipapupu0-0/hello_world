import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { changeName } from '../reducers/action';
import {Button, View, TextInput, StyleSheet} from 'react-native';


export default function HomeScreen({navigation}) {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    return (
        <View>
            <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='введите свой ник)'/>
            <Button title='Ок'  color='lightblue' onPress={() => {
                dispatch(changeName(name));
                navigation.navigate('Профиль');
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '10%',
        width: '80%',
    },
});