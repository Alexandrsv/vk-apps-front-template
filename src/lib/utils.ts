export const getHashUrl = () => {
  const hash = window.location.hash

  return hash.replace('#', '')
}
