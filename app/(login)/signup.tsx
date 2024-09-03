import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Button, ActivityIndicator, Keyboard } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

// These are for the navigation of the app. This part is experimental.
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Using this instead of navigate since the file we're looking for is in another folder outside of (login)
import { useRouter } from 'expo-router';
// This one is for the bottom tab navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Reset the fields whenever the component is mounted or re-rendered
    setUsername('');
    setPassword('');
  }, []);
  

  const handleSignUp = () => {
    // In the future, check here if it's a valid username/password combo.
    if (username && password) {
      router.replace('/(tabs)');
    } 
    else{
      alert('Please enter a valid username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <EditScreenInfo path="app/(login)/signup.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%'
  },
  weatherInfo: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: 'bold',
    padding: 5,
  },
  textbox: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  weatherText: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    padding: 5,
  },
});
