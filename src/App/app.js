const INTERFACE = ["getUserProfile"]; // 原生接口列表
let webviewReady = false;

const service = new Worker("service.js");
const view = document.getElementById("View");
const viewContent = view.contentWindow;

let pageScript = "";

// 通知逻辑层注册原生提供的接口
service.postMessage({
  type: "initializeFeature",
  data: INTERFACE,
});

// 接受逻辑层的消息
const messageCache = []; // 当视图层还未准备好接受消息时，所有消息会暂存在此
service.onmessage = function(e) {
  const { data: eventData } = e;
  const { type, data, target } = eventData;
  if (target === "view") {
    if (webviewReady) {
      viewContent.postMessage(eventData, "*");
    } else {
      messageCache.push(eventData);
    }
  } else {
    switch (type) {
      case "executeFeature":
        executeFeature(data);
        break;
    }
  }
};

// 接受视图层的消息
window.addEventListener(
  "message",
  function(event) {
    const { data: eventData } = event;
    const { type, data, target } = eventData;
    if (target === "service") {
      service.postMessage(eventData);
    } else {
      switch (type) {
        case "webviewReady":
          webviewReady = true;
          if (messageCache.length) {
            messageCache.forEach((cache) =>
              viewContent.postMessage(cache, "*")
            );
          }
          break;
      }
    }
  },
  false
);

// 根据逻辑层发过来的数据执行对应的原生接口
function executeFeature(data) {
  const { id, feature } = data;
  let response;
  switch (feature) {
    case "getUserProfile":
      response = getUserProfile();
      break;
  }

  service.postMessage({
    type: "invokeCallback",
    data: {
      callbackId: id,
      response,
    },
  });
}

// 模拟的原生接口：获取用户信息
function getUserProfile() {
  return {
    userInfo: {
      avatarUrl: "https://xdxspace.gitee.io/self/images/avatar.png",
      nickName: "好孩子",
    },
  };
}

// 加载用户逻辑脚本
fetch("/demo/page.js")
  .then(function(response) {
    return response.text();
  })
  .then(function(pageScript) {
    service.postMessage({
      type: "invokeScript",
      data: {
        script: pageScript,
      },
    });
  });

function getPageScript() {
  fetch("/demo/page.js")
    .then(function(response) {
      return response.text();
    })
    .then(function(script) {
      pageScript = script;
      service.postMessage({
        type: "invokeScript",
        data: {
          script: pageScript,
        },
      });
    });
}
