const encode = (data) => JSON.parse(data);
const decode = (data) => JSON.stringify(data);

function setLocalData(key, data) {
  localStorage.setItem(key, decode(data));
}

function getLocalData(key) {
  return  encode(localStorage.getItem(key));
}
  
export { setLocalData, getLocalData };