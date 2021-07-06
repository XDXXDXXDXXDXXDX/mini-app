import Vue from "vue";

let pageId;
let $Vue;

function pageLoad(data) {
  window.pageInfo = data;
  top.postMessage({ type: "webviewReady" }, "*");
}

window.pageLoad = pageLoad;

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

function pageReady(data) {
  pageId = data.pageId;
  $Vue = new Vue({
    el: "#app",
    data: data.initalData,
    render: pageInfo.render,
    staticRenderFns: pageInfo.staticRenderFns,
  });
}
