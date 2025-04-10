import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackBtn",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="pl-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-tabler-arrow-back-up",
        class: "mr-1 bg-white ml-4 w-6 h-6"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=BackBtn--Dn8uilg.mjs.map
