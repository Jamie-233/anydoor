const yargs = require("yargs");
const Server = require("./app");

const argv = yargs
  .usage("$0 [options]")
  .option("p", {
    alias: "port",
    type: "string",
    description: "Server Port",
  })
  .option("h", {
    alias: "hostname",
    type: "string",
    description: "host",
    default: "127.0.0.1",
  })
  .option("d", {
    alias: "root",
    type: "string",
    description: "root path",
    default: process.cwd(),
  })
  .version()
  .alias("v", "version")
  .help().argv;

const server = new Server(argv);
server.start();
