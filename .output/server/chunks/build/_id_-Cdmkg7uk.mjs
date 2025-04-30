import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { defineComponent, ref, reactive, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useRoute, a as useRouter, c as useI18n, e as dayjs } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const id = route.params.id;
    const { t } = useI18n();
    const refundReason = ref("");
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
      shuttle_date: dayjs(),
      shuttle_time: "",
      return_shuttle_date: dayjs(),
      return_shuttle_time: ""
    });
    const departure_loc = computed(() => t(form.departure_loc || "defaultKey"));
    const destination_loc = computed(() => t(form.destination_loc || "defaultKey"));
    const return_departure = computed(() => t(form.return_departure || "defaultKey"));
    const return_destination = computed(() => t(form.return_destination || "defaultKey"));
    const formatDate = (date) => {
      return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    reactive({
      booking_id: id,
      LineID: form.LineID,
      get reason() {
        return refundReason.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl capitalize text-white">${ssrInterpolate(_ctx.$t("RefundPage.title"))}</h1></header><div class="px-6 pt-4 pb-4"><div class="bg-white p-4 rounded-lg flex flex-col mb-4"><div class="flex items-center border-b-2 pb-1 border-dashed">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:information-fill",
        class: "w-6 h-6 text-lwm-100 mr-1"
      }, null, _parent));
      _push(`<p class="text-lwm-500 text-lg">${ssrInterpolate(_ctx.$t("confirmationPage.tripInfo"))}</p></div><div class="border-b-2 border-dashed py-2 px-4 flex flex-col items-center"><div class="flex items-center space-x-3 text-lg font-medium mb-2"><p>${ssrInterpolate(unref(departure_loc))}</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols-arrow-right-alt",
        class: "w-6 h-6 text-gray-500"
      }, null, _parent));
      _push(`<p>${ssrInterpolate(unref(destination_loc))}</p></div><div class="flex items-center space-x-4 text-sm font-medium text-gray-600"><p>${ssrInterpolate(formatDate(unref(form).shuttle_date))}</p><p>${ssrInterpolate(unref(form).shuttle_time)}</p></div></div>`);
      if (unref(form).trip_type === "roundTrip") {
        _push(`<div class="border-b-2 border-dashed py-2 px-4 flex flex-col items-center"><div class="flex items-center space-x-3 text-lg font-medium mb-2"><p>${ssrInterpolate(unref(return_departure))}</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols-arrow-right-alt",
          class: "w-6 h-6 text-gray-500"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(unref(return_destination))}</p></div><div class="flex items-center space-x-4 text-sm font-medium text-gray-600"><p>${ssrInterpolate(formatDate(unref(form).return_shuttle_date))}</p><p>${ssrInterpolate(unref(form).return_shuttle_time)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex mt-2"><p class="text-gray-400 mr-2">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))} : </p><p>MF1544</p></div><div class="flex mt-1"><p class="text-gray-400">${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">${ssrInterpolate(unref(form).adult_num)}</p><p class="text-gray-400">${ssrInterpolate(_ctx.$t("Booking.childTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">${ssrInterpolate(unref(form).child_num)}</p></div><div class="flex py-2"><p class="mr-2 text-gray-400">${ssrInterpolate(_ctx.$t("RefundPage.paid"))} : </p><p class="mr-2">NT$</p><p class="text-lwm-50 font-bold">${ssrInterpolate(_ctx.$t("confirmationPage.amount"))}</p></div><div class="flex"><p class="text-gray-400 mr-2">${ssrInterpolate(_ctx.$t("Booking.contact"))} : </p><p>${ssrInterpolate(unref(form).contact_name)}</p></div><div class="flex py-2"><label class="self-center pr-2 text-gray-400">${ssrInterpolate(_ctx.$t("RefundPage.refundType"))} : </label><select class="w-4/6 h-fit border rounded-lg px-3 py-2 focus:ring-lwm-100"><option value="refundReason1"${ssrIncludeBooleanAttr(Array.isArray(refundReason.value) ? ssrLooseContain(refundReason.value, "refundReason1") : ssrLooseEqual(refundReason.value, "refundReason1")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.changeOfPlans"))}</option><option value="refundReason2"${ssrIncludeBooleanAttr(Array.isArray(refundReason.value) ? ssrLooseContain(refundReason.value, "refundReason2") : ssrLooseEqual(refundReason.value, "refundReason2")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.tripCancellationOrAdjustment"))}</option><option value="refundReason3"${ssrIncludeBooleanAttr(Array.isArray(refundReason.value) ? ssrLooseContain(refundReason.value, "refundReason3") : ssrLooseEqual(refundReason.value, "refundReason3")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.bookingError"))}</option><option value="refundReason4"${ssrIncludeBooleanAttr(Array.isArray(refundReason.value) ? ssrLooseContain(refundReason.value, "refundReason4") : ssrLooseEqual(refundReason.value, "refundReason4")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.flightOrFerryIssue"))}</option><option value="refundReason5"${ssrIncludeBooleanAttr(Array.isArray(refundReason.value) ? ssrLooseContain(refundReason.value, "refundReason5") : ssrLooseEqual(refundReason.value, "refundReason5")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.systemError"))}</option><option value="refundReason6"${ssrIncludeBooleanAttr(Array.isArray(refundReason.value) ? ssrLooseContain(refundReason.value, "refundReason6") : ssrLooseEqual(refundReason.value, "refundReason6")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.other"))}</option></select></div><div class="flex justify-end pt-4"><button class="bg-lwm-400 text-white w-2/6 py-2 rounded flex justify-center">${ssrInterpolate(_ctx.$t("RefundPage.applyRefund"))}</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/refund/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Cdmkg7uk.mjs.map
