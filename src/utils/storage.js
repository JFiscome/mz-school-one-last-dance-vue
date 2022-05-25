export async function setOssDirPath (path) {
  localStorage.setItem('ali-oss-path', path)
}

export async function getOssDirPath () {
  return localStorage.getItem('ali-oss-path')
}
