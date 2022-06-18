import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import ControlsBar from '../Components/ControlsBar';
import SmallToggle from '../Components/SmallToggle';
export default function AddAdditionalInfo({navigation, route}) {
  const [toggle, setToggle] = useState(0);
  const [price, setPrice] = useState('Rs. ' + 0);

  const handleNext = () => {
    const data = {
      title: route.params.title,
      picture: route.params.picture,
      prepTime: route.params.prepTime,
      cookTime: route.params.cookTime,
      difficulty: route.params.difficulty,
      ingredients: route.params.ingredients,
      directions: route.params.directions,
      price: price,
      availableToBuy: toggle,
    };

    console.log(data);
    navigation.navigate('Admin HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Additional info</Text>

      <View style={[styles.section, {marginTop: 30}]}>
        <Text style={styles.text}>Available to Buy?</Text>
        <SmallToggle
          option1="Yes"
          option2="No"
          toggle={toggle}
          setToggle={setToggle}
        />
      </View>

      <View style={[styles.section, {marginTop: 20}]}>
        <Text style={styles.text}>Available to Buy?</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          mode="outlined"
          outlineColor="#BCBCBC"
          activeOutlineColor="#007EFF"
          style={styles.textInput}
        />
      </View>

      <ControlsBar
        backButtonDisabled={false}
        nextButtonText="Submit"
        navigation={navigation}
        onNext={handleNext}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  heading: {
    fontSize: 40,
    color: '#000',
    fontWeight: '600',
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  scrollContainer: {
    marginBottom: 150,
  },
  addButton: {
    marginTop: 25,
    width: '100%',
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  textInput: {
    width: '50%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
