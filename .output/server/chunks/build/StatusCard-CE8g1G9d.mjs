import { _ as __nuxt_component_2$1 } from './server.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { f as formatDate } from './formatDate-sHBEhsiw.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusCard",
  __ssrInlineRender: true,
  props: {
    link: {},
    beforeBarClass: {},
    title: {},
    titleBorderClass: {},
    TextColor: {},
    from: {},
    to: {},
    icon: {},
    status: {},
    arrivalDate: {},
    arrivalTime: {},
    shuttleDate: {},
    shuttleTime: {},
    adult: {},
    child: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: _ctx.link }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pl-2 pt-4"${_scopeId}><div class="${ssrRenderClass([_ctx.beforeBarClass, "bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:rounded-l-lg"])}"${_scopeId}><div class="flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2"${_scopeId}><p class="${ssrRenderClass(["text-gray-700 border-l-4 pl-1 ml-2 font-semibold", _ctx.titleBorderClass])}"${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.title))}</p><div class="flex items-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.from))}</p>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: _ctx.icon,
              class: "mx-2 w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.to))}</p></div><p class="${ssrRenderClass([_ctx.TextColor, "font-semibold"])}"${_scopeId}>${ssrInterpolate(_ctx.$t(_ctx.status))}</p></div><div class="flex justify-between"${_scopeId}><div class="flex flex-col text-sm space-y-1 px-2 border-r border-gray-300 flex-1"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))} :</p><p${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(_ctx.arrivalDate))} ${ssrInterpolate(_ctx.arrivalTime)}</p></div></div><div class="flex items-center text-sm"${_scopeId}><div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} :</p><p${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(_ctx.shuttleDate))} ${ssrInterpolate(_ctx.shuttleTime)}</p></div></div><div class="flex text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>${ssrInterpolate(_ctx.adult)}</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>${ssrInterpolate(_ctx.child)}</p></div></div><div class="flex flex-col justify-end items-end pl-4 flex-1 text-sm"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pl-2 pt-4" }, [
                createVNode("div", {
                  class: ["bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:rounded-l-lg", _ctx.beforeBarClass]
                }, [
                  createVNode("div", { class: "flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2" }, [
                    createVNode("p", {
                      class: ["text-gray-700 border-l-4 pl-1 ml-2 font-semibold", _ctx.titleBorderClass]
                    }, toDisplayString(_ctx.$t(_ctx.title)), 3),
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("p", null, toDisplayString(_ctx.$t(_ctx.from)), 1),
                      createVNode(_component_Icon, {
                        name: _ctx.icon,
                        class: "mx-2 w-6 h-6"
                      }, null, 8, ["name"]),
                      createVNode("p", null, toDisplayString(_ctx.$t(_ctx.to)), 1)
                    ]),
                    createVNode("p", {
                      class: ["font-semibold", _ctx.TextColor]
                    }, toDisplayString(_ctx.$t(_ctx.status)), 3)
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("div", { class: "flex flex-col text-sm space-y-1 px-2 border-r border-gray-300 flex-1" }, [
                      createVNode("div", { class: "flex items-center text-sm" }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(_ctx.$t("Booking.arrivalPortTime")) + " :", 1),
                          createVNode("p", null, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(_ctx.arrivalDate)) + " " + toDisplayString(_ctx.arrivalTime), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center text-sm" }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(_ctx.$t("Booking.shuttleBusTime")) + " :", 1),
                          createVNode("p", null, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(_ctx.shuttleDate)) + " " + toDisplayString(_ctx.shuttleTime), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex text-sm" }, [
                        createVNode("p", null, toDisplayString(_ctx.$t("Booking.adultTicket")), 1),
                        createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, toDisplayString(_ctx.adult), 1),
                        createVNode("p", null, toDisplayString(_ctx.$t("Booking.childTicket1")), 1),
                        createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, toDisplayString(_ctx.child), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col justify-end items-end pl-4 flex-1 text-sm" }, [
                      renderSlot(_ctx.$slots, "footer")
                    ])
                  ])
                ], 2)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatusCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=StatusCard-CE8g1G9d.mjs.map
