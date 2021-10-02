/*
  Example of using this library without NPM install
*/

const qslpApi = require("./lib/qslpApi");
const qslp = new qslpApi.default();


(async () => {

  var tokenList = await qslp.listTokens();

  console.log(tokenList);

})();
