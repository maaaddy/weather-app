// /app/(login)/_layout.tsx
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginLayout() {
  return (
    <Tabs
      screenOptions={{
        //this line gives a little tint to the icons once they're clicked on.
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="sign-in" color={color} size={24} />,
          title: 'Login',
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user-plus" color={color} size={24} />,
          title: 'Sign Up',
        }}
      />
    </Tabs>
  );
}
