import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import {LoginScreen, RegisterScreen} from '../screens/auth';
import BottomTabs from '../navigation/TabNavigator';

// Screen stack model, makes nested screens easier to visualise
const Screens = {
  Home: HomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
};

// Default screen header options
const defaultHeaderOpts = {
  headerTitleAlign: 'center' as 'center',
  headerShown: false,
  headerLeft: undefined,
};

// Create a stack navigator
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Screens.Login}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="Register"
        component={Screens.Register}
        options={defaultHeaderOpts}
      />
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        options={defaultHeaderOpts}
      />
    </Stack.Navigator>
  );
};
