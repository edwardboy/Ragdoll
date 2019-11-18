import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Discover extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text>Discover</Text>
            </View>
        );
    }
}

export default Discover;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
}) 