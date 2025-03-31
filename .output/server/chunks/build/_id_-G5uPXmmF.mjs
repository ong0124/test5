import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { defineComponent, ref, computed, reactive, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { d as dayjs } from '../_/index.mjs';
import { l as localeValues, a as localeValues$1, C as ConfigProvider, T as TimePicker$1 } from './zh_TW-DuN3haL_.mjs';
import { l as localeValues$2 } from './colors-BBQNRnnY.mjs';
import { c as useRoute, d as useRouter, b as useI18n } from './server.mjs';
import { S as Space, D as DatePicker$1 } from './index-D44xJIkB.mjs';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ctrl/tinycolor';
import '@ant-design/colors';
import 'stylis';
import 'vue-types';
import 'dom-align';
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
import 'lodash-es';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const { t } = useI18n();
    route.params.id;
    const phone = ref("");
    const contact = ref("");
    const shuttle_date = ref();
    const shuttle_time = ref("");
    const Return_shuttle_date = ref();
    const Return_shuttle_time = ref("");
    ref("");
    ref("");
    const totalPriceNow = computed(() => {
      const adultCount = counts.value.adult;
      return Math.min(adultCount, 2) * 150 + Math.max(adultCount - 2, 0) * 100;
    });
    computed(() => {
      return totalPriceNow.value - Number(form.totalprice);
    });
    const { locale } = useI18n();
    const isSwapped = ref(false);
    const swapText = () => {
      isSwapped.value = !isSwapped.value;
    };
    ref("");
    ref("");
    const antLocales = {
      "zh-CN": localeValues$1,
      "zh-TW": localeValues,
      "en-US": localeValues$2
    };
    const antLocale = computed(() => antLocales[locale.value] || localeValues);
    const disabledDate = (current) => {
      return current && current.isBefore(dayjs().add(1, "day").startOf("day"));
    };
    const disabledHours = () => {
      return Array.from({ length: 24 }, (_, i) => i).filter((hour) => hour < 8 || hour > 18);
    };
    const disabledMinutes = (selectedHour) => {
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute < 30);
      }
      if (selectedHour === 18) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute >= 1);
      }
      return [];
    };
    computed(
      () => isSwapped.value ? form.destination_loc : form.departure_loc
    );
    computed(
      () => isSwapped.value ? form.departure_loc : form.destination_loc
    );
    computed(
      () => isSwapped.value ? form.return_destination : form.return_departure
    );
    computed(
      () => isSwapped.value ? form.return_departure : form.return_destination
    );
    const form = reactive({
      trip_type: "",
      user_id: "",
      adult_num: "",
      child_num: "",
      contact_phone: "",
      totalprice: "",
      contact_name: "",
      departure_loc: "",
      destination_loc: "",
      return_departure: "",
      return_destination: "",
      arrivalpoint_date: "",
      arrivalpoint_time: "",
      flight_num: "",
      ferry_time: "",
      flight_time: "",
      shuttle_date: dayjs(),
      shuttle_time: "",
      return_shuttle_date: dayjs(),
      return_shuttle_time: ""
    });
    const departure_loc = computed(() => t(form.departure_loc || "defaultKey"));
    const destination_loc = computed(() => t(form.destination_loc || "defaultKey"));
    const return_departure = computed(() => t(form.return_departure || "defaultKey"));
    const return_destination = computed(() => t(form.return_destination || "defaultKey"));
    const counts = ref({
      adult: 0,
      child: 0
    });
    const formatDate = (date) => {
      return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    const showFlightOrFerry = computed(
      () => form.departure_loc === "Booking.pier" ? form.flight_time : form.ferry_time
    );
    const showFlightOrFerryTitle = computed(
      () => form.departure_loc === "Booking.pier" ? t("Booking.flightTime") : t("Booking.ferryTime")
    );
    const ReturnshowFlightOrFerry = computed(
      () => form.return_departure === "Booking.pier" ? form.flight_time : form.ferry_time
    );
    const ReturnshowFlightOrFerryTitle = computed(
      () => form.return_departure === "Booking.pier" ? t("Booking.flightTime") : t("Booking.ferryTime")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_a_config_provider = ConfigProvider;
      const _component_a_time_picker = TimePicker$1;
      const _component_a_space = Space;
      const _component_a_date_picker = DatePicker$1;
      _push(`<!--[--><header class="py-4 border-b bg-[url(&#39;/assets/images/headerTest3.png&#39;)] bg-cover bg-center flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">${ssrInterpolate(_ctx.$t("ReschedulePage.title"))}</h1></header><div class="flex bg-orange-100 pl-4 items-center h-8 overflow-hidden relative text-red-500">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "gg:danger",
        class: "bg-red-500 w-8 h-5 flex-shrink-0"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("announcementMessage"))}\xA0${ssrInterpolate(":")}\xA0 <div class="marquee-container flex-1 overflow-hidden"><div class="whitespace-nowrap animate-marquee"><span class="px-4">${ssrInterpolate(_ctx.$t("ReschedulePage.message"))}</span></div></div></div><div class="px-6 pt-4"><div class="bg-amber-50 p-4 rounded-lg flex flex-col border-b-2 border-dashed"><div class="border-l-4 border-orange-300 text-gray-500"><p class="mx-2 text-lg font-bold">${ssrInterpolate(_ctx.$t("ReschedulePage.originalSchedule"))}</p></div><div class="text-gray-500"><div class="flex"><div class="flex-1 self-center"><p class="text-end">${ssrInterpolate(departure_loc.value)}</p></div><div class="flex-1 flex-col text-center"><div class="border-b-2 border-dashed mx-4 border-lwm-400 text-sm"><p>${ssrInterpolate(formatDate(unref(form).shuttle_date))}</p></div><div class="text-sm"><p>${ssrInterpolate(unref(form).shuttle_time)}</p></div></div><div class="flex-1 self-center"><p>${ssrInterpolate(destination_loc.value)}</p></div></div><div class="grid grid-cols-2 pt-4"><div class="flex-col text-start ml-14"><p>${ssrInterpolate(showFlightOrFerryTitle.value)}</p><p>${ssrInterpolate(_ctx.$t("Booking.contact"))}</p><p>${ssrInterpolate(_ctx.$t("Booking.phone"))}</p><p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p></div><div class="flex-col text-start ml-5"><p>${ssrInterpolate(showFlightOrFerry.value)}</p><p>${ssrInterpolate(unref(form).contact_name)}</p><p>${ssrInterpolate(unref(form).contact_phone)}</p><p>${ssrInterpolate(unref(form).adult_num)}</p><p>${ssrInterpolate(unref(form).child_num)}</p></div></div></div></div>`);
      if (unref(form).trip_type === "roundTrip") {
        _push(`<div><div class="bg-amber-50 p-4 rounded-lg flex flex-col border-b-2"><div class="border-l-4 border-orange-300 text-gray-500"><p class="mx-2 text-lg font-bold">${ssrInterpolate(_ctx.$t("Booking.return"))}</p></div><div class="text-gray-500"><div class="flex"><div class="flex-1 self-center"><p class="text-end">${ssrInterpolate(return_departure.value)}</p></div><div class="flex-1 flex-col text-center"><div class="border-b-2 border-dashed mx-4 border-lwm-400 text-sm"><p>${ssrInterpolate(formatDate(unref(form).return_shuttle_date))}</p></div><div class="text-sm"><p>${ssrInterpolate(unref(form).return_shuttle_time)}</p></div></div><div class="flex-1 self-center"><p>${ssrInterpolate(return_destination.value)}</p></div></div><div class="grid grid-cols-2 pt-4"><div class="flex-col text-start ml-14"><p>${ssrInterpolate(ReturnshowFlightOrFerryTitle.value)}</p><p>${ssrInterpolate(_ctx.$t("Booking.contact"))}</p><p>${ssrInterpolate(_ctx.$t("Booking.phone"))}</p><p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><p>${ssrInterpolate(_ctx.$t("Booking.childTicket1"))}</p></div><div class="flex-col text-start ml-5"><p>${ssrInterpolate(ReturnshowFlightOrFerry.value)}</p><p>${ssrInterpolate(unref(form).contact_name)}</p><p>${ssrInterpolate(unref(form).contact_phone)}</p><p>${ssrInterpolate(unref(form).adult_num)}</p><p>${ssrInterpolate(unref(form).child_num)}</p></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="px-6 pb-24"><div class="bg-white shadow-md rounded-b-xl overflow-hidden pt-5 pb-2 px-6 space-y-3"><h2 class="text-xl font-semibold text-gray-800">${ssrInterpolate(_ctx.$t("ReschedulePage.newSchedule"))}</h2><div class="flex items-center justify-between bg-gray-100 p-3 rounded-lg px-8"><p class="font-medium text-gray-700">`);
      if (isSwapped.value) {
        _push(`<span class="text-blue-500">${ssrInterpolate(destination_loc.value)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(departure_loc.value)}</span>`);
      }
      _push(`</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:rotate",
        class: ["mx-4 bg-lwm-400 text-white p-2 rounded-full w-6 h-6 cursor-pointer transition-transform duration-500", { "rotate-180": isSwapped.value }],
        onClick: swapText
      }, null, _parent));
      _push(`<p class="font-medium text-gray-700">`);
      if (isSwapped.value) {
        _push(`<span class="text-blue-500">${ssrInterpolate(departure_loc.value)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(destination_loc.value)}</span>`);
      }
      _push(`</p></div>`);
      if (unref(form).trip_type === "roundTrip") {
        _push(`<!--[--><div class="border-l-4 border-lwm-300 items-center"><span class="text-gray-500 font-semibold ml-1">${ssrInterpolate(_ctx.$t("Booking.return"))} : </span></div><div class="flex items-center justify-between bg-gray-100 p-3 rounded-lg px-8"><p class="font-medium text-gray-700">`);
        if (isSwapped.value) {
          _push(`<span class="text-blue-500">${ssrInterpolate(return_destination.value)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(return_departure.value)}</span>`);
        }
        _push(`</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:rotate",
          class: ["mx-4 bg-lwm-400 text-white p-2 rounded-full w-6 h-6 cursor-pointer transition-transform duration-500", { "rotate-180": isSwapped.value }],
          onClick: swapText
        }, null, _parent));
        _push(`<p class="font-medium text-gray-700">`);
        if (isSwapped.value) {
          _push(`<span class="text-blue-500">${ssrInterpolate(return_departure.value)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(return_destination.value)}</span>`);
        }
        _push(`</p></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:tickets",
        class: "w-5 h-5 text-lwm-400 mr-1"
      }, null, _parent));
      _push(`<p class="text-gray-600 font-semibold mr-3">${ssrInterpolate(_ctx.$t("Booking.flightTime"))}</p>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: antLocale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_time_picker, {
              class: "border-gray-300 rounded-lg",
              "minute-step": isSwapped.value ? 5 : 30,
              "value-format": "HH:mm",
              format: "HH:mm",
              "disabled-hours": disabledHours,
              "disabled-minutes": disabledMinutes,
              "hide-disabled-options": true,
              "show-now": false,
              value: shuttle_time.value,
              "onUpdate:value": ($event) => shuttle_time.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex space-x-4" }, [
                createVNode(_component_a_time_picker, {
                  class: "border-gray-300 rounded-lg",
                  "minute-step": isSwapped.value ? 5 : 30,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHours,
                  "disabled-minutes": disabledMinutes,
                  "hide-disabled-options": true,
                  "show-now": false,
                  value: shuttle_time.value,
                  "onUpdate:value": ($event) => shuttle_time.value = $event
                }, null, 8, ["minute-step", "value", "onUpdate:value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:bus-clock",
        class: "w-5 h-5 text-lwm-400 mr-1"
      }, null, _parent));
      _push(`<p class="text-gray-600 font-semibold">${ssrInterpolate(_ctx.$t("ReschedulePage.departureTime"))}</p></div>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: antLocale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, {
              direction: "vertical",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    class: "border-gray-300 rounded-lg",
                    "show-today": false,
                    "disabled-date": disabledDate,
                    value: shuttle_date.value,
                    "onUpdate:value": ($event) => shuttle_date.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      class: "border-gray-300 rounded-lg",
                      "show-today": false,
                      "disabled-date": disabledDate,
                      value: shuttle_date.value,
                      "onUpdate:value": ($event) => shuttle_date.value = $event
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_time_picker, {
              class: "border-gray-300 rounded-lg",
              "minute-step": isSwapped.value ? 5 : 30,
              "value-format": "HH:mm",
              format: "HH:mm",
              "disabled-hours": disabledHours,
              "disabled-minutes": disabledMinutes,
              "hide-disabled-options": true,
              "show-now": false,
              value: shuttle_time.value,
              "onUpdate:value": ($event) => shuttle_time.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex space-x-4" }, [
                createVNode(_component_a_space, {
                  direction: "vertical",
                  size: 12
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_date_picker, {
                      class: "border-gray-300 rounded-lg",
                      "show-today": false,
                      "disabled-date": disabledDate,
                      value: shuttle_date.value,
                      "onUpdate:value": ($event) => shuttle_date.value = $event
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_time_picker, {
                  class: "border-gray-300 rounded-lg",
                  "minute-step": isSwapped.value ? 5 : 30,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHours,
                  "disabled-minutes": disabledMinutes,
                  "hide-disabled-options": true,
                  "show-now": false,
                  value: shuttle_time.value,
                  "onUpdate:value": ($event) => shuttle_time.value = $event
                }, null, 8, ["minute-step", "value", "onUpdate:value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(form).trip_type === "roundTrip") {
        _push(`<div class="space-y-2"><div class="flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:bus-clock",
          class: "w-5 h-5 text-lwm-50 mr-1"
        }, null, _parent));
        _push(`<p class="text-gray-600 font-semibold">${ssrInterpolate(_ctx.$t("ReschedulePage.returnDepartureTime"))}</p></div>`);
        _push(ssrRenderComponent(_component_a_config_provider, { locale: antLocale.value }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex space-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_a_space, {
                direction: "vertical",
                size: 12
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_date_picker, {
                      class: "border-gray-300 rounded-lg",
                      "show-today": false,
                      "disabled-date": disabledDate,
                      value: Return_shuttle_date.value,
                      "onUpdate:value": ($event) => Return_shuttle_date.value = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_date_picker, {
                        class: "border-gray-300 rounded-lg",
                        "show-today": false,
                        "disabled-date": disabledDate,
                        value: Return_shuttle_date.value,
                        "onUpdate:value": ($event) => Return_shuttle_date.value = $event
                      }, null, 8, ["value", "onUpdate:value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_time_picker, {
                class: "border-gray-300 rounded-lg",
                "minute-step": isSwapped.value ? 5 : 30,
                "value-format": "HH:mm",
                format: "HH:mm",
                "disabled-hours": disabledHours,
                "disabled-minutes": disabledMinutes,
                "hide-disabled-options": true,
                "show-now": false,
                value: Return_shuttle_time.value,
                "onUpdate:value": ($event) => Return_shuttle_time.value = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex space-x-4" }, [
                  createVNode(_component_a_space, {
                    direction: "vertical",
                    size: 12
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_date_picker, {
                        class: "border-gray-300 rounded-lg",
                        "show-today": false,
                        "disabled-date": disabledDate,
                        value: Return_shuttle_date.value,
                        "onUpdate:value": ($event) => Return_shuttle_date.value = $event
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_time_picker, {
                    class: "border-gray-300 rounded-lg",
                    "minute-step": isSwapped.value ? 5 : 30,
                    "value-format": "HH:mm",
                    format: "HH:mm",
                    "disabled-hours": disabledHours,
                    "disabled-minutes": disabledMinutes,
                    "hide-disabled-options": true,
                    "show-now": false,
                    value: Return_shuttle_time.value,
                    "onUpdate:value": ($event) => Return_shuttle_time.value = $event
                  }, null, 8, ["minute-step", "value", "onUpdate:value"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-4"><div class="flex items-center space-x-4 ml-4"><p class="text-gray-600 font-medium"><span class="text-2xl text-red-500">*</span>${ssrInterpolate(_ctx.$t("Booking.contact"))}</p><input type="text"${ssrRenderAttr("placeholder", unref(form).contact_name)}${ssrRenderAttr("value", contact.value)} class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm"></div><div class="flex items-center space-x-4"><p class="text-gray-600 font-medium"><span class="text-2xl text-red-500">*</span>${ssrInterpolate(_ctx.$t("Booking.phone"))}</p><input type="text"${ssrRenderAttr("placeholder", unref(form).contact_phone)}${ssrRenderAttr("value", phone.value)} class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm"></div></div><div class="flex bg-white pt-1 rounded-b-lg mb-2"><div class="flex-1 border-r-2 border-t-2 rounded flex justify-center"><button class="text-blue-400 py-2 rounded hover:text-blue-500 transition">${ssrInterpolate(_ctx.$t("ReschedulePage.confirmReschedule"))}</button></div><div class="flex-1 border-t-2 rounded flex justify-center"><button class="text-red-500 py-2 rounded hover:text-red-600 transition">${ssrInterpolate(_ctx.$t("cancelOrder"))}</button></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reschedulePage/details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-G5uPXmmF.mjs.map
