# Node Qredit QSLP API Helper

[![https://telegram.me/@MrMike_O](https://img.shields.io/badge/💬%20Telegram-MrMike__O-blue.svg)](https://telegram.me/@MrMike_O)

A Promised NodeJS Module for connecting with the Qredit QSLP API

A Full Integration Guide for both QreditAPI and QSLP can be found here: [Qredit Integration Guide](https://github.com/qredit/nodeqreditintegration)

## Install via git

```
git clone https://github.com/qredit/nodeqslpapi
cd nodeqslpapi
npm install

node example.js
```

example.js:

```
const qslpApi = require("./lib/qslpApi");
const qslp = new qslpApi.default();


(async () => {

  var tokenList = await qslp.listTokens();

  console.log(tokenList);

})();
```

## Install via npm

```
npm install --save https://github.com/qredit/nodeqslpapi
```

```
const qslpApi = require("nodeQslpApi");
const qslp = new qslpApi.default();


(async () => {

  var tokenList = await qslp.listTokens();

  console.log(tokenList);

})();
```
