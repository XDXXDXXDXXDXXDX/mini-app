import Vue from "vue";

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
    }
  },
  false
);

function pageReady(data) {
  new Vue({
    el: "#app",
    data: data.initalData,
    render: pageInfo.render,
    staticRenderFns: pageInfo.staticRenderFns,
  });
}
