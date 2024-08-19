import Card from '@/components/Card';
import { useState } from 'react';
import { View , StyleSheet, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');

  const addTask = (task: string) => {
    tasks.includes(task) ? 
    Alert.alert('Tarefa já existe') : setTasks([...tasks, task]);
    setTaskName('');
  };

  const removeTask = (task: string) => {
    setTasks(tasks.filter(t => t !== task));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos definir as tarefas:</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Digite o nome da tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={(text) => setTaskName(text)}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={() => addTask(taskName)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks} 
        renderItem={({ item }) => <Card name={item} onRemove={() => removeTask(item)} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b6b6b',
    marginTop: 24,
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button:{
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    marginTop: 36,
    marginBottom: 42,
  },
});
