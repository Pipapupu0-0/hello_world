import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { changeName } from '../reducers/action';
import {Button, View, TextInput, StyleSheet, FlatList, Text} from 'react-native';


export default function HomeScreen({navigation}) {
    const [weather, setWeather] = useState([])
    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = () => {
        const URL = "https://www.weatherapi.com/docs/weather_conditions.json";

        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setWeather(data);
                console.log(data);
            });
    };
    

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    return (
        <View>
            <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='введите свой ник)'/>
            <Button title='Ок'  color='lightblue' onPress={() => {
                dispatch(changeName(name));
                navigation.navigate('Профиль');
            }}/>
            <FlatList data={weather} renderItem={({ item }) => (
                <View>
                    <Text style={styles.text}>Day: {item.day} | Night: {item.night}</Text>
                </View>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '10%',
        width: '80%',
    },
    text: {
        textAlign: 'center',
        marginVertical: 30,
        fontSize: 18,
    },
});