import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';


export default function ItemScreen(){
    const route = useRoute();

    return(
        <SafeAreaView style={styles.container} title='Item'>
            <Text style={styles.text}>{route.params.selectedId}</Text>
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
});