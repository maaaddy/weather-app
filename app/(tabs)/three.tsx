import { StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabThreeScreen() {
  const router = useRouter();

  const logout = async () => {
    router.replace('/(login)/login');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Logout" onPress={logout} />
      <Text style={styles.textbox}>Logout Button needs to go on this screen.</Text>
      <EditScreenInfo path="app/(tabs)/three.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    //justifyContent: 'center',
  },
  textbox: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    fontSize: 16,
    //justifyContent: 'center',
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
});
