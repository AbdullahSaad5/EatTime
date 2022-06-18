import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RecipeContainer({name, image}) {
  const [cartIcon, setCartIcon] = useState('cart-remove');
  return (
    <View style={styles.recipe}>
      <View style={styles.recipeImage}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.recipeDetails}>
        <View style={styles.details}>
          <Text style={styles.recipeName}>{name}</Text>
          <Text style={styles.recipeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            porta sem, nec viverra dolor.
          </Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.control}>
            <MaterialIcon name="border-color" size={20} color={'#5076ED'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.control}>
            <FeatherIcon name="trash" size={20} color={'#FB4E4E'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.control}
            onPress={() => {
              cartIcon == 'cart-remove'
                ? setCartIcon('cart-check')
                : setCartIcon('cart-remove');
            }}>
            <MaterialCommunityIcon
              name={cartIcon}
              size={20}
              color={cartIcon == 'cart-check' ? '#2AC769' : '#FB4E4E'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipe: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 5,
  },
  recipeImage: {
    width: '35%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  recipeDetails: {
    width: '65%',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '500',
    lineHeight: 18,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  control: {
    padding: 10,
  },
});
