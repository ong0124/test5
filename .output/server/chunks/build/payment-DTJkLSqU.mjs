import { j as buildAssetsURL } from '../_/nitro.mjs';
import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useRoute, b as useLocalePath } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import 'pinia';
import 'unhead';

const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "" + buildAssetsURL("PayPalIcon.BmYfvmyX.png");
const _imports_2 = "" + buildAssetsURL("download.bT0GQJsx.png");
const _imports_3 = "" + buildAssetsURL("cash.qOV4FiMx.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "payment",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    useLocalePath();
    route.query.bookingid;
    route.query.LineID;
    const data = ref(null);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col" }, _attrs))}><div class="py-4 bg-green-500"><header class="flex items-center">`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`<h1 class="absolute left-1/2 transform -translate-x-1/2 text-lg capitalize text-white">${ssrInterpolate(_ctx.$t("paymentPage.title"))}</h1></header></div><div class="flex-1 container mx-auto px-4 py-6 max-w-md"><div class="mb-8"><h2 class="text-lg font-medium text-gray-700 mb-4 flex items-center ml-2 space-x-2 leading-none">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:payment-16-filled",
        class: "w-6 h-6 text-green-500"
      }, null, _parent));
      _push(`<span class="align-middle">${ssrInterpolate(_ctx.$t("paymentPage.choose_method"))}</span></h2><div class="space-y-4"><button class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-green-400 active:border-green-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]"><span class="text-gray-700 font-medium group-hover:text-green-600 group-active:text-green-700">LINE PAY</span><div class="flex items-center"><div class="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-green-400 group-active:border-green-500"><img${ssrRenderAttr("src", _imports_0)} alt="LinePay Icon" class="w-full h-auto object-contain"></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "formkit:right",
        class: "w-5 h-5 text-gray-400 group-hover:text-green-500 group-active:text-green-600 ml-2"
      }, null, _parent));
      _push(`</div></button><button class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-sky-400 active:border-sky-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]"><span class="text-gray-700 font-medium group-hover:text-sky-600 group-active:text-sky-700">PayPal</span><div class="flex items-center"><div class="w-20 h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-sky-400 group-active:border-sky-500"><img${ssrRenderAttr("src", _imports_1)} alt="PayPal Icon" class="w-full h-auto object-contain"></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "formkit:right",
        class: "w-5 h-5 text-gray-400 group-hover:text-sky-500 group-active:text-sky-600 ml-2"
      }, null, _parent));
      _push(`</div></button><button class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-blue-400 active:border-blue-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]"><span class="text-gray-700 font-medium group-hover:text-blue-600 group-active:text-blue-700">${ssrInterpolate(_ctx.$t("paymentPage.credit_card"))}</span><div class="flex items-center"><div class="w-fit h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-blue-400 group-active:border-blue-500"><img${ssrRenderAttr("src", _imports_2)} alt="Credit Card Icon" class="h-full w-auto object-contain"></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "formkit:right",
        class: "w-5 h-5 text-gray-400 group-hover:text-blue-500 group-active:text-blue-600 ml-2"
      }, null, _parent));
      _push(`</div></button><button class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-blue-400 active:border-blue-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]"><span class="text-gray-700 font-medium group-hover:text-blue-600 group-active:text-blue-700">${ssrInterpolate(_ctx.$t("paymentPage.Cash"))}</span><div class="flex items-center"><div class="w-fit h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-blue-400 group-active:border-blue-500"><img${ssrRenderAttr("src", _imports_3)} alt="Credit Card Icon" class="h-full w-auto object-contain"></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "formkit:right",
        class: "w-5 h-5 text-gray-400 group-hover:text-blue-500 group-active:text-blue-600 ml-2"
      }, null, _parent));
      _push(`</div></button></div></div><div class="bg-white rounded-xl shadow-sm p-5 mb-8 border border-gray-100"><h3 class="text-md font-medium text-gray-700 mb-2 pb-2 flex items-center border-b">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "solar:clipboard-broken",
        class: "w-5 h-5 text-green-500 mr-2"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("paymentPage.OrderTotal"))}</h3><div class="space-y-3"><div class="flex justify-between text-gray-600"><span>${ssrInterpolate(_ctx.$t("paymentPage.OrderAmount"))}</span><span>NT$ ${ssrInterpolate((_a = unref(data)) == null ? undefined : _a.totalprice)}</span></div><div class="flex justify-between text-gray-600"><span>\u670D\u52A1\u7A0E</span><span>NT$ 0.00</span></div><div class="border-t border-gray-200 my-2"></div><div class="flex justify-between font-semibold text-gray-600"><span>${ssrInterpolate(_ctx.$t("paymentPage.total"))}</span><span class="text-green-600">NT$ ${ssrInterpolate((_b = unref(data)) == null ? undefined : _b.totalprice)}</span></div></div></div></div><div class="sticky bottom-12 bg-white py-4 px-6 shadow-lg border-t border-gray-100"><button class="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg text-center shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:tick",
        class: "w-5 h-5 text-white mr-2"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("paymentPage.pay_button"))} (NT$ ${ssrInterpolate((_c = unref(data)) == null ? undefined : _c.totalprice)}) </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=payment-DTJkLSqU.mjs.map
