import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Toggle from '../Components/Toggle';
import UserContainer from '../Components/UserContainer';
import avatar from '../Assets/Images/Avatar.jpg';
import Entypo from 'react-native-vector-icons/Entypo';
import SlidingPanel from '../Components/SlidingPanel';

export default function UserManagementPage() {
  const [toggle, setToggle] = useState(0);
  const [position, setPosition] = useState('-100%');
  const [bannedUsers, setBannedUsers] = useState([]);
  const [unbannedUsers, setUnbannedUsers] = useState([
    {
      name: 'Syed Abdullah Saad',
      email: 'syedabdullahsaad1@gmail.com',
      avatar: avatar,
    },
    {
      name: 'John Doe',
      email: 'johndoe42@gmail.com',
      avatar: avatar,
    },
  ]);

  const [user, setUser] = useState({});
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.toggleContainer}>
          <Toggle
            option1="Unbanned"
            option2="Banned"
            toggle={toggle}
            setToggle={setToggle}
          />
        </View>
        <ScrollView style={styles.scrollContainer}>
          {toggle == 0 && (
            <>
              {unbannedUsers.length > 0 ? (
                unbannedUsers.map((user, i) => (
                  <UserContainer
                    key={i}
                    avatar={user.avatar}
                    name={user.name}
                    email={user.email}
                    background="#5076ED"
                    setPosition={setPosition}
                    setUser={setUser}
                  />
                ))
              ) : (
                <View style={styles.noUsers}>
                  <Text style={styles.noUsersText}>Sorry, It's empty!</Text>
                </View>
              )}
            </>
          )}
          {toggle == 1 && (
            <>
              {bannedUsers.length > 0 ? (
                bannedUsers.map((user, i) => (
                  <UserContainer
                    key={i}
                    avatar={user.avatar}
                    name={user.name}
                    email={user.email}
                    background="#FB4E4E"
                    setPosition={setPosition}
                    setUser={setUser}
                  />
                ))
              ) : (
                <View style={styles.noUsers}>
                  <Text style={styles.noUsersText}>Sorry, It's empty!</Text>
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>

      {/* Modal */}
      <SlidingPanel
        user={user}
        position={position}
        setPosition={setPosition}
        mode={toggle === 0 ? 'block' : 'unblock'}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  toggleContainer: {
    padding: 10,
    paddingTop: 0,
  },
  scrollContainer: {
    height: '100%',
  },
  noUsers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  noUsersText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#39BF5D',
    textAlign: 'center',
  },
});
