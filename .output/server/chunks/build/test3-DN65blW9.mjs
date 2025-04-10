import { i as buildAssetsURL } from '../_/nitro.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const _imports_0 = "" + buildAssetsURL("line.CGLSGMsw.png");
const _sfc_main = {
  __name: "test3",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(false);
    const name = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><header class="py-8 border-b bg-lwm-50 flex items-center"><h1 class="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold capitalize">${ssrInterpolate(_ctx.$t("title"))}</h1></header><div class="flex-1 flex items-center justify-center bg-white h-screen"><div class="border-2 rounded-lg flex flex-col items-center w-3/4"><div class="flex flex-col"><div class="p-4"><p class="text-black text-3xl font-bold pb-4 pt-4 text-center">${ssrInterpolate(_ctx.$t("login"))}</p></div><div class="mx-8 pb-8"><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("username"))}${ssrRenderAttr("value", name.value)} class="flex-1 px-2 mb-12 border-b-2 border-gray-600 focus:outline-none text-xl w-full"><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("password"))}${ssrRenderAttr("value", password.value)} class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-xl w-full"></div><div class="flex flex-col items-center pb-4"><a href="#" class="text-blue-600 underline">${ssrInterpolate(_ctx.$t("noAccount"))}</a><button class="bg-orange-400 w-2/3 py-2 rounded-lg font-bold text-white text-base">${ssrInterpolate(_ctx.$t("login"))}</button></div><div class="flex justify-center pb-4"><p class="relative text-gray-600 text-base before:content-[&#39;\u2014\u2014&#39;] after:content-[&#39;\u2014\u2014&#39;] before:mr-2 after:ml-2">${ssrInterpolate(_ctx.$t("tryAnotherLogin"))}</p></div><div class="flex justify-center"><button class="flex justify-center w-2/3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"><img${ssrRenderAttr("src", _imports_0)} alt="LINE" class="w-6 h-6 mr-2"> ${ssrInterpolate(_ctx.$t("loginWithLine"))}</button></div><div class="flex justify-center py-8"><a href="#" class="text-red-600 underline">${ssrInterpolate(_ctx.$t("forgotEmailOrPassword"))}</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=test3-DN65blW9.mjs.map
