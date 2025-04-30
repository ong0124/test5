import { j as buildAssetsURL } from '../_/nitro.mjs';
import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { a as useRouter } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import './index-B-saQaMP.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import 'vue-router';
import 'pinia';
import 'unhead';

const _imports_0 = "" + buildAssetsURL("boardingpoint.lrxfSDDS.png");
const _imports_1 = "" + buildAssetsURL("flowchat.CNm3RMjV.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "boardingpoint",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl capitalize text-white">${ssrInterpolate(_ctx.$t("boardingpointPage.title"))}</h1></header><div class="flex flex-col pb-16"><p class="text-center text-lg pt-2">${ssrInterpolate(_ctx.$t("boardingpointPage.information"))}</p><img${ssrRenderAttr("src", _imports_0)} alt="boardingpointpng" class="rounded-lg pl-4 pr-4 pb-4"><p class="text-center text-lg">${ssrInterpolate(_ctx.$t("boardingpointPage.flowchart"))}</p><img${ssrRenderAttr("src", _imports_1)} alt="flowchartpng" class="rounded-lg pl-4 pr-4"><div class="flex justify-center pt-4"><button class="bg-orange-400 text-xl text-white font-bold rounded-md py-1 px-8">\u786E\u5B9A</button></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/boardingpoint.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=boardingpoint-CKKyHWm5.mjs.map
