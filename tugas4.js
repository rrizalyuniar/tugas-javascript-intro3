const fetch = require("node-fetch");
let dataUsers = () => {
  return new Promise(async (resolve, reject) => {
    let hasil = await fetch("https://jsonplaceholder.typicode.com/users");
    if (hasil.ok) {
      let data = await hasil.json();
      resolve(
        data.map((biodata) => {
          return biodata.name;
        })
      );
    } else {
      return reject({
        message: "gagal",
      });
    }
  });
};

dataUsers()
  .then((item) => {
    console.log(item);
  })
  .catch((err) => {
    console.log(err);
  });
