import __nuxt_component_0$1 from './index-B-saQaMP.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, watch, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain } from 'vue/server-renderer';
import { c as useI18n, b as useLocalePath, e as dayjs, d as _export_sfc, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_2 } from './DashLine-B4S1ra3d.mjs';
import { l as localeValues, a as localeValues$1, b as api$1, C as ConfigProvider, T as TimePicker$1, c as api } from './zh_TW-DuN3haL_.mjs';
import { l as localeValues$2 } from './colors-BBQNRnnY.mjs';
import { S as Space, D as DatePicker$1, B as Button } from './index-D44xJIkB.mjs';
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
import 'vue-router';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ctrl/tinycolor';
import '@ant-design/colors';
import 'stylis';
import 'vue-types';
import 'dom-align';
import 'lodash-es';

async function loginWithLINE() {
  return null;
}
function loadUser() {
  return null;
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "LangSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locales, locale, setLocale } = useI18n();
    const language = computed({
      get: () => locale.value,
      set: (value) => {
        setLocale(value);
      }
    });
    const isDropdownVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><button class="flex items-center border-2 bg-lwm-100 border-white rounded-3xl text-white px-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "tabler-arrows-exchange",
        class: "mr-1"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(language))}</button>`);
      if (unref(isDropdownVisible)) {
        _push(`<ul class="absolute bg-white text-black rounded-md shadow-lg mt-2 z-10"><!--[-->`);
        ssrRenderList(unref(locales), (item) => {
          _push(`<li class="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"><input type="radio"${ssrRenderAttr("id", typeof item === "object" ? item.code : item)}${ssrRenderAttr("value", typeof item === "object" ? item.code : item)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(language), typeof item === "object" ? item.code : item)) ? " checked" : ""} class="mr-2"><label${ssrRenderAttr("for", typeof item === "object" ? item.code : item)} class="cursor-pointer">${ssrInterpolate(typeof item === "object" ? item.name : item)}</label></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LangSwitcher.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LangSwitcher = _sfc_main$5;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "py-4 border-b bg-[url('/assets/images/headerTest2.png')] bg-cover bg-center flex items-center" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_LangSwitcher, { class: "pl-4" }, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">${ssrInterpolate(_ctx.$t("title"))}</h1></header>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderNavigator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = defineComponent({
  name: "TermsPopup",
  setup() {
    const showPopup = ref(false);
    return {
      showPopup
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><a href="#" class="text-sm text-blue-700 ml-1">${ssrInterpolate(_ctx.$t("HomePage.terms"))}</a>`);
  if (_ctx.showPopup) {
    _push(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"><div class="bg-white p-6 rounded-lg shadow-lg max-w-sm"><h2 class="text-lg font-bold mb-4">${ssrInterpolate(_ctx.$t("HomePage.terms"))}</h2><div class="text-xs text-gray-700"><p class="text-base font-medium">${ssrInterpolate(_ctx.$t("PopUpRules.title1"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.general_ticket"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.infant_ticket"))}</p><p class="text-base font-medium">${ssrInterpolate(_ctx.$t("PopUpRules.title2"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.notice"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.real_info"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.online_deadline"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.refund_deadline"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.ticket_validity"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.contact"))}</p><p class="text-base font-medium">${ssrInterpolate(_ctx.$t("PopUpRules.title3"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.process"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.safety"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.valuables"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.insurance"))}</p><p>${ssrInterpolate(_ctx.$t("PopUpRules.invoice"))}</p></div><button class="mt-4 px-4 py-2 bg-lwm-400 text-white rounded hover:bg-green-700">${ssrInterpolate(_ctx.$t("okButton"))}</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopUpRules.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OneWayTicket",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const localPath = useLocalePath();
    const isChecked = ref(false);
    const DateArrivalShip = ref();
    const DateShuttle = ref();
    const TimeArrivalShip = ref("");
    const TimeShuttle = ref("");
    const phone = ref("");
    const flightNumber = ref("");
    const flightTime = ref("");
    const ferryTime = ref("");
    const contact = ref("");
    const counts = ref({ adult: 1, child: 1 });
    const tab = ref("oneWay");
    const totalPrice = computed(() => {
      const adultCount = counts.value.adult;
      return Math.min(adultCount, 2) * 150 + Math.max(adultCount - 2, 0) * 100;
    });
    const isSwapped = ref(false);
    const antLocales = {
      "zh-CN": localeValues$1,
      "zh-TW": localeValues,
      "en-US": localeValues$2
    };
    const antLocale = computed(() => antLocales[locale.value] || localeValues);
    const { t } = useI18n();
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
    const disabledHoursF = () => {
      const ferryTimeHour = dayjs(ferryTime.value, "HH:mm").hour();
      return Array.from({ length: 24 }, (_, i) => i).filter((hour) => hour < ferryTimeHour || hour > 18);
    };
    const disabledMinutesF = (selectedHour) => {
      const ferryTimeMinute = dayjs(ferryTime.value, "HH:mm").minute();
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute < 30);
      }
      if (selectedHour === 19) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute >= 1);
      }
      return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute < ferryTimeMinute);
    };
    watch(TimeArrivalShip, (newTimeShuttle) => {
      if (newTimeShuttle) {
        const newShuttleTime = dayjs(newTimeShuttle, "HH:mm").add(30, "minute");
        const newTime = dayjs(newTimeShuttle, "HH:mm").add(90, "minute");
        flightTime.value = newTime.format("HH:mm");
        ferryTime.value = newTime.format("HH:mm");
        TimeShuttle.value = newShuttleTime.format("HH:mm");
      } else {
        TimeShuttle.value = "";
        ferryTime.value = "";
        flightTime.value = "";
      }
    });
    const openNotification = (placement) => {
      api.open({
        message: t("HomePage.notification.title"),
        description: t("HomePage.notification.description"),
        placement
      });
    };
    const handleDatePickerOpen = (open) => {
      if (open) {
        api$1.info(t("alertMessage2"));
      }
    };
    const handleMessageOpen2 = (open) => {
      if (open) {
        api$1.info(t("alertMessage3"));
      }
    };
    const handleMessageOpen = (open) => {
      if (open) {
        api$1.info(t("alertMessage"));
      }
    };
    watch(DateArrivalShip, (newValue) => {
      if (newValue) {
        DateShuttle.value = newValue;
        TimeArrivalShip.value = "";
      } else {
        DateShuttle.value = undefined;
        TimeArrivalShip.value = "";
      }
    });
    const swapText = () => {
      isSwapped.value = !isSwapped.value;
    };
    const disabledDate = (current) => {
      if (!isDataLoaded.value) return true;
      const isBeforeToday = current && current.isBefore(dayjs().add(1, "day").startOf("day"));
      const isInOffDays = offDays.value.some((day) => {
        const start = dayjs(day.startOffDays);
        const end = day.endOffDays ? dayjs(day.endOffDays) : start;
        console.log("OffDay Range:", start.format("YYYY-MM-DD"), "to", end.format("YYYY-MM-DD"));
        return current.isSameOrAfter(start, "day") && current.isSameOrBefore(end, "day");
      });
      return isBeforeToday || isInOffDays;
    };
    const navigateToConfirmation = async () => {
      if (!isChecked.value) {
        openNotification("bottom");
      } else {
        let user = await loginWithLINE();
        if (!user || !user.user_id) {
          alert(t("alertMessage13"));
          user = await loginWithLINE();
          if (!user) {
            console.log("\u767B\u5165\u5931\u6557");
            return;
          }
        }
        const form = {
          trip_type: tab.value,
          LineID: user.user_id,
          adult_num: counts.value.adult,
          child_num: counts.value.child,
          contact_phone: phone.value,
          totalprice: totalPrice.value,
          contact_name: contact.value,
          departure_loc: isSwapped.value ? "Booking.airport" : "Booking.pier",
          destination_loc: isSwapped.value ? "Booking.pier" : "Booking.airport",
          return_departure: undefined,
          return_destination: undefined,
          arrivalpoint_date: DateArrivalShip.value ? DateArrivalShip.value.format("YYYY-MM-DD") : undefined,
          arrivalpoint_time: TimeArrivalShip.value,
          return_arrival_date: undefined,
          return_arrival_time: undefined,
          flight_num: flightNumber.value || undefined,
          ferry_time: ferryTime.value || undefined,
          flight_time: flightTime.value || undefined,
          shuttle_date: DateShuttle.value ? DateShuttle.value.format("YYYY-MM-DD") : undefined,
          shuttle_time: TimeShuttle.value,
          return_shuttle_date: undefined,
          return_shuttle_time: undefined
        };
        try {
          const response = await $fetch("/api/POSTbooking", {
            method: "POST",
            body: form
          });
          if (response == null ? void 0 : response.id) {
            const bookingId = response.id[0].id;
            const path = localPath("/confirmationPage/" + bookingId);
            navigateTo({
              path,
              query: {
                isSwapped: String(isSwapped.value)
              }
            });
          }
        } catch {
          alert(t("alertMessage4"));
        }
      }
    };
    const offDays = ref([]);
    ref([]);
    const isDataLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_a_config_provider = ConfigProvider;
      const _component_a_space = Space;
      const _component_a_date_picker = DatePicker$1;
      const _component_a_time_picker = TimePicker$1;
      const _component_DashLine = __nuxt_component_2;
      const _component_PopUpRules = __nuxt_component_6;
      const _component_a_button = Button;
      _push(`<!--[--><div class="flex-col p-4"><p class="border-l-4 my-3 border-lwm-400 text-justify pl-2">${ssrInterpolate(_ctx.$t("HomePage.oneWay"))}</p><div class="flex justify-around"><div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-material-symbols-directions-car",
        class: "bg-gray-500 w-6 h-6"
      }, null, _parent));
      _push(`<p class="flex-1 text-gray-500 ml-2">${ssrInterpolate(_ctx.$t("Booking.departure"))}</p></div><div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-mdi-map-marker-radius-outline",
        class: "bg-gray-500 w-6 h-6"
      }, null, _parent));
      _push(`<p class="flex-1 text-gray-500 ml-2">${ssrInterpolate(_ctx.$t("Booking.arrival"))}</p></div></div><div class="flex justify-evenly">`);
      if (isSwapped.value) {
        _push(`<p class="ml-auto text-2xl">${ssrInterpolate(_ctx.$t("Booking.airport"))}</p>`);
      } else {
        _push(`<p class="ml-auto text-2xl">${ssrInterpolate(_ctx.$t("Booking.pier"))}</p>`);
      }
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:rotate",
        class: ["mx-auto bg-lwm-400 w-7 h-7 cursor-pointer transition-transform duration-500", { "rotate-180": isSwapped.value }],
        onClick: swapText
      }, null, _parent));
      if (isSwapped.value) {
        _push(`<p class="mr-auto text-2xl">${ssrInterpolate(_ctx.$t("Booking.pier"))}</p>`);
      } else {
        _push(`<p class="mr-auto text-2xl">${ssrInterpolate(_ctx.$t("Booking.airport"))}</p>`);
      }
      _push(`</div><div class="border-b-2 py-3"></div><div class="flex flex-col pt-3 pl-4">`);
      if (isSwapped.value) {
        _push(`<div class="flex items-center pb-1"><div class="flex pr-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:tickets",
          class: "bg-lwm-50 w-6 h-6"
        }, null, _parent));
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))}</p></div><div class="border rounded-lg"><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("Booking.required"))}${ssrRenderAttr("value", flightNumber.value)} class="flex-1 px-2 py-1 w-full bg-white rounded-lg focus:outline-none text-sm"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isSwapped.value ? "i-material-symbols-flight-land" : "i-majesticons-ship-line",
        class: "bg-lwm-50 w-6 h-6"
      }, null, _parent));
      if (isSwapped.value) {
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p>`);
      } else {
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))}</p>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex pt-2 pl-4 space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, {
              direction: "vertical",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    value: DateArrivalShip.value,
                    "onUpdate:value": ($event) => DateArrivalShip.value = $event,
                    "disabled-date": disabledDate,
                    "show-today": false,
                    onOpenChange: handleDatePickerOpen,
                    inputReadOnly: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      value: DateArrivalShip.value,
                      "onUpdate:value": ($event) => DateArrivalShip.value = $event,
                      "disabled-date": disabledDate,
                      "show-today": false,
                      onOpenChange: handleDatePickerOpen,
                      inputReadOnly: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_time_picker, {
              value: TimeArrivalShip.value,
              "onUpdate:value": ($event) => TimeArrivalShip.value = $event,
              "value-format": "HH:mm",
              "minute-step": isSwapped.value ? 5 : 30,
              "hour-step": 1,
              "disabled-hours": disabledHours,
              "disabled-minutes": disabledMinutes,
              "hide-disabled-options": true,
              "show-now": false,
              format: "HH:mm",
              disabled: !DateArrivalShip.value,
              inputReadOnly: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex pt-2 pl-4 space-x-4" }, [
                createVNode(_component_a_space, {
                  direction: "vertical",
                  size: 12
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_date_picker, {
                      value: DateArrivalShip.value,
                      "onUpdate:value": ($event) => DateArrivalShip.value = $event,
                      "disabled-date": disabledDate,
                      "show-today": false,
                      onOpenChange: handleDatePickerOpen,
                      inputReadOnly: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_time_picker, {
                  value: TimeArrivalShip.value,
                  "onUpdate:value": ($event) => TimeArrivalShip.value = $event,
                  "value-format": "HH:mm",
                  "minute-step": isSwapped.value ? 5 : 30,
                  "hour-step": 1,
                  "disabled-hours": disabledHours,
                  "disabled-minutes": disabledMinutes,
                  "hide-disabled-options": true,
                  "show-now": false,
                  format: "HH:mm",
                  disabled: !DateArrivalShip.value,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "minute-step", "disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col py-2 pl-4"><div class="flex items-center"><div class="flex pr-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:tickets",
        class: "bg-lwm-100 w-6 h-6"
      }, null, _parent));
      _push(`<p class="text-lwm-500">${ssrInterpolate(isSwapped.value ? _ctx.$t("Booking.ferryTime") : _ctx.$t("Booking.flightTime"))}</p></div><div>`);
      if (isSwapped.value) {
        _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_time_picker, {
                value: ferryTime.value,
                "onUpdate:value": ($event) => ferryTime.value = $event,
                "minute-step": 30,
                "value-format": "HH:mm",
                format: "HH:mm",
                "disabled-hours": disabledHoursF,
                "disabled-minutes": disabledMinutesF,
                "hide-disabled-options": true,
                "show-now": false,
                disabled: !TimeArrivalShip.value,
                onOpenChange: handleMessageOpen,
                inputReadOnly: true
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_time_picker, {
                  value: ferryTime.value,
                  "onUpdate:value": ($event) => ferryTime.value = $event,
                  "minute-step": 30,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHoursF,
                  "disabled-minutes": disabledMinutesF,
                  "hide-disabled-options": true,
                  "show-now": false,
                  disabled: !TimeArrivalShip.value,
                  onOpenChange: handleMessageOpen,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_time_picker, {
                value: flightTime.value,
                "onUpdate:value": ($event) => flightTime.value = $event,
                "minute-step": 5,
                "value-format": "HH:mm",
                format: "HH:mm",
                "disabled-hours": disabledHoursF,
                "disabled-minutes": disabledMinutesF,
                "hide-disabled-options": true,
                "show-now": false,
                disabled: !TimeArrivalShip.value,
                onOpenChange: handleMessageOpen2,
                inputReadOnly: true
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_time_picker, {
                  value: flightTime.value,
                  "onUpdate:value": ($event) => flightTime.value = $event,
                  "minute-step": 5,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHoursF,
                  "disabled-minutes": disabledMinutesF,
                  "hide-disabled-options": true,
                  "show-now": false,
                  disabled: !TimeArrivalShip.value,
                  onOpenChange: handleMessageOpen2,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></div><div class="flex pl-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-material-symbols-directions-car",
        class: "bg-lwm-100 w-6 h-6"
      }, null, _parent));
      _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p></div>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex pt-2 pl-4 space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, {
              direction: "vertical",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    value: DateShuttle.value,
                    "onUpdate:value": ($event) => DateShuttle.value = $event,
                    disabled: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      value: DateShuttle.value,
                      "onUpdate:value": ($event) => DateShuttle.value = $event,
                      disabled: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_time_picker, {
              value: TimeShuttle.value,
              "onUpdate:value": ($event) => TimeShuttle.value = $event,
              "minute-step": 30,
              "value-format": "HH:mm",
              disabled: true,
              format: "HH:mm"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex pt-2 pl-4 space-x-4" }, [
                createVNode(_component_a_space, {
                  direction: "vertical",
                  size: 12
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_date_picker, {
                      value: DateShuttle.value,
                      "onUpdate:value": ($event) => DateShuttle.value = $event,
                      disabled: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_time_picker, {
                  value: TimeShuttle.value,
                  "onUpdate:value": ($event) => TimeShuttle.value = $event,
                  "minute-step": 30,
                  "value-format": "HH:mm",
                  disabled: true,
                  format: "HH:mm"
                }, null, 8, ["value", "onUpdate:value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      _push(`<div class="flex pl-6 pt-2 justify-evenly content-center"><div class="flex flex-1"><p class="flex-1">${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><div class="flex-1 flex"><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-mdi-minus-circle-outline" }, null, _parent));
      _push(`</button><p class="border border-gray-300 bg-gray-white w-fit px-4 mx-1 my-auto text-sm rounded-full">${ssrInterpolate(counts.value.adult)}</p><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-material-symbols-add-circle-outline" }, null, _parent));
      _push(`</button></div></div></div><div class="flex pl-6 pt-2 justify-evenly content-center"><div class="flex flex-1"><p class="flex-1">${ssrInterpolate(_ctx.$t("Booking.childTicket"))}</p><div class="flex-1 flex"><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-mdi-minus-circle-outline" }, null, _parent));
      _push(`</button><p class="border border-gray-300 bg-gray-white w-fit px-4 mx-1 my-auto text-sm rounded-full">${ssrInterpolate(counts.value.child)}</p><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-material-symbols-add-circle-outline" }, null, _parent));
      _push(`</button></div></div></div><div class="flex pl-6 pt-3 justify-evenly content-center"><p class="flex-1">${ssrInterpolate(_ctx.$t("Booking.ticketPrice"))}</p><p class="flex-1">NT$ ${ssrInterpolate(unref(totalPrice))}${ssrInterpolate(_ctx.$t("Booking.pricePerPerson"))}</p></div><div class="flex py-4 px-6 content-center"><p class="flex-none pr-6">${ssrInterpolate(_ctx.$t("Booking.contact"))}</p><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("Booking.required"))}${ssrRenderAttr("value", contact.value)} class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"></div><div class="flex py-4 px-6 content-center"><p class="flex-none pr-2">${ssrInterpolate(_ctx.$t("Booking.phone"))}</p><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("Booking.required"))}${ssrRenderAttr("value", phone.value)} class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"></div></div><div class="flex justify-center"><input type="checkbox" id="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.value) ? ssrLooseContain(isChecked.value, null) : isChecked.value) ? " checked" : ""} class="h-5 w-3 border-black rounded-full"><label for="checkbox" class="ml-2 text-sm text-gray-700">${ssrInterpolate(_ctx.$t("HomePage.readAgreement"))}</label>`);
      _push(ssrRenderComponent(_component_PopUpRules, null, null, _parent));
      _push(`</div><div class="pt-1 flex justify-center pb-4">`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        onClick: navigateToConfirmation,
        class: "w-2/3 rounded-lg !bg-lwm-400 text-white active:!bg-lime-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("HomePage.confirm"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("HomePage.confirm")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OneWayTicket.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoundedWayTicket",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref("roundTrip");
    const { t } = useI18n();
    const localPath = useLocalePath();
    const { locale } = useI18n();
    const isSwapped = ref(false);
    const DateArrivalShip = ref();
    const DateShuttle = ref();
    const DateArrivalShipReturn = ref();
    const DateShuttleReturn = ref();
    const TimeArrivalShip = ref("");
    const TimeShuttle = ref("");
    const flightNumber = ref("");
    const flightTime = ref("");
    const ferryTime = ref("");
    const flightTimeReturn = ref("");
    const ferryTimeReturn = ref("");
    const TimeArrivalShipReturn = ref("");
    const TimeShuttleReturn = ref("");
    const isChecked = ref(false);
    const counts = ref({
      adult: 1,
      child: 1
    });
    const contact = ref("");
    const phone = ref("");
    const totalPrice = computed(() => {
      const adultCount = counts.value.adult;
      return Math.min(adultCount, 2) * 300 + Math.max(adultCount - 2, 0) * 200;
    });
    const onwardTrip = ref({
      p2: t("Booking.pier"),
      p3: t("Booking.airport")
    });
    const returnTrip = ref({
      p2: t("Booking.airport"),
      p3: t("Booking.pier")
    });
    const disabledHours = () => {
      return Array.from({ length: 24 }, (_, i) => i).filter((hour) => hour < 8 || hour > 18);
    };
    const disabledMinutes = (selectedHour) => {
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute < 30);
      }
      if (selectedHour === 18) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute >= 30);
      }
      return [];
    };
    const disabledHoursF = () => {
      const ferryTimeHour = dayjs(ferryTime.value, "HH:mm").hour();
      return Array.from({ length: 24 }, (_, i) => i).filter((hour) => hour < ferryTimeHour || hour > 18);
    };
    const disabledMinutesF = (selectedHour) => {
      const ferryTimeMinute = dayjs(ferryTime.value, "HH:mm").minute();
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute < 30);
      }
      if (selectedHour === 19) {
        return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute >= 1);
      }
      return Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute < ferryTimeMinute);
    };
    const handleMessageOpen = (open) => {
      if (open) {
        api$1.info(t("alertMessage"));
      }
    };
    const handleDatePickerOpen = (open) => {
      if (open) {
        api$1.info(t("alertMessage2"));
      }
    };
    const handleMessageOpen2 = (open) => {
      if (open) {
        api$1.info(t("alertMessage3"));
      }
    };
    watch(TimeArrivalShip, (newTimeShuttle) => {
      if (newTimeShuttle) {
        const newShuttleTime = dayjs(newTimeShuttle, "HH:mm").add(30, "minute");
        const newTime = dayjs(newTimeShuttle, "HH:mm").add(90, "minute");
        flightTime.value = newTime.format("HH:mm");
        ferryTime.value = newTime.format("HH:mm");
        TimeShuttle.value = newShuttleTime.format("HH:mm");
      } else {
        TimeShuttle.value = "";
        ferryTime.value = "";
        flightTime.value = "";
      }
    });
    watch(TimeArrivalShipReturn, (newTimeShuttleReturn) => {
      if (newTimeShuttleReturn) {
        const newShuttleTimeReturn = dayjs(newTimeShuttleReturn, "HH:mm").add(30, "minute");
        const newTimeReturn = dayjs(newTimeShuttleReturn, "HH:mm").add(90, "minute");
        ferryTimeReturn.value = newTimeReturn.format("HH:mm");
        flightTimeReturn.value = newTimeReturn.format("HH:mm");
        TimeShuttleReturn.value = newShuttleTimeReturn.format("HH:mm");
      } else {
        TimeShuttleReturn.value = "";
        ferryTimeReturn.value = "";
        flightTimeReturn.value = "";
      }
    });
    watch(DateArrivalShipReturn, (newValue) => {
      if (newValue) {
        DateShuttleReturn.value = newValue;
      } else {
        DateShuttleReturn.value = undefined;
      }
    });
    watch(DateArrivalShip, (newValue) => {
      if (newValue) {
        DateShuttle.value = newValue;
      } else {
        DateShuttle.value = undefined;
        TimeArrivalShip.value = "";
      }
    });
    const disabledDate = (current) => {
      if (!isDataLoaded.value) return true;
      const isBeforeToday = current && current.isBefore(dayjs().add(1, "day").startOf("day"));
      const isInOffDays = offDays.value.some((day) => {
        const start = dayjs(day.startOffDays);
        const end = day.endOffDays ? dayjs(day.endOffDays) : start;
        console.log("OffDay Range:", start.format("YYYY-MM-DD"), "to", end.format("YYYY-MM-DD"));
        return current.isSameOrAfter(start, "day") && current.isSameOrBefore(end, "day");
      });
      return isBeforeToday || isInOffDays;
    };
    const disabledDateAfter = (current) => {
      return current && (!DateArrivalShip.value || current.isBefore(DateArrivalShip.value));
    };
    const disabledDateReturn = (current) => {
      return current && (!DateArrivalShip.value || current.isBefore(DateArrivalShip.value));
    };
    const swapText = () => {
      isSwapped.value = !isSwapped.value;
    };
    const antLocales = {
      "zh-CN": localeValues$1,
      "zh-TW": localeValues,
      "en-US": localeValues$2
    };
    const antLocale = computed(() => antLocales[locale.value] || localeValues);
    const openNotification = (placement) => {
      api.open({
        message: t("HomePage.notification.title"),
        description: t("HomePage.notification.description"),
        placement
      });
    };
    const navigateToConfirmation = async () => {
      if (!isChecked.value) {
        openNotification("bottom");
      } else {
        let user = await loadUser();
        if (!user || !user.user_id) {
          alert(t("alertMessage13"));
          user = await loginWithLINE();
          if (!user) {
            console.log("\u767B\u5165\u5931\u6557");
            return;
          }
        }
        const form = {
          trip_type: tab.value,
          LineID: user.user_id,
          adult_num: counts.value.adult,
          child_num: counts.value.child,
          contact_phone: phone.value,
          totalprice: totalPrice.value,
          contact_name: contact.value,
          departure_loc: isSwapped.value ? "Booking.airport" : "Booking.pier",
          destination_loc: isSwapped.value ? "Booking.pier" : "Booking.airport",
          return_departure: isSwapped.value ? "Booking.pier" : "Booking.airport",
          return_destination: isSwapped.value ? "Booking.airport" : "Booking.pier",
          arrivalpoint_date: DateArrivalShip.value ? DateArrivalShip.value.format("YYYY-MM-DD") : undefined,
          arrivalpoint_time: TimeArrivalShip.value,
          return_arrival_date: DateArrivalShipReturn.value ? DateArrivalShipReturn.value.format("YYYY-MM-DD") : undefined,
          return_arrival_time: TimeArrivalShipReturn.value,
          flight_num: flightNumber.value || undefined,
          ferry_time: ferryTime.value || undefined,
          flight_time: flightTime.value || undefined,
          shuttle_date: DateShuttle.value ? DateShuttle.value.format("YYYY-MM-DD") : undefined,
          shuttle_time: TimeShuttle.value,
          return_shuttle_date: DateShuttleReturn.value ? DateShuttleReturn.value.format("YYYY-MM-DD") : undefined,
          return_shuttle_time: TimeShuttleReturn.value
        };
        try {
          const response = await $fetch("/api/POSTbooking", {
            method: "POST",
            body: form
          });
          console.log(response);
          if (response == null ? void 0 : response.id) {
            const bookingId = response.id[0].id;
            console.log("id check2:" + bookingId);
            const path = localPath("/confirmationPage/" + bookingId);
            navigateTo({
              path,
              query: {
                isSwapped: String(isSwapped.value)
              }
            });
          }
        } catch {
          alert(t("alertMessage4"));
        }
      }
    };
    const offDays = ref([]);
    ref([]);
    const isDataLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_a_config_provider = ConfigProvider;
      const _component_a_space = Space;
      const _component_a_date_picker = DatePicker$1;
      const _component_a_time_picker = TimePicker$1;
      const _component_DashLine = __nuxt_component_2;
      const _component_PopUpRules = __nuxt_component_6;
      const _component_a_button = Button;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-col p-4" }, _attrs))}><div><p class="border-l-4 my-3 border-lwm-400 text-justify pl-2">${ssrInterpolate(_ctx.$t("Booking.outward"))}</p></div><div class="flex justify-around"><div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-material-symbols-directions-car",
        class: "bg-gray-500 w-6 h-6"
      }, null, _parent));
      _push(`<p class="flex-1 text-gray-500 ml-2">${ssrInterpolate(_ctx.$t("Booking.departure"))}</p></div><div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-mdi-map-marker-radius-outline",
        class: "bg-gray-500 w-6 h-6"
      }, null, _parent));
      _push(`<p class="flex-1 text-gray-500 ml-2">${ssrInterpolate(_ctx.$t("Booking.arrival"))}</p></div></div><div class="flex justify-evenly"><p class="ml-auto text-2xl">${ssrInterpolate(isSwapped.value ? returnTrip.value.p2 : onwardTrip.value.p2)}</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:rotate",
        class: ["mx-auto bg-lwm-400 w-7 h-7 cursor-pointer transition-transform duration-500", { "rotate-180": isSwapped.value }],
        onClick: swapText
      }, null, _parent));
      _push(`<p class="mr-auto text-2xl">${ssrInterpolate(isSwapped.value ? returnTrip.value.p3 : onwardTrip.value.p3)}</p></div><div class="border-b-2 py-3"></div><div class="flex flex-col pt-3 pl-4">`);
      if (isSwapped.value) {
        _push(`<div class="flex items-center pb-1"><div class="flex pr-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:tickets",
          class: "bg-lwm-50 w-6 h-6"
        }, null, _parent));
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))}</p></div><div class="border rounded-lg"><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("Booking.required"))}${ssrRenderAttr("value", flightNumber.value)} class="flex-1 px-2 py-1 w-full bg-white rounded-lg focus:outline-none text-sm"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isSwapped.value ? "i-material-symbols-flight-land" : "i-majesticons-ship-line",
        class: "bg-lwm-50 w-6 h-6"
      }, null, _parent));
      if (isSwapped.value) {
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p>`);
      } else {
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))}</p>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex pt-2 pl-4 space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, {
              direction: "vertical",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    value: DateArrivalShip.value,
                    "onUpdate:value": ($event) => DateArrivalShip.value = $event,
                    "disabled-date": disabledDate,
                    "show-today": false,
                    onOpenChange: handleDatePickerOpen,
                    inputReadOnly: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      value: DateArrivalShip.value,
                      "onUpdate:value": ($event) => DateArrivalShip.value = $event,
                      "disabled-date": disabledDate,
                      "show-today": false,
                      onOpenChange: handleDatePickerOpen,
                      inputReadOnly: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_time_picker, {
              value: TimeArrivalShip.value,
              "onUpdate:value": ($event) => TimeArrivalShip.value = $event,
              "value-format": "HH:mm",
              "disabled-hours": disabledHours,
              "disabled-minutes": disabledMinutes,
              "minute-step": isSwapped.value ? 5 : 30,
              "hour-step": 1,
              "hide-disabled-options": true,
              "show-now": false,
              format: "HH:mm",
              disabled: !DateArrivalShip.value,
              inputReadOnly: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex pt-2 pl-4 space-x-4" }, [
                createVNode(_component_a_space, {
                  direction: "vertical",
                  size: 12
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_date_picker, {
                      value: DateArrivalShip.value,
                      "onUpdate:value": ($event) => DateArrivalShip.value = $event,
                      "disabled-date": disabledDate,
                      "show-today": false,
                      onOpenChange: handleDatePickerOpen,
                      inputReadOnly: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_time_picker, {
                  value: TimeArrivalShip.value,
                  "onUpdate:value": ($event) => TimeArrivalShip.value = $event,
                  "value-format": "HH:mm",
                  "disabled-hours": disabledHours,
                  "disabled-minutes": disabledMinutes,
                  "minute-step": isSwapped.value ? 5 : 30,
                  "hour-step": 1,
                  "hide-disabled-options": true,
                  "show-now": false,
                  format: "HH:mm",
                  disabled: !DateArrivalShip.value,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "minute-step", "disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col py-2 pl-4"><div class="flex items-center"><div class="flex pr-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:tickets",
        class: "bg-lwm-100 w-6 h-6"
      }, null, _parent));
      _push(`<p class="text-lwm-500">${ssrInterpolate(isSwapped.value ? _ctx.$t("Booking.ferryTime") : _ctx.$t("Booking.flightTime"))}</p></div><div>`);
      if (isSwapped.value) {
        _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_time_picker, {
                value: ferryTime.value,
                "onUpdate:value": ($event) => ferryTime.value = $event,
                "minute-step": 30,
                "value-format": "HH:mm",
                format: "HH:mm",
                "disabled-hours": disabledHoursF,
                "disabled-minutes": disabledMinutesF,
                "hide-disabled-options": true,
                "show-now": false,
                disabled: !TimeArrivalShip.value,
                onOpenChange: handleMessageOpen,
                inputReadOnly: true
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_time_picker, {
                  value: ferryTime.value,
                  "onUpdate:value": ($event) => ferryTime.value = $event,
                  "minute-step": 30,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHoursF,
                  "disabled-minutes": disabledMinutesF,
                  "hide-disabled-options": true,
                  "show-now": false,
                  disabled: !TimeArrivalShip.value,
                  onOpenChange: handleMessageOpen,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_time_picker, {
                value: flightTime.value,
                "onUpdate:value": ($event) => flightTime.value = $event,
                "minute-step": 5,
                "value-format": "HH:mm",
                format: "HH:mm",
                "disabled-hours": disabledHoursF,
                "disabled-minutes": disabledMinutesF,
                "hide-disabled-options": true,
                "show-now": false,
                disabled: !TimeArrivalShip.value,
                onOpenChange: handleMessageOpen2,
                inputReadOnly: true
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_time_picker, {
                  value: flightTime.value,
                  "onUpdate:value": ($event) => flightTime.value = $event,
                  "minute-step": 5,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHoursF,
                  "disabled-minutes": disabledMinutesF,
                  "hide-disabled-options": true,
                  "show-now": false,
                  disabled: !TimeArrivalShip.value,
                  onOpenChange: handleMessageOpen2,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></div><div class="flex pl-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-material-symbols-directions-car",
        class: "bg-lwm-100 w-6 h-6"
      }, null, _parent));
      _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p></div>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex pt-2 pl-4 space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, {
              direction: "vertical",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    value: DateShuttle.value,
                    "onUpdate:value": ($event) => DateShuttle.value = $event,
                    disabled: true,
                    "disabled-date": disabledDateAfter
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      value: DateShuttle.value,
                      "onUpdate:value": ($event) => DateShuttle.value = $event,
                      disabled: true,
                      "disabled-date": disabledDateAfter
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_time_picker, {
              value: TimeShuttle.value,
              "onUpdate:value": ($event) => TimeShuttle.value = $event,
              "value-format": "HH:mm",
              disabled: true,
              "minute-step": 30,
              format: "HH:mm"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex pt-2 pl-4 space-x-4" }, [
                createVNode(_component_a_space, {
                  direction: "vertical",
                  size: 12
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_date_picker, {
                      value: DateShuttle.value,
                      "onUpdate:value": ($event) => DateShuttle.value = $event,
                      disabled: true,
                      "disabled-date": disabledDateAfter
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_time_picker, {
                  value: TimeShuttle.value,
                  "onUpdate:value": ($event) => TimeShuttle.value = $event,
                  "value-format": "HH:mm",
                  disabled: true,
                  "minute-step": 30,
                  format: "HH:mm"
                }, null, 8, ["value", "onUpdate:value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="border-b-2 py-3 border-dashed border-gray-500"></div><p class="border-l-4 my-3 border-orange-400 text-justify pl-2">${ssrInterpolate(_ctx.$t("Booking.return"))}</p><div class="flex justify-around"><div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-material-symbols-directions-car",
        class: "bg-gray-500 w-6 h-6"
      }, null, _parent));
      _push(`<p class="flex-1 text-gray-500 ml-2">${ssrInterpolate(_ctx.$t("Booking.departure"))}</p></div><div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-mdi-map-marker-radius-outline",
        class: "bg-gray-500 w-6 h-6"
      }, null, _parent));
      _push(`<p class="flex-1 text-gray-500 ml-2">${ssrInterpolate(_ctx.$t("Booking.arrival"))}</p></div></div><div class="flex justify-evenly"><p class="ml-auto text-2xl">${ssrInterpolate(isSwapped.value ? onwardTrip.value.p2 : returnTrip.value.p2)}</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:rotate",
        class: ["mx-auto bg-lwm-400 w-7 h-7 cursor-pointer transition-transform duration-500", { "rotate-180": isSwapped.value }],
        onClick: swapText
      }, null, _parent));
      _push(`<p class="mr-auto text-2xl">${ssrInterpolate(isSwapped.value ? onwardTrip.value.p3 : returnTrip.value.p3)}</p></div><div class="border-b-2 py-3"></div><div class="flex flex-col pt-3 pl-4">`);
      if (!isSwapped.value) {
        _push(`<div class="flex items-center pb-1"><div class="flex pr-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:tickets",
          class: "bg-lwm-50 w-6 h-6"
        }, null, _parent));
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.flightNumber"))}</p></div><div class="border rounded-lg"><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("Booking.required"))}${ssrRenderAttr("value", flightNumber.value)} class="flex-1 px-2 py-1 w-full bg-white rounded-lg focus:outline-none text-sm"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isSwapped.value ? "i-majesticons-ship-line" : "i-material-symbols-flight-land",
        class: "bg-lwm-50 w-6 h-6"
      }, null, _parent));
      if (isSwapped.value) {
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.arrivalPortTime"))}</p>`);
      } else {
        _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.arrivalAtAirportTime"))}</p>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex pt-2 pl-4 space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, {
              direction: "vertical",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    value: DateArrivalShipReturn.value,
                    "onUpdate:value": ($event) => DateArrivalShipReturn.value = $event,
                    "disabled-date": disabledDate,
                    "show-today": false,
                    inputReadOnly: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      value: DateArrivalShipReturn.value,
                      "onUpdate:value": ($event) => DateArrivalShipReturn.value = $event,
                      "disabled-date": disabledDate,
                      "show-today": false,
                      inputReadOnly: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_time_picker, {
              value: TimeArrivalShipReturn.value,
              "onUpdate:value": ($event) => TimeArrivalShipReturn.value = $event,
              "value-format": "HH:mm",
              "disabled-hours": disabledHours,
              "disabled-minutes": disabledMinutes,
              "minute-step": isSwapped.value ? 30 : 5,
              "hour-step": 1,
              "hide-disabled-options": true,
              "show-now": false,
              format: "HH:mm",
              disabled: !DateArrivalShipReturn.value,
              inputReadOnly: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex pt-2 pl-4 space-x-4" }, [
                createVNode(_component_a_space, {
                  direction: "vertical",
                  size: 12
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_date_picker, {
                      value: DateArrivalShipReturn.value,
                      "onUpdate:value": ($event) => DateArrivalShipReturn.value = $event,
                      "disabled-date": disabledDate,
                      "show-today": false,
                      inputReadOnly: true
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_time_picker, {
                  value: TimeArrivalShipReturn.value,
                  "onUpdate:value": ($event) => TimeArrivalShipReturn.value = $event,
                  "value-format": "HH:mm",
                  "disabled-hours": disabledHours,
                  "disabled-minutes": disabledMinutes,
                  "minute-step": isSwapped.value ? 30 : 5,
                  "hour-step": 1,
                  "hide-disabled-options": true,
                  "show-now": false,
                  format: "HH:mm",
                  disabled: !DateArrivalShipReturn.value,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "minute-step", "disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col py-2 pl-4"><div class="flex items-center"><div class="flex pr-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:tickets",
        class: "bg-lwm-100 w-6 h-6"
      }, null, _parent));
      _push(`<p class="text-lwm-500">${ssrInterpolate(isSwapped.value ? _ctx.$t("Booking.flightTime") : _ctx.$t("Booking.ferryTime"))}</p></div><div>`);
      if (isSwapped.value) {
        _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_time_picker, {
                value: flightTimeReturn.value,
                "onUpdate:value": ($event) => flightTimeReturn.value = $event,
                "minute-step": 5,
                "value-format": "HH:mm",
                format: "HH:mm",
                "disabled-hours": disabledHoursF,
                "disabled-minutes": disabledMinutesF,
                "hide-disabled-options": true,
                "show-now": false,
                disabled: !TimeArrivalShip.value,
                onOpenChange: handleMessageOpen2,
                inputReadOnly: true
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_time_picker, {
                  value: flightTimeReturn.value,
                  "onUpdate:value": ($event) => flightTimeReturn.value = $event,
                  "minute-step": 5,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHoursF,
                  "disabled-minutes": disabledMinutesF,
                  "hide-disabled-options": true,
                  "show-now": false,
                  disabled: !TimeArrivalShip.value,
                  onOpenChange: handleMessageOpen2,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_time_picker, {
                value: ferryTimeReturn.value,
                "onUpdate:value": ($event) => ferryTimeReturn.value = $event,
                "minute-step": 30,
                "value-format": "HH:mm",
                format: "HH:mm",
                "disabled-hours": disabledHoursF,
                "disabled-minutes": disabledMinutesF,
                "hide-disabled-options": true,
                "show-now": false,
                disabled: !TimeArrivalShipReturn.value,
                onOpenChange: handleMessageOpen,
                inputReadOnly: true
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_time_picker, {
                  value: ferryTimeReturn.value,
                  "onUpdate:value": ($event) => ferryTimeReturn.value = $event,
                  "minute-step": 30,
                  "value-format": "HH:mm",
                  format: "HH:mm",
                  "disabled-hours": disabledHoursF,
                  "disabled-minutes": disabledMinutesF,
                  "hide-disabled-options": true,
                  "show-now": false,
                  disabled: !TimeArrivalShipReturn.value,
                  onOpenChange: handleMessageOpen,
                  inputReadOnly: true
                }, null, 8, ["value", "onUpdate:value", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></div><div class="flex pl-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-material-symbols-directions-car",
        class: "bg-lwm-100 w-6 h-6"
      }, null, _parent));
      _push(`<p class="text-lwm-500">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p></div>`);
      _push(ssrRenderComponent(_component_a_config_provider, { locale: unref(antLocale) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex pt-2 pl-4 space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, {
              direction: "vertical",
              size: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    value: DateShuttleReturn.value,
                    "onUpdate:value": ($event) => DateShuttleReturn.value = $event,
                    disabled: true,
                    "disabled-date": disabledDateReturn
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      value: DateShuttleReturn.value,
                      "onUpdate:value": ($event) => DateShuttleReturn.value = $event,
                      disabled: true,
                      "disabled-date": disabledDateReturn
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_time_picker, {
              value: TimeShuttleReturn.value,
              "onUpdate:value": ($event) => TimeShuttleReturn.value = $event,
              "value-format": "HH:mm",
              disabled: true,
              "minute-step": 30,
              format: "HH:mm"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex pt-2 pl-4 space-x-4" }, [
                createVNode(_component_a_space, {
                  direction: "vertical",
                  size: 12
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_date_picker, {
                      value: DateShuttleReturn.value,
                      "onUpdate:value": ($event) => DateShuttleReturn.value = $event,
                      disabled: true,
                      "disabled-date": disabledDateReturn
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_time_picker, {
                  value: TimeShuttleReturn.value,
                  "onUpdate:value": ($event) => TimeShuttleReturn.value = $event,
                  "value-format": "HH:mm",
                  disabled: true,
                  "minute-step": 30,
                  format: "HH:mm"
                }, null, 8, ["value", "onUpdate:value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      _push(`<div class="flex pl-6 pt-2 justify-evenly content-center"><div class="flex flex-1"><p class="flex-1">${ssrInterpolate(_ctx.$t("Booking.adultTicket"))}</p><div class="flex-1 flex"><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-mdi-minus-circle-outline" }, null, _parent));
      _push(`</button><p class="border border-gray-300 bg-gray-white w-fit px-4 mx-1 my-auto text-sm rounded-full">${ssrInterpolate(counts.value.adult)}</p><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-material-symbols-add-circle-outline" }, null, _parent));
      _push(`</button></div></div></div><div class="flex pl-6 pt-2 justify-evenly content-center"><div class="flex flex-1"><p class="flex-1">${ssrInterpolate(_ctx.$t("Booking.childTicket"))}</p><div class="flex-1 flex"><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-mdi-minus-circle-outline" }, null, _parent));
      _push(`</button><p class="border border-gray-300 bg-gray-white w-fit px-4 mx-1 my-auto text-sm rounded-full">${ssrInterpolate(counts.value.child)}</p><button>`);
      _push(ssrRenderComponent(_component_Icon, { name: "i-material-symbols-add-circle-outline" }, null, _parent));
      _push(`</button></div></div></div><div class="flex pl-6 pt-3 justify-evenly content-center"><p class="flex-1">${ssrInterpolate(_ctx.$t("Booking.ticketPrice"))}</p><p class="flex-1">NT$ ${ssrInterpolate(unref(totalPrice))}${ssrInterpolate(_ctx.$t("Booking.pricePerPerson"))}</p></div><div class="flex py-4 px-6 content-center"><p class="flex-none pr-6">${ssrInterpolate(_ctx.$t("Booking.contact"))}</p><input${ssrRenderAttr("value", contact.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("Booking.required"))} class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"></div><div class="flex py-4 px-6 content-center"><p class="flex-none pr-2">${ssrInterpolate(_ctx.$t("Booking.phone"))}</p><input${ssrRenderAttr("value", phone.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("Booking.required"))} class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"></div><div class="flex justify-center"><input type="checkbox" id="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.value) ? ssrLooseContain(isChecked.value, null) : isChecked.value) ? " checked" : ""} class="h-5 w-3 border-black rounded-full"><label for="checkbox" class="ml-2 text-sm text-gray-700">${ssrInterpolate(_ctx.$t("HomePage.readAgreement"))}</label>`);
      _push(ssrRenderComponent(_component_PopUpRules, null, null, _parent));
      _push(`</div><div class="pt-1 flex justify-center pb-4">`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        onClick: navigateToConfirmation,
        class: "w-2/3 rounded-lg !bg-lwm-400 text-white active:!bg-lime-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("HomePage.confirm"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("HomePage.confirm")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RoundedWayTicket.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    ref(false);
    const activeTab = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderNavigator = __nuxt_component_0;
      const _component_OneWayTicket = _sfc_main$2;
      const _component_RoundedWayTicket = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderNavigator, null, null, _parent));
      _push(`<div class="flex flex-col pb-16"><div class="shadow mt-6 mx-10 rounded-lg bg-gray-50"><div class="flex"><div class="${ssrRenderClass([{ "bg-lwm-100 rounded-tl-lg text-white": activeTab.value === 2 }, "flex-1 flex justify-center rounded-tl-lg transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer"])}"><button class="${ssrRenderClass({ " text-lwm-400 font-bold": activeTab.value === 1 })}">${ssrInterpolate(_ctx.$t("HomePage.oneWay"))}</button></div><div class="${ssrRenderClass([{ "bg-lwm-100 rounded-tr-lg text-white": activeTab.value === 1 }, "flex-1 flex justify-center rounded-tr-lg transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer"])}"><button class="${ssrRenderClass({ " text-lwm-400 font-bold": activeTab.value === 2 })}">${ssrInterpolate(_ctx.$t("HomePage.roundTrip"))}</button></div></div>`);
      if (activeTab.value === 1) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_OneWayTicket, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === 2) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_RoundedWayTicket, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CC_l7zej.mjs.map
