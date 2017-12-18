import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buttonWrap: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 3,
    elevation: 1,
    shadowColor: '#000',
  },
  button: {
    alignItems: 'center',
    padding: 8,
    width: 300,
    borderRadius: 3,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0dc0c9',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  top: {
    marginBottom: 25,
  },
  bottom: {
    marginTop: 25,
  },
  middle: {
    marginTop: 25,
    marginBottom: 25,
  }
})
