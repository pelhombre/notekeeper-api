const log = globalThis.console.log;

const lineDivider = () =>
  log("+++++++++++++++++++++++++++++++++++++++++++++++++");

const lineFeed = () => log("\n");

export default { lineDivider, lineFeed, log };
