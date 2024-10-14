import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { BlankScreen } from '../screens/BlankScreen';
import CustomButtom from '../components/CustomNavigationButton';
import CustomNavigatorTab from '../components/CustomNavigatorTab';
import HomeTabIcon from '../assets/HomeTabIcon';
import MoreTabIcon from '../assets/MoreTabIcon';

export const SCREEN_NAMES = {
  HOME_SCREEN: 'home_screen',
};

export const TAB_NAMES = {
  HOME_TAB: 'home_tab',
  MORE_TAB: 'more',
};

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const HomeIcon = ({ focused }: { focused: boolean }) => (
  <CustomNavigatorTab screenName="Home" focused={focused} Icon={<HomeTabIcon />} />
);

const MoreIcon = ({ focused }: { focused: boolean }) => (
  <CustomNavigatorTab screenName="More" focused={focused} Icon={<MoreTabIcon />} />
);

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FEF9F5',
          height: 120,
          marginBottom: -40,
          paddingBottom: 60,
        },
      }}
    >
      <Tab.Screen name={TAB_NAMES.HOME_TAB} component={StackNavigator} options={{
          tabBarIcon: HomeIcon,
        }} />
      <Tab.Screen name={TAB_NAMES.MORE_TAB} component={BlankScreen} options={{
          tabBarIcon: MoreIcon,
        }} />
      <Tab.Screen
        name="Custom"
        component={StackNavigator}
        options={{
          tabBarButton: CustomButtom,
        }}
      />
    </Tab.Navigator>
  );
};
