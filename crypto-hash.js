// use the "crypto" module
const crypto = require("crypto");

//...xxx: spread operator. can combine all the arguments into a xxx array
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");

  // join: make a "space" as separator for each listed element to make a combined string.
  // eg.["A" , "B", "C"] ==> >> "A B C"
  hash.update(inputs.sort().join(" "));
  // make hash as hex format
  return hash.digest("hex");
};

module.exports = cryptoHash;