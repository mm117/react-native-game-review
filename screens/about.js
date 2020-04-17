import React from 'react';
import {StyleSheet,View, Text}  from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card'



export default function About(){
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text> 
                  This  application is designed by Mukesh Mishra. It is deveolped using react-native with expo.
                  It is a prototype for game review application, which can be used  to view and add reviews for the top games available across the world.
                  Hope you like the user interface of this application. Thanks !!!
                 </Text>
                </Card>
        </View>
        
    )
}
