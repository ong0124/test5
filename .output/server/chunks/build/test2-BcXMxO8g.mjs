import { _ as _sfc_main$1 } from './StatusCard-CE8g1G9d.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { d as _export_sfc } from './server.mjs';
import './index-B-saQaMP.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'pinia';
import 'unhead';
import 'vue-router';
import './formatDate-sHBEhsiw.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_StatusCard = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_StatusCard, {
    link: "/toPay",
    beforeBarClass: "before:bg-yellow-400",
    title: "HomePage.oneWay",
    titleBorderClass: "border-l-yellow-400",
    from: "bookingStatus.pier",
    to: "bookingStatus.airport",
    icon: "material-symbols-arrow-right-alt",
    status: "bookingStatus.toPay",
    arrivalTime: "2025-01-01 15:30",
    shuttleTime: "2025-01-01 15:30",
    adult: 1,
    child: 0
  }, {
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p${_scopeId}>\u5408\u8A08\uFF1ANT$ <span class="text-xl text-red-500"${_scopeId}>150.00</span></p></div><button class="border border-blue-300 text-blue-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u7ACB\u5373\u652F\u4ED8 </button>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, [
              createTextVNode("\u5408\u8A08\uFF1ANT$ "),
              createVNode("span", { class: "text-xl text-red-500" }, "150.00")
            ])
          ]),
          createVNode("button", { class: "border border-blue-300 text-blue-500 rounded-full px-4 mt-1 text-sm" }, " \u7ACB\u5373\u652F\u4ED8 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_StatusCard, {
    link: "/notTraveled",
    beforeBarClass: "before:bg-lwm-400",
    title: "HomePage.roundTrip",
    titleBorderClass: "border-l-lwm-400",
    from: "bookingStatus.airport",
    to: "bookingStatus.pier",
    icon: "pepicons-pop:repeat",
    status: "bookingStatus.notTraveled",
    arrivalTime: "2025-01-01 15:30",
    shuttleTime: "2025-01-01 15:30",
    adult: 2,
    child: 1
  }, {
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-end text-sm"${_scopeId}><div class="flex items-center"${_scopeId}><p class="mr-1"${_scopeId}>\u9000\u6B3E\uFF1ANT$</p><p class="text-lwm-50 text-xl"${_scopeId}>300.00</p></div><button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-end text-sm" }, [
            createVNode("div", { class: "flex items-center" }, [
              createVNode("p", { class: "mr-1" }, "\u9000\u6B3E\uFF1ANT$"),
              createVNode("p", { class: "text-lwm-50 text-xl" }, "300.00")
            ]),
            createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const test2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { test2 as default };
//# sourceMappingURL=test2-BcXMxO8g.mjs.map
