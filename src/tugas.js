let word = "aku sayang mario bros";

const capitalize = (word) => {
  let arr = word.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
  }
  //deconstruct array
  let [subjek, predikat, objek, keterangan] = arr;
  return `${subjek} ${predikat} ${objek} ${keterangan}`;
};

console.log(capitalize(word));
