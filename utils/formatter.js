export const sentenceCase = (str) => {
  return str.toLowerCase().split('-').map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
}

export const snakeToSentence = (str) => {
  return str.toLowerCase().split('_').map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
}
