import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Main/Login';
import Register from './pages/Main/Register';
import Sucess from './pages/Main/VerificationCode/Sucess';
import Actived from './pages/Main/VerificationCode/Actived';

import Home from './pages/Home';
import Profile from './pages/Profile';

import History from './pages/Report/History';
// import New from './pages/Report/New';
import Details from './pages/Report/Details';

const AppStack =  createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    }
                }}
            >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Sucess" component={Sucess} />
                <AppStack.Screen name="Actived" component={Actived} />

                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Profile" component={Profile} />

                <AppStack.Screen name="History" component={History} />
                <AppStack.Screen name="Details" component={Details} />


            </AppStack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;