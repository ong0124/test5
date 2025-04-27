import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './GreaterThan-BhgnbAvu.mjs';
import { c as useLocalePath, u as useRoute } from './server.mjs';
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
  __name: "passengerPages",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalePath();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div class="flex">`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-2xl text-white capitalize">${ssrInterpolate(_ctx.$t("profileSettings.passenger"))}</h1></header><div><div class="px-5 py-4"><p class="text-xl pb-2 flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:person-square-add-20-filled",
        class: "bg-orange-500 w-7 h-7"
      }, null, _parent));
      _push(` \xA0 ${ssrInterpolate(_ctx.$t("PassengerPage.passengers"))}</p><div class="relative bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ease-in-out"><div class="flex flex-col w-full pr-1"><div class="flex justify-start items-center mb-2 border-b border-b-lwm-50 pb-2"><div class="bg-orange-100 px-3 m-1 text-orange-500 text-sm font-medium"><p>${ssrInterpolate(_ctx.$t("PassengerPage.local"))}</p></div><div class="bg-amber-100 px-3 m-1 text-amber-700 text-sm font-medium"><p>${ssrInterpolate(_ctx.$t("PassengerPage.passengers"))}</p></div><div class="bg-green-100 px-3 m-1 text-gray-900 text-sm font-medium"><p>\u6210\u4EBA</p></div><div class="flex ml-auto">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:setting",
        class: "w-6 h-6 mr-1 bg-gray-400"
      }, null, _parent));
      _push(`</div></div><div class="text-sm"><div class="flex mb-2 justify-start items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "solar:pin-circle-bold",
        class: "w-6 h-6 mr-1 bg-lwm-50"
      }, null, _parent));
      _push(`\xA0 <p class="flex text-lg text-gray-600">${ssrInterpolate(_ctx.$t("PassengerPage.passengers1"))}</p></div><div class="text-gray-600"><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.name"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">\u738B**</p></div><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.birthday"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">2002\u5E7408\u670815\u65E5</p></div><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.IdNumber"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">XXXXXX</p></div><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.phoneNumber"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">12XXXXXXXX8</p></div></div></div></div><div class="absolute top-1/2 right-4 transform -translate-y-2/2 flex justify-center items-center bg-gray-100 rounded-full mr-2"><img${ssrRenderAttr("src", _imports_0)} alt="More" class="w-8 h-8"></div></div><div class="relative bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ease-in-out"><div class="flex flex-col w-full pr-1"><div class="flex justify-start items-center mb-2 border-b border-b-lwm-50 pb-2"><div class="bg-yellow-100 px-3 m-1 text-yellow-600 text-sm font-medium"><p>${ssrInterpolate(_ctx.$t("PassengerPage.non-Local"))}</p></div><div class="bg-amber-100 px-3 m-1 text-amber-700 text-sm font-medium"><p>${ssrInterpolate(_ctx.$t("PassengerPage.passengers"))}</p></div><div class="bg-green-100 px-3 m-1 text-gray-900 text-sm font-medium"><p>\u6210\u4EBA</p></div><div class="flex ml-auto">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:setting",
        class: "w-6 h-6 mr-1 bg-gray-400"
      }, null, _parent));
      _push(`</div></div><div class="text-sm"><div class="flex mb-2 justify-start items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "solar:pin-circle-outline",
        class: "w-6 h-6 mr-1 bg-orange-300"
      }, null, _parent));
      _push(`\xA0 <p class="flex text-lg text-gray-600">${ssrInterpolate(_ctx.$t("PassengerPage.passengers2"))}</p></div><div class="text-gray-600"><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.name"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">\u674E**</p></div><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.birthday"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">2006\u5E7406\u670822\u65E5</p></div><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.IdNumber"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">XXXXXX</p></div><div class="flex mb-1"><p class="font-medium text-gray-500">${ssrInterpolate(_ctx.$t("PassengerPage.phoneNumber"))}\xA0:\xA0</p><p class="pl-2 font-light text-gray-700">11XXXXXXXX7</p></div></div></div></div><div class="absolute top-1/2 right-4 transform -translate-y-2/2 flex justify-center items-center bg-gray-100 rounded-full mr-2"><img${ssrRenderAttr("src", _imports_0)} alt="More" class="w-8 h-8"></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/passengerPages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=passengerPages-BBubYgHN.mjs.map
