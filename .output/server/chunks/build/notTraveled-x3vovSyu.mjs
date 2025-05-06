import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { _ as __nuxt_component_2 } from './DashLine-B4S1ra3d.mjs';
import { u as useRoute, _ as __nuxt_component_2$1 } from './server.mjs';
import { f as formatDate } from './formatDate-sHBEhsiw.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notTraveled",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.query.LineID;
    const data = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_DashLine = __nuxt_component_2;
      const _component_nuxt_link = __nuxt_component_2$1;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">${ssrInterpolate(_ctx.$t("bookingStatus.notTraveled"))}</h1></header><div class="pb-20"><!--[-->`);
      ssrRenderList(unref(data), (index) => {
        _push(`<div class="bg-white p-3 mx-2 my-4 rounded-lg shadow-sm"><div class="flex flex-col"><div class="flex items-center justify-between pb-2 border-b border-lwm-400"><div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "healthicons:travel-alt",
          class: "w-6 h-6 text-lwm-400"
        }, null, _parent));
        _push(`<p class="font-medium">${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: index.trip_type === "oneWay" ? "material-symbols-arrow-right-alt" : "pepicons-pop:repeat",
          class: "w-5 h-5 text-gray-500"
        }, null, _parent));
        _push(`<p class="font-medium">${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><div class="flex justify-end space-x-2"><div class="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md"><span>${ssrInterpolate(index.trip_type === "oneWay" ? "\u5355\u7A0B" : "\u5F80\u8FD4")}</span></div><p class="flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-sm">${ssrInterpolate(_ctx.$t("bookingStatus.notTraveled"))}</p></div></div>`);
        if (index.trip_type === "oneWay") {
          _push(`<div><div class="mt-3 text-sm text-gray-700"><div class="flex justify-between mt-1"><p class="font-medium">\u62B5\u9054\u5730\u9EDE\u6642\u9593 :</p><p>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.arrivalpoint_date))} ${ssrInterpolate(index.arrivalpoint_time)}</p></div><div class="flex justify-between mt-1"><p class="font-medium">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))} :</p><p>${ssrInterpolate(index.flight_num)}</p></div><div class="flex justify-between mt-1"><p class="font-medium">${ssrInterpolate(_ctx.$t("Booking.ferryTime"))} /${ssrInterpolate(_ctx.$t("Booking.flightTime"))} :</p><p>${ssrInterpolate(index.flight_time)}</p></div></div><div class="flex flex-wrap gap-2 mt-2"><div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:account",
            class: "w-5 h-5 text-orange-500 mr-1"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(index.adult_num)}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">1</p></div><div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:account-child",
            class: "w-5 h-5 text-amber-500 mr-1"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(index.child_num)}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p></div></div><div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center"><div class="flex items-center font-medium">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:bus-clock",
            class: "w-5 h-5 text-lwm-50 mr-1"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} :</p></div><p class="text-gray-700 font-semibold">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.shuttle_date))} ${ssrInterpolate(index.shuttle_time)}</p></div></div>`);
        } else {
          _push(`<div><div class="mt-3 text-gray-700"><div class="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ri:information-fill",
            class: "w-4 h-4 text-lwm-100 mr-1"
          }, null, _parent));
          _push(`<span>\u53BB\u7A0B</span></div><div class="flex justify-between mt-1 text-sm"><p class="font-medium">\u62B5\u9054\u5730\u9EDE\u6642\u9593 :</p><p>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.arrivalpoint_date))} ${ssrInterpolate(index.arrivalpoint_time)}</p></div><div class="flex justify-between mt-1 text-sm"><p class="font-medium">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))} :</p><p>${ssrInterpolate(index.flight_num)}</p></div><div class="flex justify-between mt-1 text-sm"><p class="font-medium">${ssrInterpolate(_ctx.$t("Booking.ferryTime"))} /${ssrInterpolate(_ctx.$t("Booking.flightTime"))} :</p><p>${ssrInterpolate(index.flight_time)} / ${ssrInterpolate(index.ferry_time)}</p></div><div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center"><div class="flex items-center font-medium">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:bus-clock",
            class: "w-5 h-5 text-lwm-50 mr-1"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} :</p></div><p class="text-gray-700 font-semibold">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.shuttle_date))} ${ssrInterpolate(index.shuttle_time)}</p></div></div>`);
          _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
          _push(`<div class="mt-1 text-sm text-gray-700"><div class="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ri:information-fill",
            class: "w-4 h-4 text-lwm-100 mr-1"
          }, null, _parent));
          _push(`<span>\u8FD4\u7A0B</span></div><div class="flex justify-between mt-1"><p class="font-medium">\u62B5\u9054\u5730\u9EDE\u6642\u9593 :</p><p>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.return_arrival_date))} ${ssrInterpolate(index.return_arrival_time)}</p></div><div class="flex justify-between mt-1"><p class="font-medium">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))} :</p><p>${ssrInterpolate(index.flight_num)}</p></div><div class="flex justify-between mt-1"><p class="font-medium">${ssrInterpolate(_ctx.$t("Booking.ferryTime"))} /${ssrInterpolate(_ctx.$t("Booking.flightTime"))} :</p><p>${ssrInterpolate(index.flight_time)} / ${ssrInterpolate(index.ferry_time)}</p></div></div><div class="flex flex-wrap gap-2 mt-2"><div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:account",
            class: "w-5 h-5 text-orange-500 mr-1"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(index.adult_num)}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">1</p></div><div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:account-child",
            class: "w-5 h-5 text-amber-500 mr-1"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(index.child_num)}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p></div></div><div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center"><div class="flex items-center font-medium">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:bus-clock",
            class: "w-5 h-5 text-lwm-50 mr-1"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} :</p></div><p class="text-gray-700 font-semibold">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.return_shuttle_date))} ${ssrInterpolate(index.return_shuttle_time)}</p></div></div>`);
        }
        _push(`<div class="mt-4 flex justify-between">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { path: "/myTrip/orderDetail", query: { bookingId: index.id } },
          class: "px-3 py-1 text-gray-500 bg-gray-100 text-sm rounded-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("orderDetail.title"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("orderDetail.title")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex space-x-2">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/reschedulePage/details/${index.id}`,
          class: "px-3 py-1 text-gray-600 text-sm border border-gray-600 rounded-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("forReschedule"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("forReschedule")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/notTraveled.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=notTraveled-x3vovSyu.mjs.map
