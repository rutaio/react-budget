// Local storage
const userNameValue = 'Ruta';
localStorage.setItem('userName', userNameValue);

// funkcija, kuri uzkraus duomenis, kai dashboard uzsikrauna:
export const fetchData = (key) => {
  return localStorage.getItem(key);
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
