const http = require("http");
const chalk = require("chalk");
const path = require("path");
const route = require("./helper/route");
const conf = require("./config/defaultConfig");
const openUrl = require("./helper/openUrl");

class Server {
  constructor(config) {
    this.conf = { ...conf, ...config };
  }

  start() {
    const { conf } = this;
    const server = http.createServer((req, res) => {
      const filePath = path.join(conf.root, req.url);
      route(req, res, filePath, conf);
    });

    server.listen(conf.port, conf.hostname, () => {
      const addr = `http://${conf.hostname}:${conf.port}`;
      console.info(`Server started at ${chalk.green(addr)}`);
      openUrl(addr);
    });
  }
}

module.exports = Server;
