const { createGzip, createDeflate } = require("zlib");
/**
 * rs readStream
 */
module.exports = (rs, req, res) => {
  const acceptEncodoing = req.headers["accept-encoding"];

  // \b 单词边界 gzip != gzip5
  if (!acceptEncodoing || !acceptEncodoing.match(/\b(gzip|deflate)\b/)) {
    return rs;
  } else if (acceptEncodoing.match(/\bgzip\b/)) {
    res.setHeader("Content-Encoding", "gzip");
    return rs.pipe(createGzip());
  } else if (acceptEncodoing.match(/\bdeflate\b/)) {
    res.setHeader("Content-Encoding", "deflate");
    return rs.pipe(createDeflate());
  }
};
