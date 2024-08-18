import { View , StyleSheet, Text } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos definir as tarefas:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#131016',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b6b6b',
  }
});
