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
    case "eventHappen":
      const { type, pageId, method } = data;
      switch (type) {
        case "tap":
          PAGE[pageId][method]();
      }
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

function Page(pageInfo) {
  const pageId = `iframe${Date.now()}`;
  const proxyData = new Proxy(pageInfo.data, {
    set(obj, prop, value) {
      if (obj[prop] !== value) {
        obj[prop] = value;
        postMessage({
          target: "view",
          type: "setData",
          data: {
            [prop]: value,
          },
        });
        return true;
      }
    },
  });

  PAGE[pageId] = { ...pageInfo, data: proxyData };
  postMessage({
    target: "view",
    type: "pageReady",
    data: {
      pageId,
      initalData: pageInfo.data,
    },
  });
}
