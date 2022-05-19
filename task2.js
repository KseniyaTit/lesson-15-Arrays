let ar = ["smth", "text", "silly"];
function fun(ar, str) {
  let indexOfWord = ar.indexOf(str);
  if (indexOfWord !== -1) {
    ar.splice(indexOfWord, 1);
  }
  return ar;
}
////////////
fun(ar, "silly");
