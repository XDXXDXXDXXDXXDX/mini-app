const CALLBACK = {}; // 回调列表
const wx = {}; // 接口列表
const PAGE = {};

// 初始化事件监听，响应原生的事件
onmessage = function(e) {
  const { data: eventData } = e;
  const { type, data } = eventData;
  switch (type) {
    case "initializeFeature":
      initializeFeature(data);
      break;
    case "invokeCallback":
      CALLBACK[data.callbackId](data.response);
      break;
    case "invokeScript":
      eval(data.script);
      break;
  }
};

// 将原生提供的接口注入全局属性wx.xxx
function initializeFeature(features) {
  features.forEach((feature) => {
    wx[feature] = function(data) {
      const { success } = data;
      const callbackId = Date.now();
      // 收集回调
      CALLBACK[callbackId] = success;
      postMessage({
        type: "executeFeature",
        data: {
          id: callbackId,
          feature,
        },
      });
    };
  });
}

function Page(data) {
  postMessage({
    target: "view",
    type: "pageReady",
    data: {
      initalData: data.data,
    },
  });
}

setTimeout(() => {
  wx.getUserProfile({
    success: (data) => {
      console.log("ok", data);
    },
  });
}, 2000);
