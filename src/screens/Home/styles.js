import { StyleSheet } from 'react-native'

const cardWidth = 157

export const styles = StyleSheet.create({
  card: { 
    width: cardWidth 
  },
  coverWrap: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  },
  cover: { 
    height: cardWidth, 
    width: cardWidth, 
    marginBottom: 4 
  },
  img: { 
    height: cardWidth, 
    width: cardWidth 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    width: cardWidth,
    lineHeight: 20,
  },
  author: {
    fontSize: 12,
    color: '#888',
    lineHeight: 14,
  }
})
