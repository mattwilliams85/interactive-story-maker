import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
  },
  section: {
    maxWidth: 300,
  },
  center: {
    alignItems: 'center',
  },
  h1: {
    fontSize: 26,
    textAlign: 'center',
  },
  h2: {
    fontSize: 20,
  },
  p: {
    marginTop: 5,
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: 15, paddingBottom: 15,
    paddingLeft: 15, paddingRight: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
})
