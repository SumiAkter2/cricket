const addDataToLs = (email) => {
  const storageData = localStorage.setItem("email", email);
  console.log(storageData);
};

export { addDataToLs };
