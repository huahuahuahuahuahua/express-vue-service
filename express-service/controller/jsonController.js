const mockList = require("../public/Json/mockList.json");
const jsonServer = (req, res) => {
  // 开启Cors
  const headers = {
    //设置允许跨域的域名，也可设置*允许所有域名
    "Access-Control-Allow-Origin": "*",
    //跨域允许的请求方法，也可设置*允许所有方法
    "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
    //允许的header类型
    "Access-Control-Allow-Headers": "Content-Type",
    "content-type": "application/json; charset=utf-8",
  };
  // res.writeHead(206, headers);
  res.set(headers);
  res.send({
    code: 200,
    data: mockList.data,
    msg: "success",
    // url: imgUrl,
  });
};
// server.js
module.exports = {
  jsonServer,
};
