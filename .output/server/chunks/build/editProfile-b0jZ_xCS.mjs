import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as _export_sfc } from './server.mjs';
import { S as Space, D as DatePicker$1 } from './index-D44xJIkB.mjs';
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
import '@babel/runtime/helpers/esm/extends';
import './colors-BBQNRnnY.mjs';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import 'dom-align';
import 'lodash-es';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackBtn = _sfc_main$1;
  const _component_Icon = __nuxt_component_0;
  const _component_a_space = Space;
  const _component_a_date_picker = DatePicker$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}><div class="h-1/4 bg-lwm-50"><header class="flex items-center py-4 relative">`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`<h1 class="absolute left-1/2 transform -translate-x-1/2 text-lg text-white">${ssrInterpolate(_ctx.$t("accountInfo.title"))}</h1></header><div class="mx-4 pt-2 pb-6 rounded-xl bg-white flex flex-col shadow-md"><div class="space-y-4 px-3 py-4 bg-white rounded-lg"><div class="grid grid-cols-[150px_1fr] items-center"><p class="flex items-center font-medium ml-4 text-gray-700"><span class="text-2xl text-red-500">*</span> ${ssrInterpolate(_ctx.$t("accountInfo.userId"))}</p><input type="text" placeholder="22XXXE2X" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"></div><div class="grid grid-cols-[150px_1fr] items-center"><p class="flex items-center font-medium ml-4 text-gray-700"><span class="text-2xl text-red-500">*</span> ${ssrInterpolate(_ctx.$t("accountInfo.nickname"))}</p><input type="text" placeholder="\u2014\u2014\u5148\u751F/\u5973\u751F" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"></div><div class="grid grid-cols-[150px_1fr] items-center"><p class="flex items-center font-medium ml-4 text-gray-700"><span class="text-2xl text-red-500">*</span> ${ssrInterpolate(_ctx.$t("accountInfo.phone"))}</p><input type="text" placeholder="09XXXXXXX0" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"></div><div class="grid grid-cols-[150px_1fr] items-center"><p class="flex items-center font-medium ml-4 text-gray-700"><span class="text-2xl text-red-500">*</span> ${ssrInterpolate(_ctx.$t("accountInfo.email"))}</p><input type="text" placeholder="XXXXX@gmail.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"></div><div class="grid grid-cols-[150px_1fr] items-center"><p class="flex items-center font-medium ml-4 text-gray-700"><span class="text-2xl text-red-500">*</span> \u51FA\u751F\u65E5\u671F `);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:information",
    class: "h-5 w-5 ml-2 text-lwm-50"
  }, null, _parent));
  _push(`</p>`);
  _push(ssrRenderComponent(_component_a_space, {
    direction: "vertical",
    size: 12
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_a_date_picker, {
          "show-today": false,
          inputReadOnly: true,
          class: "w-full px-4 py-2 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_a_date_picker, {
            "show-today": false,
            inputReadOnly: true,
            class: "w-full px-4 py-2 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><button class="mt-6 mx-4 bg-lwm-400 rounded-md p-3 text-white text-lg shadow-md hover:opacity-80 transition flex items-center justify-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mingcute:save-line",
    class: "h-5 w-5 mr-2"
  }, null, _parent));
  _push(` ${ssrInterpolate(_ctx.$t("accountInfo.saveButton"))}</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/editProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const editProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { editProfile as default };
//# sourceMappingURL=editProfile-b0jZ_xCS.mjs.map
