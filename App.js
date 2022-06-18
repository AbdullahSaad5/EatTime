import React from 'react';
import TabStack from './src/Pages/TabStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AvatarNavbar from './src/Components/AvatarNavbar';
import Avatar from './src/Assets/Images/Avatar.jpg';
import TextNavbar from './src/Components/TextNavbar';

import AddRecipe from './src/Pages/AddRecipe';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <TextNavbar text={props.route.name} />,
        }}>
        <Stack.Screen
          name="Admin HomeScreen"
          component={TabStack}
          options={{
            header: props => (
              <AvatarNavbar name="Abdullah Saad" avatar={Avatar} />
            ),
          }}
        />
        <Stack.Screen
          name="Add Recipe"
          component={AddRecipe}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
