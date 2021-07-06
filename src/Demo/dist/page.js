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

/***/ "../Demo/index.js":
/*!************************!*\
  !*** ../Demo/index.js ***!
  \************************/
/***/ (() => {

eval("Page({\n  data: {\n    motto: \"Hello World\",\n    userInfo: {},\n    hasUserInfo: false\n  },\n\n  getUserProfile(e) {\n    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗\n    wx.getUserProfile({\n      desc: \"展示用户信息\",\n      // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写\n      success: res => {\n        this.data.userInfo = res.userInfo;\n        this.data.hasUserInfo = true;\n      }\n    });\n  }\n\n});\n\n//# sourceURL=webpack:///../Demo/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../Demo/index.js"]();
/******/ 	
/******/ })()
;