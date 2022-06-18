import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AddRecipeInfo from '../Parts/AddRecipeInfo';
import AddRecipeIngredients from '../Parts/AddRecipeIngredients';
import AddRecipeTitle from '../Parts/AddRecipeTitle';
import AddRecipeDirections from '../Parts/AddRecipeDirections';
import AddAdditionalInfo from '../Parts/AddAdditionalInfo';
import TextNavbar from '../Components/TextNavbar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AddRecipe() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <TextNavbar text="Add Recipe" />,
      }}>
      <Stack.Screen name="Add Recipe Title" component={AddRecipeTitle} />
      <Stack.Screen name="Add Recipe Info" component={AddRecipeInfo} />
      <Stack.Screen
        name="Add Recipe Ingredients"
        component={AddRecipeIngredients}
      />
      <Stack.Screen
        name="Add Recipe Directions"
        component={AddRecipeDirections}
      />
      <Stack.Screen name="Add Additional Info" component={AddAdditionalInfo} />
    </Stack.Navigator>
  );
}
