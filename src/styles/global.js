import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f4'
  },
  section: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
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
  buttonWrap: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    color: '#444',
    paddingLeft: 10,
    fontSize: 12,
    lineHeight: 25,
  }
})
