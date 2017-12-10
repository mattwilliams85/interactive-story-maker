export function objectToArray(data) {
  if (!data) return []
  let dataWithKeys = Object.keys(data).map((key) => {
    var obj = data[key]
    obj._key = key
    return obj
  })
  return dataWithKeys
}