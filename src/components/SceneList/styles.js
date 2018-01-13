import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 7,
    paddingBottom: 7,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#888',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  firstRow: {
    borderTopWidth: 1,
  },
  rowWrap: {
    flex: 1,
    paddingBottom: 20,
  },
})
