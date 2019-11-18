import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const Launch = StackNavigator({
    Main: {
        screen: TabNavigator,
        navigationOptions: ({navigation}) => ({ header: null })
    }
},{
    initialRouteName:'Main',
    headerMode:'screen'
})

export default Launch;