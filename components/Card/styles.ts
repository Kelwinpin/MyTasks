import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button:{
    width: 56,
    height: 56,
    backgroundColor: '#E23C44',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});