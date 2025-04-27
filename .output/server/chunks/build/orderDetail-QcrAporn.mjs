import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import { d as useI18n, _ as __nuxt_component_2$1 } from './server.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { f as formatDate } from './formatDate-sHBEhsiw.mjs';
import { defineComponent, reactive, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import '@unhead/shared';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orderDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const form = reactive({
      trip_type: "",
      LineID: "",
      adult_num: "",
      child_num: "",
      contact_phone: "",
      totalprice: "",
      contact_name: "",
      departure_loc: "",
      destination_loc: "",
      return_departure: "",
      return_destination: "",
      arrivalpoint_date: "",
      arrivalpoint_time: "",
      flight_num: "",
      ferry_time: "",
      flight_time: "",
      shuttle_date: "",
      shuttle_time: "",
      return_shuttle_date: "",
      return_shuttle_time: ""
    });
    const departure_loc = computed(() => t(form.departure_loc || "defaultKey"));
    const destination_loc = computed(() => t(form.destination_loc || "defaultKey"));
    const return_departure = computed(() => t(form.return_departure || "defaultKey"));
    const return_destination = computed(() => t(form.return_destination || "defaultKey"));
    const bookingId = route.query.bookingId;
    console.log("Received bookingId:", bookingId);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white font-bold capitalize">${ssrInterpolate(_ctx.$t("orderDetail.title"))}</h1></header><div class="px-6 pt-4"><div class="bg-amber-50 py-4 px-2 rounded-t-xl relative overflow-hidden border-b border-gray-300"><div class="absolute top-2/2 left-2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div><div class="absolute top-2/2 right-2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div><div class="flex items-center justify-between"><div class="flex-1 text-gray-600 text-lg text-end pr-6"><p>${ssrInterpolate(unref(departure_loc))}</p></div><div class="flex-2 text-center text-gray-600"><div class="border-b-2 border-dashed border-lwm-50 mx-2 pb-1 text-md font-medium"><p>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(form).shuttle_date))}</p></div><div class="text-sm text-gray-600"><p>${ssrInterpolate(unref(form).shuttle_time)}</p></div></div><div class="flex-1 text-gray-600 text-lg text-start pl-6"><p>${ssrInterpolate(unref(destination_loc))}</p></div></div></div>`);
      if (unref(form).trip_type === "roundTrip") {
        _push(`<div class="bg-amber-50 py-4 px-2 relative overflow-hidden border-b border-gray-500"><div class="flex items-center justify-between"><div class="flex-1 text-gray-600 text-lg text-end pr-6"><p>${ssrInterpolate(unref(return_departure))}</p></div><div class="flex-2 text-center text-gray-600"><div class="border-b-2 border-dashed border-lwm-50 mx-2 pb-1 text-md font-medium"><p>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(form).return_shuttle_date))}</p></div><div class="text-sm text-gray-600"><p>${ssrInterpolate(unref(form).shuttle_time)}</p></div></div><div class="flex-1 text-gray-600 text-lg text-start pl-6"><p>${ssrInterpolate(unref(return_destination))}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="px-6"><div class="bg-white p-4 rounded-lg flex flex-col border-b-2 space-y-3 text-gray-500"><div class="text-md space-y-1"><p class="flex">${ssrInterpolate(_ctx.$t("Booking.contact"))}: ${ssrInterpolate(unref(form).contact_name)}</p><p>${ssrInterpolate(_ctx.$t("Booking.phone"))}: ${ssrInterpolate(unref(form).contact_phone)}</p></div><div class="p-3 border border-lwm-50 rounded-xl space-y-2"><p class="font-bold">${ssrInterpolate(_ctx.$t("PassengerPage.passengers1"))}</p><div class="flex gap-4"><div class="flex flex-col space-y-1"><p>${ssrInterpolate(_ctx.$t("orderDetail.name"))}</p><p>${ssrInterpolate(_ctx.$t("orderDetail.nationality"))}</p><p>${ssrInterpolate(_ctx.$t("PassengerPage.IdNumber"))}</p></div><div class="flex flex-col space-y-1"><p>X\u5148\u751F</p><p class="bg-yellow-200 text-center px-2 rounded-md w-fit">${ssrInterpolate(_ctx.$t("PassengerPage.non-Local"))}</p><p>6786XXXXX</p></div></div></div><div class="p-3 border border-lwm-50 rounded-xl space-y-2"><p class="font-bold">${ssrInterpolate(_ctx.$t("PassengerPage.passengers2"))}</p><div class="flex gap-4"><div class="flex flex-col space-y-1"><p>${ssrInterpolate(_ctx.$t("orderDetail.name"))}</p><p>${ssrInterpolate(_ctx.$t("orderDetail.nationality"))}</p><p>${ssrInterpolate(_ctx.$t("PassengerPage.IdNumber"))}</p></div><div class="flex flex-col space-y-1"><p>X\u5148\u751F</p><p class="bg-green-200 text-center px-2 rounded-md w-fit">${ssrInterpolate(_ctx.$t("PassengerPage.local"))}</p><p>6786XXXXX</p></div></div></div><div class="pt-2 text-lwm-50 font-semibold"><p>${ssrInterpolate(_ctx.$t("orderDetail.status"))}: ${ssrInterpolate(_ctx.$t("orderDetail.ticketIssued"))}</p></div></div></div><div class="px-6 pb-4 text-gray-500"><div class="bg-white p-4 rounded-lg flex flex-col space-y-2 text-sm"><p>${ssrInterpolate(_ctx.$t("orderDetail.orderNumber"))} : ${ssrInterpolate(unref(bookingId))}</p><div class="flex"><p class="mr-2">${ssrInterpolate(_ctx.$t("orderDetail.orderStatus"))} : </p><p class="text-green-700">${ssrInterpolate(_ctx.$t("orderDetail.paid"))}</p></div><div class="flex"><p class="mr-2">${ssrInterpolate(_ctx.$t("orderDetail.orderDate"))} : </p><p>${ssrInterpolate(_ctx.$t("confirmationPage.dateTime"))}</p></div><div class="flex justify-end pt-1 px-2">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/refund/${unref(bookingId)}`,
        class: "flex items-center gap-2 text-md border border-lwm-50 text-lwm-50 rounded-full px-4 py-1 hover:bg-lwm-50 hover:text-white transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("applyRefund"))} `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mingcute:right-fill",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("applyRefund")) + " ", 1),
              createVNode(_component_Icon, {
                name: "mingcute:right-fill",
                class: "h-5 w-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myTrip/orderDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=orderDetail-QcrAporn.mjs.map
