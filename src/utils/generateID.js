const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomPrefix(length) {
  let prefix = "";

  for (let i = 0; i < length; i++) {
    const randomCharacterIndex = Math.floor(Math.random() * characters.length);
    prefix += characters.charAt(randomCharacterIndex);
  }

  return prefix;
}

function generatePrefixedID() {
  const randomPrefix = generateRandomPrefix(5);

  return `${randomPrefix}-${Date.now()}`;
}

export default generatePrefixedID;
