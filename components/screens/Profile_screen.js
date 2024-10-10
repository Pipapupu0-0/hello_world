import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function ProfileScreen({navigation, route}) {
    const userName = useSelector((state) => state.reducer)

    return(
        <View>
            <Text style={styles.text}>Приятно познакомиться, {userName}!</Text>
            <Button title="Перейти на главный экран" onPress={() => {navigation.navigate('Home')}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginVertical: 30,
        fontSize: 18,
    },
});