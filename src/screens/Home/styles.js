import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  introduction: {
    textAlign: 'center',
    width: 200,
    color: '#888',
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: 20, paddingBottom: 20,
    paddingLeft: 20, paddingRight: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10
  },
})
