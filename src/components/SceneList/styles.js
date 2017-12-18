import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#888',
  },
  firstRow: {
    borderTopWidth: 1,
  }
})
