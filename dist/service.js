/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/service.js":
/*!****************************!*\
  !*** ./src/App/service.js ***!
  \****************************/
/***/ (() => {

eval("const CALLBACK = {}; // 回调列表\n\nconst wx = {}; // 接口列表\n\nconst PAGE = {}; // 初始化事件监听，响应原生的事件\n\nonmessage = function (e) {\n  const {\n    data: eventDate\n  } = e;\n  const {\n    type,\n    data\n  } = eventDate;\n\n  switch (type) {\n    case \"initializeFeature\":\n      initializeFeature(data);\n      break;\n\n    case \"invokeCallback\":\n      CALLBACK[data.callbackId](data.response);\n      break;\n\n    case \"invokeScript\":\n      eval(data.script);\n      break;\n  }\n}; // 将原生提供的接口注入全局属性wx.xxx\n\n\nfunction initializeFeature(features) {\n  features.forEach(feature => {\n    wx[feature] = function (data) {\n      const {\n        success\n      } = data;\n      const callbackId = Date.now(); // 收集回调\n\n      CALLBACK[callbackId] = success;\n      postMessage({\n        type: \"executeFeature\",\n        data: {\n          id: callbackId,\n          feature\n        }\n      });\n    };\n  });\n}\n\nfunction Page(data) {\n  console.log(data);\n}\n\nsetTimeout(() => {\n  wx.getUserProfile({\n    success: data => {\n      console.log(\"ok\", data);\n    }\n  });\n}, 2000);\n\n//# sourceURL=webpack://mini-app/./src/App/service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/App/service.js"]();
/******/ 	
/******/ })()
;