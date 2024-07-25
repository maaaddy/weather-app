import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Button, ActivityIndicator, Keyboard } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [zipCode, setZipCode] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // Set initial loading state to false

  // Function to fetch weather data from WeatherAPI
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b753fca42c7f46528ba182432243105&q=${zipCode}&aqi=yes`);
      const data = await response.json();
      if (data && data.current) {
        setWeather(data);
      } 
      else {
        setWeather(null);
      }
    } 
    catch (error) {
      console.error(error);
      setWeather(null);
    } 
    finally {
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Forecast</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        placeholder="Enter Zip Code"
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="default"
      />
      <Button title="Get Weather" onPress={fetchWeather} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        weather && (
          <View style={styles.weatherInfo}>
            <Text style={styles.title}>Weather in {weather.location.name}, {weather.location.region}:</Text>
            <Text style={styles.weatherText}>Temperature: {weather.current.temp_f}°F</Text>
            <Text style={styles.weatherText}>Condition: {weather.current.condition.text}</Text>
          </View>
        )
      )}
      <Text style={styles.textbox}>Maybe I can add more weather information somewhere around here.</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
