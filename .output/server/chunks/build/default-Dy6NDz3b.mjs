import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { useSSRContext, defineComponent, computed, watchEffect, mergeProps, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useUserStore } from './user-BdxJm4S8.mjs';
import { b as useI18n, u as useLocalePath } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BottomNavigator",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalePath();
    const selectedPage = ref("shuttle");
    ref();
    useRouter();
    useUserStore();
    const pages = [
      { name: "shuttle", icon: "material-symbols-directions-car", route: "/" },
      { name: "reschedule", icon: "jam-write", route: "/reschedulePage/" },
      { name: "myTrip", icon: "streamline-baggage", route: "/myTrip/" },
      { name: "profile", icon: "ri:user-5-line", route: "/profile/profile" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t bg-white fixed inset-x-0 bottom-0" }, _attrs))}><div class="flex justify-between py-1"><!--[-->`);
      ssrRenderList(pages, (page) => {
        _push(`<button class="flex flex-col items-center mx-auto text-sm transition-transform duration-200 transform hover:scale-110 active:scale-95">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: page.icon,
          class: ["h-5 w-5", selectedPage.value === page.name ? "bg-gradient-to-t from-orange-300 to-orange-600 " : "text-gray-400"]
        }, null, _parent));
        _push(`<span class="${ssrRenderClass(selectedPage.value === page.name ? "font-bold bg-gradient-to-b from-orange-300 to-orange-600 text-transparent bg-clip-text" : "text-gray-500")}">${ssrInterpolate(_ctx.$t(`footer.${page.name}`))}</span></button>`);
      });
      _push(`<!--]--></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BottomNavigator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { locale } = useI18n();
    const userStore = useUserStore();
    const hideBottomNavigatorRoutes = ["/test", "/Management/"];
    const shouldShowBottomNavigator = computed(() => {
      const normalizedPath = route.path.replace(/^\/(zh-TW|en-US|zh-CN|zh|en)/, "");
      return !hideBottomNavigatorRoutes.includes(normalizedPath);
    });
    watchEffect(() => {
      console.log("Current Route Path:", route.path);
      console.log("Normalized Route Path:", route.path.replace(/^\/(zh-TW|en-US|zh-CN|zh|en)/, ""));
      console.log("Current Locale:", locale.value);
      console.log("Should Show BottomNavigator:", shouldShowBottomNavigator.value);
      console.log("User ID:", userStore.user_id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BottomNavigator = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (shouldShowBottomNavigator.value) {
        _push(ssrRenderComponent(_component_BottomNavigator, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Dy6NDz3b.mjs.map
