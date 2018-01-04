import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  section: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  center: {
    alignItems: 'center',
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h2: {
    fontSize: 20,
  },
  p: {
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 30,
    fontSize: 13,
    lineHeight: 18,
    color: '#333',
  },
  subtext: {
    color: '#888',
    lineHeight: 25,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
})
