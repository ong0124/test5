import { useSSRContext, defineComponent, ref, computed, unref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { b as useI18n, u as useLocalePath, _ as _export_sfc } from './server.mjs';
import __nuxt_component_0$1 from './index-CnNrVT_7.mjs';
import { d as dayjs } from '../_/index.mjs';
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
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "py-6 border-b bg-green-400 flex items-center" }, _attrs))}><h1 class="absolute left-1/2 transform-translate-x-1/2 text-xl font-bold capitalize"> \u91D1\u9580\u901A\u7BA1\u7406 </h1></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Management/ManagementHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ManagementBottom",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalePath();
    const selectedPage = ref("shuttle");
    ref("7");
    const pages = [
      { name: "viewOrder", icon: "material-symbols-grid-view-outline-rounded", route: "/Management/" },
      { name: "checkUser", icon: "material-symbols-person-search-outline", route: "/Management/" },
      { name: "refundApprove", icon: "hugeicons-stamp-02", route: "/Management/" },
      { name: "offDaySetting", icon: "material-symbols-calendar-month-outline", route: "/Management/" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t bg-white fixed inset-x-0 bottom-0" }, _attrs))}><div class="flex justify-between"><!--[-->`);
      ssrRenderList(pages, (page) => {
        _push(`<button class="flex flex-col items-center mx-auto text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: page.icon,
          class: ["h-5 w-5", selectedPage.value === page.name ? "text-green-500" : "text-gray-400"]
        }, null, _parent));
        _push(`<span class="${ssrRenderClass(selectedPage.value === page.name ? "text-green-500 font-bold" : "text-gray-500")}">${ssrInterpolate(_ctx.$t(`Management.${page.name}`))}</span></button>`);
      });
      _push(`<!--]--></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Management/ManagementBottom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const itemsPerPage = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useI18n();
    const searchQuery = ref("");
    const tableHeaders = [
      "\u8A02\u55AE ID",
      "\u806F\u7D61\u4EBA",
      "\u96FB\u8A71",
      "\u4E0A\u8ECA\u5730\u9EDE",
      "\u4E0B\u8ECA\u5730\u9EDE",
      "\u65E5\u671F",
      "\u6642\u9593",
      "\u72C0\u614B",
      "\u6210\u4EBA\u7968(\u4EBA)",
      "\u5152\u7AE5\u7968(\u4EBA)",
      "\u5168\u7968\u6578",
      "\u7E3D\u50F9\u683C"
    ];
    const currentPage = ref(1);
    const paginatedOrders = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return filteredOrders.value.slice(start, start + itemsPerPage);
    });
    const totalPages = computed(() => Math.ceil(filteredOrders.value.length / itemsPerPage));
    const formatDate = (date) => {
      return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    const filteredOrders = computed(() => {
      return orders.value.filter(
        (order) => Object.values(order).some(
          (value) => String(value).includes(searchQuery.value)
        )
      );
    });
    const statusClass = (status) => ({
      "text-green-600 font-bold": status === "\u5DF2\u5B8C\u6210",
      "text-red-600 font-bold": status === "\u672A\u51FA\u884C",
      "text-yellow-600 font-bold": status === "\u5904\u7406\u4E2D"
    });
    const selectedoption = ref("viewOrder");
    const options = [
      { name: "viewOrder", icon: "material-symbols-grid-view-outline-rounded" },
      { name: "printOrder", icon: "material-symbols-print-outline" },
      { name: "addOrder", icon: "material-symbols-add-diamond-outline" },
      { name: "deleteOrder", icon: "material-symbols-delete-outline" },
      { name: "editOrder", icon: "material-symbols-edit-square-outline" }
    ];
    const titles = {
      viewOrder: "Management.viewOrder",
      printOrder: "Management.printOrder",
      addOrder: "Management.addOrder",
      deleteOrder: "Management.deleteOrder",
      editOrder: "Management.editOrder"
    };
    const buttons = {
      printOrder: { text: "Management.print", class: "bg-blue-400" },
      addOrder: { text: "Management.add", class: "bg-green-500" },
      deleteOrder: { text: "Management.delete", class: "bg-red-500" },
      editOrder: { text: "Management.modify", class: "bg-yellow-400" }
    };
    const titleKey = computed(() => titles[selectedoption.value]);
    const buttonText = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = buttons[selectedoption.value]) == null ? undefined : _a.text) != null ? _a2 : "";
    });
    const buttonClass = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = buttons[selectedoption.value]) == null ? undefined : _a.class) != null ? _a2 : "";
    });
    const orders = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ManagementHeader = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_ManagementBottom = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ManagementHeader, null, null, _parent));
      _push(`<div class=""><div class="flex w-full max-w-full overflow-hidden"><div class="shadow-md flex"><div class="bg-stone-50 flex flex-col"><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<div class="${ssrRenderClass([selectedoption.value === option.name ? "text-lwm-500 font-bold bg-teal-50" : "text-gray-500 hover:text-green-400", "flex flex-col py-4 items-center text-sm shadow-sm px-4 cursor-pointer transition-all duration-200"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: option.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`<span class="ml-1">${ssrInterpolate(_ctx.$t(`Management.${option.name}`))}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col w-full max-w-full"><div class="flex flex-col"><div class="pt-2 pl-4 bg-sky-50 flex justify-evenly items-center"><h2 class="font-bold pb-2">${ssrInterpolate(_ctx.$t(titleKey.value))}</h2>`);
      if (buttonText.value) {
        _push(`<button class="${ssrRenderClass([buttonClass.value, "shadow-md rounded-xl px-2 mx-2 mb-2 text-white"])}">${ssrInterpolate(_ctx.$t(buttonText.value))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white px-4 py-2"><div class="flex items-center border rounded-md w-1/3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols-search-rounded",
        class: "h-5 w-5 text-gray-500 mx-2"
      }, null, _parent));
      _push(`<input type="text" class="py-1 w-full rounded-md focus:ring-0 focus:border-transparent border-none outline-none"${ssrRenderAttr("placeholder", _ctx.$t("Management.searchOrder"))}></div></div></div><div class="flex flex-col"><div class="overflow-x-auto w-full"><table class="table-auto min-w-full border-collapse border border-green-400 mr-12"><thead><tr class="bg-gray-100"><th class="border p-2 text-xs md:text-sm sticky left-0 bg-indigo-50 z-10">\u8A02\u55AEID</th><!--[-->`);
      ssrRenderList(tableHeaders.slice(1), (header, index) => {
        _push(`<th class="border p-2 text-xs md:text-sm bg-indigo-50">${ssrInterpolate(header)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(paginatedOrders.value, (order, index) => {
        _push(`<tr class="border-b"><td class="border p-2 text-xs md:text-sm sticky left-0 bg-white z-10">${ssrInterpolate(order.id)}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(order.contact)}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(order.phone)}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(unref(t)(`${order.departure_loc}`))}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(unref(t)(`${order.destination_loc}`))}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(formatDate(order.shuttle_date))}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(order.shuttle_time)}</td><td class="border p-2 text-xs md:text-sm"><span class="${ssrRenderClass(statusClass(order.status))}">${ssrInterpolate(order.status)}</span></td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(order.adult_num)}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(order.child_num)}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(order.totalTickets)}</td><td class="border p-2 text-xs md:text-sm">${ssrInterpolate(order.totalprice)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="flex justify-center items-center mt-4 space-x-4"><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"> \u4E0A\u4E00\u9801 </button><span>\u7B2C ${ssrInterpolate(currentPage.value)} \u9801 / \u5171 ${ssrInterpolate(totalPages.value)} \u9801</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"> \u4E0B\u4E00\u9801 </button></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ManagementBottom, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Management/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DgQSdaEO.mjs.map
