const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var path = require("path");

const PORT = process.env.PORT || 8100;
const app = express();

app.use(cors());
//配置跨域
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  // 根目录路由
  res.sendFile(__dirname + "/index.html");
});
// 视频路由
app.use("/video", require("./routes/video"));
app.use("/json", require("./routes/json"));
app.use("/static", express.static("public"));
app.listen(PORT, () => {
  console.log(`服务运行端口：${PORT}`);
});
