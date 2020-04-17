import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles,images } from '../styles/global';
import Card from '../shared/card'



export default function ReviewDetail({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text> {navigation.getParam('title')} </Text>
                <Text> {navigation.getParam('body')} </Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image source={images.ratings[navigation.getParam('rating')]} />
                </View>
            </Card>
        </View>

    )
}


const styles = StyleSheet.create({
    rating: {
       flexDirection:'row',
       justifyContent: 'center',
       paddingTop:16,
       marginTop:16,
       borderTopWidth:1,
       borderTopColor: '#eee'
    }
});
