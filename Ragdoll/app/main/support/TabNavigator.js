import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../home/Home';
import Profile from '../profile/Profile';

const TabNavigator = createBottomTabNavigator({
    Home:Home,
    Profile:Profile,
})

export default createAppContainer(TabNavigator);
