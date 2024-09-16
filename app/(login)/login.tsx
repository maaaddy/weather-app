import React, { useEffect, useState } from 'react';
import { TextInput, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';

import { Text, View } from '@/components/Themed';

//Using this instead of navigate since the file we're looking for is in another folder outside of (login)
import { useRouter } from 'expo-router';

import { styles } from '../../app/styles.js';

export default function LoginPage() {

    //const navigation = useNavigation();
    const router = useRouter();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      // Reset the fields whenever the component is mounted or re-rendered
      console.log('LoginPage component mounted or re-rendered');
      setUsername('');
      setPassword('');
    }, []);
    
    const handleLogin = async () => {
      // Here is where we're checking w/ database to see if it's a valid user, password, and user+password combo.
      if (username && password) {
        try {
          const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
          
          const data = await response.json();
        
        if (response.ok) {
          // This means that the login user+pass was successful
          console.log('Login successful:', data);
          router.replace('/(tabs)');
        } 
        else {
          // If it wasn't successful, tell them that it failed...
          alert(data.message || 'Login failed');
        }
      } 
      catch (error) {
        console.error(error);
        setUsername('');
        setPassword('');
      }
    } 
    else {
      alert('Please enter a valid username and password, or sign up.');
    }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>
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
        <Button title="Log In" onPress={handleLogin} />
        <EditScreenInfo path="app/(login)/login.tsx" />
      </View>
    );
  }
