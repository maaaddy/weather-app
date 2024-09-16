import React, { useEffect, useState } from 'react';
import { TextInput, Button, ActivityIndicator, Keyboard } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { styles } from '../../app/styles.js';

//console.log(process.env);
//const API = process.env.REACT_APP_API_KEY;

export default function TabOneScreen() {
  const [zipCode, setZipCode] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // Set initial loading state to false

  // Function to fetch weather data from WeatherAPI
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/getWeather', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zipCode }),
      });
      
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
      <Button title="Get Weather" onPress={fetchWeather}/>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        weather && (
          <View style={styles.weatherInfo}>
            <Text style={styles.title}>Conditions in {weather.location.name}, {weather.location.region}:</Text>
            <Text style={styles.weatherText2}>Last updated: {weather.current.last_updated}</Text>
            <Text style={styles.weatherText}>Temperature: {weather.current.temp_f}°F</Text>
            <Text style={styles.weatherText}>Condition: {weather.current.condition.text}</Text>
            <Text style={styles.weatherText}>Wind: {weather.current.wind_mph} mph, {weather.current.wind_dir}</Text>
            <Text style={styles.weatherText}>UV Index: {weather.current.uv}</Text>
          </View>
        )
      )}
      <Text style={styles.textbox}>Maybe I can add more weather information somewhere around here.</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx"/>
    </View>
  );
}
