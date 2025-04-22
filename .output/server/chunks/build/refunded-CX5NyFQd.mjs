import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-router';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackBtn = _sfc_main$1;
  const _component_Icon = __nuxt_component_0;
  _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div>`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">${ssrInterpolate(_ctx.$t("bookingStatus.refunded"))}</h1></header><div><div class="pl-2 pt-4 pb-4"><!--[-->`);
  ssrRenderList(1, (index) => {
    _push(`<div class="bg-white p-3 rounded-lg shadow-sm mb-4"><div class="flex justify-between items-center pb-1 mb-1 border-b-2"><div class="flex items-center text-gray-700 w-2/3">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "tabler:receipt-refund",
      class: "bg-gray-500 mr-1 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "material-symbols-arrow-right-alt",
      class: "mx-2 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><span class="text-md text-lwm-50">\u9000\u6B3E</span></div><div class="flex justify-between items-center pt-1"><div class="flex-col items-center text-gray-400 w-2/3 text-sm"><div class="flex gap-2 mt-2"><div class="flex items-center bg-orange-50 rounded-sm px-1 py-1 text-sm">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account",
      class: "w-5 h-5 text-orange-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">2</p></div><div class="flex items-center bg-amber-50 rounded-sm px-1 py-1 text-sm">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account-child",
      class: "w-5 h-5 text-amber-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p></div></div><div class="flex"><p class="w-18">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))} : </p><p class="pl-2">2025-01-01 15:30</p></div><div class="flex"><p class="w-18">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} : </p><p class="pl-2">2025-01-01 15:30</p></div></div><div class="flex"><p>\u9000\u6B3E:</p>\xA0 <p>NT$ 300.00</p></div></div><div class="flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md"><div class="flex items-center flex-grow"><p class="text-lwm-50 font-semibold px-2">${ssrInterpolate(_ctx.$t("bookingStatus.refundedApproving"))}</p><p class="text-gray-700 px-2">\u5728\u7533\u8BF7\u8FC7\u7A0B\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85</p></div><button class="p-1 rounded-md hover:bg-gray-200 transition flex items-center justify-center">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mingcute:right-fill",
      class: "w-5 h-5 text-gray-500"
    }, null, _parent));
    _push(`</button></div><div class="flex justify-end space-x-2 mt-2 text-sm"><button class="px-4 py-1 bg-gray-200 bg-opacity-50 rounded-md text-gray-800">\u5220\u9664\u8BB0\u5F55</button><button class="px-4 py-1 bg-gray-200 bg-opacity-50 rounded-md text-gray-800">\u8054\u7CFB\u5BA2\u670D</button><button class="px-4 py-1 bg-orange-200 bg-opacity-50 rounded-md text-lwm-50">\u67E5\u770B\u8BE6\u60C5</button></div></div>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList(1, (index) => {
    _push(`<div class="bg-white p-3 rounded-lg shadow-sm mb-4"><div class="flex justify-between items-center pb-1 mb-1 border-b-2"><div class="flex items-center text-gray-700 w-2/3">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "tabler:receipt-refund",
      class: "bg-gray-500 mr-1 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "material-symbols-arrow-right-alt",
      class: "mx-2 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><span class="text-md text-lwm-50">\u9000\u6B3E</span></div><div class="flex justify-between items-center pt-1"><div class="flex-col items-center text-gray-400 w-2/3 text-sm"><div class="flex gap-2 mt-2"><div class="flex items-center bg-orange-50 rounded-sm px-1 py-1 text-sm">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account",
      class: "w-5 h-5 text-orange-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">2</p></div><div class="flex items-center bg-amber-50 rounded-sm px-1 py-1 text-sm">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account-child",
      class: "w-5 h-5 text-amber-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p></div></div><div class="flex"><p class="w-18">${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))} : </p><p class="pl-2">2025-01-01 15:30</p></div><div class="flex"><p class="w-18">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} : </p><p class="pl-2">2025-01-01 15:30</p></div></div><div class="flex"><p>\u9000\u6B3E:</p>\xA0 <p>NT$ 300.00</p></div></div><div class="flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md"><div class="flex items-center flex-grow"><p class="text-lwm-400 font-semibold px-2">${ssrInterpolate(_ctx.$t("bookingStatus.refundedtoUser"))}</p><p class="text-gray-700 px-2">\u9000\u6B3E\u91D1\u989D : </p>\xA0 <p class="text-lwm-400">NT$</p>\xA0 <p class="text-lwm-400">300.00</p></div><button class="p-1 rounded-md hover:bg-gray-200 transition flex items-center justify-center">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mingcute:right-fill",
      class: "w-5 h-5 text-gray-500"
    }, null, _parent));
    _push(`</button></div><div class="flex justify-end space-x-2 mt-2 text-sm"><button class="px-4 py-1 bg-gray-200 bg-opacity-50 rounded-md text-gray-800">\u5220\u9664\u8BB0\u5F55</button><button class="px-4 py-1 bg-gray-200 bg-opacity-50 rounded-md text-gray-800">\u8054\u7CFB\u5BA2\u670D</button><button class="px-4 py-1 bg-orange-200 bg-opacity-50 rounded-md text-lwm-50">\u67E5\u770B\u8BE6\u60C5</button></div></div>`);
  });
  _push(`<!--]--></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/refunded.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const refunded = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { refunded as default };
//# sourceMappingURL=refunded-CX5NyFQd.mjs.map
