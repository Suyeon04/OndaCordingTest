"use strict";

//서버 가동
//터미널 -> node ./bin/www.js
const app = require("../app");
const PORT = 3105;

//3105번 포트 사용
app.listen(PORT, () => {
  console.log("서버 가동");
});
