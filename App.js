import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Etec Professor Milton Gazzetti</Text>
      <Text style={styles.italicText}>3º Série</Text>
      <Text style={styles.text}>MTEC Informática para Internet.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textDecorationLine: 'underline',
  },
  italicText: {
    fontStyle: 'italic',
  },
  
});
