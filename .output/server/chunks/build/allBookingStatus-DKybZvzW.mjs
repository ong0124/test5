import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import { _ as _export_sfc, a as __nuxt_component_2$1 } from './server.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'vue-router';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackBtn = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_2$1;
  const _component_Icon = __nuxt_component_0;
  _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest2.png&#39;)] bg-cover bg-center flex items-center"><div>`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">${ssrInterpolate(_ctx.$t("bookingStatus.all"))}</h1></header><div>`);
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/notTraveled" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pl-2"${_scopeId}><!--[-->`);
        ssrRenderList(1, (index) => {
          _push2(`<div class="bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-lwm-400 before:rounded-l-lg"${_scopeId}><div class="flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2"${_scopeId}><p class="text-gray-700 border-l-4 border-l-lwm-400 pl-1 ml-2 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("HomePage.roundTrip"))}</p><div class="flex items-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "pepicons-pop:repeat",
            class: "mx-2 w-5 h-5"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p></div><p class="text-red-500 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.notTraveled"))}</p></div><div class="flex justify-between"${_scopeId}><div class="flex flex-col text-sm space-y-1 px-2 border-r border-gray-300 flex-1"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>2</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>1</p></div></div><div class="flex flex-col justify-end items-end pl-4 flex-1 text-sm"${_scopeId}><button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button></div></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "pl-2" }, [
            (openBlock(), createBlock(Fragment, null, renderList(1, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-lwm-400 before:rounded-l-lg"
              }, [
                createVNode("div", { class: "flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2" }, [
                  createVNode("p", { class: "text-gray-700 border-l-4 border-l-lwm-400 pl-1 ml-2 font-semibold" }, toDisplayString(_ctx.$t("HomePage.roundTrip")), 1),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1),
                    createVNode(_component_Icon, {
                      name: "pepicons-pop:repeat",
                      class: "mx-2 w-5 h-5"
                    }),
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1)
                  ]),
                  createVNode("p", { class: "text-red-500 font-semibold" }, toDisplayString(_ctx.$t("bookingStatus.notTraveled")), 1)
                ]),
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "flex flex-col text-sm space-y-1 px-2 border-r border-gray-300 flex-1" }, [
                    createVNode("div", { class: "flex items-center text-sm" }, [
                      createVNode("div", { class: "" }, [
                        createVNode("p", { class: "w-18" }, toDisplayString(_ctx.$t("Booking.arrivalAtAirportTime")) + " : ", 1),
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
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "2"),
                      createVNode("p", null, toDisplayString(_ctx.$t("Booking.childTicket1")), 1),
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "1")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col justify-end items-end pl-4 flex-1 text-sm" }, [
                    createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1" }, " \u67E5\u770B\u8BE6\u60C5 ")
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/refundApply" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pl-2"${_scopeId}><!--[-->`);
        ssrRenderList(1, (index) => {
          _push2(`<div class="bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gray-500 before:rounded-l-lg"${_scopeId}><div class="flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2"${_scopeId}><p class="text-gray-700 border-l-4 border-l-gray-500 pl-1 ml-2 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("HomePage.oneWay"))}</p><div class="flex items-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "material-symbols-arrow-right-alt",
            class: "mx-2 w-5 h-5"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-orange-400 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.refundedApproving"))}</p></div><div class="flex justify-between"${_scopeId}><div class="flex flex-col text-sm space-y-1 text-gray-400 px-2 border-r border-gray-300 flex-1"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>2</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>1</p></div></div><div class="flex flex-col justify-end items-end pl-4 flex-1 text-md"${_scopeId}><div class="flex items-center"${_scopeId}><p class="mr-1"${_scopeId}>\u9000\u6B3E\uFF1ANT$</p><p class="text-lwm-50 text-xl"${_scopeId}>300.00</p></div><button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button></div></div></div>`);
        });
        _push2(`<!--]--><!--[-->`);
        ssrRenderList(1, (index) => {
          _push2(`<div class="bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gray-500 before:rounded-l-lg"${_scopeId}><div class="flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2"${_scopeId}><p class="text-gray-700 border-l-4 border-l-gray-500 pl-1 ml-2 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("HomePage.roundTrip"))}</p><div class="flex items-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "pepicons-pop:repeat",
            class: "mx-2 w-5 h-5"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-lwm-400 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.refundedtoUser"))}</p></div><div class="flex justify-between"${_scopeId}><div class="flex flex-col text-sm space-y-1 text-gray-400 px-2 border-r border-gray-300 flex-1"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>2</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>1</p></div></div><div class="flex flex-col justify-end items-end pl-4 flex-1 text-md"${_scopeId}><div class="flex items-center"${_scopeId}><p class="mr-1"${_scopeId}>\u9000\u6B3E\uFF1ANT$</p><p class="text-lwm-400 text-xl"${_scopeId}>300.00</p></div><button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button></div></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "pl-2" }, [
            (openBlock(), createBlock(Fragment, null, renderList(1, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gray-500 before:rounded-l-lg"
              }, [
                createVNode("div", { class: "flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2" }, [
                  createVNode("p", { class: "text-gray-700 border-l-4 border-l-gray-500 pl-1 ml-2 font-semibold" }, toDisplayString(_ctx.$t("HomePage.oneWay")), 1),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                    createVNode(_component_Icon, {
                      name: "material-symbols-arrow-right-alt",
                      class: "mx-2 w-5 h-5"
                    }),
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                  ]),
                  createVNode("p", { class: "text-orange-400 font-semibold" }, toDisplayString(_ctx.$t("bookingStatus.refundedApproving")), 1)
                ]),
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "flex flex-col text-sm space-y-1 text-gray-400 px-2 border-r border-gray-300 flex-1" }, [
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
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "2"),
                      createVNode("p", null, toDisplayString(_ctx.$t("Booking.childTicket1")), 1),
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "1")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col justify-end items-end pl-4 flex-1 text-md" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("p", { class: "mr-1" }, "\u9000\u6B3E\uFF1ANT$"),
                      createVNode("p", { class: "text-lwm-50 text-xl" }, "300.00")
                    ]),
                    createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
                  ])
                ])
              ]);
            }), 64)),
            (openBlock(), createBlock(Fragment, null, renderList(1, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gray-500 before:rounded-l-lg"
              }, [
                createVNode("div", { class: "flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2" }, [
                  createVNode("p", { class: "text-gray-700 border-l-4 border-l-gray-500 pl-1 ml-2 font-semibold" }, toDisplayString(_ctx.$t("HomePage.roundTrip")), 1),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                    createVNode(_component_Icon, {
                      name: "pepicons-pop:repeat",
                      class: "mx-2 w-5 h-5"
                    }),
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                  ]),
                  createVNode("p", { class: "text-lwm-400 font-semibold" }, toDisplayString(_ctx.$t("bookingStatus.refundedtoUser")), 1)
                ]),
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "flex flex-col text-sm space-y-1 text-gray-400 px-2 border-r border-gray-300 flex-1" }, [
                    createVNode("div", { class: "flex items-center text-sm" }, [
                      createVNode("div", { class: "" }, [
                        createVNode("p", { class: "w-18" }, toDisplayString(_ctx.$t("Booking.arrivalAtAirportTime")) + " : ", 1),
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
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "2"),
                      createVNode("p", null, toDisplayString(_ctx.$t("Booking.childTicket1")), 1),
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "1")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col justify-end items-end pl-4 flex-1 text-md" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("p", { class: "mr-1" }, "\u9000\u6B3E\uFF1ANT$"),
                      createVNode("p", { class: "text-lwm-400 text-xl" }, "300.00")
                    ]),
                    createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/orderDetail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pl-2"${_scopeId}><!--[-->`);
        ssrRenderList(1, (index) => {
          _push2(`<div class="bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gray-300 before:rounded-l-lg"${_scopeId}><div class="flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2 text-gray-400"${_scopeId}><p class="text-gray-300 border-l-4 border-l-gray-300 pl-1 ml-2 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("HomePage.roundTrip"))}</p><div class="flex items-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "pepicons-pop:repeat",
            class: "mx-2 w-5 h-5"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-gray-400 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.complete"))}</p></div><div class="flex justify-between"${_scopeId}><div class="flex flex-col text-sm space-y-1 text-gray-400 px-2 border-r border-gray-300 flex-1"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex items-center text-sm"${_scopeId}><div class=""${_scopeId}><p class="w-18"${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))} : </p><p class=""${_scopeId}>2025-01-01 15:30</p></div></div><div class="flex text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>2</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p><p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto"${_scopeId}>1</p></div></div><div class="flex flex-col justify-end items-end pl-4 flex-1 text-md"${_scopeId}><button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm"${_scopeId}> \u67E5\u770B\u8BE6\u60C5 </button></div></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "pl-2" }, [
            (openBlock(), createBlock(Fragment, null, renderList(1, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gray-300 before:rounded-l-lg"
              }, [
                createVNode("div", { class: "flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2 text-gray-400" }, [
                  createVNode("p", { class: "text-gray-300 border-l-4 border-l-gray-300 pl-1 ml-2 font-semibold" }, toDisplayString(_ctx.$t("HomePage.roundTrip")), 1),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                    createVNode(_component_Icon, {
                      name: "pepicons-pop:repeat",
                      class: "mx-2 w-5 h-5"
                    }),
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                  ]),
                  createVNode("p", { class: "text-gray-400 font-semibold" }, toDisplayString(_ctx.$t("bookingStatus.complete")), 1)
                ]),
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "flex flex-col text-sm space-y-1 text-gray-400 px-2 border-r border-gray-300 flex-1" }, [
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
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "2"),
                      createVNode("p", null, toDisplayString(_ctx.$t("Booking.childTicket1")), 1),
                      createVNode("p", { class: "border border-gray-500 bg-gray-200 px-4 mx-1 my-auto" }, "1")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col justify-end items-end pl-4 flex-1 text-md" }, [
                    createVNode("button", { class: "border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm" }, " \u67E5\u770B\u8BE6\u60C5 ")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/allBookingStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const allBookingStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { allBookingStatus as default };
//# sourceMappingURL=allBookingStatus-DKybZvzW.mjs.map
