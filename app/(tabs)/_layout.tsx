import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

// These are imports for the bottom bar's icons. Rain/Sun and Map pin, respectively.
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// These are for the navigation of the app. This part is experimental.
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// This one is for the bottom tab navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const screenStack = createNativeStackNavigator();

// export default function screenOrder() {
//   const colorScheme = useColorScheme();

//       // <screenStack.Navigator>
//       //   <screenStack.Screen name="Login" component={LogInSignUp} />
//       //   <screenStack.Screen name="Tabs" component={TabsScreen} />
//       // </screenStack.Navigator>

//   return (
//       <screenStack.Navigator initialRouteName="Tabs">
//         <screenStack.Screen name="Login" component={LogInSignUp} />
//         <screenStack.Screen name="Tabs" component={TabsScreen} />
//       </screenStack.Navigator>
//   );
// }
// export default function LogInSignUp(){
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         // Disable the static render of the header on web
//         // to prevent a hydration error in React Navigation v6.
//         headerShown: useClientOnlyValue(false, true),
//       }}>
//       <Tabs.Screen
//         name="login"
//         options={{
//           title: 'Log In',
//           tabBarIcon: ({ color }) => <FontAwesome6 name="cloud-sun-rain" size={24} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="signup"
//         options={{
//           title: 'Sign Up',
//           tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={24} color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }

export default function TabsScreen() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Weatherly',
          
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({ color }) => <FontAwesome6 name="cloud-sun-rain" size={24} color={color} />,

          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Locations',
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Third',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          //tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={24} color="black" />,
        }}
      />
    </Tabs>
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
