const log = globalThis.console.log;

const lineFeed = () => globalThis.console.log("\n");
const lineDivider = () =>
  globalThis.console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

export default { lineDivider, lineFeed, log };
