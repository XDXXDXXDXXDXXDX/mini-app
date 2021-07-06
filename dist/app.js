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

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/***/ (() => {

eval("const INTERFACE = [\"getUserProfile\"]; // 原生接口列表\n\nconst myWorker = new Worker(\"service.js\");\nlet pageScript = \"\"; // 通知逻辑层注册原生提供的接口\n\nmyWorker.postMessage({\n  type: \"initializeFeature\",\n  data: INTERFACE\n}); // 接受逻辑层的消息\n\nmyWorker.onmessage = function (e) {\n  const {\n    data: eventDate\n  } = e;\n  const {\n    type,\n    data\n  } = eventDate;\n\n  switch (type) {\n    case \"executeFeature\":\n      executeFeature(data);\n      break;\n  }\n}; // 根据逻辑层发过来的数据执行对应的原生接口\n\n\nfunction executeFeature(data) {\n  const {\n    id,\n    feature\n  } = data;\n  let response;\n\n  switch (feature) {\n    case \"getUserProfile\":\n      response = getUserProfile();\n      break;\n  }\n\n  myWorker.postMessage({\n    type: \"invokeCallback\",\n    data: {\n      callbackId: id,\n      response\n    }\n  });\n} // 模拟的原生接口：获取用户信息\n\n\nfunction getUserProfile() {\n  return {\n    userInfo: {\n      avatarUrl: \"https://xdxspace.gitee.io/self/images/avatar.png\",\n      nickName: \"好孩子\"\n    }\n  };\n}\n\nsetTimeout(() => {\n  fetch(\"/demo/page.js\").then(function (response) {\n    return response.text();\n  }).then(function (pageScript) {\n    myWorker.postMessage({\n      type: \"invokeScript\",\n      data: {\n        script: pageScript\n      }\n    });\n  });\n}, 4000);\n\nfunction getPageScript() {\n  fetch(\"/demo/page.js\").then(function (response) {\n    return response.text();\n  }).then(function (script) {\n    pageScript = script;\n    myWorker.postMessage({\n      type: \"invokeScript\",\n      data: {\n        script: pageScript\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://mini-app/./src/App/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/App/index.js"]();
/******/ 	
/******/ })()
;