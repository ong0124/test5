import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { d as _export_sfc } from './server.mjs';
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
  _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest2.png&#39;)] bg-cover bg-center flex items-center"><div>`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">${ssrInterpolate(_ctx.$t("bookingStatus.toPay"))}</h1></header><div><div class="flex bg-orange-100 pl-4 items-center h-8 overflow-hidden relative text-red-500">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "gg:danger",
    class: "bg-red-500 w-8 h-5 flex-shrink-0"
  }, null, _parent));
  _push(` ${ssrInterpolate(_ctx.$t("announcementMessage"))}\xA0${ssrInterpolate(":")}\xA0 <div class="marquee-container flex-1 overflow-hidden"><div class="whitespace-nowrap animate-marquee"><span class="px-4">${ssrInterpolate(_ctx.$t("bookingStatus.message1"))}</span></div></div></div><div class="p-2 bg-gray-100 pb-20"><!--[-->`);
  ssrRenderList(1, (index) => {
    _push(`<div class="bg-white p-4 rounded-lg shadow-md space-y-3 mb-3"><div class="flex items-center justify-between border-b border-gray-200 pb-2"><div class="flex items-center space-x-2"><input type="checkbox" id="checkbox" class="h-4 w-4 border-black rounded-full"><label for="checkbox" class="text-md text-gray-700 font-bold border-l-4 border-yellow-400 pl-2">${ssrInterpolate(_ctx.$t("HomePage.oneWay"))}</label></div><div class="flex-1 flex justify-center items-center text-md font-medium text-gray-600 ml-10"><p>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "material-symbols-arrow-right-alt",
      class: "mx-2 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div></div><div class="border-b border-gray-200 pb-2"><div class="text-gray-700 text-sm space-y-1"><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.contact"))}</p><p class="pl-2">\u5F20\u4E09</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.phone"))}</p><p class="pl-2">123-456-7890</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))}</p><p class="pl-2">MTXXX</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p><p class="pl-2">2025-01-01 15:00</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.ferryTime"))}</p><p class="pl-2">16:30</p></div><div class="flex justify-between items-center gap-2 mt-2"><div class="flex gap-2"><div class="flex items-center bg-orange-50 rounded-sm px-2 py-1 text-xs">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account",
      class: "w-5 h-5 text-orange-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">2</p></div><div class="flex items-center bg-amber-50 rounded-sm px-2 py-1 text-xs">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account-child",
      class: "w-5 h-5 text-amber-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p></div></div><div class="text-md text-red-500 font-semibold"><span class="font-normal text-gray-700">NT$ </span>300.00 </div></div></div></div><div class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><div class="flex items-center space-x-2">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:bus-clock",
      class: "w-4 h-4 text-lwm-400"
    }, null, _parent));
    _push(`<p class="text-gray-700 font-medium">2025-02-01 15:30</p></div></div><div class="flex justify-between items-center text-sm"><button class="text-gray-500 hover:text-gray-700">${ssrInterpolate("\u66F4\u591A")}</button><div class="flex space-x-2"><button class="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-100">${ssrInterpolate("\u53D6\u6D88\u8BA2\u5355")}</button><button class="bg-lwm-100 text-white px-4 py-1 rounded-md hover:bg-lwm-200">${ssrInterpolate("\u786E\u5B9A\u652F\u4ED8")}</button></div></div></div>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList(1, (index) => {
    _push(`<div class="bg-white p-4 rounded-lg shadow-md space-y-3 mb-3"><div class="flex items-center justify-between border-b border-gray-200 pb-2"><div class="flex items-center space-x-2"><input type="checkbox" id="checkbox1" class="h-4 w-4 border-black rounded-full"><label for="checkbox1" class="text-md text-gray-700 font-bold border-l-4 border-yellow-400 pl-2">${ssrInterpolate(_ctx.$t("HomePage.roundTrip"))}: ${ssrInterpolate(_ctx.$t("Booking.outward"))}</label></div><div class="flex-1 flex justify-center items-center text-md font-medium text-gray-600"><p>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "material-symbols-arrow-right-alt",
      class: "mx-2 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div></div><div class="border-b border-gray-200 pb-2"><div class="text-gray-700 text-sm space-y-1"><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.contact"))}</p><p class="pl-2">\u5F20\u4E09</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.phone"))}</p><p class="pl-2">123-456-7890</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))}</p><p class="pl-2">2025-01-01 15:30</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.flightTime"))}</p><p class="pl-2">15:00</p></div></div></div><div class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><div class="flex items-center space-x-2">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:bus-clock",
      class: "w-4 h-4 text-lwm-400"
    }, null, _parent));
    _push(`<p class="text-gray-700 font-medium">2025-02-01 15:30</p></div></div><div class="border-t border-gray-300 border-dashed pt-2"><div class="flex items-center justify-between border-b border-gray-200 pb-2"><div class="flex items-center space-x-2">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "pepicons-pop:repeat-circle-filled",
      class: "h-5 w-5 bg-blue-600 rounded-full"
    }, null, _parent));
    _push(`<label class="text-md text-gray-700 font-bold border-l-4 border-yellow-400 pl-2">${ssrInterpolate(_ctx.$t("HomePage.roundTrip"))}: ${ssrInterpolate(_ctx.$t("Booking.return"))}</label></div><div class="flex-1 flex justify-center items-center text-md font-medium text-gray-600"><p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p>`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "material-symbols-arrow-right-alt",
      class: "mx-2 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p></div></div><div class="border-b border-gray-200 pb-2"><div class="text-gray-700 text-sm space-y-1"><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))}</p><p class="pl-2">MTXXX</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p><p class="pl-2">2025-01-01 15:30</p></div><div class="flex"><p class="w-24 font-medium">${ssrInterpolate(_ctx.$t("Booking.ferryTime"))}</p><p class="pl-2">15:00</p></div><div class="flex justify-between items-center gap-2 mt-2"><div class="flex gap-2"><div class="flex items-center bg-orange-50 rounded-sm px-2 py-1 text-xs">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account",
      class: "w-5 h-5 text-orange-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">2</p></div><div class="flex items-center bg-amber-50 rounded-sm px-2 py-1 text-xs">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:account-child",
      class: "w-5 h-5 text-amber-500 mr-1"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p></div></div><div class="text-md text-red-500 font-semibold"><span class="font-normal text-gray-700">NT$ </span>600.00 </div></div></div></div><div class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><div class="flex items-center space-x-2">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:bus-clock",
      class: "w-4 h-4 text-lwm-400"
    }, null, _parent));
    _push(`<p class="text-gray-700 font-medium">2025-02-01 15:30</p></div></div></div><div class="flex justify-between items-center text-sm"><button class="text-gray-500 hover:text-gray-700">${ssrInterpolate("\u66F4\u591A")}</button><div class="flex space-x-2"><button class="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-100">${ssrInterpolate("\u53D6\u6D88\u8BA2\u5355")}</button><button class="bg-lwm-100 text-white px-4 py-1 rounded-md hover:bg-lwm-200">${ssrInterpolate("\u786E\u5B9A\u652F\u4ED8")}</button></div></div></div>`);
  });
  _push(`<!--]--></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/toPay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const toPay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { toPay as default };
//# sourceMappingURL=toPay-C579EVIo.mjs.map
