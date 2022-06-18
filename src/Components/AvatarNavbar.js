import React from 'react';
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
import Hamburger from '../Assets/Icons/hamburger.png';

export default function AvatarNavbar({avatar, name}) {
  return (
    <View style={styles.AvatarNavbar}>
      <View style={styles.userDetails}>
        <Image source={avatar} style={styles.userAvatar}></Image>
        <View style={styles.userText}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.details}>Admin Panel</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={Hamburger}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AvatarNavbar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  userDetails: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  userText: {
    marginLeft: 10,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  details: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
  },
});
