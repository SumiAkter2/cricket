// const getDataFromLs = () => {
//   const getDataString = localStorage.getItem("email") || [];
//   if (getDataString) {
//     return JSON.parse(getDataString);
//   }
//   return [];
// };

// // save To Ls:
// const saveToLs = (data) => {
//   const dataStrigified = JSON.stringify(data);
//   localStorage.setItem("email", dataStrigified);
// };

// const addDataToLs = (email) => {
//   const data = getDataFromLs();
//   data.push(email);
//   //   save to ls
//   saveToLs(data);
// };

// export { addDataToLs, getDataFromLs };

const getDataFromLs = () => {
  const storeDataString = localStorage.getItem("email");
  if (storeDataString) {
    return JSON.parse(storeDataString);
  }
  return [];
};
const saveDataToLs = (data) => {
  const newData = JSON.stringify(data);
  localStorage.setItem("email", newData);
};

const addDataToLs = (email) => {
  const data = getDataFromLs();
  data.push(email);
  // save data to ls
  saveDataToLs(data);
};

export { addDataToLs, getDataFromLs };
