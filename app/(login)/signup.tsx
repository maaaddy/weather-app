import React, { useEffect, useState } from 'react';
import { TextInput, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

// These are for the navigation of the app. This part is experimental.
import { useNavigation } from '@react-navigation/native';

//Using this instead of navigate since the file we're looking for is in another folder outside of (login)
import { useRouter } from 'expo-router';

import { styles } from '../../app/styles.js';

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