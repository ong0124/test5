import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { _ as __nuxt_component_3 } from './DashLine-CvvRI4g8.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { d as dayjs } from '../_/index.mjs';
import { b as useI18n } from './server.mjs';
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
    route.params.id;
    const data = ref([]);
    const notTraveled = computed(() => data.value.filter((b) => b.status === "notTraveled"));
    const complete = computed(() => data.value.filter((b) => b.status === "complete"));
    const formatDate = (date) => {
      return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_DashLine = __nuxt_component_3;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest2.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl capitalize text-white">${ssrInterpolate(_ctx.$t("footer.myTrip"))}</h1></header><div class="pb-12"><div class="p-3 pt-4"><!--[-->`);
      ssrRenderList(unref(notTraveled), (index) => {
        _push(`<div class="mb-4 transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer hover:shadow-md active:shadow-sm"><div class="bg-white rounded-md shadow-sm p-2 relative flex flex-col w-full border-l-4 border-l-orange-400"><div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div><div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div><div class="flex justify-between items-center ml-2"><div class="flex border-b-2 items-center border-lwm-400">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "zondicons:travel",
          class: "w-4 h-4 mr-1 text-lwm-400"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(unref(t)(index.departure_loc))}</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: index.trip_type === "roundTrip" ? "pepicons-pop:repeat" : "material-symbols-arrow-right-alt",
          class: "mx-2 w-6 h-6 text-gray-600"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(unref(t)(index.destination_loc))}</p></div><div class="flex justify-end space-x-2"><div class="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md"><span>${ssrInterpolate(index.trip_type === "roundTrip" ? _ctx.$t("HomePage.roundTrip") : _ctx.$t("HomePage.oneWay"))}</span></div><p class="flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-sm">${ssrInterpolate(_ctx.$t("bookingStatus.notTraveled"))}</p></div></div><div class="text-md text-gray-700"><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-majesticons-ship-line",
          class: "w-5 h-5 text-lwm-50"
        }, null, _parent));
        _push(`<p class="w-32 truncate">${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))}</p><p class="text-gray-800">2025-03-10</p><p class="pl-2 font-semibold text-gray-900">09:30:00</p></div></div><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:bus-clock",
          class: "w-5 h-5 text-lwm-100"
        }, null, _parent));
        _push(`<p class="w-32 truncate" title="{{ $t(&#39;Booking.shuttleBusTime&#39;) }}">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><p class="text-gray-800">${ssrInterpolate(formatDate(index.shuttle_date))}</p><p class="pl-2 font-semibold text-gray-700">${ssrInterpolate(index.shuttle_time)}</p></div></div></div>`);
        if (index.trip_type === "roundTrip") {
          _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (index.trip_type === "roundTrip") {
          _push(`<div class="text-md text-gray-700"><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-material-symbols-flight-land",
            class: "w-5 h-5 text-lwm-50"
          }, null, _parent));
          _push(`<p class="w-32 truncate">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p><p class="text-gray-800">2025-03-15</p><p class="pl-2 font-semibold text-gray-900">17:30:00</p></div></div><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:bus-clock",
            class: "w-5 h-5 text-lwm-100"
          }, null, _parent));
          _push(`<p class="w-32 truncate" title="{{ $t(&#39;Booking.shuttleBusTime&#39;) }}">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><p class="text-gray-800">${ssrInterpolate(formatDate(index.return_shuttle_date))}</p><p class="pl-2 font-semibold text-gray-700">${ssrInterpolate(index.return_shuttle_time)}</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-2 ml-2 flex justify-between items-center"><div><span class="font-semibold text-gray-700 text-md">NT$ </span><span class="text-md text-gray-700">${ssrInterpolate(index.trip_type === "roundTrip" ? index.adult_num * 300 : index.adult_num * 150)}</span></div><div class="flex gap-2 mt-2"><div class="flex items-center bg-orange-50 rounded-sm px-1 py-1 text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:account",
          class: "w-5 h-5 text-orange-500 mr-1"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">${ssrInterpolate(index.adult_num)}</p></div><div class="flex items-center bg-amber-50 rounded-sm px-1 py-1 text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:account-child",
          class: "w-5 h-5 text-amber-500 mr-1"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">${ssrInterpolate(index.child_num)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="p-3 pt-4 -mt-7"><!--[-->`);
      ssrRenderList(unref(complete), (index) => {
        _push(`<div class="mb-4 text-gray-600 transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer hover:shadow-md active:shadow-sm"><div class="bg-white rounded-md shadow-sm p-2 relative flex flex-col w-full border-l-4 border-gray-300"><div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div><div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div><div class="flex justify-between items-center ml-2"><div class="flex border-b-2 items-center border-gray-400">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "zondicons:travel",
          class: "w-4 h-4 mr-1 text-gray-300"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(unref(t)(index.departure_loc))}</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: index.trip_type === "roundTrip" ? "pepicons-pop:repeat" : "material-symbols-arrow-right-alt",
          class: "mx-2 w-6 h-6 text-gray-500"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(unref(t)(index.destination_loc))}</p></div><div class="flex justify-end space-x-2"><div class="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-md"><span>${ssrInterpolate(index.trip_type === "roundTrip" ? _ctx.$t("HomePage.roundTrip") : _ctx.$t("HomePage.oneWay"))}</span></div><p class="flex items-center text-gray-500 bg-gray-100 px-2 py-1 rounded-md text-sm">${ssrInterpolate(_ctx.$t("bookingStatus.complete"))}</p></div></div><div class="text-md text-gray-700"><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-material-symbols-flight-land",
          class: "w-5 h-5 text-gray-300"
        }, null, _parent));
        _push(`<p class="w-32 truncate">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p><p class="text-gray-800">2025-03-13</p><p class="pl-2 font-semibold text-gray-900">12:30:00</p></div></div><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:bus-clock",
          class: "w-5 h-5 text-gray-300"
        }, null, _parent));
        _push(`<p class="w-32 truncate" title="{{ $t(&#39;Booking.shuttleBusTime&#39;) }}">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><p class="text-gray-800">${ssrInterpolate(formatDate(index.shuttle_date))}</p><p class="pl-2 font-semibold text-gray-700">${ssrInterpolate(index.shuttle_time)}</p></div></div></div>`);
        if (index.trip_type === "roundTrip") {
          _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (index.trip_type === "roundTrip") {
          _push(`<div class="text-md text-gray-700"><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-material-symbols-flight-land",
            class: "w-5 h-5 text-gray-300"
          }, null, _parent));
          _push(`<p class="w-32 truncate">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p><p class="text-gray-800"></p><p class="pl-2 font-semibold text-gray-900"></p></div></div><div class="text-gray-500"><div class="flex items-center px-2 rounded-md mt-2 space-x-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:bus-clock",
            class: "w-5 h-5 text-gray-300"
          }, null, _parent));
          _push(`<p class="w-32 truncate" title="{{ $t(&#39;Booking.shuttleBusTime&#39;) }}">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><p class="text-gray-800">${ssrInterpolate(formatDate(index.return_shuttle_date))}</p><p class="pl-2 font-semibold text-gray-700">${ssrInterpolate(index.return_shuttle_time)}</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-2 ml-2 flex justify-between items-center"><div><span class="font-semibold text-gray-400 text-md">NT$ </span><span class="text-md text-gray-400">${ssrInterpolate(index.trip_type === "roundTrip" ? index.adult_num * 300 : index.adult_num * 150)}</span></div><div class="flex gap-2 mt-2"><div class="flex items-center bg-gray-50 rounded-sm px-1 py-1 text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:account",
          class: "w-5 h-5 text-gray-400 mr-1"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">${ssrInterpolate(index.adult_num)}</p></div><div class="flex items-center bg-gray-50 rounded-sm px-1 py-1 text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:account-child",
          class: "w-5 h-5 text-gray-400 mr-1"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">${ssrInterpolate(index.child_num)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><p class="flex text-gray-500 items-center justify-center text-sm">\u2014\u2014 ${ssrInterpolate(_ctx.$t("noMoreData"))} \u2014\u2014</p></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myTrip/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-yO3V5u38.mjs.map
