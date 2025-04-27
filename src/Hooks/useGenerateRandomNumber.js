function useRandomNumber() {
  function generateNumber() {
    let randomNumber = "";
    for (let i = 0; i < 4; i++) {
      randomNumber += Math.floor(Math.random() * 10); // عدد تصادفی بین 0 تا 9
    }
    return randomNumber;
  }
  return generateNumber;
}
export default useRandomNumber;
