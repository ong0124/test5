import { _ as _sfc_main$1 } from './BackBtn-Bx8YpbED.mjs';
import { _ as _sfc_main$2 } from './StatusCard-CE8g1G9d.mjs';
import { u as useRoute, a as useRouter, _ as __nuxt_component_2$1 } from './server.mjs';
import __nuxt_component_0 from './index-B-saQaMP.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'vue-router';
import './formatDate-sHBEhsiw.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "allBookingStatus",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    route.params.id;
    const data = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_StatusCard = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest2.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">${ssrInterpolate(_ctx.$t("bookingStatus.all"))}</h1></header><div class="pb-16"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div>`);
        if (item.status === "notTraveled") {
          _push(ssrRenderComponent(_component_StatusCard, {
            link: { path: "myTrip/orderDetail", query: { bookingId: item.id } },
            beforeBarClass: "before:bg-lwm-400",
            title: item.trip_type === "oneWay" ? "HomePage.oneWay" : item.trip_type === "roundTrip" ? "HomePage.roundTrip" : "HomePage.unknownTrip",
            titleBorderClass: "border-l-lwm-400",
            TextColor: "text-red-500",
            from: item.departure_loc,
            to: item.destination_loc,
            icon: item.trip_type === "oneWay" ? "material-symbols-arrow-right-alt" : "pepicons-pop:repeat",
            status: "bookingStatus.toPay",
            arrivalDate: item.arrivalpoint_date,
            arrivalTime: item.arrivalpoint_time,
            shuttleDate: item.shuttle_date,
            shuttleTime: item.shuttle_time,
            adult: item.adult_num,
            child: item.child_num
          }, {
            footer: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button>`);
              } else {
                return [
                  createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.status === "complete") {
          _push(ssrRenderComponent(_component_StatusCard, {
            link: { path: "myTrip/orderDetail", query: { bookingId: item.id } },
            beforeBarClass: "before:bg-gray-300",
            title: item.trip_type === "oneWay" ? "HomePage.oneWay" : item.trip_type === "roundTrip" ? "HomePage.roundTrip" : "HomePage.unknownTrip",
            titleBorderClass: "border-l-gray-300",
            TextColor: "text-gray-300",
            from: item.departure_loc,
            to: item.destination_loc,
            icon: item.trip_type === "oneWay" ? "material-symbols-arrow-right-alt" : "pepicons-pop:repeat",
            status: "bookingStatus.complete",
            arrivalDate: item.arrivalpoint_date,
            arrivalTime: item.arrivalpoint_time,
            shuttleDate: item.shuttle_date,
            shuttleTime: item.shuttle_time,
            adult: item.adult_num,
            child: item.child_num
          }, {
            footer: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button>`);
              } else {
                return [
                  createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.refund_status === "approved") {
          _push(ssrRenderComponent(_component_StatusCard, {
            link: { path: "myTrip/orderDetail", query: { bookingId: item.id } },
            beforeBarClass: "before:bg-gray-500",
            title: item.trip_type === "oneWay" ? "HomePage.oneWay" : item.trip_type === "roundTrip" ? "HomePage.roundTrip" : "HomePage.unknownTrip",
            titleBorderClass: "border-l-gray-500",
            TextColor: "text-lwm-400",
            from: item.departure_loc,
            to: item.destination_loc,
            icon: item.trip_type === "oneWay" ? "material-symbols-arrow-right-alt" : "pepicons-pop:repeat",
            status: "bookingStatus.refundedtoUser",
            arrivalDate: item.arrivalpoint_date,
            arrivalTime: item.arrivalpoint_time,
            shuttleDate: item.shuttle_date,
            shuttleTime: item.shuttle_time,
            adult: item.adult_num,
            child: item.child_num
          }, {
            footer: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><p${_scopeId}>\u9000\u6B3E\uFF1ANT$ <span class="text-xl text-red-500"${_scopeId}>${ssrInterpolate(item.refund_amount)}</span></p></div><button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button>`);
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("p", null, [
                      createTextVNode("\u9000\u6B3E\uFF1ANT$ "),
                      createVNode("span", { class: "text-xl text-red-500" }, toDisplayString(item.refund_amount), 1)
                    ])
                  ]),
                  createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.refund_status === "pending") {
          _push(ssrRenderComponent(_component_StatusCard, {
            link: { path: "myTrip/orderDetail", query: { bookingId: item.id } },
            beforeBarClass: "before:bg-gray-500",
            title: item.trip_type === "oneWay" ? "HomePage.oneWay" : item.trip_type === "roundTrip" ? "HomePage.roundTrip" : "HomePage.unknownTrip",
            titleBorderClass: "border-l-gray-500",
            TextColor: "text-lwm-400",
            from: item.departure_loc,
            to: item.destination_loc,
            icon: item.trip_type === "oneWay" ? "material-symbols-arrow-right-alt" : "pepicons-pop:repeat",
            status: "bookingStatus.refundedApproving",
            arrivalDate: item.arrivalpoint_date,
            arrivalTime: item.arrivalpoint_time,
            shuttleDate: item.shuttle_date,
            shuttleTime: item.shuttle_time,
            adult: item.adult_num,
            child: item.child_num
          }, {
            footer: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><p${_scopeId}>\u9000\u6B3E\uFF1ANT$ <span class="text-xl text-red-500"${_scopeId}>${ssrInterpolate(item.refund_amount)}</span></p></div><button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button>`);
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("p", null, [
                      createTextVNode("\u9000\u6B3E\uFF1ANT$ "),
                      createVNode("span", { class: "text-xl text-red-500" }, toDisplayString(item.refund_amount), 1)
                    ])
                  ]),
                  createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/toPay" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pl-2 pt-4"${_scopeId}><!--[-->`);
            ssrRenderList(1, (index) => {
              _push2(`<div class="bg-white p-3 rounded-lg flex flex-col mb-4 h-full relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-yellow-400 before:rounded-l-lg"${_scopeId}><div class="flex justify-between items-center pb-1 border-b-2 border-gray-300"${_scopeId}><p class="text-gray-700 border-l-4 border-l-yellow-400 pl-1 ml-2 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("HomePage.oneWay"))}</p><div class="flex items-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "material-symbols-arrow-right-alt",
                class: "mx-2 w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-red-500 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.toPay"))}</p></div><div class="flex flex-1 justify-between mt-3"${_scopeId}><div class="flex flex-col text-gray-700 space-y-1 px-2 border-r border-gray-300 flex-1"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>1</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>0</p></div></div><div class="flex flex-col justify-end items-end pl-4 flex-1"${_scopeId}><div class=""${_scopeId}><p${_scopeId}>\u5408\u8BA1\uFF1ANT$ <span class="text-xl text-red-500"${_scopeId}>150.00</span></p></div><button class="border border-blue-300 text-blue-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u7ACB\u5373\u652F\u4ED8 </button></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "pl-2 pt-4" }, [
                (openBlock(), createBlock(Fragment, null, renderList(1, (index) => {
                  return createVNode("div", {
                    key: index,
                    class: "bg-white p-3 rounded-lg flex flex-col mb-4 h-full relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-yellow-400 before:rounded-l-lg"
                  }, [
                    createVNode("div", { class: "flex justify-between items-center pb-1 border-b-2 border-gray-300" }, [
                      createVNode("p", { class: "text-gray-700 border-l-4 border-l-yellow-400 pl-1 ml-2 font-semibold" }, toDisplayString(_ctx.$t("HomePage.oneWay")), 1),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                        createVNode(_component_Icon, {
                          name: "material-symbols-arrow-right-alt",
                          class: "mx-2 w-6 h-6"
                        }),
                        createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                      ]),
                      createVNode("p", { class: "text-red-500 font-semibold" }, toDisplayString(_ctx.$t("bookingStatus.toPay")), 1)
                    ]),
                    createVNode("div", { class: "flex flex-1 justify-between mt-3" }, [
                      createVNode("div", { class: "flex flex-col text-gray-700 space-y-1 px-2 border-r border-gray-300 flex-1" }, [
                        createVNode("div", { class: "flex items-center text-sm" }, [
                          createVNode("div", { class: "" }, [
                            createVNode("p", { class: "w-18" }, toDisplayString(_ctx.$t("Booking.arrivalPortTime")) + " : ", 1),
                            createVNode("p", { class: "" }, "2025-01-01 15:30")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center text-sm" }, [
                          createVNode("div", { class: "" }, [
                            createVNode("p", { class: "w-18" }, toDisplayString(_ctx.$t("Booking.shuttleBusTime")) + " : ", 1),
                            createVNode("p", { class: "" }, "2025-01-01 15:30")
                          ])
                        ]),
                        createVNode("div", { class: "flex text-sm" }, [
                          createVNode("p", null, toDisplayString(_ctx.$t("Booking.adultTicket")), 1),
                          createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "1"),
                          createVNode("p", null, toDisplayString(_ctx.$t("Booking.childTicket1")), 1),
                          createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "0")
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col justify-end items-end pl-4 flex-1" }, [
                        createVNode("div", { class: "" }, [
                          createVNode("p", null, [
                            createTextVNode("\u5408\u8BA1\uFF1ANT$ "),
                            createVNode("span", { class: "text-xl text-red-500" }, "150.00")
                          ])
                        ]),
                        createVNode("button", { class: "border border-blue-300 text-blue-500 rounded-full px-4 mt-1 text-sm" }, " \u7ACB\u5373\u652F\u4ED8 ")
                      ])
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/allBookingStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=allBookingStatus-DPTK05XI.mjs.map
