import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import TabButton from '../Components/TabButton';
import UserManagementPage from '../Parts/UserManagementPage';
import StatsPage from '../Parts/StatsPage';
import RecipeManagementPage from '../Parts/RecipeManagementPage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function TabStack() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={StatsPage} />
      <Tab.Screen name="Users" component={UserManagementPage} />
      <Tab.Screen name="Recipes" component={RecipeManagementPage} />
      <Tab.Screen name="Deliverymen" component={UserManagementPage} />
    </Tab.Navigator>
  );
}
