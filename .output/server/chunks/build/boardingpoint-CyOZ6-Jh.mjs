import { i as buildAssetsURL } from '../_/nitro.mjs';
import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import './index-CnNrVT_7.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import 'vue-router';
import 'pinia';
import 'unhead';

const _imports_0 = "" + buildAssetsURL("boardingpoint.lrxfSDDS.png");
const _imports_1 = "" + buildAssetsURL("flowchat.CNm3RMjV.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackBtn = _sfc_main$1;
  _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div>`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl capitalize text-white">${ssrInterpolate(_ctx.$t("boardingpointPage.title"))}</h1></header><p class="text-center text-lg pt-2">${ssrInterpolate(_ctx.$t("boardingpointPage.information"))}</p><img${ssrRenderAttr("src", _imports_0)} alt="boardingpointpng" class="rounded-lg pl-4 pr-4 pb-4"><p class="text-center text-lg">${ssrInterpolate(_ctx.$t("boardingpointPage.flowchart"))}</p><img${ssrRenderAttr("src", _imports_1)} alt="flowchartpng" class="rounded-lg pl-4 pr-4 pb-16"><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/boardingpoint.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const boardingpoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { boardingpoint as default };
//# sourceMappingURL=boardingpoint-CyOZ6-Jh.mjs.map
