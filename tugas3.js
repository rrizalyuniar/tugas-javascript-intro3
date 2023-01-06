// 1.
// const cekUmur = (umur) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isNaN(umur)) {
//         console.log("harus angka");
//       } else if (umur == false || umur == true || umur == null || umur == "") {
//         console.log("harus diisi");
//       } else {
//         if (umur > 15) {
//           resolve("sudah dewasa");
//         } else {
//           reject(new Error("masih bocil"));
//         }
//       }
//     }, 3000);
//   });
// };

// cekUmur("")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 2.
const cekSuhu = (celcius) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let suhu = celcius;
      if (isNaN(suhu)) {
        console.log("harus berupa angka");
      } else if (suhu == false || suhu == true || suhu == null || suhu == "") {
        console.log("harus diisi");
      } else {
        if (suhu == 36 || suhu == 37) {
          resolve("suhu anda normal");
        } else if (suhu < 36) {
          console.log("suhu anda dibawah normal, anda sedang kedinginan");
        } else if (suhu > 37) {
          console.log("suhu anda diatas normal, anda sedang demam");
        } else {
          reject(new Error("error logic"));
        }
      }
    }, 3000);
  });
};

cekSuhu(36)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });