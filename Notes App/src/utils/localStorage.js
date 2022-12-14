function getItemFromLocalStorage(key) {
  const items = JSON.parse(localStorage.getItem(key));
  return items;
}

function setItemToLocalStorage(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}

export {getItemFromLocalStorage,setItemToLocalStorage}
