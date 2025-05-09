import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { c as useI18n, _ as __nuxt_component_2$1 } from './server.mjs';
import { f as formatDate } from './formatDate-sHBEhsiw.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    useRouter();
    route.params.id;
    const data = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest2.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-white text-xl capitalize">${ssrInterpolate(_ctx.$t("ReschedulePage.selectRescheduleTrip"))}</h1></header><div class="pb-6 px-3"><div class="space-y-3 pt-2"><!--[-->`);
      ssrRenderList(unref(data), (index) => {
        _push(`<div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer hover:shadow-md active:shadow-sm"><div class="px-3 pt-3 pb-2 flex justify-between items-start border-b-2 border-gray-100"><div class="flex items-center space-x-2 flex-1"><span class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: index.trip_type === "roundTrip" ? "heroicons:arrow-path" : "heroicons:arrow-right",
          class: "w-3 h-3 mr-1 text-lwm-100"
        }, null, _parent));
        _push(` ${ssrInterpolate(index.trip_type === "roundTrip" ? _ctx.$t("HomePage.roundTrip") : _ctx.$t("HomePage.oneWay"))}</span><span class="text-sm px-2 py-1 rounded-full bg-orange-100 text-orange-500">${ssrInterpolate(_ctx.$t("bookingStatus.notTraveled"))}</span></div><div class="text-right"><span class="text-md text-gray-500">NT$</span><span class="text-lg font-semibold text-gray-600">${ssrInterpolate(index.trip_type === "roundTrip" ? 300 * index.adult_num : 150 * index.adult_num)}</span></div></div><div class="p-3"><div class="flex items-start"><div class="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center mr-2 flex-shrink-0">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "zondicons:travel",
          class: "w-4 h-4 text-lwm-400"
        }, null, _parent));
        _push(`</div><div class="flex-1 min-w-0"><div class="flex items-center text-base font-medium text-gray-800 mb-1"><span class="truncate">${ssrInterpolate(unref(t)(index.departure_loc))}</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: index.trip_type === "roundTrip" ? "material-symbols:arrow-right-alt-rounded" : "material-symbols:arrow-right-alt-rounded",
          class: "mx-2 w-5 h-5 text-gray-500 flex-shrink-0"
        }, null, _parent));
        _push(`<span class="truncate">${ssrInterpolate(unref(t)(index.destination_loc))}</span></div><div class="flex items-center bg-gray-100 rounded-md p-2 mt-1">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:bus-clock",
          class: "w-5 h-5 text-lwm-100 mr-2 flex-shrink-0"
        }, null, _parent));
        _push(`<div><p class="text-sm text-gray-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><p class="text-md font-semibold text-gray-800">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.shuttle_date))} ${ssrInterpolate(index.shuttle_time)}</p></div></div></div></div><div class="flex flex-wrap gap-2 mt-3 pl-10"><div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:account",
          class: "w-5 h-5 text-orange-500 mr-1"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">${ssrInterpolate(index.adult_num)}</p></div><div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:account-child",
          class: "w-5 h-5 text-amber-500 mr-1"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">${ssrInterpolate(index.child_num)}</p></div></div>`);
        if (index.trip_type === "roundTrip") {
          _push(`<div class="mt-3 pt-3 border-t border-gray-200"><div class="flex items-start"><div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2 flex-shrink-0">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "zondicons:travel",
            class: "w-4 h-4 text-lwm-50 transform"
          }, null, _parent));
          _push(`</div><div class="flex-1 min-w-0"><div class="flex items-center text-base font-medium text-gray-800 mb-1"><span class="truncate">${ssrInterpolate(unref(t)(index.return_departure))}</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "material-symbols:arrow-right-alt-rounded",
            class: "mx-2 w-5 h-5 text-gray-500 flex-shrink-0"
          }, null, _parent));
          _push(`<span class="truncate">${ssrInterpolate(unref(t)(index.return_destination))}</span></div><div class="flex items-center bg-gray-100 rounded-md p-2 mt-1">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:bus-clock",
            class: "w-5 h-5 text-lwm-100 mr-2 flex-shrink-0"
          }, null, _parent));
          _push(`<div><p class="text-sm text-gray-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><p class="text-md font-semibold text-gray-800">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(index.return_shuttle_date))} ${ssrInterpolate(index.return_shuttle_time)}</p></div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="p-2 bg-gray-50 flex justify-between border-t border-gray-200">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/reschedulePage/details/" + index.id,
          class: "flex-1 flex items-center justify-center py-2 bg-white border border-blue-400 text-blue-400 rounded-lg text-sm font-medium mr-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:pencil",
                class: "w-4 h-4 mr-1"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("forReschedule"))}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "mdi:pencil",
                  class: "w-4 h-4 mr-1"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("forReschedule")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button class="flex-1 flex items-center justify-center py-2 bg-white border border-gray-500 text-gray-700 rounded-lg text-sm font-medium">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:close",
          class: "w-4 h-4 mr-1"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("cancelOrder"))}</button></div></div>`);
      });
      _push(`<!--]--></div><p class="flex text-gray-500 items-center justify-center text-sm py-4">\u2014\u2014 ${ssrInterpolate(_ctx.$t("noMoreData"))} \u2014\u2014</p></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reschedulePage/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DGFLEtnp.mjs.map
