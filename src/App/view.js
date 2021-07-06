import Vue from "vue";

let pageId;
let $Vue;

// 页面加载完毕，供用户视图层代码调用
function pageLoad(data) {
  window.pageInfo = data;
  top.postMessage({ type: "webviewReady" }, "*");
}

window.pageLoad = pageLoad;

// 订阅应用发送的消息
window.addEventListener(
  "message",
  function(event) {
    const { data: eventData } = event;
    const { type, data } = eventData;
    switch (type) {
      case "pageReady":
        pageReady(data);
        break;
      case "setData":
        for (let key in data) {
          $Vue[key] = data[key];
        }
        break;
    }
  },
  false
);

// 在 vue 中注册tap指令
const Tap = {
  install: function(Vue) {
    Vue.directive("tap", {
      bind: function(el, binding) {
        el.addEventListener("click", () => {
          top.postMessage(
            {
              target: "service",
              type: "eventHappen",
              data: { type: "tap", pageId, method: binding.expression },
            },
            "*"
          );
        });
      },
    });
  },
};
Vue.use(Tap);

// 接收到逻辑层pageReady消息时触发，开始渲染页面
function pageReady(data) {
  pageId = data.pageId;
  $Vue = new Vue({
    el: "#app",
    data: data.initalData,
    render: pageInfo.render,
    staticRenderFns: pageInfo.staticRenderFns,
  });
}
