import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { styles } from '../../app/styles.js';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the second tab.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.textbox}>Here's a list of the different things I want to do: 
      Add profiles on tab #3, Add list of fav locations + weather info on tab #1, add a weather map 
      which is centered around user's selected area possibly on tab #2</Text>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}