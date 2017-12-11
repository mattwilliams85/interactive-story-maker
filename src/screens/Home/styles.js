import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    // marginBottom: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  introduction: {
    textAlign: 'center',
    width: 200,
    color: '#888',
  },
  button: {
    alignItems: 'center',
    padding: 5,
    width: 300,
    marginBottom: 30,
    borderRadius: 4,
    borderWidth: 3,
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: 20, paddingBottom: 20,
    paddingLeft: 50, paddingRight: 50,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  option: {
    color: 'blue',
    textAlign: 'center'
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10
  },
})
