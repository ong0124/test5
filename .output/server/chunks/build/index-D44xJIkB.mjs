import _extends from '@babel/runtime/helpers/esm/extends';
import { D, Y, W, M as MS, Q, l as M, F as FORMAT_DEFAULT, e as dayjs } from './server.mjs';
import { u as useConfigInject, c as classNames, k as flattenChildren, s as objectType, r as useToken, i as initDefaultProps, C as useInjectDisabled, t as isPresetColor, D as isPresetStatusColor, f as filterEmpty, E as warningOnce, n as genComponentStyleHook, P as PropTypes, F as tuple$1, G as booleanType, H as eventType, w as wrapperRaf, e as cloneElement, m as findDOMNode, I as isVisible, T as Trigger, J as someType, L as functionType, M as stringType, N as arrayType, O as useLocaleReceiver, o as omit, v as merge, Q as noteOnce, R as locale$1, S as genFocusStyle, y as resetComponent, B as roundedArrow, U as textEllipsis, V as capitalize, z as genPresetColor, x as initMotion, K as Keyframe } from './colors-BBQNRnnY.mjs';
import _objectSpread$9 from '@babel/runtime/helpers/esm/objectSpread2';
import { inject, ref, h, getCurrentInstance, nextTick, reactive, defineComponent, createVNode, computed, provide, shallowRef, Transition, watch, watchEffect, Fragment, Text, toRef, unref, render, toRaw, useAttrs, createTextVNode, getCurrentScope, onScopeDispose, onMounted } from 'vue';
import { generate as generate$1, blue } from '@ant-design/colors';
import { TinyColor } from '@ctrl/tinycolor';
import { isEmpty } from 'lodash-es';

const weekday = (function (o, c) {
  var proto = c.prototype;

  proto.weekday = function (input) {
    var weekStart = this.$locale().weekStart || 0;
    var $W = this.$W;
    var weekday = ($W < weekStart ? $W + 7 : $W) - weekStart;

    if (this.$utils().u(input)) {
      return weekday;
    }

    return this.subtract(weekday, 'day').add(input, 'day');
  };
});

// eslint-disable-next-line import/prefer-default-export
var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};

const localeData = (function (o, c, dayjs) {
  // locale needed later
  var proto = c.prototype;

  var getLocalePart = function getLocalePart(part) {
    return part && (part.indexOf ? part : part.s);
  };

  var getShort = function getShort(ins, target, full, num, localeOrder) {
    var locale = ins.name ? ins : ins.$locale();
    var targetLocale = getLocalePart(locale[target]);
    var fullLocale = getLocalePart(locale[full]);
    var result = targetLocale || fullLocale.map(function (f) {
      return f.slice(0, num);
    });
    if (!localeOrder) return result;
    var weekStart = locale.weekStart;
    return result.map(function (_, index) {
      return result[(index + (weekStart || 0)) % 7];
    });
  };

  var getDayjsLocaleObject = function getDayjsLocaleObject() {
    return dayjs.Ls[dayjs.locale()];
  };

  var getLongDateFormat = function getLongDateFormat(l, format) {
    return l.formats[format] || t(l.formats[format.toUpperCase()]);
  };

  var localeData = function localeData() {
    var _this = this;

    return {
      months: function months(instance) {
        return instance ? instance.format('MMMM') : getShort(_this, 'months');
      },
      monthsShort: function monthsShort(instance) {
        return instance ? instance.format('MMM') : getShort(_this, 'monthsShort', 'months', 3);
      },
      firstDayOfWeek: function firstDayOfWeek() {
        return _this.$locale().weekStart || 0;
      },
      weekdays: function weekdays(instance) {
        return instance ? instance.format('dddd') : getShort(_this, 'weekdays');
      },
      weekdaysMin: function weekdaysMin(instance) {
        return instance ? instance.format('dd') : getShort(_this, 'weekdaysMin', 'weekdays', 2);
      },
      weekdaysShort: function weekdaysShort(instance) {
        return instance ? instance.format('ddd') : getShort(_this, 'weekdaysShort', 'weekdays', 3);
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(_this.$locale(), format);
      },
      meridiem: this.$locale().meridiem,
      ordinal: this.$locale().ordinal
    };
  };

  proto.localeData = function () {
    return localeData.bind(this)();
  };

  dayjs.localeData = function () {
    var localeObject = getDayjsLocaleObject();
    return {
      firstDayOfWeek: function firstDayOfWeek() {
        return localeObject.weekStart || 0;
      },
      weekdays: function weekdays() {
        return dayjs.weekdays();
      },
      weekdaysShort: function weekdaysShort() {
        return dayjs.weekdaysShort();
      },
      weekdaysMin: function weekdaysMin() {
        return dayjs.weekdaysMin();
      },
      months: function months() {
        return dayjs.months();
      },
      monthsShort: function monthsShort() {
        return dayjs.monthsShort();
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(localeObject, format);
      },
      meridiem: localeObject.meridiem,
      ordinal: localeObject.ordinal
    };
  };

  dayjs.months = function () {
    return getShort(getDayjsLocaleObject(), 'months');
  };

  dayjs.monthsShort = function () {
    return getShort(getDayjsLocaleObject(), 'monthsShort', 'months', 3);
  };

  dayjs.weekdays = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdays', null, null, localeOrder);
  };

  dayjs.weekdaysShort = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysShort', 'weekdays', 3, localeOrder);
  };

  dayjs.weekdaysMin = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysMin', 'weekdays', 2, localeOrder);
  };
});

const weekOfYear = (function (o, c, d) {
  var proto = c.prototype;

  proto.week = function (week) {
    if (week === undefined) {
      week = null;
    }

    if (week !== null) {
      return this.add((week - this.week()) * 7, D);
    }

    var yearStart = this.$locale().yearStart || 1;

    if (this.month() === 11 && this.date() > 25) {
      // d(this) is for badMutable
      var nextYearStartDay = d(this).startOf(Y).add(1, Y).date(yearStart);
      var thisEndOfWeek = d(this).endOf(W);

      if (nextYearStartDay.isBefore(thisEndOfWeek)) {
        return 1;
      }
    }

    var yearStartDay = d(this).startOf(Y).date(yearStart);
    var yearStartWeek = yearStartDay.startOf(W).subtract(1, MS);
    var diffInWeek = this.diff(yearStartWeek, W, true);

    if (diffInWeek < 0) {
      return d(this).startOf('week').week();
    }

    return Math.ceil(diffInWeek);
  };

  proto.weeks = function (week) {
    if (week === undefined) {
      week = null;
    }

    return this.week(week);
  };
});

const weekYear = (function (o, c) {
  var proto = c.prototype;

  proto.weekYear = function () {
    var month = this.month();
    var weekOfYear = this.week();
    var year = this.year();

    if (weekOfYear === 1 && month === 11) {
      return year + 1;
    }

    if (month === 0 && weekOfYear >= 52) {
      return year - 1;
    }

    return year;
  };
});

const quarterOfYear = (function (o, c) {
  var proto = c.prototype;

  proto.quarter = function (quarter) {
    if (!this.$utils().u(quarter)) {
      return this.month(this.month() % 3 + (quarter - 1) * 3);
    }

    return Math.ceil((this.month() + 1) / 3);
  };

  var oldAdd = proto.add;

  proto.add = function (number, units) {
    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = this.$utils().p(units);

    if (unit === Q) {
      return this.add(number * 3, M);
    }

    return oldAdd.bind(this)(number, units);
  };

  var oldStartOf = proto.startOf;

  proto.startOf = function (units, startOf) {
    var utils = this.$utils();
    var isStartOf = !utils.u(startOf) ? startOf : true;
    var unit = utils.p(units);

    if (unit === Q) {
      var quarter = this.quarter() - 1;
      return isStartOf ? this.month(quarter * 3).startOf(M).startOf(D) : this.month(quarter * 3 + 2).endOf(M).endOf(D);
    }

    return oldStartOf.bind(this)(units, startOf);
  };
});

const advancedFormat = (function (o, c) {
  // locale needed later
  var proto = c.prototype;
  var oldFormat = proto.format;

  proto.format = function (formatStr) {
    var _this = this;

    var locale = this.$locale();

    if (!this.isValid()) {
      return oldFormat.bind(this)(formatStr);
    }

    var utils = this.$utils();
    var str = formatStr || FORMAT_DEFAULT;
    var result = str.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (match) {
      switch (match) {
        case 'Q':
          return Math.ceil((_this.$M + 1) / 3);

        case 'Do':
          return locale.ordinal(_this.$D);

        case 'gggg':
          return _this.weekYear();

        case 'GGGG':
          return _this.isoWeekYear();

        case 'wo':
          return locale.ordinal(_this.week(), 'W');
        // W for week

        case 'w':
        case 'ww':
          return utils.s(_this.week(), match === 'w' ? 1 : 2, '0');

        case 'W':
        case 'WW':
          return utils.s(_this.isoWeek(), match === 'W' ? 1 : 2, '0');

        case 'k':
        case 'kk':
          return utils.s(String(_this.$H === 0 ? 24 : _this.$H), match === 'k' ? 1 : 2, '0');

        case 'X':
          return Math.floor(_this.$d.getTime() / 1000);

        case 'x':
          return _this.$d.getTime();

        case 'z':
          return "[" + _this.offsetName() + "]";

        case 'zzz':
          return "[" + _this.offsetName('long') + "]";

        default:
          return match;
      }
    });
    return oldFormat.bind(this)(result);
  };
});

var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchOffset = /[+-]\d\d:?(\d\d)?|Z/; // +00:00 -00:00 +0000 or -0000 +00 or Z

var matchWord = /\d*[^-_:/,()\s\d]+/; // Word

var locale = {};

var parseTwoDigitYear = function parseTwoDigitYear(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2000);
};

function offsetFromString(string) {
  if (!string) return 0;
  if (string === 'Z') return 0;
  var parts = string.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes; // eslint-disable-line no-nested-ternary
}

var addInput = function addInput(property) {
  return function (input) {
    this[property] = +input;
  };
};

var zoneExpressions = [matchOffset, function (input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];

var getLocalePart = function getLocalePart(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};

var meridiemMatch = function meridiemMatch(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale,
      meridiem = _locale.meridiem;

  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? 'pm' : 'PM');
  } else {
    for (var i = 1; i <= 24; i += 1) {
      // todo: fix input === meridiem(i, 0, isLowerCase)
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }

  return isAfternoon;
};

var expressions = {
  A: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  Q: [match1, function (input) {
    this.month = (input - 1) * 3 + 1;
  }],
  S: [match1, function (input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function (input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function (input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput('seconds')],
  ss: [match1to2, addInput('seconds')],
  m: [match1to2, addInput('minutes')],
  mm: [match1to2, addInput('minutes')],
  H: [match1to2, addInput('hours')],
  h: [match1to2, addInput('hours')],
  HH: [match1to2, addInput('hours')],
  hh: [match1to2, addInput('hours')],
  D: [match1to2, addInput('day')],
  DD: [match2, addInput('day')],
  Do: [matchWord, function (input) {
    var _locale2 = locale,
        ordinal = _locale2.ordinal;

    var _input$match = input.match(/\d+/);

    this.day = _input$match[0];
    if (!ordinal) return;

    for (var i = 1; i <= 31; i += 1) {
      if (ordinal(i).replace(/\[|\]/g, '') === input) {
        this.day = i;
      }
    }
  }],
  w: [match1to2, addInput('week')],
  ww: [match2, addInput('week')],
  M: [match1to2, addInput('month')],
  MM: [match2, addInput('month')],
  MMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var monthsShort = getLocalePart('monthsShort');
    var matchIndex = (monthsShort || months.map(function (_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var matchIndex = months.indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput('year')],
  YY: [match2, function (input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput('year')],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};

function correctHours(time) {
  var afternoon = time.afternoon;

  if (afternoon !== undefined) {
    var hours = time.hours;

    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }

    delete time.afternoon;
  }
}

function makeParser(format) {
  format = u(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;

  for (var i = 0; i < length; i += 1) {
    var token = array[i];
    var parseTo = expressions[token];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];

    if (parser) {
      array[i] = {
        regex: regex,
        parser: parser
      };
    } else {
      array[i] = token.replace(/^\[|\]$/g, '');
    }
  }

  return function (input) {
    var time = {};

    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];

      if (typeof _token === 'string') {
        start += _token.length;
      } else {
        var _regex = _token.regex,
            _parser = _token.parser;
        var part = input.slice(start);

        var match = _regex.exec(part);

        var value = match[0];

        _parser.call(time, value);

        input = input.replace(value, '');
      }
    }

    correctHours(time);
    return time;
  };
}

var parseFormattedInput = function parseFormattedInput(input, format, utc, dayjs) {
  try {
    if (['x', 'X'].indexOf(format) > -1) return new Date((format === 'X' ? 1000 : 1) * input);
    var parser = makeParser(format);

    var _parser2 = parser(input),
        year = _parser2.year,
        month = _parser2.month,
        day = _parser2.day,
        hours = _parser2.hours,
        minutes = _parser2.minutes,
        seconds = _parser2.seconds,
        milliseconds = _parser2.milliseconds,
        zone = _parser2.zone,
        week = _parser2.week;

    var now = new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M = 0;

    if (!(year && !month)) {
      M = month > 0 ? month - 1 : now.getMonth();
    }

    var h = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;

    if (zone) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms + zone.offset * 60 * 1000));
    }

    if (utc) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms));
    }

    var newDate;
    newDate = new Date(y, M, d, h, m, s, ms);

    if (week) {
      newDate = dayjs(newDate).week(week).toDate();
    }

    return newDate;
  } catch (e) {
    return new Date(''); // Invalid Date
  }
};

const customParseFormat = (function (o, C, d) {
  d.p.customParseFormat = true;

  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }

  var proto = C.prototype;
  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    var date = cfg.date,
        utc = cfg.utc,
        args = cfg.args;
    this.$u = utc;
    var format = args[1];

    if (typeof format === 'string') {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];

      if (isStrictWithLocale) {
        pl = args[2];
      }

      locale = this.$locale();

      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }

      this.$d = parseFormattedInput(date, format, utc, d);
      this.init();
      if (pl && pl !== true) this.$L = this.locale(pl).$L; // use != to treat
      // input number 1410715640579 and format string '1410715640579' equal
      // eslint-disable-next-line eqeqeq

      if (isStrict && date != this.format(format)) {
        this.$d = new Date('');
      } // reset global locale to make parallel unit test


      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;

      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);

        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }

        if (i === len) this.$d = new Date('');
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
});

// This icon file is generated automatically.
var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };

var contextKey = Symbol('iconContext');
var useInjectIconContext = function useInjectIconContext() {
  return inject(contextKey, {
    prefixCls: ref('anticon'),
    rootClassName: ref(''),
    csp: ref()
  });
};

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } return target; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function warning(valid, message) {
}


function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return h(node.tag, _objectSpread$8({
      key: key
    }, node.attrs), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return h(node.tag, _objectSpread$8({
    key: key
  }, rootProps, node.attrs), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";

var useInsertStyles = function useInsertStyles() {
  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls;
      _useInjectIconContext.csp;

  getCurrentInstance();
  var mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls.value);
  }

  nextTick(function () {
    {
      return;
    }
  });
};

var _excluded$1 = ["icon", "primaryColor", "secondaryColor"];

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twoToneColorPalette = reactive({
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
});

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread$7({}, twoToneColorPalette);
}

var IconBase = function IconBase(props, context) {
  var _props$context$attrs = _objectSpread$7({}, props, context.attrs),
      icon = _props$context$attrs.icon,
      primaryColor = _props$context$attrs.primaryColor,
      secondaryColor = _props$context$attrs.secondaryColor,
      restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$1);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  warning(isIconDefinition(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread$7({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), _objectSpread$7({}, restProps, {
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  })); // },
};

IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var InsertStyles = defineComponent({
  name: 'InsertStyles',
  setup: function setup() {
    useInsertStyles();
    return function () {
      return null;
    };
  }
});

var _excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

setTwoToneColor(blue.primary);

var Icon = function Icon(props, context) {
  var _classObj;

  var _props$context$attrs = _objectSpread$6({}, props, context.attrs),
      cls = _props$context$attrs["class"],
      icon = _props$context$attrs.icon,
      spin = _props$context$attrs.spin,
      rotate = _props$context$attrs.rotate,
      tabindex = _props$context$attrs.tabindex,
      twoToneColor = _props$context$attrs.twoToneColor,
      onClick = _props$context$attrs.onClick,
      restProps = _objectWithoutProperties(_props$context$attrs, _excluded);

  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls,
      rootClassName = _useInjectIconContext.rootClassName;

  var classObj = (_classObj = {}, _defineProperty$6(_classObj, rootClassName.value, !!rootClassName.value), _defineProperty$6(_classObj, prefixCls.value, true), _defineProperty$6(_classObj, "".concat(prefixCls.value, "-").concat(icon.name), Boolean(icon.name)), _defineProperty$6(_classObj, "".concat(prefixCls.value, "-spin"), !!spin || icon.name === 'loading'), _classObj);
  var iconTabIndex = tabindex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return createVNode("span", _objectSpread$6({
    "role": "img",
    "aria-label": icon.name
  }, restProps, {
    "onClick": onClick,
    "class": [classObj, cls],
    "tabindex": iconTabIndex
  }), [createVNode(IconBase, {
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null), createVNode(InsertStyles, null, null)]);
};

Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingOutlined = function LoadingOutlined(props, context) {
  var p = _objectSpread$5({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$5({}, p, {
    "icon": LoadingOutlined$1
  }), null);
};

LoadingOutlined.displayName = 'LoadingOutlined';
LoadingOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseOutlined = function CloseOutlined(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$4({}, p, {
    "icon": CloseOutlined$1
  }), null);
};

CloseOutlined.displayName = 'CloseOutlined';
CloseOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var CalendarOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, "name": "calendar", "theme": "outlined" };

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarOutlined = function CalendarOutlined(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$3({}, p, {
    "icon": CalendarOutlined$1
  }), null);
};

CalendarOutlined.displayName = 'CalendarOutlined';
CalendarOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var ClockCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, "name": "clock-circle", "theme": "outlined" };

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ClockCircleOutlined = function ClockCircleOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$2({}, p, {
    "icon": ClockCircleOutlined$1
  }), null);
};

ClockCircleOutlined.displayName = 'ClockCircleOutlined';
ClockCircleOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseCircleFilled = function CloseCircleFilled(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": CloseCircleFilled$1
  }), null);
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
CloseCircleFilled.inheritAttrs = false;

// This icon file is generated automatically.
var SwapRightOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, "name": "swap-right", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SwapRightOutlined = function SwapRightOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": SwapRightOutlined$1
  }), null);
};

SwapRightOutlined.displayName = 'SwapRightOutlined';
SwapRightOutlined.inheritAttrs = false;

const devWarning = (valid, component, message) => {
  warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
};
const KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    const {
      keyCode
    } = e;
    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if ((undefined).navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
function useMemo(getValue2, condition, shouldUpdate) {
  const cacheRef = ref(getValue2());
  watch(condition, (next, pre) => {
    {
      if (shouldUpdate(next, pre)) {
        cacheRef.value = getValue2();
      }
    }
  });
  return cacheRef;
}
function useMergedState(defaultStateValue, option) {
  const {
    defaultValue,
    value = ref()
  } = option || {};
  let initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  if (value.value !== undefined) {
    initValue = unref(value);
  }
  if (defaultValue !== undefined) {
    initValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
  }
  const innerValue = ref(initValue);
  const mergedValue = ref(initValue);
  watchEffect(() => {
    let val = value.value !== undefined ? value.value : innerValue.value;
    if (option.postState) {
      val = option.postState(val);
    }
    mergedValue.value = val;
  });
  function triggerChange(newValue) {
    const preVal = mergedValue.value;
    innerValue.value = newValue;
    if (toRaw(mergedValue.value) !== newValue && option.onChange) {
      option.onChange(newValue, preVal);
    }
  }
  watch(value, () => {
    innerValue.value = value.value;
  });
  return [mergedValue, triggerChange];
}
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
function createContext(defaultValue) {
  const contextKey = Symbol("contextKey");
  const useProvide = (props, newProps) => {
    const mergedProps = reactive({});
    provide(contextKey, mergedProps);
    watchEffect(() => {
      _extends(mergedProps, props, newProps || {});
    });
    return mergedProps;
  };
  const useInject = () => {
    return inject(contextKey, defaultValue) || {};
  };
  return {
    useProvide,
    useInject
  };
}
const ContextKey = Symbol("ContextProps");
const InternalContextKey = Symbol("InternalContextProps");
const defaultContext = {
  id: computed(() => undefined),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
};
const defaultInternalContext = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
};
const useInjectFormItemContext = () => {
  const internalContext = inject(InternalContextKey, defaultInternalContext);
  const formItemFieldKey = Symbol("FormItemFieldKey");
  const instance = getCurrentInstance();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  provide(InternalContextKey, defaultInternalContext);
  provide(ContextKey, defaultContext);
  return inject(ContextKey, defaultContext);
};
defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    provide(InternalContextKey, defaultInternalContext);
    provide(ContextKey, defaultContext);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots);
    };
  }
});
const FormItemInputContext = createContext({});
defineComponent({
  name: "NoFormStatus",
  setup(_, _ref2) {
    let {
      slots
    } = _ref2;
    FormItemInputContext.useProvide({});
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots);
    };
  }
});
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
const genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
const genSpaceStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
};
const useStyle$4 = genComponentStyleHook("Space", (token) => [genSpaceStyle(token), genSpaceCompactStyle(token)]);
const spaceCompactItemProps = () => ({
  compactSize: String,
  compactDirection: PropTypes.oneOf(tuple$1("horizontal", "vertical")).def("horizontal"),
  isFirstItem: booleanType(),
  isLastItem: booleanType()
});
const SpaceCompactItemContext = createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = SpaceCompactItemContext.useInject();
  const compactItemClassnames = computed(() => {
    if (!compactItemContext || isEmpty(compactItemContext)) return "";
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames({
      [`${prefixCls.value}-compact${separator}item`]: true,
      [`${prefixCls.value}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls.value}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls.value}-compact${separator}item-rtl`]: direction.value === "rtl"
    });
  });
  return {
    compactSize: computed(() => compactItemContext === null || compactItemContext === undefined ? undefined : compactItemContext.compactSize),
    compactDirection: computed(() => compactItemContext === null || compactItemContext === undefined ? undefined : compactItemContext.compactDirection),
    compactItemClassnames
  };
};
defineComponent({
  name: "NoCompactStyle",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    SpaceCompactItemContext.useProvide(null);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots);
    };
  }
});
const spaceCompactProps = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: PropTypes.oneOf(tuple$1("horizontal", "vertical")).def("horizontal"),
  align: PropTypes.oneOf(tuple$1("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: undefined
  }
});
const CompactItem = defineComponent({
  name: "CompactItem",
  props: spaceCompactItemProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    SpaceCompactItemContext.useProvide(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots);
    };
  }
});
const Compact = defineComponent({
  name: "ASpaceCompact",
  inheritAttrs: false,
  props: spaceCompactProps(),
  setup(props, _ref3) {
    let {
      attrs,
      slots
    } = _ref3;
    const {
      prefixCls,
      direction: directionConfig
    } = useConfigInject("space-compact", props);
    const compactItemContext = SpaceCompactItemContext.useInject();
    const [wrapSSR, hashId] = useStyle$4(prefixCls);
    const clx = computed(() => {
      return classNames(prefixCls.value, hashId.value, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
        [`${prefixCls.value}-block`]: props.block,
        [`${prefixCls.value}-vertical`]: props.direction === "vertical"
      });
    });
    return () => {
      var _a;
      const childNodes = flattenChildren(((_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots)) || []);
      if (childNodes.length === 0) {
        return null;
      }
      return wrapSSR(createVNode("div", _objectSpread$9(_objectSpread$9({}, attrs), {}, {
        "class": [clx.value, attrs.class]
      }), [childNodes.map((child, i) => {
        var _a2;
        const key = child && child.key || `${prefixCls.value}-item-${i}`;
        const noCompactItemContext = !compactItemContext || isEmpty(compactItemContext);
        return createVNode(CompactItem, {
          "key": key,
          "compactSize": (_a2 = props.size) !== null && _a2 !== undefined ? _a2 : "middle",
          "compactDirection": props.direction,
          "isFirstItem": i === 0 && (noCompactItemContext || (compactItemContext === null || compactItemContext === undefined ? undefined : compactItemContext.isFirstItem)),
          "isLastItem": i === childNodes.length - 1 && (noCompactItemContext || (compactItemContext === null || compactItemContext === undefined ? undefined : compactItemContext.isLastItem))
        }, {
          default: () => [child]
        });
      })]));
    };
  }
});
const moveDownIn = new Keyframe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const slideUpIn = new Keyframe("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframe("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframe("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframe("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframe("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframe("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframe("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframe("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token.lineWidth
    },
    "&-item": _extends(_extends({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: _extends(_extends({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
const genWaveStyle = (token) => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Wave", (token) => [genWaveStyle(token)]);
const WaveEffect = defineComponent({
  props: {
    target: objectType(),
    className: String
  },
  setup(props) {
    const divRef = shallowRef(null);
    const [color, setWaveColor] = useState(null);
    const [borderRadius, setBorderRadius] = useState([]);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [enabled, setEnabled] = useState(false);
    const removeDom = () => {
      var _a;
      const holder = (_a = divRef.value) === null || _a === undefined ? undefined : _a.parentElement;
      if (holder) {
        render(null, holder);
        if (holder.parentElement) {
          holder.parentElement.removeChild(holder);
        }
      }
    };
    const onTransitionend = (e) => {
      if (e.propertyName === "opacity") {
        removeDom();
      }
    };
    return () => {
      if (!enabled.value) {
        return null;
      }
      const waveStyle = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: borderRadius.value.map((radius) => `${radius}px`).join(" ")
      };
      if (color) {
        waveStyle["--wave-color"] = color.value;
      }
      return createVNode(Transition, {
        "appear": true,
        "name": "wave-motion",
        "appearFromClass": "wave-motion-appear",
        "appearActiveClass": "wave-motion-appear",
        "appearToClass": "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [createVNode("div", {
          "ref": divRef,
          "class": props.className,
          "style": waveStyle,
          "onTransitionend": onTransitionend
        }, null)]
      });
    };
  }
});
function showWaveEffect(node, className) {
  const holder = (undefined).createElement("div");
  holder.style.position = "absolute";
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node === null || node === undefined ? undefined : node.insertBefore(holder, node === null || node === undefined ? undefined : node.firstChild);
  render(createVNode(WaveEffect, {
    "target": node,
    "className": className
  }, null), holder);
  return () => {
    render(null, holder);
    if (holder.parentElement) {
      holder.parentElement.removeChild(holder);
    }
  };
}
function useWave(className, wave) {
  const instance = getCurrentInstance();
  let stopWave;
  function showWave() {
    var _a;
    const node = findDOMNode(instance);
    stopWave === null || stopWave === undefined ? undefined : stopWave();
    if (((_a = wave === null || wave === undefined ? undefined : wave.value) === null || _a === undefined ? undefined : _a.disabled) || !node) {
      return;
    }
    stopWave = showWaveEffect(node, className.value);
  }
  return showWave;
}
const Wave = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    getCurrentInstance();
    const {
      prefixCls,
      wave
    } = useConfigInject("wave", props);
    const [, hashId] = useStyle$3(prefixCls);
    useWave(computed(() => classNames(prefixCls.value, hashId.value)), wave);
    return () => {
      var _a;
      const children = (_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots)[0];
      return children;
    };
  }
});
const buttonProps = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  ghost: {
    type: Boolean,
    default: undefined
  },
  block: {
    type: Boolean,
    default: undefined
  },
  danger: {
    type: Boolean,
    default: undefined
  },
  icon: PropTypes.any,
  href: String,
  target: String,
  title: String,
  onClick: eventType(),
  onMousedown: eventType()
});
const getCollapsedWidth = (node) => {
  if (node) {
    node.style.width = "0px";
    node.style.opacity = "0";
    node.style.transform = "scale(0)";
  }
};
const getRealWidth = (node) => {
  nextTick(() => {
    if (node) {
      node.style.width = `${node.scrollWidth}px`;
      node.style.opacity = "1";
      node.style.transform = "scale(1)";
    }
  });
};
const resetStyle = (node) => {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
const LoadingIcon = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(props) {
    return () => {
      const {
        existIcon,
        prefixCls,
        loading
      } = props;
      if (existIcon) {
        return createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined, null, null)]);
      }
      const visible = !!loading;
      return createVNode(Transition, {
        "name": `${prefixCls}-loading-icon-motion`,
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": (node) => {
          setTimeout(() => {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: () => [visible ? createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined, null, null)]) : null]
      });
    };
  }
});
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = (token) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -lineWidth,
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          [`&:hover,
          &:focus,
          &:active`]: {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: -token.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: _extends(_extends({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
const genSharedButtonStyle = (token) => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: token.lineHeight,
      color: token.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": _extends({}, genFocusStyle(token)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: "inline-block",
            width: token.lineWidth,
            height: `calc(100% + ${token.lineWidth * 2}px)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${token.lineWidth * 2}px)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
  "&:not(:disabled)": {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
const genCircleButtonStyle = (token) => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
const genRoundButtonStyle = (token) => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
const genDisabledStyle$1 = (token) => ({
  cursor: "not-allowed",
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: "none"
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: _extends(_extends({
    color: textColor || undefined,
    backgroundColor: "transparent",
    borderColor: borderColor || undefined,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(_extends({
    backgroundColor: "transparent"
  }, hoverStyle), _extends({
    backgroundColor: "transparent"
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = (token) => ({
  "&:disabled": _extends({}, genDisabledStyle$1(token))
});
const genSolidButtonStyle = (token) => _extends({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = (token) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: token.colorTextDisabled
  }
});
const genDefaultButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorder,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
const genPrimaryButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    backgroundColor: token.colorError,
    boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
const genDashedButtonStyle = (token) => _extends(_extends({}, genDefaultButtonStyle(token)), {
  borderStyle: "dashed"
});
const genLinkButtonStyle = (token) => _extends(_extends(_extends({
  color: token.colorLink
}, genHoverActiveButtonStyle({
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
const genTextButtonStyle = (token) => _extends(_extends(_extends({}, genHoverActiveButtonStyle({
  color: token.colorText,
  backgroundColor: token.colorBgTextHover
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
const genDisabledButtonStyle = (token) => _extends(_extends({}, genDisabledStyle$1(token)), {
  [`&${token.componentCls}:hover`]: _extends({}, genDisabledStyle$1(token))
});
const genTypeButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token),
    [`${componentCls}-disabled`]: genDisabledButtonStyle(token)
  };
};
const genSizeButtonStyle = function(token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    // Size
    {
      [`${componentCls}${sizePrefixCls}`]: {
        fontSize,
        height: controlHeight,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${componentCls}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token.opacityLoading,
          cursor: "default"
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
          marginInlineEnd: token.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
    },
    {
      [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
    }
  ];
};
const genSizeBaseButtonStyle = (token) => genSizeButtonStyle(token);
const genSizeSmallButtonStyle = (token) => {
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token) => {
  const largeToken = merge(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const useStyle$2 = genComponentStyleHook("Button", (token) => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token;
  const buttonToken = merge(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeSmallButtonStyle(buttonToken),
    genSizeBaseButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, disabled, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    genGroupStyle(buttonToken),
    // Space Compact
    genCompactItemStyle(token, {
      focus: false
    }),
    genCompactItemVerticalStyle(token)
  ];
});
const buttonGroupProps = () => ({
  prefixCls: String,
  size: {
    type: String
  }
});
const GroupSizeContext = createContext();
const ButtonGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("btn-group", props);
    const [, , hashId] = useToken();
    GroupSizeContext.useProvide(reactive({
      size: computed(() => props.size)
    }));
    const classes = computed(() => {
      const {
        size
      } = props;
      let sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        case "middle":
        case undefined:
          break;
        default:
          devWarning(!size, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-${sizeCls}`]: sizeCls,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [hashId.value]: true
      };
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots))]);
    };
  }
});
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
const Button = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(buttonProps(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit,
      expose
    } = _ref;
    const {
      prefixCls,
      autoInsertSpaceInButton,
      direction,
      size
    } = useConfigInject("btn", props);
    const [wrapSSR, hashId] = useStyle$2(prefixCls);
    const groupSizeContext = GroupSizeContext.useInject();
    const disabledContext = useInjectDisabled();
    const mergedDisabled = computed(() => {
      var _a;
      return (_a = props.disabled) !== null && _a !== undefined ? _a : disabledContext.value;
    });
    const buttonNodeRef = shallowRef(null);
    const delayTimeoutRef = shallowRef(undefined);
    let isNeedInserted = false;
    const innerLoading = shallowRef(false);
    const hasTwoCNChar = shallowRef(false);
    const autoInsertSpace = computed(() => autoInsertSpaceInButton.value !== false);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const loadingOrDelay = computed(() => typeof props.loading === "object" && props.loading.delay ? props.loading.delay || true : !!props.loading);
    watch(loadingOrDelay, (val) => {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = setTimeout(() => {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    const classes = computed(() => {
      const {
        type,
        shape = "default",
        ghost,
        block,
        danger
      } = props;
      const pre = prefixCls.value;
      const sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: undefined
      };
      const sizeFullname = compactSize.value || (groupSizeContext === null || groupSizeContext === undefined ? undefined : groupSizeContext.size) || size.value;
      const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
      return [compactItemClassnames.value, {
        [hashId.value]: true,
        [`${pre}`]: true,
        [`${pre}-${shape}`]: shape !== "default" && shape,
        [`${pre}-${type}`]: type,
        [`${pre}-${sizeCls}`]: sizeCls,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
        [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
        [`${pre}-rtl`]: direction.value === "rtl"
      }];
    });
    const handleClick = (event) => {
      if (innerLoading.value || mergedDisabled.value) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    const handleMousedown = (event) => {
      emit("mousedown", event);
    };
    const insertSpace = (child, needInserted) => {
      const SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        let text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(() => {
      devWarning(!(props.ghost && isUnBorderedButtonType(props.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    const focus = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === undefined ? undefined : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === undefined ? undefined : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return () => {
      var _a, _b;
      const {
        icon = (_a = slots.icon) === null || _a === undefined ? undefined : _a.call(slots)
      } = props;
      const children = flattenChildren((_b = slots.default) === null || _b === undefined ? undefined : _b.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnBorderedButtonType(props.type);
      const {
        type,
        htmlType,
        href,
        title,
        target
      } = props;
      const iconType = innerLoading.value ? "loading" : icon;
      const buttonProps2 = _extends(_extends({}, attrs), {
        title,
        disabled: mergedDisabled.value,
        class: [classes.value, attrs.class, {
          [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType
        }],
        onClick: handleClick,
        onMousedown: handleMousedown
      });
      if (!mergedDisabled.value) {
        delete buttonProps2.disabled;
      }
      const iconNode = icon && !innerLoading.value ? icon : createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      const kids = children.map((child) => insertSpace(child, isNeedInserted && autoInsertSpace.value));
      if (href !== undefined) {
        return wrapSSR(createVNode("a", _objectSpread$9(_objectSpread$9({}, buttonProps2), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]));
      }
      let buttonNode = createVNode("button", _objectSpread$9(_objectSpread$9({}, buttonProps2), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (!isUnBorderedButtonType(type)) {
        const _buttonNode = /* @__PURE__ */ function() {
          return buttonNode;
        }();
        buttonNode = createVNode(Wave, {
          "ref": "wave",
          "disabled": !!innerLoading.value
        }, {
          default: () => [_buttonNode]
        });
      }
      return wrapSSR(buttonNode);
    };
  }
});
Button.Group = ButtonGroup;
Button.install = function(app) {
  app.component(Button.name, Button);
  app.component(ButtonGroup.name, ButtonGroup);
  return app;
};
function shallowEqual(objA, objB, compare, compareContext) {
  let ret = undefined;
  if (ret !== undefined) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    ret = undefined;
    if (ret === false || ret === undefined && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function shallowequal(value, other) {
  return shallowEqual(toRaw(value), toRaw(other));
}
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(quarterOfYear);
dayjs.extend((_o, c) => {
  const proto = c.prototype;
  const oldFormat = proto.format;
  proto.format = function f(formatStr) {
    const str = (formatStr || "").replace("Wo", "wo");
    return oldFormat.bind(this)(str);
  };
});
const localeMap = {
  // ar_EG:
  // az_AZ:
  // bg_BG:
  bn_BD: "bn-bd",
  by_BY: "be",
  // ca_ES:
  // cs_CZ:
  // da_DK:
  // de_DE:
  // el_GR:
  en_GB: "en-gb",
  en_US: "en",
  // es_ES:
  // et_EE:
  // fa_IR:
  // fi_FI:
  fr_BE: "fr",
  fr_CA: "fr-ca",
  // fr_FR:
  // ga_IE:
  // gl_ES:
  // he_IL:
  // hi_IN:
  // hr_HR:
  // hu_HU:
  hy_AM: "hy-am",
  // id_ID:
  // is_IS:
  // it_IT:
  // ja_JP:
  // ka_GE:
  // kk_KZ:
  // km_KH:
  kmr_IQ: "ku",
  // kn_IN:
  // ko_KR:
  // ku_IQ: // previous ku in antd
  // lt_LT:
  // lv_LV:
  // mk_MK:
  // ml_IN:
  // mn_MN:
  // ms_MY:
  // nb_NO:
  // ne_NP:
  nl_BE: "nl-be",
  // nl_NL:
  // pl_PL:
  pt_BR: "pt-br",
  // pt_PT:
  // ro_RO:
  // ru_RU:
  // sk_SK:
  // sl_SI:
  // sr_RS:
  // sv_SE:
  // ta_IN:
  // th_TH:
  // tr_TR:
  // uk_UA:
  // ur_PK:
  // vi_VN:
  zh_CN: "zh-cn",
  zh_HK: "zh-hk",
  zh_TW: "zh-tw"
};
const parseLocale = (locale2) => {
  const mapLocale = localeMap[locale2];
  return mapLocale || locale2.split("_")[0];
};
const parseNoMatchNotice = () => {
  noteOnce(false, "Not match any format. Please help to fire a issue about this.");
};
const advancedFormatRegex = /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|k{1,2}|S/g;
function findTargetStr(val, index, segmentation) {
  const items = [...new Set(val.split(segmentation))];
  let idx = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    idx += item.length;
    if (idx > index) {
      return item;
    }
    idx += segmentation.length;
  }
}
const toDateWithValueFormat = (val, valueFormat) => {
  if (!val) return null;
  if (dayjs.isDayjs(val)) {
    return val;
  }
  const matchs = valueFormat.matchAll(advancedFormatRegex);
  let baseDate = dayjs(val, valueFormat);
  if (matchs === null) {
    return baseDate;
  }
  for (const match of matchs) {
    const origin = match[0];
    const index = match["index"];
    if (origin === "Q") {
      const segmentation = val.slice(index - 1, index);
      const quarterStr = findTargetStr(val, index, segmentation).match(/\d+/)[0];
      baseDate = baseDate.quarter(parseInt(quarterStr));
    }
    if (origin.toLowerCase() === "wo") {
      const segmentation = val.slice(index - 1, index);
      const weekStr = findTargetStr(val, index, segmentation).match(/\d+/)[0];
      baseDate = baseDate.week(parseInt(weekStr));
    }
    if (origin.toLowerCase() === "ww") {
      baseDate = baseDate.week(parseInt(val.slice(index, index + origin.length)));
    }
    if (origin.toLowerCase() === "w") {
      baseDate = baseDate.week(parseInt(val.slice(index, index + origin.length + 1)));
    }
  }
  return baseDate;
};
const generateConfig = {
  // get
  getNow: () => dayjs(),
  getFixedDate: (string) => dayjs(string, ["YYYY-M-DD", "YYYY-MM-DD"]),
  getEndDate: (date) => date.endOf("month"),
  getWeekDay: (date) => {
    const clone = date.locale("en");
    return clone.weekday() + clone.localeData().firstDayOfWeek();
  },
  getYear: (date) => date.year(),
  getMonth: (date) => date.month(),
  getDate: (date) => date.date(),
  getHour: (date) => date.hour(),
  getMinute: (date) => date.minute(),
  getSecond: (date) => date.second(),
  // set
  addYear: (date, diff) => date.add(diff, "year"),
  addMonth: (date, diff) => date.add(diff, "month"),
  addDate: (date, diff) => date.add(diff, "day"),
  setYear: (date, year) => date.year(year),
  setMonth: (date, month) => date.month(month),
  setDate: (date, num) => date.date(num),
  setHour: (date, hour) => date.hour(hour),
  setMinute: (date, minute) => date.minute(minute),
  setSecond: (date, second) => date.second(second),
  // Compare
  isAfter: (date1, date2) => date1.isAfter(date2),
  isValidate: (date) => date.isValid(),
  locale: {
    getWeekFirstDay: (locale2) => dayjs().locale(parseLocale(locale2)).localeData().firstDayOfWeek(),
    getWeekFirstDate: (locale2, date) => date.locale(parseLocale(locale2)).weekday(0),
    getWeek: (locale2, date) => date.locale(parseLocale(locale2)).week(),
    getShortWeekDays: (locale2) => dayjs().locale(parseLocale(locale2)).localeData().weekdaysMin(),
    getShortMonths: (locale2) => dayjs().locale(parseLocale(locale2)).localeData().monthsShort(),
    format: (locale2, date, format) => date.locale(parseLocale(locale2)).format(format),
    parse: (locale2, text, formats) => {
      const localeStr = parseLocale(locale2);
      for (let i = 0; i < formats.length; i += 1) {
        const format = formats[i];
        const formatText = text;
        if (format.includes("wo") || format.includes("Wo")) {
          const year = formatText.split("-")[0];
          const weekStr = formatText.split("-")[1];
          const firstWeek = dayjs(year, "YYYY").startOf("year").locale(localeStr);
          for (let j = 0; j <= 52; j += 1) {
            const nextWeek = firstWeek.add(j, "week");
            if (nextWeek.format("Wo") === weekStr) {
              return nextWeek;
            }
          }
          parseNoMatchNotice();
          return null;
        }
        const date = dayjs(formatText, format, true).locale(localeStr);
        if (date.isValid()) {
          return date;
        }
      }
      if (!text) {
        parseNoMatchNotice();
      }
      return null;
    }
  },
  toDate: (value, valueFormat) => {
    if (Array.isArray(value)) {
      return value.map((val) => toDateWithValueFormat(val, valueFormat));
    } else {
      return toDateWithValueFormat(value, valueFormat);
    }
  },
  toString: (value, valueFormat) => {
    if (Array.isArray(value)) {
      return value.map((val) => dayjs.isDayjs(val) ? val.format(valueFormat) : val);
    } else {
      return dayjs.isDayjs(value) ? value.format(valueFormat) : value;
    }
  }
};
function useMergeProps(props) {
  const attrs = useAttrs();
  return _extends(_extends({}, props), attrs);
}
const PanelContextKey = Symbol("PanelContextProps");
const useProvidePanel = (props) => {
  provide(PanelContextKey, props);
};
const useInjectPanel = () => {
  return inject(PanelContextKey, {});
};
const HIDDEN_STYLE = {
  visibility: "hidden"
};
function Header(_props, _ref) {
  let {
    slots
  } = _ref;
  var _a;
  const props = useMergeProps(_props);
  const {
    prefixCls,
    prevIcon = "\u2039",
    nextIcon = "\u203A",
    superPrevIcon = "\xAB",
    superNextIcon = "\xBB",
    onSuperPrev,
    onSuperNext,
    onPrev,
    onNext
  } = props;
  const {
    hideNextBtn,
    hidePrevBtn
  } = useInjectPanel();
  return createVNode("div", {
    "class": prefixCls
  }, [onSuperPrev && createVNode("button", {
    "type": "button",
    "onClick": onSuperPrev,
    "tabindex": -1,
    "class": `${prefixCls}-super-prev-btn`,
    "style": hidePrevBtn.value ? HIDDEN_STYLE : {}
  }, [superPrevIcon]), onPrev && createVNode("button", {
    "type": "button",
    "onClick": onPrev,
    "tabindex": -1,
    "class": `${prefixCls}-prev-btn`,
    "style": hidePrevBtn.value ? HIDDEN_STYLE : {}
  }, [prevIcon]), createVNode("div", {
    "class": `${prefixCls}-view`
  }, [(_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots)]), onNext && createVNode("button", {
    "type": "button",
    "onClick": onNext,
    "tabindex": -1,
    "class": `${prefixCls}-next-btn`,
    "style": hideNextBtn.value ? HIDDEN_STYLE : {}
  }, [nextIcon]), onSuperNext && createVNode("button", {
    "type": "button",
    "onClick": onSuperNext,
    "tabindex": -1,
    "class": `${prefixCls}-super-next-btn`,
    "style": hideNextBtn.value ? HIDDEN_STYLE : {}
  }, [superNextIcon])]);
}
Header.displayName = "Header";
Header.inheritAttrs = false;
function DecadeHeader(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig: generateConfig2,
    viewDate,
    onPrevDecades,
    onNextDecades
  } = props;
  const {
    hideHeader
  } = useInjectPanel();
  if (hideHeader) {
    return null;
  }
  const headerPrefixCls = `${prefixCls}-header`;
  const yearNumber = generateConfig2.getYear(viewDate);
  const startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  const endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return createVNode(Header, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecades,
    "onSuperNext": onNextDecades
  }), {
    default: () => [startYear, createTextVNode("-"), endYear]
  });
}
DecadeHeader.displayName = "DecadeHeader";
DecadeHeader.inheritAttrs = false;
function setTime(generateConfig2, date, hour, minute, second) {
  let nextTime = generateConfig2.setHour(date, hour);
  nextTime = generateConfig2.setMinute(nextTime, minute);
  nextTime = generateConfig2.setSecond(nextTime, second);
  return nextTime;
}
function setDateTime(generateConfig2, date, defaultDate) {
  if (!defaultDate) {
    return date;
  }
  let newDate = date;
  newDate = generateConfig2.setHour(newDate, generateConfig2.getHour(defaultDate));
  newDate = generateConfig2.setMinute(newDate, generateConfig2.getMinute(defaultDate));
  newDate = generateConfig2.setSecond(newDate, generateConfig2.getSecond(defaultDate));
  return newDate;
}
function getLowerBoundTime(hour, minute, second, hourStep, minuteStep, secondStep) {
  const lowerBoundHour = Math.floor(hour / hourStep) * hourStep;
  if (lowerBoundHour < hour) {
    return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
  }
  const lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;
  if (lowerBoundMinute < minute) {
    return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
  }
  const lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
  return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
}
function getLastDay(generateConfig2, date) {
  const year = generateConfig2.getYear(date);
  const month = generateConfig2.getMonth(date) + 1;
  const endDate = generateConfig2.getEndDate(generateConfig2.getFixedDate(`${year}-${month}-01`));
  const lastDay = generateConfig2.getDate(endDate);
  const monthShow = month < 10 ? `0${month}` : `${month}`;
  return `${year}-${monthShow}-${lastDay}`;
}
function PanelBody(_props) {
  const {
    prefixCls,
    disabledDate,
    onSelect,
    picker,
    rowNum,
    colNum,
    prefixColumn,
    rowClassName,
    baseDate,
    getCellClassName,
    getCellText,
    getCellNode,
    getCellDate,
    generateConfig: generateConfig2,
    titleCell,
    headerCells
  } = useMergeProps(_props);
  const {
    onDateMouseenter,
    onDateMouseleave,
    mode
  } = useInjectPanel();
  const cellPrefixCls = `${prefixCls}-cell`;
  const rows = [];
  for (let i = 0; i < rowNum; i += 1) {
    const row = [];
    let rowStartDate;
    for (let j = 0; j < colNum; j += 1) {
      const offset = i * colNum + j;
      const currentDate = getCellDate(baseDate, offset);
      const disabled = getCellDateDisabled({
        cellDate: currentDate,
        mode: mode.value,
        disabledDate,
        generateConfig: generateConfig2
      });
      if (j === 0) {
        rowStartDate = currentDate;
        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }
      const title = titleCell && titleCell(currentDate);
      row.push(createVNode("td", {
        "key": j,
        "title": title,
        "class": classNames(cellPrefixCls, _extends({
          [`${cellPrefixCls}-disabled`]: disabled,
          [`${cellPrefixCls}-start`]: getCellText(currentDate) === 1 || picker === "year" && Number(title) % 10 === 0,
          [`${cellPrefixCls}-end`]: title === getLastDay(generateConfig2, currentDate) || picker === "year" && Number(title) % 10 === 9
        }, getCellClassName(currentDate))),
        "onClick": (e) => {
          e.stopPropagation();
          if (!disabled) {
            onSelect(currentDate);
          }
        },
        "onMouseenter": () => {
          if (!disabled && onDateMouseenter) {
            onDateMouseenter(currentDate);
          }
        },
        "onMouseleave": () => {
          if (!disabled && onDateMouseleave) {
            onDateMouseleave(currentDate);
          }
        }
      }, [getCellNode ? getCellNode(currentDate) : createVNode("div", {
        "class": `${cellPrefixCls}-inner`
      }, [getCellText(currentDate)])]));
    }
    rows.push(createVNode("tr", {
      "key": i,
      "class": rowClassName && rowClassName(rowStartDate)
    }, [row]));
  }
  return createVNode("div", {
    "class": `${prefixCls}-body`
  }, [createVNode("table", {
    "class": `${prefixCls}-content`
  }, [headerCells && createVNode("thead", null, [createVNode("tr", null, [headerCells])]), createVNode("tbody", null, [rows])])]);
}
PanelBody.displayName = "PanelBody";
PanelBody.inheritAttrs = false;
const DECADE_COL_COUNT = 3;
const DECADE_ROW_COUNT = 4;
function DecadeBody(_props) {
  const props = useMergeProps(_props);
  const DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;
  const {
    prefixCls,
    viewDate,
    generateConfig: generateConfig2
  } = props;
  const cellPrefixCls = `${prefixCls}-cell`;
  const yearNumber = generateConfig2.getYear(viewDate);
  const decadeYearNumber = Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
  const startDecadeYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  const endDecadeYear = startDecadeYear + DECADE_DISTANCE_COUNT - 1;
  const baseDecadeYear = generateConfig2.setYear(viewDate, startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF - DECADE_DISTANCE_COUNT) / 2));
  const getCellClassName = (date) => {
    const startDecadeNumber = generateConfig2.getYear(date);
    const endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return {
      [`${cellPrefixCls}-in-view`]: startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear,
      [`${cellPrefixCls}-selected`]: startDecadeNumber === decadeYearNumber
    };
  };
  return createVNode(PanelBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "rowNum": DECADE_ROW_COUNT,
    "colNum": DECADE_COL_COUNT,
    "baseDate": baseDecadeYear,
    "getCellText": (date) => {
      const startDecadeNumber = generateConfig2.getYear(date);
      return `${startDecadeNumber}-${startDecadeNumber + DECADE_UNIT_DIFF_DES}`;
    },
    "getCellClassName": getCellClassName,
    "getCellDate": (date, offset) => generateConfig2.addYear(date, offset * DECADE_UNIT_DIFF)
  }), null);
}
DecadeBody.displayName = "DecadeBody";
DecadeBody.inheritAttrs = false;
const scrollIds = /* @__PURE__ */ new Map();
function waitElementReady(element, callback) {
  let id;
  function tryOrNextFrame() {
    if (isVisible(element)) {
      callback();
    } else {
      id = wrapperRaf(() => {
        tryOrNextFrame();
      });
    }
  }
  tryOrNextFrame();
  return () => {
    wrapperRaf.cancel(id);
  };
}
function scrollTo(element, to, duration) {
  if (scrollIds.get(element)) {
    wrapperRaf.cancel(scrollIds.get(element));
  }
  if (duration <= 0) {
    scrollIds.set(element, wrapperRaf(() => {
      element.scrollTop = to;
    }));
    return;
  }
  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;
  scrollIds.set(element, wrapperRaf(() => {
    element.scrollTop += perTick;
    if (element.scrollTop !== to) {
      scrollTo(element, to, duration - 10);
    }
  }));
}
function createKeydownHandler(event, _ref) {
  let {
    onLeftRight,
    onCtrlLeftRight,
    onUpDown,
    onPageUpDown,
    onEnter
  } = _ref;
  const {
    which,
    ctrlKey,
    metaKey
  } = event;
  switch (which) {
    case KeyCode.LEFT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(-1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(-1);
        return true;
      }
      break;
    case KeyCode.RIGHT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(1);
        return true;
      }
      break;
    case KeyCode.UP:
      if (onUpDown) {
        onUpDown(-1);
        return true;
      }
      break;
    case KeyCode.DOWN:
      if (onUpDown) {
        onUpDown(1);
        return true;
      }
      break;
    case KeyCode.PAGE_UP:
      if (onPageUpDown) {
        onPageUpDown(-1);
        return true;
      }
      break;
    case KeyCode.PAGE_DOWN:
      if (onPageUpDown) {
        onPageUpDown(1);
        return true;
      }
      break;
    case KeyCode.ENTER:
      if (onEnter) {
        onEnter();
        return true;
      }
      break;
  }
  return false;
}
function getDefaultFormat(format, picker, showTime, use12Hours) {
  let mergedFormat = format;
  if (!mergedFormat) {
    switch (picker) {
      case "time":
        mergedFormat = use12Hours ? "hh:mm:ss a" : "HH:mm:ss";
        break;
      case "week":
        mergedFormat = "gggg-wo";
        break;
      case "month":
        mergedFormat = "YYYY-MM";
        break;
      case "quarter":
        mergedFormat = "YYYY-[Q]Q";
        break;
      case "year":
        mergedFormat = "YYYY";
        break;
      default:
        mergedFormat = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    }
  }
  return mergedFormat;
}
function getInputSize(picker, format, generateConfig2) {
  const defaultSize = picker === "time" ? 8 : 10;
  const length = typeof format === "function" ? format(generateConfig2.getNow()).length : format.length;
  return Math.max(defaultSize, length) + 2;
}
const getYearNextMode = (next) => {
  if (next === "month" || next === "date") {
    return "year";
  }
  return next;
};
const getMonthNextMode = (next) => {
  if (next === "date") {
    return "month";
  }
  return next;
};
const getQuarterNextMode = (next) => {
  if (next === "month" || next === "date") {
    return "quarter";
  }
  return next;
};
const getWeekNextMode = (next) => {
  if (next === "date") {
    return "week";
  }
  return next;
};
const PickerModeMap = {
  year: getYearNextMode,
  month: getMonthNextMode,
  quarter: getQuarterNextMode,
  week: getWeekNextMode,
  time: null,
  date: null
};
function elementsContains(elements, target) {
  return elements.some((ele) => ele && ele.contains(target));
}
const DECADE_UNIT_DIFF = 10;
const DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;
function DecadePanel(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    onViewDateChange,
    generateConfig: generateConfig2,
    viewDate,
    operationRef,
    onSelect,
    onPanelChange
  } = props;
  const panelPrefixCls = `${prefixCls}-decade-panel`;
  operationRef.value = {
    onKeydown: (event) => createKeydownHandler(event, {
      onLeftRight: (diff) => {
        onSelect(generateConfig2.addYear(viewDate, diff * DECADE_UNIT_DIFF), "key");
      },
      onCtrlLeftRight: (diff) => {
        onSelect(generateConfig2.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), "key");
      },
      onUpDown: (diff) => {
        onSelect(generateConfig2.addYear(viewDate, diff * DECADE_UNIT_DIFF * DECADE_COL_COUNT), "key");
      },
      onEnter: () => {
        onPanelChange("year", viewDate);
      }
    })
  };
  const onDecadesChange = (diff) => {
    const newDate = generateConfig2.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  const onInternalSelect = (date) => {
    onSelect(date, "mouse");
    onPanelChange("year", date);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(DecadeHeader, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecades": () => {
      onDecadesChange(-1);
    },
    "onNextDecades": () => {
      onDecadesChange(1);
    }
  }), null), createVNode(DecadeBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": onInternalSelect
  }), null)]);
}
DecadePanel.displayName = "DecadePanel";
DecadePanel.inheritAttrs = false;
const WEEK_DAY_COUNT = 7;
function isNullEqual(value1, value2) {
  if (!value1 && !value2) {
    return true;
  }
  if (!value1 || !value2) {
    return false;
  }
  return undefined;
}
function isSameDecade(generateConfig2, decade1, decade2) {
  const equal = isNullEqual(decade1, decade2);
  if (typeof equal === "boolean") {
    return equal;
  }
  const num1 = Math.floor(generateConfig2.getYear(decade1) / 10);
  const num2 = Math.floor(generateConfig2.getYear(decade2) / 10);
  return num1 === num2;
}
function isSameYear(generateConfig2, year1, year2) {
  const equal = isNullEqual(year1, year2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getYear(year1) === generateConfig2.getYear(year2);
}
function getQuarter(generateConfig2, date) {
  const quota = Math.floor(generateConfig2.getMonth(date) / 3);
  return quota + 1;
}
function isSameQuarter(generateConfig2, quarter1, quarter2) {
  const equal = isNullEqual(quarter1, quarter2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return isSameYear(generateConfig2, quarter1, quarter2) && getQuarter(generateConfig2, quarter1) === getQuarter(generateConfig2, quarter2);
}
function isSameMonth(generateConfig2, month1, month2) {
  const equal = isNullEqual(month1, month2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return isSameYear(generateConfig2, month1, month2) && generateConfig2.getMonth(month1) === generateConfig2.getMonth(month2);
}
function isSameDate(generateConfig2, date1, date2) {
  const equal = isNullEqual(date1, date2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getYear(date1) === generateConfig2.getYear(date2) && generateConfig2.getMonth(date1) === generateConfig2.getMonth(date2) && generateConfig2.getDate(date1) === generateConfig2.getDate(date2);
}
function isSameTime(generateConfig2, time1, time2) {
  const equal = isNullEqual(time1, time2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getHour(time1) === generateConfig2.getHour(time2) && generateConfig2.getMinute(time1) === generateConfig2.getMinute(time2) && generateConfig2.getSecond(time1) === generateConfig2.getSecond(time2);
}
function isSameWeek(generateConfig2, locale2, date1, date2) {
  const equal = isNullEqual(date1, date2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.locale.getWeek(locale2, date1) === generateConfig2.locale.getWeek(locale2, date2);
}
function isEqual(generateConfig2, value1, value2) {
  return isSameDate(generateConfig2, value1, value2) && isSameTime(generateConfig2, value1, value2);
}
function isInRange(generateConfig2, startDate, endDate, current) {
  if (!startDate || !endDate || !current) {
    return false;
  }
  return !isSameDate(generateConfig2, startDate, current) && !isSameDate(generateConfig2, endDate, current) && generateConfig2.isAfter(current, startDate) && generateConfig2.isAfter(endDate, current);
}
function getWeekStartDate(locale2, generateConfig2, value) {
  const weekFirstDay = generateConfig2.locale.getWeekFirstDay(locale2);
  const monthStartDate = generateConfig2.setDate(value, 1);
  const startDateWeekDay = generateConfig2.getWeekDay(monthStartDate);
  let alignStartDate = generateConfig2.addDate(monthStartDate, weekFirstDay - startDateWeekDay);
  if (generateConfig2.getMonth(alignStartDate) === generateConfig2.getMonth(value) && generateConfig2.getDate(alignStartDate) > 1) {
    alignStartDate = generateConfig2.addDate(alignStartDate, -7);
  }
  return alignStartDate;
}
function getClosingViewDate(viewDate, picker, generateConfig2) {
  let offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  switch (picker) {
    case "year":
      return generateConfig2.addYear(viewDate, offset * 10);
    case "quarter":
    case "month":
      return generateConfig2.addYear(viewDate, offset);
    default:
      return generateConfig2.addMonth(viewDate, offset);
  }
}
function formatValue(value, _ref) {
  let {
    generateConfig: generateConfig2,
    locale: locale2,
    format
  } = _ref;
  return typeof format === "function" ? format(value) : generateConfig2.locale.format(locale2.locale, value, format);
}
function parseValue(value, _ref2) {
  let {
    generateConfig: generateConfig2,
    locale: locale2,
    formatList
  } = _ref2;
  if (!value || typeof formatList[0] === "function") {
    return null;
  }
  return generateConfig2.locale.parse(locale2.locale, value, formatList);
}
function getCellDateDisabled(_ref3) {
  let {
    cellDate,
    mode,
    disabledDate,
    generateConfig: generateConfig2
  } = _ref3;
  if (!disabledDate) return false;
  const getDisabledFromRange = (currentMode, start, end) => {
    let current = start;
    while (current <= end) {
      let date;
      switch (currentMode) {
        case "date": {
          date = generateConfig2.setDate(cellDate, current);
          if (!disabledDate(date)) {
            return false;
          }
          break;
        }
        case "month": {
          date = generateConfig2.setMonth(cellDate, current);
          if (!getCellDateDisabled({
            cellDate: date,
            mode: "month",
            generateConfig: generateConfig2,
            disabledDate
          })) {
            return false;
          }
          break;
        }
        case "year": {
          date = generateConfig2.setYear(cellDate, current);
          if (!getCellDateDisabled({
            cellDate: date,
            mode: "year",
            generateConfig: generateConfig2,
            disabledDate
          })) {
            return false;
          }
          break;
        }
      }
      current += 1;
    }
    return true;
  };
  switch (mode) {
    case "date":
    case "week": {
      return disabledDate(cellDate);
    }
    case "month": {
      const startDate = 1;
      const endDate = generateConfig2.getDate(generateConfig2.getEndDate(cellDate));
      return getDisabledFromRange("date", startDate, endDate);
    }
    case "quarter": {
      const startMonth = Math.floor(generateConfig2.getMonth(cellDate) / 3) * 3;
      const endMonth = startMonth + 2;
      return getDisabledFromRange("month", startMonth, endMonth);
    }
    case "year": {
      return getDisabledFromRange("month", 0, 11);
    }
    case "decade": {
      const year = generateConfig2.getYear(cellDate);
      const startYear = Math.floor(year / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
      const endYear = startYear + DECADE_UNIT_DIFF - 1;
      return getDisabledFromRange("year", startYear, endYear);
    }
  }
}
function TimeHeader(_props) {
  const props = useMergeProps(_props);
  const {
    hideHeader
  } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }
  const {
    prefixCls,
    generateConfig: generateConfig2,
    locale: locale2,
    value,
    format
  } = props;
  const headerPrefixCls = `${prefixCls}-header`;
  return createVNode(Header, {
    "prefixCls": headerPrefixCls
  }, {
    default: () => [value ? formatValue(value, {
      locale: locale2,
      format,
      generateConfig: generateConfig2
    }) : "\xA0"]
  });
}
TimeHeader.displayName = "TimeHeader";
TimeHeader.inheritAttrs = false;
const TimeUnitColumn = defineComponent({
  name: "TimeUnitColumn",
  props: ["prefixCls", "units", "onSelect", "value", "active", "hideDisabledOptions"],
  setup(props) {
    const {
      open
    } = useInjectPanel();
    const ulRef = shallowRef(null);
    const liRefs = ref(/* @__PURE__ */ new Map());
    const scrollRef = ref();
    watch(() => props.value, () => {
      const li = liRefs.value.get(props.value);
      if (li && open.value !== false) {
        scrollTo(ulRef.value, li.offsetTop, 120);
      }
    });
    watch(open, () => {
      var _a;
      (_a = scrollRef.value) === null || _a === undefined ? undefined : _a.call(scrollRef);
      nextTick(() => {
        if (open.value) {
          const li = liRefs.value.get(props.value);
          if (li) {
            scrollRef.value = waitElementReady(li, () => {
              scrollTo(ulRef.value, li.offsetTop, 0);
            });
          }
        }
      });
    }, {
      immediate: true,
      flush: "post"
    });
    return () => {
      const {
        prefixCls,
        units,
        onSelect,
        value,
        active,
        hideDisabledOptions
      } = props;
      const cellPrefixCls = `${prefixCls}-cell`;
      return createVNode("ul", {
        "class": classNames(`${prefixCls}-column`, {
          [`${prefixCls}-column-active`]: active
        }),
        "ref": ulRef,
        "style": {
          position: "relative"
        }
      }, [units.map((unit) => {
        if (hideDisabledOptions && unit.disabled) {
          return null;
        }
        return createVNode("li", {
          "key": unit.value,
          "ref": (element) => {
            liRefs.value.set(unit.value, element);
          },
          "class": classNames(cellPrefixCls, {
            [`${cellPrefixCls}-disabled`]: unit.disabled,
            [`${cellPrefixCls}-selected`]: value === unit.value
          }),
          "onClick": () => {
            if (unit.disabled) {
              return;
            }
            onSelect(unit.value);
          }
        }, [createVNode("div", {
          "class": `${cellPrefixCls}-inner`
        }, [unit.label])]);
      })]);
    };
  }
});
function leftPad(str, length) {
  let fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
  let current = String(str);
  while (current.length < length) {
    current = `${fill}${str}`;
  }
  return current;
}
const tuple = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
function toArray$1(val) {
  if (val === null || val === undefined) {
    return [];
  }
  return Array.isArray(val) ? val : [val];
}
function getDataOrAriaProps(props) {
  const retProps = {};
  Object.keys(props).forEach((key) => {
    if ((key.startsWith("data-") || key.startsWith("aria-") || key === "role" || key === "name") && !key.startsWith("data-__")) {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
function getValue(values, index) {
  return values ? values[index] : null;
}
function updateValues(values, value, index) {
  const newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index] = typeof value === "function" ? value(newValues[index]) : value;
  if (!newValues[0] && !newValues[1]) {
    return null;
  }
  return newValues;
}
function generateUnits(start, end, step, disabledUnits) {
  const units = [];
  for (let i = start; i <= end; i += step) {
    units.push({
      label: leftPad(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i)
    });
  }
  return units;
}
const TimeBody = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TimeBody",
  inheritAttrs: false,
  props: ["generateConfig", "prefixCls", "operationRef", "activeColumnIndex", "value", "showHour", "showMinute", "showSecond", "use12Hours", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "disabledTime", "hideDisabledOptions", "onSelect"],
  setup(props) {
    const originHour = computed(() => props.value ? props.generateConfig.getHour(props.value) : -1);
    const isPM = computed(() => {
      if (props.use12Hours) {
        return originHour.value >= 12;
      } else {
        return false;
      }
    });
    const hour = computed(() => {
      if (props.use12Hours) {
        return originHour.value % 12;
      } else {
        return originHour.value;
      }
    });
    const minute = computed(() => props.value ? props.generateConfig.getMinute(props.value) : -1);
    const second = computed(() => props.value ? props.generateConfig.getSecond(props.value) : -1);
    const now = ref(props.generateConfig.getNow());
    const mergedDisabledHours = ref();
    const mergedDisabledMinutes = ref();
    const mergedDisabledSeconds = ref();
    watchEffect(() => {
      if (props.disabledTime) {
        const disabledConfig = props.disabledTime(now);
        [mergedDisabledHours.value, mergedDisabledMinutes.value, mergedDisabledSeconds.value] = [disabledConfig.disabledHours, disabledConfig.disabledMinutes, disabledConfig.disabledSeconds];
      } else {
        [mergedDisabledHours.value, mergedDisabledMinutes.value, mergedDisabledSeconds.value] = [props.disabledHours, props.disabledMinutes, props.disabledSeconds];
      }
    });
    const setTime$1 = (isNewPM, newHour, newMinute, newSecond) => {
      let newDate = props.value || props.generateConfig.getNow();
      const mergedHour = Math.max(0, newHour);
      const mergedMinute = Math.max(0, newMinute);
      const mergedSecond = Math.max(0, newSecond);
      newDate = setTime(props.generateConfig, newDate, !props.use12Hours || !isNewPM ? mergedHour : mergedHour + 12, mergedMinute, mergedSecond);
      return newDate;
    };
    const rawHours = computed(() => {
      var _a;
      return generateUnits(0, 23, (_a = props.hourStep) !== null && _a !== undefined ? _a : 1, mergedDisabledHours.value && mergedDisabledHours.value());
    });
    const AMPMDisabled = computed(() => {
      if (!props.use12Hours) {
        return [false, false];
      }
      const AMPMDisabled2 = [true, true];
      rawHours.value.forEach((_ref) => {
        let {
          disabled,
          value: hourValue
        } = _ref;
        if (disabled) return;
        if (hourValue >= 12) {
          AMPMDisabled2[1] = false;
        } else {
          AMPMDisabled2[0] = false;
        }
      });
      return AMPMDisabled2;
    });
    const hours = computed(() => {
      if (!props.use12Hours) return rawHours.value;
      return rawHours.value.filter(isPM.value ? (hourMeta) => hourMeta.value >= 12 : (hourMeta) => hourMeta.value < 12).map((hourMeta) => {
        const hourValue = hourMeta.value % 12;
        const hourLabel = hourValue === 0 ? "12" : leftPad(hourValue, 2);
        return _extends(_extends({}, hourMeta), {
          label: hourLabel,
          value: hourValue
        });
      });
    });
    const minutes = computed(() => {
      var _a;
      return generateUnits(0, 59, (_a = props.minuteStep) !== null && _a !== undefined ? _a : 1, mergedDisabledMinutes.value && mergedDisabledMinutes.value(originHour.value));
    });
    const seconds = computed(() => {
      var _a;
      return generateUnits(0, 59, (_a = props.secondStep) !== null && _a !== undefined ? _a : 1, mergedDisabledSeconds.value && mergedDisabledSeconds.value(originHour.value, minute.value));
    });
    return () => {
      const {
        prefixCls,
        operationRef,
        activeColumnIndex,
        showHour,
        showMinute,
        showSecond,
        use12Hours,
        hideDisabledOptions,
        onSelect
      } = props;
      const columns = [];
      const contentPrefixCls = `${prefixCls}-content`;
      const columnPrefixCls = `${prefixCls}-time-panel`;
      operationRef.value = {
        onUpDown: (diff) => {
          const column = columns[activeColumnIndex];
          if (column) {
            const valueIndex = column.units.findIndex((unit) => unit.value === column.value);
            const unitLen = column.units.length;
            for (let i = 1; i < unitLen; i += 1) {
              const nextUnit = column.units[(valueIndex + diff * i + unitLen) % unitLen];
              if (nextUnit.disabled !== true) {
                column.onSelect(nextUnit.value);
                break;
              }
            }
          }
        }
      };
      function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
        if (condition !== false) {
          columns.push({
            node: cloneElement(node, {
              prefixCls: columnPrefixCls,
              value: columnValue,
              active: activeColumnIndex === columns.length,
              onSelect: onColumnSelect,
              units,
              hideDisabledOptions
            }),
            onSelect: onColumnSelect,
            value: columnValue,
            units
          });
        }
      }
      addColumnNode(showHour, createVNode(TimeUnitColumn, {
        "key": "hour"
      }, null), hour.value, hours.value, (num) => {
        onSelect(setTime$1(isPM.value, num, minute.value, second.value), "mouse");
      });
      addColumnNode(showMinute, createVNode(TimeUnitColumn, {
        "key": "minute"
      }, null), minute.value, minutes.value, (num) => {
        onSelect(setTime$1(isPM.value, hour.value, num, second.value), "mouse");
      });
      addColumnNode(showSecond, createVNode(TimeUnitColumn, {
        "key": "second"
      }, null), second.value, seconds.value, (num) => {
        onSelect(setTime$1(isPM.value, hour.value, minute.value, num), "mouse");
      });
      let PMIndex = -1;
      if (typeof isPM.value === "boolean") {
        PMIndex = isPM.value ? 1 : 0;
      }
      addColumnNode(use12Hours === true, createVNode(TimeUnitColumn, {
        "key": "12hours"
      }, null), PMIndex, [{
        label: "AM",
        value: 0,
        disabled: AMPMDisabled.value[0]
      }, {
        label: "PM",
        value: 1,
        disabled: AMPMDisabled.value[1]
      }], (num) => {
        onSelect(setTime$1(!!num, hour.value, minute.value, second.value), "mouse");
      });
      return createVNode("div", {
        "class": contentPrefixCls
      }, [columns.map((_ref2) => {
        let {
          node
        } = _ref2;
        return node;
      })]);
    };
  }
});
const countBoolean = (boolList) => boolList.filter((bool) => bool !== false).length;
function TimePanel(_props) {
  const props = useMergeProps(_props);
  const {
    generateConfig: generateConfig2,
    format = "HH:mm:ss",
    prefixCls,
    active,
    operationRef,
    showHour,
    showMinute,
    showSecond,
    use12Hours = false,
    onSelect,
    value
  } = props;
  const panelPrefixCls = `${prefixCls}-time-panel`;
  const bodyOperationRef = ref();
  const activeColumnIndex = ref(-1);
  const columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.value = {
    onKeydown: (event) => createKeydownHandler(event, {
      onLeftRight: (diff) => {
        activeColumnIndex.value = (activeColumnIndex.value + diff + columnsCount) % columnsCount;
      },
      onUpDown: (diff) => {
        if (activeColumnIndex.value === -1) {
          activeColumnIndex.value = 0;
        } else if (bodyOperationRef.value) {
          bodyOperationRef.value.onUpDown(diff);
        }
      },
      onEnter: () => {
        onSelect(value || generateConfig2.getNow(), "key");
        activeColumnIndex.value = -1;
      }
    }),
    onBlur: () => {
      activeColumnIndex.value = -1;
    }
  };
  return createVNode("div", {
    "class": classNames(panelPrefixCls, {
      [`${panelPrefixCls}-active`]: active
    })
  }, [createVNode(TimeHeader, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "format": format,
    "prefixCls": prefixCls
  }), null), createVNode(TimeBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "activeColumnIndex": activeColumnIndex.value,
    "operationRef": bodyOperationRef
  }), null)]);
}
TimePanel.displayName = "TimePanel";
TimePanel.inheritAttrs = false;
function useCellClassName(_ref) {
  let {
    cellPrefixCls,
    generateConfig: generateConfig2,
    rangedValue,
    hoverRangedValue,
    isInView,
    isSameCell,
    offsetCell,
    today,
    value
  } = _ref;
  function getClassName(currentDate) {
    const prevDate = offsetCell(currentDate, -1);
    const nextDate = offsetCell(currentDate, 1);
    const rangeStart = getValue(rangedValue, 0);
    const rangeEnd = getValue(rangedValue, 1);
    const hoverStart = getValue(hoverRangedValue, 0);
    const hoverEnd = getValue(hoverRangedValue, 1);
    const isRangeHovered = isInRange(generateConfig2, hoverStart, hoverEnd, currentDate);
    function isRangeStart(date) {
      return isSameCell(rangeStart, date);
    }
    function isRangeEnd(date) {
      return isSameCell(rangeEnd, date);
    }
    const isHoverStart = isSameCell(hoverStart, currentDate);
    const isHoverEnd = isSameCell(hoverEnd, currentDate);
    const isHoverEdgeStart = (isRangeHovered || isHoverEnd) && (!isInView(prevDate) || isRangeEnd(prevDate));
    const isHoverEdgeEnd = (isRangeHovered || isHoverStart) && (!isInView(nextDate) || isRangeStart(nextDate));
    return {
      // In view
      [`${cellPrefixCls}-in-view`]: isInView(currentDate),
      // Range
      [`${cellPrefixCls}-in-range`]: isInRange(generateConfig2, rangeStart, rangeEnd, currentDate),
      [`${cellPrefixCls}-range-start`]: isRangeStart(currentDate),
      [`${cellPrefixCls}-range-end`]: isRangeEnd(currentDate),
      [`${cellPrefixCls}-range-start-single`]: isRangeStart(currentDate) && !rangeEnd,
      [`${cellPrefixCls}-range-end-single`]: isRangeEnd(currentDate) && !rangeStart,
      [`${cellPrefixCls}-range-start-near-hover`]: isRangeStart(currentDate) && (isSameCell(prevDate, hoverStart) || isInRange(generateConfig2, hoverStart, hoverEnd, prevDate)),
      [`${cellPrefixCls}-range-end-near-hover`]: isRangeEnd(currentDate) && (isSameCell(nextDate, hoverEnd) || isInRange(generateConfig2, hoverStart, hoverEnd, nextDate)),
      // Range Hover
      [`${cellPrefixCls}-range-hover`]: isRangeHovered,
      [`${cellPrefixCls}-range-hover-start`]: isHoverStart,
      [`${cellPrefixCls}-range-hover-end`]: isHoverEnd,
      // Range Edge
      [`${cellPrefixCls}-range-hover-edge-start`]: isHoverEdgeStart,
      [`${cellPrefixCls}-range-hover-edge-end`]: isHoverEdgeEnd,
      [`${cellPrefixCls}-range-hover-edge-start-near-range`]: isHoverEdgeStart && isSameCell(prevDate, rangeEnd),
      [`${cellPrefixCls}-range-hover-edge-end-near-range`]: isHoverEdgeEnd && isSameCell(nextDate, rangeStart),
      // Others
      [`${cellPrefixCls}-today`]: isSameCell(today, currentDate),
      [`${cellPrefixCls}-selected`]: isSameCell(value, currentDate)
    };
  }
  return getClassName;
}
const RangeContextKey = Symbol("RangeContextProps");
const useProvideRange = (props) => {
  provide(RangeContextKey, props);
};
const useInjectRange = () => {
  return inject(RangeContextKey, {
    rangedValue: ref(),
    hoverRangedValue: ref(),
    inRange: ref(),
    panelPosition: ref()
  });
};
const RangeContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PanelContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const value = {
      rangedValue: ref(props.value.rangedValue),
      hoverRangedValue: ref(props.value.hoverRangedValue),
      inRange: ref(props.value.inRange),
      panelPosition: ref(props.value.panelPosition)
    };
    useProvideRange(value);
    watch(() => props.value, () => {
      Object.keys(props.value).forEach((key) => {
        if (value[key]) {
          value[key].value = props.value[key];
        }
      });
    });
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots);
    };
  }
});
function DateBody(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig: generateConfig2,
    prefixColumn,
    locale: locale2,
    rowCount,
    viewDate,
    value,
    dateRender
  } = props;
  const {
    rangedValue,
    hoverRangedValue
  } = useInjectRange();
  const baseDate = getWeekStartDate(locale2.locale, generateConfig2, viewDate);
  const cellPrefixCls = `${prefixCls}-cell`;
  const weekFirstDay = generateConfig2.locale.getWeekFirstDay(locale2.locale);
  const today = generateConfig2.getNow();
  const headerCells = [];
  const weekDaysLocale = locale2.shortWeekDays || (generateConfig2.locale.getShortWeekDays ? generateConfig2.locale.getShortWeekDays(locale2.locale) : []);
  if (prefixColumn) {
    headerCells.push(createVNode("th", {
      "key": "empty",
      "aria-label": "empty cell"
    }, null));
  }
  for (let i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(createVNode("th", {
      "key": i
    }, [weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]]));
  }
  const getCellClassName = useCellClassName({
    cellPrefixCls,
    today,
    value,
    generateConfig: generateConfig2,
    rangedValue: prefixColumn ? null : rangedValue.value,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue.value,
    isSameCell: (current, target) => isSameDate(generateConfig2, current, target),
    isInView: (date) => isSameMonth(generateConfig2, date, viewDate),
    offsetCell: (date, offset) => generateConfig2.addDate(date, offset)
  });
  const getCellNode = dateRender ? (date) => dateRender({
    current: date,
    today
  }) : undefined;
  return createVNode(PanelBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "rowNum": rowCount,
    "colNum": WEEK_DAY_COUNT,
    "baseDate": baseDate,
    "getCellNode": getCellNode,
    "getCellText": generateConfig2.getDate,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig2.addDate,
    "titleCell": (date) => formatValue(date, {
      locale: locale2,
      format: "YYYY-MM-DD",
      generateConfig: generateConfig2
    }),
    "headerCells": headerCells
  }), null);
}
DateBody.displayName = "DateBody";
DateBody.inheritAttrs = false;
DateBody.props = [
  "prefixCls",
  "generateConfig",
  "value?",
  "viewDate",
  "locale",
  "rowCount",
  "onSelect",
  "dateRender?",
  "disabledDate?",
  // Used for week panel
  "prefixColumn?",
  "rowClassName?"
];
function DateHeader(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig: generateConfig2,
    locale: locale2,
    viewDate,
    onNextMonth,
    onPrevMonth,
    onNextYear,
    onPrevYear,
    onYearClick,
    onMonthClick
  } = props;
  const {
    hideHeader
  } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }
  const headerPrefixCls = `${prefixCls}-header`;
  const monthsLocale = locale2.shortMonths || (generateConfig2.locale.getShortMonths ? generateConfig2.locale.getShortMonths(locale2.locale) : []);
  const month = generateConfig2.getMonth(viewDate);
  const yearNode = createVNode("button", {
    "type": "button",
    "key": "year",
    "onClick": onYearClick,
    "tabindex": -1,
    "class": `${prefixCls}-year-btn`
  }, [formatValue(viewDate, {
    locale: locale2,
    format: locale2.yearFormat,
    generateConfig: generateConfig2
  })]);
  const monthNode = createVNode("button", {
    "type": "button",
    "key": "month",
    "onClick": onMonthClick,
    "tabindex": -1,
    "class": `${prefixCls}-month-btn`
  }, [locale2.monthFormat ? formatValue(viewDate, {
    locale: locale2,
    format: locale2.monthFormat,
    generateConfig: generateConfig2
  }) : monthsLocale[month]]);
  const monthYearNodes = locale2.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return createVNode(Header, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onPrev": onPrevMonth,
    "onNext": onNextMonth,
    "onSuperNext": onNextYear
  }), {
    default: () => [monthYearNodes]
  });
}
DateHeader.displayName = "DateHeader";
DateHeader.inheritAttrs = false;
const DATE_ROW_COUNT = 6;
function DatePanel(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    panelName = "date",
    keyboardConfig,
    active,
    operationRef,
    generateConfig: generateConfig2,
    value,
    viewDate,
    onViewDateChange,
    onPanelChange,
    onSelect
  } = props;
  const panelPrefixCls = `${prefixCls}-${panelName}-panel`;
  operationRef.value = {
    onKeydown: (event) => createKeydownHandler(event, _extends({
      onLeftRight: (diff) => {
        onSelect(generateConfig2.addDate(value || viewDate, diff), "key");
      },
      onCtrlLeftRight: (diff) => {
        onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
      },
      onUpDown: (diff) => {
        onSelect(generateConfig2.addDate(value || viewDate, diff * WEEK_DAY_COUNT), "key");
      },
      onPageUpDown: (diff) => {
        onSelect(generateConfig2.addMonth(value || viewDate, diff), "key");
      }
    }, keyboardConfig))
  };
  const onYearChange = (diff) => {
    const newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  const onMonthChange = (diff) => {
    const newDate = generateConfig2.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": classNames(panelPrefixCls, {
      [`${panelPrefixCls}-active`]: active
    })
  }, [createVNode(DateHeader, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "value": value,
    "viewDate": viewDate,
    "onPrevYear": () => {
      onYearChange(-1);
    },
    "onNextYear": () => {
      onYearChange(1);
    },
    "onPrevMonth": () => {
      onMonthChange(-1);
    },
    "onNextMonth": () => {
      onMonthChange(1);
    },
    "onMonthClick": () => {
      onPanelChange("month", viewDate);
    },
    "onYearClick": () => {
      onPanelChange("year", viewDate);
    }
  }), null), createVNode(DateBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "onSelect": (date) => onSelect(date, "mouse"),
    "prefixCls": prefixCls,
    "value": value,
    "viewDate": viewDate,
    "rowCount": DATE_ROW_COUNT
  }), null)]);
}
DatePanel.displayName = "DatePanel";
DatePanel.inheritAttrs = false;
const ACTIVE_PANEL = tuple("date", "time");
function DatetimePanel(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    operationRef,
    generateConfig: generateConfig2,
    value,
    defaultValue,
    disabledTime,
    showTime,
    onSelect
  } = props;
  const panelPrefixCls = `${prefixCls}-datetime-panel`;
  const activePanel = ref(null);
  const dateOperationRef = ref({});
  const timeOperationRef = ref({});
  const timeProps = typeof showTime === "object" ? _extends({}, showTime) : {};
  function getNextActive(offset) {
    const activeIndex = ACTIVE_PANEL.indexOf(activePanel.value) + offset;
    const nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }
  const onBlur = (e) => {
    if (timeOperationRef.value.onBlur) {
      timeOperationRef.value.onBlur(e);
    }
    activePanel.value = null;
  };
  operationRef.value = {
    onKeydown: (event) => {
      if (event.which === KeyCode.TAB) {
        const nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        activePanel.value = nextActivePanel;
        if (nextActivePanel) {
          event.preventDefault();
        }
        return true;
      }
      if (activePanel.value) {
        const ref2 = activePanel.value === "date" ? dateOperationRef : timeOperationRef;
        if (ref2.value && ref2.value.onKeydown) {
          ref2.value.onKeydown(event);
        }
        return true;
      }
      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN].includes(event.which)) {
        activePanel.value = "date";
        return true;
      }
      return false;
    },
    onBlur,
    onClose: onBlur
  };
  const onInternalSelect = (date, source) => {
    let selectedDate = date;
    if (source === "date" && !value && timeProps.defaultValue) {
      selectedDate = generateConfig2.setHour(selectedDate, generateConfig2.getHour(timeProps.defaultValue));
      selectedDate = generateConfig2.setMinute(selectedDate, generateConfig2.getMinute(timeProps.defaultValue));
      selectedDate = generateConfig2.setSecond(selectedDate, generateConfig2.getSecond(timeProps.defaultValue));
    } else if (source === "time" && !value && defaultValue) {
      selectedDate = generateConfig2.setYear(selectedDate, generateConfig2.getYear(defaultValue));
      selectedDate = generateConfig2.setMonth(selectedDate, generateConfig2.getMonth(defaultValue));
      selectedDate = generateConfig2.setDate(selectedDate, generateConfig2.getDate(defaultValue));
    }
    if (onSelect) {
      onSelect(selectedDate, "mouse");
    }
  };
  const disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return createVNode("div", {
    "class": classNames(panelPrefixCls, {
      [`${panelPrefixCls}-active`]: activePanel.value
    })
  }, [createVNode(DatePanel, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "operationRef": dateOperationRef,
    "active": activePanel.value === "date",
    "onSelect": (date) => {
      onInternalSelect(setDateTime(generateConfig2, date, !value && typeof showTime === "object" ? showTime.defaultValue : null), "date");
    }
  }), null), createVNode(TimePanel, _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, props), {}, {
    "format": undefined
  }, timeProps), disabledTimes), {}, {
    "disabledTime": null,
    "defaultValue": undefined,
    "operationRef": timeOperationRef,
    "active": activePanel.value === "time",
    "onSelect": (date) => {
      onInternalSelect(date, "time");
    }
  }), null)]);
}
DatetimePanel.displayName = "DatetimePanel";
DatetimePanel.inheritAttrs = false;
function WeekPanel(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig: generateConfig2,
    locale: locale2,
    value
  } = props;
  const cellPrefixCls = `${prefixCls}-cell`;
  const prefixColumn = (date) => createVNode("td", {
    "key": "week",
    "class": classNames(cellPrefixCls, `${cellPrefixCls}-week`)
  }, [generateConfig2.locale.getWeek(locale2.locale, date)]);
  const rowPrefixCls = `${prefixCls}-week-panel-row`;
  const rowClassName = (date) => classNames(rowPrefixCls, {
    [`${rowPrefixCls}-selected`]: isSameWeek(generateConfig2, locale2.locale, value, date)
  });
  return createVNode(DatePanel, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "panelName": "week",
    "prefixColumn": prefixColumn,
    "rowClassName": rowClassName,
    "keyboardConfig": {
      onLeftRight: null
    }
  }), null);
}
WeekPanel.displayName = "WeekPanel";
WeekPanel.inheritAttrs = false;
function MonthHeader(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig: generateConfig2,
    locale: locale2,
    viewDate,
    onNextYear,
    onPrevYear,
    onYearClick
  } = props;
  const {
    hideHeader
  } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }
  const headerPrefixCls = `${prefixCls}-header`;
  return createVNode(Header, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onSuperNext": onNextYear
  }), {
    default: () => [createVNode("button", {
      "type": "button",
      "onClick": onYearClick,
      "class": `${prefixCls}-year-btn`
    }, [formatValue(viewDate, {
      locale: locale2,
      format: locale2.yearFormat,
      generateConfig: generateConfig2
    })])]
  });
}
MonthHeader.displayName = "MonthHeader";
MonthHeader.inheritAttrs = false;
const MONTH_COL_COUNT = 3;
const MONTH_ROW_COUNT = 4;
function MonthBody(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    locale: locale2,
    value,
    viewDate,
    generateConfig: generateConfig2,
    monthCellRender
  } = props;
  const {
    rangedValue,
    hoverRangedValue
  } = useInjectRange();
  const cellPrefixCls = `${prefixCls}-cell`;
  const getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: (current, target) => isSameMonth(generateConfig2, current, target),
    isInView: () => true,
    offsetCell: (date, offset) => generateConfig2.addMonth(date, offset)
  });
  const monthsLocale = locale2.shortMonths || (generateConfig2.locale.getShortMonths ? generateConfig2.locale.getShortMonths(locale2.locale) : []);
  const baseMonth = generateConfig2.setMonth(viewDate, 0);
  const getCellNode = monthCellRender ? (date) => monthCellRender({
    current: date,
    locale: locale2
  }) : undefined;
  return createVNode(PanelBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "rowNum": MONTH_ROW_COUNT,
    "colNum": MONTH_COL_COUNT,
    "baseDate": baseMonth,
    "getCellNode": getCellNode,
    "getCellText": (date) => locale2.monthFormat ? formatValue(date, {
      locale: locale2,
      format: locale2.monthFormat,
      generateConfig: generateConfig2
    }) : monthsLocale[generateConfig2.getMonth(date)],
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig2.addMonth,
    "titleCell": (date) => formatValue(date, {
      locale: locale2,
      format: "YYYY-MM",
      generateConfig: generateConfig2
    })
  }), null);
}
MonthBody.displayName = "MonthBody";
MonthBody.inheritAttrs = false;
function MonthPanel(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    operationRef,
    onViewDateChange,
    generateConfig: generateConfig2,
    value,
    viewDate,
    onPanelChange,
    onSelect
  } = props;
  const panelPrefixCls = `${prefixCls}-month-panel`;
  operationRef.value = {
    onKeydown: (event) => createKeydownHandler(event, {
      onLeftRight: (diff) => {
        onSelect(generateConfig2.addMonth(value || viewDate, diff), "key");
      },
      onCtrlLeftRight: (diff) => {
        onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
      },
      onUpDown: (diff) => {
        onSelect(generateConfig2.addMonth(value || viewDate, diff * MONTH_COL_COUNT), "key");
      },
      onEnter: () => {
        onPanelChange("date", value || viewDate);
      }
    })
  };
  const onYearChange = (diff) => {
    const newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(MonthHeader, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevYear": () => {
      onYearChange(-1);
    },
    "onNextYear": () => {
      onYearChange(1);
    },
    "onYearClick": () => {
      onPanelChange("year", viewDate);
    }
  }), null), createVNode(MonthBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": (date) => {
      onSelect(date, "mouse");
      onPanelChange("date", date);
    }
  }), null)]);
}
MonthPanel.displayName = "MonthPanel";
MonthPanel.inheritAttrs = false;
function QuarterHeader(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig: generateConfig2,
    locale: locale2,
    viewDate,
    onNextYear,
    onPrevYear,
    onYearClick
  } = props;
  const {
    hideHeader
  } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }
  const headerPrefixCls = `${prefixCls}-header`;
  return createVNode(Header, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onSuperNext": onNextYear
  }), {
    default: () => [createVNode("button", {
      "type": "button",
      "onClick": onYearClick,
      "class": `${prefixCls}-year-btn`
    }, [formatValue(viewDate, {
      locale: locale2,
      format: locale2.yearFormat,
      generateConfig: generateConfig2
    })])]
  });
}
QuarterHeader.displayName = "QuarterHeader";
QuarterHeader.inheritAttrs = false;
const QUARTER_COL_COUNT = 4;
const QUARTER_ROW_COUNT = 1;
function QuarterBody(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    locale: locale2,
    value,
    viewDate,
    generateConfig: generateConfig2
  } = props;
  const {
    rangedValue,
    hoverRangedValue
  } = useInjectRange();
  const cellPrefixCls = `${prefixCls}-cell`;
  const getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: (current, target) => isSameQuarter(generateConfig2, current, target),
    isInView: () => true,
    offsetCell: (date, offset) => generateConfig2.addMonth(date, offset * 3)
  });
  const baseQuarter = generateConfig2.setDate(generateConfig2.setMonth(viewDate, 0), 1);
  return createVNode(PanelBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "rowNum": QUARTER_ROW_COUNT,
    "colNum": QUARTER_COL_COUNT,
    "baseDate": baseQuarter,
    "getCellText": (date) => formatValue(date, {
      locale: locale2,
      format: locale2.quarterFormat || "[Q]Q",
      generateConfig: generateConfig2
    }),
    "getCellClassName": getCellClassName,
    "getCellDate": (date, offset) => generateConfig2.addMonth(date, offset * 3),
    "titleCell": (date) => formatValue(date, {
      locale: locale2,
      format: "YYYY-[Q]Q",
      generateConfig: generateConfig2
    })
  }), null);
}
QuarterBody.displayName = "QuarterBody";
QuarterBody.inheritAttrs = false;
function QuarterPanel(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    operationRef,
    onViewDateChange,
    generateConfig: generateConfig2,
    value,
    viewDate,
    onPanelChange,
    onSelect
  } = props;
  const panelPrefixCls = `${prefixCls}-quarter-panel`;
  operationRef.value = {
    onKeydown: (event) => createKeydownHandler(event, {
      onLeftRight: (diff) => {
        onSelect(generateConfig2.addMonth(value || viewDate, diff * 3), "key");
      },
      onCtrlLeftRight: (diff) => {
        onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
      },
      onUpDown: (diff) => {
        onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
      }
    })
  };
  const onYearChange = (diff) => {
    const newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(QuarterHeader, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevYear": () => {
      onYearChange(-1);
    },
    "onNextYear": () => {
      onYearChange(1);
    },
    "onYearClick": () => {
      onPanelChange("year", viewDate);
    }
  }), null), createVNode(QuarterBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": (date) => {
      onSelect(date, "mouse");
    }
  }), null)]);
}
QuarterPanel.displayName = "QuarterPanel";
QuarterPanel.inheritAttrs = false;
function YearHeader(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig: generateConfig2,
    viewDate,
    onPrevDecade,
    onNextDecade,
    onDecadeClick
  } = props;
  const {
    hideHeader
  } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }
  const headerPrefixCls = `${prefixCls}-header`;
  const yearNumber = generateConfig2.getYear(viewDate);
  const startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  const endYear = startYear + YEAR_DECADE_COUNT - 1;
  return createVNode(Header, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecade,
    "onSuperNext": onNextDecade
  }), {
    default: () => [createVNode("button", {
      "type": "button",
      "onClick": onDecadeClick,
      "class": `${prefixCls}-decade-btn`
    }, [startYear, createTextVNode("-"), endYear])]
  });
}
YearHeader.displayName = "YearHeader";
YearHeader.inheritAttrs = false;
const YEAR_COL_COUNT = 3;
const YEAR_ROW_COUNT = 4;
function YearBody(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    value,
    viewDate,
    locale: locale2,
    generateConfig: generateConfig2
  } = props;
  const {
    rangedValue,
    hoverRangedValue
  } = useInjectRange();
  const yearPrefixCls = `${prefixCls}-cell`;
  const yearNumber = generateConfig2.getYear(viewDate);
  const startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  const endYear = startYear + YEAR_DECADE_COUNT - 1;
  const baseYear = generateConfig2.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2));
  const isInView = (date) => {
    const currentYearNumber = generateConfig2.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  const getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: (current, target) => isSameYear(generateConfig2, current, target),
    isInView,
    offsetCell: (date, offset) => generateConfig2.addYear(date, offset)
  });
  return createVNode(PanelBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "rowNum": YEAR_ROW_COUNT,
    "colNum": YEAR_COL_COUNT,
    "baseDate": baseYear,
    "getCellText": generateConfig2.getYear,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig2.addYear,
    "titleCell": (date) => formatValue(date, {
      locale: locale2,
      format: "YYYY",
      generateConfig: generateConfig2
    })
  }), null);
}
YearBody.displayName = "YearBody";
YearBody.inheritAttrs = false;
const YEAR_DECADE_COUNT = 10;
function YearPanel(_props) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    operationRef,
    onViewDateChange,
    generateConfig: generateConfig2,
    value,
    viewDate,
    sourceMode,
    onSelect,
    onPanelChange
  } = props;
  const panelPrefixCls = `${prefixCls}-year-panel`;
  operationRef.value = {
    onKeydown: (event) => createKeydownHandler(event, {
      onLeftRight: (diff) => {
        onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
      },
      onCtrlLeftRight: (diff) => {
        onSelect(generateConfig2.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), "key");
      },
      onUpDown: (diff) => {
        onSelect(generateConfig2.addYear(value || viewDate, diff * YEAR_COL_COUNT), "key");
      },
      onEnter: () => {
        onPanelChange(sourceMode === "date" ? "date" : "month", value || viewDate);
      }
    })
  };
  const onDecadeChange = (diff) => {
    const newDate = generateConfig2.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(YearHeader, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecade": () => {
      onDecadeChange(-1);
    },
    "onNextDecade": () => {
      onDecadeChange(1);
    },
    "onDecadeClick": () => {
      onPanelChange("decade", viewDate);
    }
  }), null), createVNode(YearBody, _objectSpread$9(_objectSpread$9({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": (date) => {
      onPanelChange(sourceMode === "date" ? "date" : "month", date);
      onSelect(date, "mouse");
    }
  }), null)]);
}
YearPanel.displayName = "YearPanel";
YearPanel.inheritAttrs = false;
function getExtraFooter(prefixCls, mode, renderExtraFooter) {
  if (!renderExtraFooter) {
    return null;
  }
  return createVNode("div", {
    "class": `${prefixCls}-footer-extra`
  }, [renderExtraFooter(mode)]);
}
function getRanges(_ref) {
  let {
    prefixCls,
    components = {},
    needConfirmButton,
    onNow,
    onOk,
    okDisabled,
    showNow,
    locale: locale2
  } = _ref;
  let presetNode;
  let okNode;
  if (needConfirmButton) {
    const Button2 = components.button || "button";
    if (onNow && showNow !== false) {
      presetNode = createVNode("li", {
        "class": `${prefixCls}-now`
      }, [createVNode("a", {
        "class": `${prefixCls}-now-btn`,
        "onClick": onNow
      }, [locale2.now])]);
    }
    okNode = needConfirmButton && createVNode("li", {
      "class": `${prefixCls}-ok`
    }, [createVNode(Button2, {
      "disabled": okDisabled,
      "onClick": (e) => {
        e.stopPropagation();
        onOk && onOk();
      }
    }, {
      default: () => [locale2.ok]
    })]);
  }
  if (!presetNode && !okNode) {
    return null;
  }
  return createVNode("ul", {
    "class": `${prefixCls}-ranges`
  }, [presetNode, okNode]);
}
function PickerPanel() {
  return defineComponent({
    name: "PickerPanel",
    inheritAttrs: false,
    props: {
      prefixCls: String,
      locale: Object,
      generateConfig: Object,
      value: Object,
      defaultValue: Object,
      pickerValue: Object,
      defaultPickerValue: Object,
      disabledDate: Function,
      mode: String,
      picker: {
        type: String,
        default: "date"
      },
      tabindex: {
        type: [Number, String],
        default: 0
      },
      showNow: {
        type: Boolean,
        default: undefined
      },
      showTime: [Boolean, Object],
      showToday: Boolean,
      renderExtraFooter: Function,
      dateRender: Function,
      hideHeader: {
        type: Boolean,
        default: undefined
      },
      onSelect: Function,
      onChange: Function,
      onPanelChange: Function,
      onMousedown: Function,
      onPickerValueChange: Function,
      onOk: Function,
      components: Object,
      direction: String,
      hourStep: {
        type: Number,
        default: 1
      },
      minuteStep: {
        type: Number,
        default: 1
      },
      secondStep: {
        type: Number,
        default: 1
      }
    },
    setup(props, _ref) {
      let {
        attrs
      } = _ref;
      const needConfirmButton = computed(() => props.picker === "date" && !!props.showTime || props.picker === "time");
      const isHourStepValid = computed(() => 24 % props.hourStep === 0);
      const isMinuteStepValid = computed(() => 60 % props.minuteStep === 0);
      const isSecondStepValid = computed(() => 60 % props.secondStep === 0);
      const panelContext = useInjectPanel();
      const {
        operationRef,
        onSelect: onContextSelect,
        hideRanges,
        defaultOpenValue
      } = panelContext;
      const {
        inRange,
        panelPosition,
        rangedValue,
        hoverRangedValue
      } = useInjectRange();
      const panelRef = ref({});
      const [mergedValue, setInnerValue] = useMergedState(null, {
        value: toRef(props, "value"),
        defaultValue: props.defaultValue,
        postState: (val) => {
          if (!val && (defaultOpenValue === null || defaultOpenValue === undefined ? undefined : defaultOpenValue.value) && props.picker === "time") {
            return defaultOpenValue.value;
          }
          return val;
        }
      });
      const [viewDate, setInnerViewDate] = useMergedState(null, {
        value: toRef(props, "pickerValue"),
        defaultValue: props.defaultPickerValue || mergedValue.value,
        postState: (date) => {
          const {
            generateConfig: generateConfig2,
            showTime,
            defaultValue
          } = props;
          const now = generateConfig2.getNow();
          if (!date) return now;
          if (!mergedValue.value && props.showTime) {
            if (typeof showTime === "object") {
              return setDateTime(generateConfig2, Array.isArray(date) ? date[0] : date, showTime.defaultValue || now);
            }
            if (defaultValue) {
              return setDateTime(generateConfig2, Array.isArray(date) ? date[0] : date, defaultValue);
            }
            return setDateTime(generateConfig2, Array.isArray(date) ? date[0] : date, now);
          }
          return date;
        }
      });
      const setViewDate = (date) => {
        setInnerViewDate(date);
        if (props.onPickerValueChange) {
          props.onPickerValueChange(date);
        }
      };
      const getInternalNextMode = (nextMode) => {
        const getNextMode = PickerModeMap[props.picker];
        if (getNextMode) {
          return getNextMode(nextMode);
        }
        return nextMode;
      };
      const [mergedMode, setInnerMode] = useMergedState(() => {
        if (props.picker === "time") {
          return "time";
        }
        return getInternalNextMode("date");
      }, {
        value: toRef(props, "mode")
      });
      watch(() => props.picker, () => {
        setInnerMode(props.picker);
      });
      const sourceMode = ref(mergedMode.value);
      const setSourceMode = (val) => {
        sourceMode.value = val;
      };
      const onInternalPanelChange = (newMode, viewValue) => {
        const {
          onPanelChange,
          generateConfig: generateConfig2
        } = props;
        const nextMode = getInternalNextMode(newMode || mergedMode.value);
        setSourceMode(mergedMode.value);
        setInnerMode(nextMode);
        if (onPanelChange && (mergedMode.value !== nextMode || isEqual(generateConfig2, viewDate.value, viewDate.value))) {
          onPanelChange(viewValue, nextMode);
        }
      };
      const triggerSelect = function(date, type) {
        let forceTriggerSelect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        const {
          picker,
          generateConfig: generateConfig2,
          onSelect,
          onChange,
          disabledDate
        } = props;
        if (mergedMode.value === picker || forceTriggerSelect) {
          setInnerValue(date);
          if (onSelect) {
            onSelect(date);
          }
          if (onContextSelect) {
            onContextSelect(date, type);
          }
          if (onChange && !isEqual(generateConfig2, date, mergedValue.value) && !(disabledDate === null || disabledDate === undefined ? undefined : disabledDate(date))) {
            onChange(date);
          }
        }
      };
      const onInternalKeydown = (e) => {
        if (panelRef.value && panelRef.value.onKeydown) {
          if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN, KeyCode.PAGE_UP, KeyCode.PAGE_DOWN, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
          }
          return panelRef.value.onKeydown(e);
        }
        {
          return false;
        }
      };
      const onInternalBlur = (e) => {
        if (panelRef.value && panelRef.value.onBlur) {
          panelRef.value.onBlur(e);
        }
      };
      const onNow = () => {
        const {
          generateConfig: generateConfig2,
          hourStep,
          minuteStep,
          secondStep
        } = props;
        const now = generateConfig2.getNow();
        const lowerBoundTime = getLowerBoundTime(generateConfig2.getHour(now), generateConfig2.getMinute(now), generateConfig2.getSecond(now), isHourStepValid.value ? hourStep : 1, isMinuteStepValid.value ? minuteStep : 1, isSecondStepValid.value ? secondStep : 1);
        const adjustedNow = setTime(
          generateConfig2,
          now,
          lowerBoundTime[0],
          // hour
          lowerBoundTime[1],
          // minute
          lowerBoundTime[2]
        );
        triggerSelect(adjustedNow, "submit");
      };
      const classString = computed(() => {
        const {
          prefixCls,
          direction
        } = props;
        return classNames(`${prefixCls}-panel`, {
          [`${prefixCls}-panel-has-range`]: rangedValue && rangedValue.value && rangedValue.value[0] && rangedValue.value[1],
          [`${prefixCls}-panel-has-range-hover`]: hoverRangedValue && hoverRangedValue.value && hoverRangedValue.value[0] && hoverRangedValue.value[1],
          [`${prefixCls}-panel-rtl`]: direction === "rtl"
        });
      });
      useProvidePanel(_extends(_extends({}, panelContext), {
        mode: mergedMode,
        hideHeader: computed(() => {
          var _a;
          return props.hideHeader !== undefined ? props.hideHeader : (_a = panelContext.hideHeader) === null || _a === undefined ? undefined : _a.value;
        }),
        hidePrevBtn: computed(() => inRange.value && panelPosition.value === "right"),
        hideNextBtn: computed(() => inRange.value && panelPosition.value === "left")
      }));
      watch(() => props.value, () => {
        if (props.value) {
          setInnerViewDate(props.value);
        }
      });
      return () => {
        const {
          prefixCls = "ant-picker",
          locale: locale2,
          generateConfig: generateConfig2,
          disabledDate,
          picker = "date",
          tabindex = 0,
          showNow,
          showTime,
          showToday,
          renderExtraFooter,
          onMousedown,
          onOk,
          components
        } = props;
        if (operationRef && panelPosition.value !== "right") {
          operationRef.value = {
            onKeydown: onInternalKeydown,
            onClose: () => {
              if (panelRef.value && panelRef.value.onClose) {
                panelRef.value.onClose();
              }
            }
          };
        }
        let panelNode;
        const pickerProps = _extends(_extends(_extends({}, attrs), props), {
          operationRef: panelRef,
          prefixCls,
          viewDate: viewDate.value,
          value: mergedValue.value,
          onViewDateChange: setViewDate,
          sourceMode: sourceMode.value,
          onPanelChange: onInternalPanelChange,
          disabledDate
        });
        delete pickerProps.onChange;
        delete pickerProps.onSelect;
        switch (mergedMode.value) {
          case "decade":
            panelNode = createVNode(DecadePanel, _objectSpread$9(_objectSpread$9({}, pickerProps), {}, {
              "onSelect": (date, type) => {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "year":
            panelNode = createVNode(YearPanel, _objectSpread$9(_objectSpread$9({}, pickerProps), {}, {
              "onSelect": (date, type) => {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "month":
            panelNode = createVNode(MonthPanel, _objectSpread$9(_objectSpread$9({}, pickerProps), {}, {
              "onSelect": (date, type) => {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "quarter":
            panelNode = createVNode(QuarterPanel, _objectSpread$9(_objectSpread$9({}, pickerProps), {}, {
              "onSelect": (date, type) => {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "week":
            panelNode = createVNode(WeekPanel, _objectSpread$9(_objectSpread$9({}, pickerProps), {}, {
              "onSelect": (date, type) => {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "time":
            delete pickerProps.showTime;
            panelNode = createVNode(TimePanel, _objectSpread$9(_objectSpread$9(_objectSpread$9({}, pickerProps), typeof showTime === "object" ? showTime : null), {}, {
              "onSelect": (date, type) => {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          default:
            if (showTime) {
              panelNode = createVNode(DatetimePanel, _objectSpread$9(_objectSpread$9({}, pickerProps), {}, {
                "onSelect": (date, type) => {
                  setViewDate(date);
                  triggerSelect(date, type);
                }
              }), null);
            } else {
              panelNode = createVNode(DatePanel, _objectSpread$9(_objectSpread$9({}, pickerProps), {}, {
                "onSelect": (date, type) => {
                  setViewDate(date);
                  triggerSelect(date, type);
                }
              }), null);
            }
        }
        let extraFooter;
        let rangesNode;
        if (!(hideRanges === null || hideRanges === undefined ? undefined : hideRanges.value)) {
          extraFooter = getExtraFooter(prefixCls, mergedMode.value, renderExtraFooter);
          rangesNode = getRanges({
            prefixCls,
            components,
            needConfirmButton: needConfirmButton.value,
            okDisabled: !mergedValue.value || disabledDate && disabledDate(mergedValue.value),
            locale: locale2,
            showNow,
            onNow: needConfirmButton.value && onNow,
            onOk: () => {
              if (mergedValue.value) {
                triggerSelect(mergedValue.value, "submit", true);
                if (onOk) {
                  onOk(mergedValue.value);
                }
              }
            }
          });
        }
        let todayNode;
        if (showToday && mergedMode.value === "date" && picker === "date" && !showTime) {
          const now = generateConfig2.getNow();
          const todayCls = `${prefixCls}-today-btn`;
          const disabled = disabledDate && disabledDate(now);
          todayNode = createVNode("a", {
            "class": classNames(todayCls, disabled && `${todayCls}-disabled`),
            "aria-disabled": disabled,
            "onClick": () => {
              if (!disabled) {
                triggerSelect(now, "mouse", true);
              }
            }
          }, [locale2.today]);
        }
        return createVNode("div", {
          "tabindex": tabindex,
          "class": classNames(classString.value, attrs.class),
          "style": attrs.style,
          "onKeydown": onInternalKeydown,
          "onBlur": onInternalBlur,
          "onMousedown": onMousedown
        }, [panelNode, extraFooter || rangesNode || todayNode ? createVNode("div", {
          "class": `${prefixCls}-footer`
        }, [extraFooter, rangesNode, todayNode]) : null]);
      };
    }
  });
}
const InterPickerPanel = PickerPanel();
const PickerPanel$1 = (props) => createVNode(InterPickerPanel, props);
const BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ["tl", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ["tr", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["bl", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["br", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function PickerTrigger(props, _ref) {
  let {
    slots
  } = _ref;
  const {
    prefixCls,
    popupStyle,
    visible,
    dropdownClassName,
    dropdownAlign,
    transitionName,
    getPopupContainer,
    range,
    popupPlacement,
    direction
  } = useMergeProps(props);
  const dropdownPrefixCls = `${prefixCls}-dropdown`;
  const getPopupPlacement = () => {
    if (popupPlacement !== undefined) {
      return popupPlacement;
    }
    return direction === "rtl" ? "bottomRight" : "bottomLeft";
  };
  return createVNode(Trigger, {
    "showAction": [],
    "hideAction": [],
    "popupPlacement": getPopupPlacement(),
    "builtinPlacements": BUILT_IN_PLACEMENTS,
    "prefixCls": dropdownPrefixCls,
    "popupTransitionName": transitionName,
    "popupAlign": dropdownAlign,
    "popupVisible": visible,
    "popupClassName": classNames(dropdownClassName, {
      [`${dropdownPrefixCls}-range`]: range,
      [`${dropdownPrefixCls}-rtl`]: direction === "rtl"
    }),
    "popupStyle": popupStyle,
    "getPopupContainer": getPopupContainer
  }, {
    default: slots.default,
    popup: slots.popupElement
  });
}
const PresetPanel = defineComponent({
  name: "PresetPanel",
  props: {
    prefixCls: String,
    presets: {
      type: Array,
      default: () => []
    },
    onClick: Function,
    onHover: Function
  },
  setup(props) {
    return () => {
      if (!props.presets.length) {
        return null;
      }
      return createVNode("div", {
        "class": `${props.prefixCls}-presets`
      }, [createVNode("ul", null, [props.presets.map((_ref, index) => {
        let {
          label,
          value
        } = _ref;
        return createVNode("li", {
          "key": index,
          "onClick": (e) => {
            e.stopPropagation();
            props.onClick(value);
          },
          "onMouseenter": () => {
            var _a;
            (_a = props.onHover) === null || _a === undefined ? undefined : _a.call(props, value);
          },
          "onMouseleave": () => {
            var _a;
            (_a = props.onHover) === null || _a === undefined ? undefined : _a.call(props, null);
          }
        }, [label]);
      })])]);
    };
  }
});
function usePickerInput(_ref) {
  let {
    open,
    value,
    isClickOutside,
    triggerOpen,
    forwardKeydown,
    onKeydown,
    blurToCancel,
    onSubmit,
    onCancel,
    onFocus,
    onBlur
  } = _ref;
  const typing = shallowRef(false);
  const focused = shallowRef(false);
  const preventBlurRef = shallowRef(false);
  const valueChangedRef = shallowRef(false);
  const preventDefaultRef = shallowRef(false);
  const inputProps = computed(() => ({
    onMousedown: () => {
      typing.value = true;
      triggerOpen(true);
    },
    onKeydown: (e) => {
      const preventDefault = () => {
        preventDefaultRef.value = true;
      };
      onKeydown(e, preventDefault);
      if (preventDefaultRef.value) return;
      switch (e.which) {
        case KeyCode.ENTER: {
          if (!open.value) {
            triggerOpen(true);
          } else if (onSubmit() !== false) {
            typing.value = true;
          }
          e.preventDefault();
          return;
        }
        case KeyCode.TAB: {
          if (typing.value && open.value && !e.shiftKey) {
            typing.value = false;
            e.preventDefault();
          } else if (!typing.value && open.value) {
            if (!forwardKeydown(e) && e.shiftKey) {
              typing.value = true;
              e.preventDefault();
            }
          }
          return;
        }
        case KeyCode.ESC: {
          typing.value = true;
          onCancel();
          return;
        }
      }
      if (!open.value && ![KeyCode.SHIFT].includes(e.which)) {
        triggerOpen(true);
      } else if (!typing.value) {
        forwardKeydown(e);
      }
    },
    onFocus: (e) => {
      typing.value = true;
      focused.value = true;
      if (onFocus) {
        onFocus(e);
      }
    },
    onBlur: (e) => {
      if (preventBlurRef.value || !isClickOutside((undefined).activeElement)) {
        preventBlurRef.value = false;
        return;
      }
      if (blurToCancel.value) {
        setTimeout(() => {
          let {
            activeElement
          } = undefined;
          while (activeElement && activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }
          if (isClickOutside(activeElement)) {
            onCancel();
          }
        }, 0);
      } else if (open.value) {
        triggerOpen(false);
        if (valueChangedRef.value) {
          onSubmit();
        }
      }
      focused.value = false;
      if (onBlur) {
        onBlur(e);
      }
    }
  }));
  watch(open, () => {
    valueChangedRef.value = false;
  });
  watch(value, () => {
    valueChangedRef.value = true;
  });
  shallowRef();
  return [inputProps, {
    focused,
    typing
  }];
}
function useTextValueMapping(_ref) {
  let {
    valueTexts,
    onTextChange
  } = _ref;
  const text = ref("");
  function triggerTextChange(value) {
    text.value = value;
    onTextChange(value);
  }
  function resetText() {
    text.value = valueTexts.value[0];
  }
  watch(() => [...valueTexts.value], function(cur) {
    let pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (cur.join("||") !== pre.join("||") && valueTexts.value.every((valText) => valText !== text.value)) {
      resetText();
    }
  }, {
    immediate: true
  });
  return [text, triggerTextChange, resetText];
}
function useValueTexts(value, _ref) {
  let {
    formatList,
    generateConfig: generateConfig2,
    locale: locale2
  } = _ref;
  const texts = useMemo(() => {
    if (!value.value) {
      return [[""], ""];
    }
    let firstValueText2 = "";
    const fullValueTexts2 = [];
    for (let i = 0; i < formatList.value.length; i += 1) {
      const format = formatList.value[i];
      const formatStr = formatValue(value.value, {
        generateConfig: generateConfig2.value,
        locale: locale2.value,
        format
      });
      fullValueTexts2.push(formatStr);
      if (i === 0) {
        firstValueText2 = formatStr;
      }
    }
    return [fullValueTexts2, firstValueText2];
  }, [value, formatList], (next, prev) => prev[0] !== next[0] || !shallowequal(prev[1], next[1]));
  const fullValueTexts = computed(() => texts.value[0]);
  const firstValueText = computed(() => texts.value[1]);
  return [fullValueTexts, firstValueText];
}
function useHoverValue(valueText, _ref) {
  let {
    formatList,
    generateConfig: generateConfig2,
    locale: locale2
  } = _ref;
  const innerValue = ref(null);
  let rafId;
  function setValue(val) {
    let immediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    wrapperRaf.cancel(rafId);
    if (immediately) {
      innerValue.value = val;
      return;
    }
    rafId = wrapperRaf(() => {
      innerValue.value = val;
    });
  }
  const [, firstText] = useValueTexts(innerValue, {
    formatList,
    generateConfig: generateConfig2,
    locale: locale2
  });
  function onEnter(date) {
    setValue(date);
  }
  function onLeave() {
    let immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    setValue(null, immediately);
  }
  watch(valueText, () => {
    onLeave(true);
  });
  return [firstText, onEnter, onLeave];
}
function usePresets(presets, legacyRanges) {
  return computed(() => {
    if (presets === null || presets === undefined ? undefined : presets.value) {
      return presets.value;
    }
    if (legacyRanges === null || legacyRanges === undefined ? undefined : legacyRanges.value) {
      warningOnce(false, "`ranges` is deprecated. Please use `presets` instead.");
      const rangeLabels = Object.keys(legacyRanges.value);
      return rangeLabels.map((label) => {
        const range = legacyRanges.value[label];
        const newValues = typeof range === "function" ? range() : range;
        return {
          label,
          value: newValues
        };
      });
    }
    return [];
  });
}
function Picker() {
  return defineComponent({
    name: "Picker",
    inheritAttrs: false,
    props: ["prefixCls", "id", "tabindex", "dropdownClassName", "dropdownAlign", "popupStyle", "transitionName", "generateConfig", "locale", "inputReadOnly", "allowClear", "autofocus", "showTime", "showNow", "showHour", "showMinute", "showSecond", "picker", "format", "use12Hours", "value", "defaultValue", "open", "defaultOpen", "defaultOpenValue", "suffixIcon", "presets", "clearIcon", "disabled", "disabledDate", "placeholder", "getPopupContainer", "panelRender", "inputRender", "onChange", "onOpenChange", "onPanelChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onContextmenu", "onClick", "onKeydown", "onSelect", "direction", "autocomplete", "showToday", "renderExtraFooter", "dateRender", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions"],
    setup(props, _ref) {
      let {
        attrs,
        expose
      } = _ref;
      const inputRef = ref(null);
      const presets = computed(() => props.presets);
      const presetList = usePresets(presets);
      const picker = computed(() => {
        var _a;
        return (_a = props.picker) !== null && _a !== undefined ? _a : "date";
      });
      const needConfirmButton = computed(() => picker.value === "date" && !!props.showTime || picker.value === "time");
      const formatList = computed(() => toArray$1(getDefaultFormat(props.format, picker.value, props.showTime, props.use12Hours)));
      const panelDivRef = ref(null);
      const inputDivRef = ref(null);
      const containerRef = ref(null);
      const [mergedValue, setInnerValue] = useMergedState(null, {
        value: toRef(props, "value"),
        defaultValue: props.defaultValue
      });
      const selectedValue = ref(mergedValue.value);
      const setSelectedValue = (val) => {
        selectedValue.value = val;
      };
      const operationRef = ref(null);
      const [mergedOpen, triggerInnerOpen] = useMergedState(false, {
        value: toRef(props, "open"),
        defaultValue: props.defaultOpen,
        postState: (postOpen) => props.disabled ? false : postOpen,
        onChange: (newOpen) => {
          if (props.onOpenChange) {
            props.onOpenChange(newOpen);
          }
          if (!newOpen && operationRef.value && operationRef.value.onClose) {
            operationRef.value.onClose();
          }
        }
      });
      const [valueTexts, firstValueText] = useValueTexts(selectedValue, {
        formatList,
        generateConfig: toRef(props, "generateConfig"),
        locale: toRef(props, "locale")
      });
      const [text, triggerTextChange, resetText] = useTextValueMapping({
        valueTexts,
        onTextChange: (newText) => {
          const inputDate = parseValue(newText, {
            locale: props.locale,
            formatList: formatList.value,
            generateConfig: props.generateConfig
          });
          if (inputDate && (!props.disabledDate || !props.disabledDate(inputDate))) {
            setSelectedValue(inputDate);
          }
        }
      });
      const triggerChange = (newValue) => {
        const {
          onChange,
          generateConfig: generateConfig2,
          locale: locale2
        } = props;
        setSelectedValue(newValue);
        setInnerValue(newValue);
        if (onChange && !isEqual(generateConfig2, mergedValue.value, newValue)) {
          onChange(newValue, newValue ? formatValue(newValue, {
            generateConfig: generateConfig2,
            locale: locale2,
            format: formatList.value[0]
          }) : "");
        }
      };
      const triggerOpen = (newOpen) => {
        if (props.disabled && newOpen) {
          return;
        }
        triggerInnerOpen(newOpen);
      };
      const forwardKeydown = (e) => {
        if (mergedOpen.value && operationRef.value && operationRef.value.onKeydown) {
          return operationRef.value.onKeydown(e);
        }
        {
          return false;
        }
      };
      const onInternalMouseup = function() {
        if (props.onMouseup) {
          props.onMouseup(...arguments);
        }
        if (inputRef.value) {
          inputRef.value.focus();
          triggerOpen(true);
        }
      };
      const [inputProps, {
        focused,
        typing
      }] = usePickerInput({
        blurToCancel: needConfirmButton,
        open: mergedOpen,
        value: text,
        triggerOpen,
        forwardKeydown,
        isClickOutside: (target) => !elementsContains([panelDivRef.value, inputDivRef.value, containerRef.value], target),
        onSubmit: () => {
          if (
            // When user typing disabledDate with keyboard and enter, this value will be empty
            !selectedValue.value || // Normal disabled check
            props.disabledDate && props.disabledDate(selectedValue.value)
          ) {
            return false;
          }
          triggerChange(selectedValue.value);
          triggerOpen(false);
          resetText();
          return true;
        },
        onCancel: () => {
          triggerOpen(false);
          setSelectedValue(mergedValue.value);
          resetText();
        },
        onKeydown: (e, preventDefault) => {
          var _a;
          (_a = props.onKeydown) === null || _a === undefined ? undefined : _a.call(props, e, preventDefault);
        },
        onFocus: (e) => {
          var _a;
          (_a = props.onFocus) === null || _a === undefined ? undefined : _a.call(props, e);
        },
        onBlur: (e) => {
          var _a;
          (_a = props.onBlur) === null || _a === undefined ? undefined : _a.call(props, e);
        }
      });
      watch([mergedOpen, valueTexts], () => {
        if (!mergedOpen.value) {
          setSelectedValue(mergedValue.value);
          if (!valueTexts.value.length || valueTexts.value[0] === "") {
            triggerTextChange("");
          } else if (firstValueText.value !== text.value) {
            resetText();
          }
        }
      });
      watch(picker, () => {
        if (!mergedOpen.value) {
          resetText();
        }
      });
      watch(mergedValue, () => {
        setSelectedValue(mergedValue.value);
      });
      const [hoverValue, onEnter, onLeave] = useHoverValue(text, {
        formatList,
        generateConfig: toRef(props, "generateConfig"),
        locale: toRef(props, "locale")
      });
      const onContextSelect = (date, type) => {
        if (type === "submit" || type !== "key" && !needConfirmButton.value) {
          triggerChange(date);
          triggerOpen(false);
        }
      };
      useProvidePanel({
        operationRef,
        hideHeader: computed(() => picker.value === "time"),
        onSelect: onContextSelect,
        open: mergedOpen,
        defaultOpenValue: toRef(props, "defaultOpenValue"),
        onDateMouseenter: onEnter,
        onDateMouseleave: onLeave
      });
      expose({
        focus: () => {
          if (inputRef.value) {
            inputRef.value.focus();
          }
        },
        blur: () => {
          if (inputRef.value) {
            inputRef.value.blur();
          }
        }
      });
      return () => {
        const {
          prefixCls = "rc-picker",
          id,
          tabindex,
          dropdownClassName,
          dropdownAlign,
          popupStyle,
          transitionName,
          generateConfig: generateConfig2,
          locale: locale2,
          inputReadOnly,
          allowClear,
          autofocus,
          picker: picker2 = "date",
          defaultOpenValue,
          suffixIcon,
          clearIcon,
          disabled,
          placeholder,
          getPopupContainer,
          panelRender,
          onMousedown,
          onMouseenter,
          onMouseleave,
          onContextmenu,
          onClick,
          onSelect,
          direction,
          autocomplete = "off"
        } = props;
        const panelProps = _extends(_extends(_extends({}, props), attrs), {
          class: classNames({
            [`${prefixCls}-panel-focused`]: !typing.value
          }),
          style: undefined,
          pickerValue: undefined,
          onPickerValueChange: undefined,
          onChange: null
        });
        let panelNode = createVNode("div", {
          "class": `${prefixCls}-panel-layout`
        }, [createVNode(PresetPanel, {
          "prefixCls": prefixCls,
          "presets": presetList.value,
          "onClick": (nextValue) => {
            triggerChange(nextValue);
            triggerOpen(false);
          }
        }, null), createVNode(PickerPanel$1, _objectSpread$9(_objectSpread$9({}, panelProps), {}, {
          "generateConfig": generateConfig2,
          "value": selectedValue.value,
          "locale": locale2,
          "tabindex": -1,
          "onSelect": (date) => {
            onSelect === null || onSelect === undefined ? undefined : onSelect(date);
            setSelectedValue(date);
          },
          "direction": direction,
          "onPanelChange": (viewDate, mode) => {
            const {
              onPanelChange
            } = props;
            onLeave(true);
            onPanelChange === null || onPanelChange === undefined ? undefined : onPanelChange(viewDate, mode);
          }
        }), null)]);
        if (panelRender) {
          panelNode = panelRender(panelNode);
        }
        const panel = createVNode("div", {
          "class": `${prefixCls}-panel-container`,
          "ref": panelDivRef,
          "onMousedown": (e) => {
            e.preventDefault();
          }
        }, [panelNode]);
        let suffixNode;
        if (suffixIcon) {
          suffixNode = createVNode("span", {
            "class": `${prefixCls}-suffix`
          }, [suffixIcon]);
        }
        let clearNode;
        if (allowClear && mergedValue.value && !disabled) {
          clearNode = createVNode("span", {
            "onMousedown": (e) => {
              e.preventDefault();
              e.stopPropagation();
            },
            "onMouseup": (e) => {
              e.preventDefault();
              e.stopPropagation();
              triggerChange(null);
              triggerOpen(false);
            },
            "class": `${prefixCls}-clear`,
            "role": "button"
          }, [clearIcon || createVNode("span", {
            "class": `${prefixCls}-clear-btn`
          }, null)]);
        }
        const mergedInputProps = _extends(_extends(_extends(_extends({
          id,
          tabindex,
          disabled,
          readonly: inputReadOnly || typeof formatList.value[0] === "function" || !typing.value,
          value: hoverValue.value || text.value,
          onInput: (e) => {
            triggerTextChange(e.target.value);
          },
          autofocus,
          placeholder,
          ref: inputRef,
          title: text.value
        }, inputProps.value), {
          size: getInputSize(picker2, formatList.value[0], generateConfig2)
        }), getDataOrAriaProps(props)), {
          autocomplete
        });
        const inputNode = props.inputRender ? props.inputRender(mergedInputProps) : createVNode("input", mergedInputProps, null);
        const popupPlacement = direction === "rtl" ? "bottomRight" : "bottomLeft";
        return createVNode("div", {
          "ref": containerRef,
          "class": classNames(prefixCls, attrs.class, {
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-focused`]: focused.value,
            [`${prefixCls}-rtl`]: direction === "rtl"
          }),
          "style": attrs.style,
          "onMousedown": onMousedown,
          "onMouseup": onInternalMouseup,
          "onMouseenter": onMouseenter,
          "onMouseleave": onMouseleave,
          "onContextmenu": onContextmenu,
          "onClick": onClick
        }, [createVNode("div", {
          "class": classNames(`${prefixCls}-input`, {
            [`${prefixCls}-input-placeholder`]: !!hoverValue.value
          }),
          "ref": inputDivRef
        }, [inputNode, suffixNode, clearNode]), createVNode(PickerTrigger, {
          "visible": mergedOpen.value,
          "popupStyle": popupStyle,
          "prefixCls": prefixCls,
          "dropdownClassName": dropdownClassName,
          "dropdownAlign": dropdownAlign,
          "getPopupContainer": getPopupContainer,
          "transitionName": transitionName,
          "popupPlacement": popupPlacement,
          "direction": direction
        }, {
          default: () => [createVNode("div", {
            "style": {
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }
          }, null)],
          popupElement: () => panel
        })]);
      };
    }
  });
}
const Picker$1 = Picker();
function useRangeDisabled(_ref, openRecordsRef) {
  let {
    picker,
    locale: locale2,
    selectedValue,
    disabledDate,
    disabled,
    generateConfig: generateConfig2
  } = _ref;
  const startDate = computed(() => getValue(selectedValue.value, 0));
  const endDate = computed(() => getValue(selectedValue.value, 1));
  function weekFirstDate(date) {
    return generateConfig2.value.locale.getWeekFirstDate(locale2.value.locale, date);
  }
  function monthNumber(date) {
    const year = generateConfig2.value.getYear(date);
    const month = generateConfig2.value.getMonth(date);
    return year * 100 + month;
  }
  function quarterNumber(date) {
    const year = generateConfig2.value.getYear(date);
    const quarter = getQuarter(generateConfig2.value, date);
    return year * 10 + quarter;
  }
  const disabledStartDate = (date) => {
    var _a;
    if (disabledDate && ((_a = disabledDate === null || disabledDate === undefined ? undefined : disabledDate.value) === null || _a === undefined ? undefined : _a.call(disabledDate, date))) {
      return true;
    }
    if (disabled[1] && endDate) {
      return !isSameDate(generateConfig2.value, date, endDate.value) && generateConfig2.value.isAfter(date, endDate.value);
    }
    if (openRecordsRef.value[1] && endDate.value) {
      switch (picker.value) {
        case "quarter":
          return quarterNumber(date) > quarterNumber(endDate.value);
        case "month":
          return monthNumber(date) > monthNumber(endDate.value);
        case "week":
          return weekFirstDate(date) > weekFirstDate(endDate.value);
        default:
          return !isSameDate(generateConfig2.value, date, endDate.value) && generateConfig2.value.isAfter(date, endDate.value);
      }
    }
    return false;
  };
  const disabledEndDate = (date) => {
    var _a;
    if ((_a = disabledDate.value) === null || _a === undefined ? undefined : _a.call(disabledDate, date)) {
      return true;
    }
    if (disabled[0] && startDate) {
      return !isSameDate(generateConfig2.value, date, endDate.value) && generateConfig2.value.isAfter(startDate.value, date);
    }
    if (openRecordsRef.value[0] && startDate.value) {
      switch (picker.value) {
        case "quarter":
          return quarterNumber(date) < quarterNumber(startDate.value);
        case "month":
          return monthNumber(date) < monthNumber(startDate.value);
        case "week":
          return weekFirstDate(date) < weekFirstDate(startDate.value);
        default:
          return !isSameDate(generateConfig2.value, date, startDate.value) && generateConfig2.value.isAfter(startDate.value, date);
      }
    }
    return false;
  };
  return [disabledStartDate, disabledEndDate];
}
function getStartEndDistance(startDate, endDate, picker, generateConfig2) {
  const startNext = getClosingViewDate(startDate, picker, generateConfig2, 1);
  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return "same";
    }
    if (compareFunc(startNext, endDate)) {
      return "closing";
    }
    return "far";
  }
  switch (picker) {
    case "year":
      return getDistance((start, end) => isSameDecade(generateConfig2, start, end));
    case "quarter":
    case "month":
      return getDistance((start, end) => isSameYear(generateConfig2, start, end));
    default:
      return getDistance((start, end) => isSameMonth(generateConfig2, start, end));
  }
}
function getRangeViewDate(values, index, picker, generateConfig2) {
  const startDate = getValue(values, 0);
  const endDate = getValue(values, 1);
  if (index === 0) {
    return startDate;
  }
  if (startDate && endDate) {
    const distance = getStartEndDistance(startDate, endDate, picker, generateConfig2);
    switch (distance) {
      case "same":
        return startDate;
      case "closing":
        return startDate;
      default:
        return getClosingViewDate(endDate, picker, generateConfig2, -1);
    }
  }
  return startDate;
}
function useRangeViewDates(_ref) {
  let {
    values,
    picker,
    defaultDates,
    generateConfig: generateConfig2
  } = _ref;
  const defaultViewDates = ref([getValue(defaultDates, 0), getValue(defaultDates, 1)]);
  const viewDates = ref(null);
  const startDate = computed(() => getValue(values.value, 0));
  const endDate = computed(() => getValue(values.value, 1));
  const getViewDate = (index) => {
    if (defaultViewDates.value[index]) {
      return defaultViewDates.value[index];
    }
    return getValue(viewDates.value, index) || getRangeViewDate(values.value, index, picker.value, generateConfig2.value) || startDate.value || endDate.value || generateConfig2.value.getNow();
  };
  const startViewDate = ref(null);
  const endViewDate = ref(null);
  watchEffect(() => {
    startViewDate.value = getViewDate(0);
    endViewDate.value = getViewDate(1);
  });
  function setViewDate(viewDate, index) {
    if (viewDate) {
      let newViewDates = updateValues(viewDates.value, viewDate, index);
      defaultViewDates.value = updateValues(defaultViewDates.value, null, index) || [null, null];
      const anotherIndex = (index + 1) % 2;
      if (!getValue(values.value, anotherIndex)) {
        newViewDates = updateValues(newViewDates, viewDate, anotherIndex);
      }
      viewDates.value = newViewDates;
    } else if (startDate.value || endDate.value) {
      viewDates.value = null;
    }
  }
  return [startViewDate, endViewDate, setViewDate];
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain === null || plain === undefined ? undefined : plain.$el) !== null && _a !== undefined ? _a : plain;
}
function tryOnMounted(fn) {
  let sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (getCurrentInstance()) onMounted(fn);
  else if (sync) fn();
  else nextTick(fn);
}
function useSupported(callback) {
  let sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const isSupported = shallowRef();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
const defaultWindow = undefined;
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function useResizeObserver(target, callback) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    window = defaultWindow
  } = options, observerOptions = __rest$2(options, ["window"]);
  let observer;
  const isSupported = useSupported(() => window && "ResizeObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementSize(target) {
  let initialSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    width: 0,
    height: 0
  };
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    box = "content-box"
  } = options;
  const width = shallowRef(initialSize.width);
  const height = shallowRef(initialSize.height);
  useResizeObserver(target, (_ref) => {
    let [entry] = _ref;
    const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
    if (boxSize) {
      width.value = boxSize.reduce((acc, _ref2) => {
        let {
          inlineSize
        } = _ref2;
        return acc + inlineSize;
      }, 0);
      height.value = boxSize.reduce((acc, _ref3) => {
        let {
          blockSize
        } = _ref3;
        return acc + blockSize;
      }, 0);
    } else {
      width.value = entry.contentRect.width;
      height.value = entry.contentRect.height;
    }
  }, options);
  watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width,
    height
  };
}
function reorderValues(values, generateConfig2) {
  if (values && values[0] && values[1] && generateConfig2.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }
  return values;
}
function canValueTrigger(value, index, disabled, allowEmpty) {
  if (value) {
    return true;
  }
  if (allowEmpty && allowEmpty[index]) {
    return true;
  }
  if (disabled[(index + 1) % 2]) {
    return true;
  }
  return false;
}
function RangerPicker() {
  return defineComponent({
    name: "RangerPicker",
    inheritAttrs: false,
    props: ["prefixCls", "id", "popupStyle", "dropdownClassName", "transitionName", "dropdownAlign", "getPopupContainer", "generateConfig", "locale", "placeholder", "autofocus", "disabled", "format", "picker", "showTime", "showNow", "showHour", "showMinute", "showSecond", "use12Hours", "separator", "value", "defaultValue", "defaultPickerValue", "open", "defaultOpen", "disabledDate", "disabledTime", "dateRender", "panelRender", "ranges", "allowEmpty", "allowClear", "suffixIcon", "clearIcon", "pickerRef", "inputReadOnly", "mode", "renderExtraFooter", "onChange", "onOpenChange", "onPanelChange", "onCalendarChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onClick", "onOk", "onKeydown", "components", "order", "direction", "activePickerIndex", "autocomplete", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions", "disabledMinutes", "presets", "prevIcon", "nextIcon", "superPrevIcon", "superNextIcon"],
    setup(props, _ref) {
      let {
        attrs,
        expose
      } = _ref;
      const needConfirmButton = computed(() => props.picker === "date" && !!props.showTime || props.picker === "time");
      const presets = computed(() => props.presets);
      const ranges = computed(() => props.ranges);
      const presetList = usePresets(presets, ranges);
      const openRecordsRef = ref({});
      const containerRef = ref(null);
      const panelDivRef = ref(null);
      const startInputDivRef = ref(null);
      const endInputDivRef = ref(null);
      const separatorRef = ref(null);
      const startInputRef = ref(null);
      const endInputRef = ref(null);
      const arrowRef = ref(null);
      const formatList = computed(() => toArray$1(getDefaultFormat(props.format, props.picker, props.showTime, props.use12Hours)));
      const [mergedActivePickerIndex, setMergedActivePickerIndex] = useMergedState(0, {
        value: toRef(props, "activePickerIndex")
      });
      const operationRef = ref(null);
      const mergedDisabled = computed(() => {
        const {
          disabled
        } = props;
        if (Array.isArray(disabled)) {
          return disabled;
        }
        return [disabled || false, disabled || false];
      });
      const [mergedValue, setInnerValue] = useMergedState(null, {
        value: toRef(props, "value"),
        defaultValue: props.defaultValue,
        postState: (values) => props.picker === "time" && !props.order ? values : reorderValues(values, props.generateConfig)
      });
      const [startViewDate, endViewDate, setViewDate] = useRangeViewDates({
        values: mergedValue,
        picker: toRef(props, "picker"),
        defaultDates: props.defaultPickerValue,
        generateConfig: toRef(props, "generateConfig")
      });
      const [selectedValue, setSelectedValue] = useMergedState(mergedValue.value, {
        postState: (values) => {
          let postValues = values;
          if (mergedDisabled.value[0] && mergedDisabled.value[1]) {
            return postValues;
          }
          for (let i = 0; i < 2; i += 1) {
            if (mergedDisabled.value[i] && !getValue(postValues, i) && !getValue(props.allowEmpty, i)) {
              postValues = updateValues(postValues, props.generateConfig.getNow(), i);
            }
          }
          return postValues;
        }
      });
      const [mergedModes, setInnerModes] = useMergedState([props.picker, props.picker], {
        value: toRef(props, "mode")
      });
      watch(() => props.picker, () => {
        setInnerModes([props.picker, props.picker]);
      });
      const triggerModesChange = (modes, values) => {
        var _a;
        setInnerModes(modes);
        (_a = props.onPanelChange) === null || _a === undefined ? undefined : _a.call(props, values, modes);
      };
      const [disabledStartDate, disabledEndDate] = useRangeDisabled({
        picker: toRef(props, "picker"),
        selectedValue,
        locale: toRef(props, "locale"),
        disabled: mergedDisabled,
        disabledDate: toRef(props, "disabledDate"),
        generateConfig: toRef(props, "generateConfig")
      }, openRecordsRef);
      const [mergedOpen, triggerInnerOpen] = useMergedState(false, {
        value: toRef(props, "open"),
        defaultValue: props.defaultOpen,
        postState: (postOpen) => mergedDisabled.value[mergedActivePickerIndex.value] ? false : postOpen,
        onChange: (newOpen) => {
          var _a;
          (_a = props.onOpenChange) === null || _a === undefined ? undefined : _a.call(props, newOpen);
          if (!newOpen && operationRef.value && operationRef.value.onClose) {
            operationRef.value.onClose();
          }
        }
      });
      const startOpen = computed(() => mergedOpen.value && mergedActivePickerIndex.value === 0);
      const endOpen = computed(() => mergedOpen.value && mergedActivePickerIndex.value === 1);
      const panelLeft = ref(0);
      const arrowLeft = ref(0);
      const popupMinWidth = ref(0);
      const {
        width: containerWidth
      } = useElementSize(containerRef);
      watch([mergedOpen, containerWidth], () => {
        if (!mergedOpen.value && containerRef.value) {
          popupMinWidth.value = containerWidth.value;
        }
      });
      const {
        width: panelDivWidth
      } = useElementSize(panelDivRef);
      const {
        width: arrowWidth
      } = useElementSize(arrowRef);
      const {
        width: startInputDivWidth
      } = useElementSize(startInputDivRef);
      const {
        width: separatorWidth
      } = useElementSize(separatorRef);
      watch([mergedActivePickerIndex, mergedOpen, panelDivWidth, arrowWidth, startInputDivWidth, separatorWidth, () => props.direction], () => {
        arrowLeft.value = 0;
        if (mergedActivePickerIndex.value) {
          if (startInputDivRef.value && separatorRef.value) {
            arrowLeft.value = startInputDivWidth.value + separatorWidth.value;
            if (panelDivWidth.value && arrowWidth.value && arrowLeft.value > panelDivWidth.value - arrowWidth.value - (props.direction === "rtl" || arrowRef.value.offsetLeft > arrowLeft.value ? 0 : arrowRef.value.offsetLeft)) {
              panelLeft.value = arrowLeft.value;
            }
          }
        } else if (mergedActivePickerIndex.value === 0) {
          panelLeft.value = 0;
        }
      }, {
        immediate: true
      });
      const triggerRef = ref();
      function triggerOpen(newOpen, index) {
        if (newOpen) {
          clearTimeout(triggerRef.value);
          openRecordsRef.value[index] = true;
          setMergedActivePickerIndex(index);
          triggerInnerOpen(newOpen);
          if (!mergedOpen.value) {
            setViewDate(null, index);
          }
        } else if (mergedActivePickerIndex.value === index) {
          triggerInnerOpen(newOpen);
          const openRecords = openRecordsRef.value;
          triggerRef.value = setTimeout(() => {
            if (openRecords === openRecordsRef.value) {
              openRecordsRef.value = {};
            }
          });
        }
      }
      function triggerOpenAndFocus(index) {
        triggerOpen(true, index);
        setTimeout(() => {
          const inputRef = [startInputRef, endInputRef][index];
          if (inputRef.value) {
            inputRef.value.focus();
          }
        }, 0);
      }
      function triggerChange(newValue, sourceIndex) {
        let values = newValue;
        let startValue = getValue(values, 0);
        let endValue = getValue(values, 1);
        const {
          generateConfig: generateConfig2,
          locale: locale2,
          picker,
          order,
          onCalendarChange,
          allowEmpty,
          onChange,
          showTime
        } = props;
        if (startValue && endValue && generateConfig2.isAfter(startValue, endValue)) {
          if (
            // WeekPicker only compare week
            picker === "week" && !isSameWeek(generateConfig2, locale2.locale, startValue, endValue) || // QuotaPicker only compare week
            picker === "quarter" && !isSameQuarter(generateConfig2, startValue, endValue) || // Other non-TimePicker compare date
            picker !== "week" && picker !== "quarter" && picker !== "time" && !(showTime ? isEqual(generateConfig2, startValue, endValue) : isSameDate(generateConfig2, startValue, endValue))
          ) {
            if (sourceIndex === 0) {
              values = [startValue, null];
              endValue = null;
            } else {
              startValue = null;
              values = [null, endValue];
            }
            openRecordsRef.value = {
              [sourceIndex]: true
            };
          } else if (picker !== "time" || order !== false) {
            values = reorderValues(values, generateConfig2);
          }
        }
        setSelectedValue(values);
        const startStr2 = values && values[0] ? formatValue(values[0], {
          generateConfig: generateConfig2,
          locale: locale2,
          format: formatList.value[0]
        }) : "";
        const endStr2 = values && values[1] ? formatValue(values[1], {
          generateConfig: generateConfig2,
          locale: locale2,
          format: formatList.value[0]
        }) : "";
        if (onCalendarChange) {
          const info = {
            range: sourceIndex === 0 ? "start" : "end"
          };
          onCalendarChange(values, [startStr2, endStr2], info);
        }
        const canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled.value, allowEmpty);
        const canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled.value, allowEmpty);
        const canTrigger = values === null || canStartValueTrigger && canEndValueTrigger;
        if (canTrigger) {
          setInnerValue(values);
          if (onChange && (!isEqual(generateConfig2, getValue(mergedValue.value, 0), startValue) || !isEqual(generateConfig2, getValue(mergedValue.value, 1), endValue))) {
            onChange(values, [startStr2, endStr2]);
          }
        }
        let nextOpenIndex = null;
        if (sourceIndex === 0 && !mergedDisabled.value[1]) {
          nextOpenIndex = 1;
        } else if (sourceIndex === 1 && !mergedDisabled.value[0]) {
          nextOpenIndex = 0;
        }
        if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex.value && (!openRecordsRef.value[nextOpenIndex] || !getValue(values, nextOpenIndex)) && getValue(values, sourceIndex)) {
          triggerOpenAndFocus(nextOpenIndex);
        } else {
          triggerOpen(false, sourceIndex);
        }
      }
      const forwardKeydown = (e) => {
        if (mergedOpen && operationRef.value && operationRef.value.onKeydown) {
          return operationRef.value.onKeydown(e);
        }
        {
          return false;
        }
      };
      const sharedTextHooksProps = {
        formatList,
        generateConfig: toRef(props, "generateConfig"),
        locale: toRef(props, "locale")
      };
      const [startValueTexts, firstStartValueText] = useValueTexts(computed(() => getValue(selectedValue.value, 0)), sharedTextHooksProps);
      const [endValueTexts, firstEndValueText] = useValueTexts(computed(() => getValue(selectedValue.value, 1)), sharedTextHooksProps);
      const onTextChange = (newText, index) => {
        const inputDate = parseValue(newText, {
          locale: props.locale,
          formatList: formatList.value,
          generateConfig: props.generateConfig
        });
        const disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;
        if (inputDate && !disabledFunc(inputDate)) {
          setSelectedValue(updateValues(selectedValue.value, inputDate, index));
          setViewDate(inputDate, index);
        }
      };
      const [startText, triggerStartTextChange, resetStartText] = useTextValueMapping({
        valueTexts: startValueTexts,
        onTextChange: (newText) => onTextChange(newText, 0)
      });
      const [endText, triggerEndTextChange, resetEndText] = useTextValueMapping({
        valueTexts: endValueTexts,
        onTextChange: (newText) => onTextChange(newText, 1)
      });
      const [rangeHoverValue, setRangeHoverValue] = useState(null);
      const [hoverRangedValue, setHoverRangedValue] = useState(null);
      const [startHoverValue, onStartEnter, onStartLeave] = useHoverValue(startText, sharedTextHooksProps);
      const [endHoverValue, onEndEnter, onEndLeave] = useHoverValue(endText, sharedTextHooksProps);
      const onDateMouseenter = (date) => {
        setHoverRangedValue(updateValues(selectedValue.value, date, mergedActivePickerIndex.value));
        if (mergedActivePickerIndex.value === 0) {
          onStartEnter(date);
        } else {
          onEndEnter(date);
        }
      };
      const onDateMouseleave = () => {
        setHoverRangedValue(updateValues(selectedValue.value, null, mergedActivePickerIndex.value));
        if (mergedActivePickerIndex.value === 0) {
          onStartLeave();
        } else {
          onEndLeave();
        }
      };
      const getSharedInputHookProps = (index, resetText) => ({
        forwardKeydown,
        onBlur: (e) => {
          var _a;
          (_a = props.onBlur) === null || _a === undefined ? undefined : _a.call(props, e);
        },
        isClickOutside: (target) => !elementsContains([panelDivRef.value, startInputDivRef.value, endInputDivRef.value, containerRef.value], target),
        onFocus: (e) => {
          var _a;
          setMergedActivePickerIndex(index);
          (_a = props.onFocus) === null || _a === undefined ? undefined : _a.call(props, e);
        },
        triggerOpen: (newOpen) => {
          triggerOpen(newOpen, index);
        },
        onSubmit: () => {
          if (
            // When user typing disabledDate with keyboard and enter, this value will be empty
            !selectedValue.value || // Normal disabled check
            props.disabledDate && props.disabledDate(selectedValue.value[index])
          ) {
            return false;
          }
          triggerChange(selectedValue.value, index);
          resetText();
        },
        onCancel: () => {
          triggerOpen(false, index);
          setSelectedValue(mergedValue.value);
          resetText();
        }
      });
      const [startInputProps, {
        focused: startFocused,
        typing: startTyping
      }] = usePickerInput(_extends(_extends({}, getSharedInputHookProps(0, resetStartText)), {
        blurToCancel: needConfirmButton,
        open: startOpen,
        value: startText,
        onKeydown: (e, preventDefault) => {
          var _a;
          (_a = props.onKeydown) === null || _a === undefined ? undefined : _a.call(props, e, preventDefault);
        }
      }));
      const [endInputProps, {
        focused: endFocused,
        typing: endTyping
      }] = usePickerInput(_extends(_extends({}, getSharedInputHookProps(1, resetEndText)), {
        blurToCancel: needConfirmButton,
        open: endOpen,
        value: endText,
        onKeydown: (e, preventDefault) => {
          var _a;
          (_a = props.onKeydown) === null || _a === undefined ? undefined : _a.call(props, e, preventDefault);
        }
      }));
      const onPickerClick = (e) => {
        var _a;
        (_a = props.onClick) === null || _a === undefined ? undefined : _a.call(props, e);
        if (!mergedOpen.value && !startInputRef.value.contains(e.target) && !endInputRef.value.contains(e.target)) {
          if (!mergedDisabled.value[0]) {
            triggerOpenAndFocus(0);
          } else if (!mergedDisabled.value[1]) {
            triggerOpenAndFocus(1);
          }
        }
      };
      const onPickerMousedown = (e) => {
        var _a;
        (_a = props.onMousedown) === null || _a === undefined ? undefined : _a.call(props, e);
        if (mergedOpen.value && (startFocused.value || endFocused.value) && !startInputRef.value.contains(e.target) && !endInputRef.value.contains(e.target)) {
          e.preventDefault();
        }
      };
      const startStr = computed(() => {
        var _a;
        return ((_a = mergedValue.value) === null || _a === undefined ? undefined : _a[0]) ? formatValue(mergedValue.value[0], {
          locale: props.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: props.generateConfig
        }) : "";
      });
      const endStr = computed(() => {
        var _a;
        return ((_a = mergedValue.value) === null || _a === undefined ? undefined : _a[1]) ? formatValue(mergedValue.value[1], {
          locale: props.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: props.generateConfig
        }) : "";
      });
      watch([mergedOpen, startValueTexts, endValueTexts], () => {
        if (!mergedOpen.value) {
          setSelectedValue(mergedValue.value);
          if (!startValueTexts.value.length || startValueTexts.value[0] === "") {
            triggerStartTextChange("");
          } else if (firstStartValueText.value !== startText.value) {
            resetStartText();
          }
          if (!endValueTexts.value.length || endValueTexts.value[0] === "") {
            triggerEndTextChange("");
          } else if (firstEndValueText.value !== endText.value) {
            resetEndText();
          }
        }
      });
      watch([startStr, endStr], () => {
        setSelectedValue(mergedValue.value);
      });
      expose({
        focus: () => {
          if (startInputRef.value) {
            startInputRef.value.focus();
          }
        },
        blur: () => {
          if (startInputRef.value) {
            startInputRef.value.blur();
          }
          if (endInputRef.value) {
            endInputRef.value.blur();
          }
        }
      });
      const panelHoverRangedValue = computed(() => {
        if (mergedOpen.value && hoverRangedValue.value && hoverRangedValue.value[0] && hoverRangedValue.value[1] && props.generateConfig.isAfter(hoverRangedValue.value[1], hoverRangedValue.value[0])) {
          return hoverRangedValue.value;
        } else {
          return null;
        }
      });
      function renderPanel() {
        let panelPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        let panelProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          generateConfig: generateConfig2,
          showTime,
          dateRender,
          direction,
          disabledTime,
          prefixCls,
          locale: locale2
        } = props;
        let panelShowTime = showTime;
        if (showTime && typeof showTime === "object" && showTime.defaultValue) {
          const timeDefaultValues = showTime.defaultValue;
          panelShowTime = _extends(_extends({}, showTime), {
            defaultValue: getValue(timeDefaultValues, mergedActivePickerIndex.value) || undefined
          });
        }
        let panelDateRender = null;
        if (dateRender) {
          panelDateRender = (_ref2) => {
            let {
              current: date,
              today
            } = _ref2;
            return dateRender({
              current: date,
              today,
              info: {
                range: mergedActivePickerIndex.value ? "end" : "start"
              }
            });
          };
        }
        return createVNode(RangeContextProvider, {
          "value": {
            inRange: true,
            panelPosition,
            rangedValue: rangeHoverValue.value || selectedValue.value,
            hoverRangedValue: panelHoverRangedValue.value
          }
        }, {
          default: () => [createVNode(PickerPanel$1, _objectSpread$9(_objectSpread$9(_objectSpread$9({}, props), panelProps), {}, {
            "dateRender": panelDateRender,
            "showTime": panelShowTime,
            "mode": mergedModes.value[mergedActivePickerIndex.value],
            "generateConfig": generateConfig2,
            "style": undefined,
            "direction": direction,
            "disabledDate": mergedActivePickerIndex.value === 0 ? disabledStartDate : disabledEndDate,
            "disabledTime": (date) => {
              if (disabledTime) {
                return disabledTime(date, mergedActivePickerIndex.value === 0 ? "start" : "end");
              }
              return false;
            },
            "class": classNames({
              [`${prefixCls}-panel-focused`]: mergedActivePickerIndex.value === 0 ? !startTyping.value : !endTyping.value
            }),
            "value": getValue(selectedValue.value, mergedActivePickerIndex.value),
            "locale": locale2,
            "tabIndex": -1,
            "onPanelChange": (date, newMode) => {
              if (mergedActivePickerIndex.value === 0) {
                onStartLeave(true);
              }
              if (mergedActivePickerIndex.value === 1) {
                onEndLeave(true);
              }
              triggerModesChange(updateValues(mergedModes.value, newMode, mergedActivePickerIndex.value), updateValues(selectedValue.value, date, mergedActivePickerIndex.value));
              let viewDate = date;
              if (panelPosition === "right" && mergedModes.value[mergedActivePickerIndex.value] === newMode) {
                viewDate = getClosingViewDate(viewDate, newMode, generateConfig2, -1);
              }
              setViewDate(viewDate, mergedActivePickerIndex.value);
            },
            "onOk": null,
            "onSelect": undefined,
            "onChange": undefined,
            "defaultValue": mergedActivePickerIndex.value === 0 ? getValue(selectedValue.value, 1) : getValue(selectedValue.value, 0)
          }), null)]
        });
      }
      const onContextSelect = (date, type) => {
        const values = updateValues(selectedValue.value, date, mergedActivePickerIndex.value);
        if (type === "submit" || type !== "key" && !needConfirmButton.value) {
          triggerChange(values, mergedActivePickerIndex.value);
          if (mergedActivePickerIndex.value === 0) {
            onStartLeave();
          } else {
            onEndLeave();
          }
        } else {
          setSelectedValue(values);
        }
      };
      useProvidePanel({
        operationRef,
        hideHeader: computed(() => props.picker === "time"),
        onDateMouseenter,
        onDateMouseleave,
        hideRanges: computed(() => true),
        onSelect: onContextSelect,
        open: mergedOpen
      });
      return () => {
        const {
          prefixCls = "rc-picker",
          id,
          popupStyle,
          dropdownClassName,
          transitionName,
          dropdownAlign,
          getPopupContainer,
          generateConfig: generateConfig2,
          locale: locale2,
          placeholder,
          autofocus,
          picker = "date",
          showTime,
          separator = "~",
          disabledDate,
          panelRender,
          allowClear,
          suffixIcon,
          clearIcon,
          inputReadOnly,
          renderExtraFooter,
          onMouseenter,
          onMouseleave,
          onMouseup,
          onOk,
          components,
          direction,
          autocomplete = "off"
        } = props;
        const arrowPositionStyle = direction === "rtl" ? {
          right: `${arrowLeft.value}px`
        } : {
          left: `${arrowLeft.value}px`
        };
        function renderPanels() {
          let panels;
          const extraNode = getExtraFooter(prefixCls, mergedModes.value[mergedActivePickerIndex.value], renderExtraFooter);
          const rangesNode = getRanges({
            prefixCls,
            components,
            needConfirmButton: needConfirmButton.value,
            okDisabled: !getValue(selectedValue.value, mergedActivePickerIndex.value) || disabledDate && disabledDate(selectedValue.value[mergedActivePickerIndex.value]),
            locale: locale2,
            onOk: () => {
              if (getValue(selectedValue.value, mergedActivePickerIndex.value)) {
                triggerChange(selectedValue.value, mergedActivePickerIndex.value);
                if (onOk) {
                  onOk(selectedValue.value);
                }
              }
            }
          });
          if (picker !== "time" && !showTime) {
            const viewDate = mergedActivePickerIndex.value === 0 ? startViewDate.value : endViewDate.value;
            const nextViewDate = getClosingViewDate(viewDate, picker, generateConfig2);
            const currentMode = mergedModes.value[mergedActivePickerIndex.value];
            const showDoublePanel = currentMode === picker;
            const leftPanel = renderPanel(showDoublePanel ? "left" : false, {
              pickerValue: viewDate,
              onPickerValueChange: (newViewDate) => {
                setViewDate(newViewDate, mergedActivePickerIndex.value);
              }
            });
            const rightPanel = renderPanel("right", {
              pickerValue: nextViewDate,
              onPickerValueChange: (newViewDate) => {
                setViewDate(getClosingViewDate(newViewDate, picker, generateConfig2, -1), mergedActivePickerIndex.value);
              }
            });
            if (direction === "rtl") {
              panels = createVNode(Fragment, null, [rightPanel, showDoublePanel && leftPanel]);
            } else {
              panels = createVNode(Fragment, null, [leftPanel, showDoublePanel && rightPanel]);
            }
          } else {
            panels = renderPanel();
          }
          let mergedNodes = createVNode("div", {
            "class": `${prefixCls}-panel-layout`
          }, [createVNode(PresetPanel, {
            "prefixCls": prefixCls,
            "presets": presetList.value,
            "onClick": (nextValue) => {
              triggerChange(nextValue, null);
              triggerOpen(false, mergedActivePickerIndex.value);
            },
            "onHover": (hoverValue) => {
              setRangeHoverValue(hoverValue);
            }
          }, null), createVNode("div", null, [createVNode("div", {
            "class": `${prefixCls}-panels`
          }, [panels]), (extraNode || rangesNode) && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [extraNode, rangesNode])])]);
          if (panelRender) {
            mergedNodes = panelRender(mergedNodes);
          }
          return createVNode("div", {
            "class": `${prefixCls}-panel-container`,
            "style": {
              marginLeft: `${panelLeft.value}px`
            },
            "ref": panelDivRef,
            "onMousedown": (e) => {
              e.preventDefault();
            }
          }, [mergedNodes]);
        }
        const rangePanel = createVNode("div", {
          "class": classNames(`${prefixCls}-range-wrapper`, `${prefixCls}-${picker}-range-wrapper`),
          "style": {
            minWidth: `${popupMinWidth.value}px`
          }
        }, [createVNode("div", {
          "ref": arrowRef,
          "class": `${prefixCls}-range-arrow`,
          "style": arrowPositionStyle
        }, null), renderPanels()]);
        let suffixNode;
        if (suffixIcon) {
          suffixNode = createVNode("span", {
            "class": `${prefixCls}-suffix`
          }, [suffixIcon]);
        }
        let clearNode;
        if (allowClear && (getValue(mergedValue.value, 0) && !mergedDisabled.value[0] || getValue(mergedValue.value, 1) && !mergedDisabled.value[1])) {
          clearNode = createVNode("span", {
            "onMousedown": (e) => {
              e.preventDefault();
              e.stopPropagation();
            },
            "onMouseup": (e) => {
              e.preventDefault();
              e.stopPropagation();
              let values = mergedValue.value;
              if (!mergedDisabled.value[0]) {
                values = updateValues(values, null, 0);
              }
              if (!mergedDisabled.value[1]) {
                values = updateValues(values, null, 1);
              }
              triggerChange(values, null);
              triggerOpen(false, mergedActivePickerIndex.value);
            },
            "class": `${prefixCls}-clear`
          }, [clearIcon || createVNode("span", {
            "class": `${prefixCls}-clear-btn`
          }, null)]);
        }
        const inputSharedProps = {
          size: getInputSize(picker, formatList.value[0], generateConfig2)
        };
        let activeBarLeft = 0;
        let activeBarWidth = 0;
        if (startInputDivRef.value && endInputDivRef.value && separatorRef.value) {
          if (mergedActivePickerIndex.value === 0) {
            activeBarWidth = startInputDivRef.value.offsetWidth;
          } else {
            activeBarLeft = arrowLeft.value;
            activeBarWidth = endInputDivRef.value.offsetWidth;
          }
        }
        const activeBarPositionStyle = direction === "rtl" ? {
          right: `${activeBarLeft}px`
        } : {
          left: `${activeBarLeft}px`
        };
        return createVNode("div", _objectSpread$9({
          "ref": containerRef,
          "class": classNames(prefixCls, `${prefixCls}-range`, attrs.class, {
            [`${prefixCls}-disabled`]: mergedDisabled.value[0] && mergedDisabled.value[1],
            [`${prefixCls}-focused`]: mergedActivePickerIndex.value === 0 ? startFocused.value : endFocused.value,
            [`${prefixCls}-rtl`]: direction === "rtl"
          }),
          "style": attrs.style,
          "onClick": onPickerClick,
          "onMouseenter": onMouseenter,
          "onMouseleave": onMouseleave,
          "onMousedown": onPickerMousedown,
          "onMouseup": onMouseup
        }, getDataOrAriaProps(props)), [createVNode("div", {
          "class": classNames(`${prefixCls}-input`, {
            [`${prefixCls}-input-active`]: mergedActivePickerIndex.value === 0,
            [`${prefixCls}-input-placeholder`]: !!startHoverValue.value
          }),
          "ref": startInputDivRef
        }, [createVNode("input", _objectSpread$9(_objectSpread$9(_objectSpread$9({
          "id": id,
          "disabled": mergedDisabled.value[0],
          "readonly": inputReadOnly || typeof formatList.value[0] === "function" || !startTyping.value,
          "value": startHoverValue.value || startText.value,
          "onInput": (e) => {
            triggerStartTextChange(e.target.value);
          },
          "autofocus": autofocus,
          "placeholder": getValue(placeholder, 0) || "",
          "ref": startInputRef
        }, startInputProps.value), inputSharedProps), {}, {
          "autocomplete": autocomplete
        }), null)]), createVNode("div", {
          "class": `${prefixCls}-range-separator`,
          "ref": separatorRef
        }, [separator]), createVNode("div", {
          "class": classNames(`${prefixCls}-input`, {
            [`${prefixCls}-input-active`]: mergedActivePickerIndex.value === 1,
            [`${prefixCls}-input-placeholder`]: !!endHoverValue.value
          }),
          "ref": endInputDivRef
        }, [createVNode("input", _objectSpread$9(_objectSpread$9(_objectSpread$9({
          "disabled": mergedDisabled.value[1],
          "readonly": inputReadOnly || typeof formatList.value[0] === "function" || !endTyping.value,
          "value": endHoverValue.value || endText.value,
          "onInput": (e) => {
            triggerEndTextChange(e.target.value);
          },
          "placeholder": getValue(placeholder, 1) || "",
          "ref": endInputRef
        }, endInputProps.value), inputSharedProps), {}, {
          "autocomplete": autocomplete
        }), null)]), createVNode("div", {
          "class": `${prefixCls}-active-bar`,
          "style": _extends(_extends({}, activeBarPositionStyle), {
            width: `${activeBarWidth}px`,
            position: "absolute"
          })
        }, null), suffixNode, clearNode, createVNode(PickerTrigger, {
          "visible": mergedOpen.value,
          "popupStyle": popupStyle,
          "prefixCls": prefixCls,
          "dropdownClassName": dropdownClassName,
          "dropdownAlign": dropdownAlign,
          "getPopupContainer": getPopupContainer,
          "transitionName": transitionName,
          "range": true,
          "direction": direction
        }, {
          default: () => [createVNode("div", {
            "style": {
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }
          }, null)],
          popupElement: () => rangePanel
        })]);
      };
    }
  });
}
const InterRangerPicker = RangerPicker();
const genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
const genHoverStyle = (token) => ({
  borderColor: token.inputBorderHoverColor,
  borderInlineEndWidth: token.lineWidth
});
const genActiveStyle = (token) => ({
  borderColor: token.inputBorderHoverColor,
  boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`,
  borderInlineEndWidth: token.lineWidth,
  outline: 0
});
const genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": _extends({}, genHoverStyle(merge(token, {
    inputBorderHoverColor: token.colorBorder
  })))
});
const genInputLargeStyle = (token) => {
  const {
    inputPaddingVerticalLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    inputPaddingHorizontalLG
  } = token;
  return {
    padding: `${inputPaddingVerticalLG}px ${inputPaddingHorizontalLG}px`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = (token) => ({
  padding: `${token.inputPaddingVerticalSM}px ${token.controlPaddingHorizontalSM - 1}px`,
  borderRadius: token.borderRadiusSM
});
const genBasicInputStyle = (token) => _extends(_extends({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${token.inputPaddingVertical}px ${token.inputPaddingHorizontal}px`,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  backgroundColor: token.colorBgContainer,
  backgroundImage: "none",
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: token.colorBorder,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`
}, genPlaceholderStyle(token.colorTextPlaceholder)), {
  "&:hover": _extends({}, genHoverStyle(token)),
  "&:focus, &-focused": _extends({}, genActiveStyle(token)),
  "&-disabled, &[disabled]": _extends({}, genDisabledStyle(token)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: token.controlHeight,
    lineHeight: token.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${token.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": _extends({}, genInputLargeStyle(token)),
  "&-sm": _extends({}, genInputSmallStyle(token)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
});
function initInputToken(token) {
  return merge(token, {
    inputAffixPadding: token.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((token.controlHeightLG - token.fontSizeLG * token.lineHeightLG) / 2 * 10) / 10 - token.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((token.controlHeightSM - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 0),
    inputPaddingHorizontal: token.paddingSM - token.lineWidth,
    inputPaddingHorizontalSM: token.paddingXS - token.lineWidth,
    inputPaddingHorizontalLG: token.controlPaddingHorizontal - token.lineWidth,
    inputBorderHoverColor: token.colorPrimaryHover,
    inputBorderActiveColor: token.colorPrimaryHover
  });
}
const genPikerPadding = (token, inputHeight, fontSize, paddingHorizontal) => {
  const {
    lineHeight
  } = token;
  const fontHeight = Math.floor(fontSize * lineHeight) + 2;
  const paddingTop = Math.max((inputHeight - fontHeight) / 2, 0);
  const paddingBottom = Math.max(inputHeight - fontHeight - paddingTop, 0);
  return {
    padding: `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`
  };
};
const genPickerCellInnerStyle = (token) => {
  const {
    componentCls,
    pickerCellCls,
    pickerCellInnerCls,
    pickerPanelCellHeight,
    motionDurationSlow,
    borderRadiusSM,
    motionDurationMid,
    controlItemBgHover,
    lineWidth,
    lineType,
    colorPrimary,
    controlItemBgActive,
    colorTextLightSolid,
    controlHeightSM,
    pickerDateHoverRangeBorderColor,
    pickerCellBorderGap,
    pickerBasicCellHoverWithRangeColor,
    pickerPanelCellWidth,
    colorTextDisabled,
    colorBgContainerDisabled
  } = token;
  return {
    "&::before": {
      position: "absolute",
      top: "50%",
      insetInlineStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: pickerPanelCellHeight,
      transform: "translateY(-50%)",
      transition: `all ${motionDurationSlow}`,
      content: '""'
    },
    // >>> Default
    [pickerCellInnerCls]: {
      position: "relative",
      zIndex: 2,
      display: "inline-block",
      minWidth: pickerPanelCellHeight,
      height: pickerPanelCellHeight,
      lineHeight: `${pickerPanelCellHeight}px`,
      borderRadius: borderRadiusSM,
      transition: `background ${motionDurationMid}, border ${motionDurationMid}`
    },
    // >>> Hover
    [`&:hover:not(${pickerCellCls}-in-view),
    &:hover:not(${pickerCellCls}-selected):not(${pickerCellCls}-range-start):not(${pickerCellCls}-range-end):not(${pickerCellCls}-range-hover-start):not(${pickerCellCls}-range-hover-end)`]: {
      [pickerCellInnerCls]: {
        background: controlItemBgHover
      }
    },
    // >>> Today
    [`&-in-view${pickerCellCls}-today ${pickerCellInnerCls}`]: {
      "&::before": {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 1,
        border: `${lineWidth}px ${lineType} ${colorPrimary}`,
        borderRadius: borderRadiusSM,
        content: '""'
      }
    },
    // >>> In Range
    [`&-in-view${pickerCellCls}-in-range`]: {
      position: "relative",
      "&::before": {
        background: controlItemBgActive
      }
    },
    // >>> Selected
    [`&-in-view${pickerCellCls}-selected ${pickerCellInnerCls},
      &-in-view${pickerCellCls}-range-start ${pickerCellInnerCls},
      &-in-view${pickerCellCls}-range-end ${pickerCellInnerCls}`]: {
      color: colorTextLightSolid,
      background: colorPrimary
    },
    [`&-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-range-start-single),
      &-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-range-end-single)`]: {
      "&::before": {
        background: controlItemBgActive
      }
    },
    [`&-in-view${pickerCellCls}-range-start::before`]: {
      insetInlineStart: "50%"
    },
    [`&-in-view${pickerCellCls}-range-end::before`]: {
      insetInlineEnd: "50%"
    },
    // >>> Range Hover
    [`&-in-view${pickerCellCls}-range-hover-start:not(${pickerCellCls}-in-range):not(${pickerCellCls}-range-start):not(${pickerCellCls}-range-end),
      &-in-view${pickerCellCls}-range-hover-end:not(${pickerCellCls}-in-range):not(${pickerCellCls}-range-start):not(${pickerCellCls}-range-end),
      &-in-view${pickerCellCls}-range-hover-start${pickerCellCls}-range-start-single,
      &-in-view${pickerCellCls}-range-hover-start${pickerCellCls}-range-start${pickerCellCls}-range-end${pickerCellCls}-range-end-near-hover,
      &-in-view${pickerCellCls}-range-hover-end${pickerCellCls}-range-start${pickerCellCls}-range-end${pickerCellCls}-range-start-near-hover,
      &-in-view${pickerCellCls}-range-hover-end${pickerCellCls}-range-end-single,
      &-in-view${pickerCellCls}-range-hover:not(${pickerCellCls}-in-range)`]: {
      "&::after": {
        position: "absolute",
        top: "50%",
        zIndex: 0,
        height: controlHeightSM,
        borderTop: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
        borderBottom: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
        transform: "translateY(-50%)",
        transition: `all ${motionDurationSlow}`,
        content: '""'
      }
    },
    // Add space for stash
    [`&-range-hover-start::after,
      &-range-hover-end::after,
      &-range-hover::after`]: {
      insetInlineEnd: 0,
      insetInlineStart: pickerCellBorderGap
    },
    // Hover with in range
    [`&-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover::before,
      &-in-view${pickerCellCls}-range-start${pickerCellCls}-range-hover::before,
      &-in-view${pickerCellCls}-range-end${pickerCellCls}-range-hover::before,
      &-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-range-start-single)${pickerCellCls}-range-hover-start::before,
      &-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-range-end-single)${pickerCellCls}-range-hover-end::before,
      ${componentCls}-panel
      > :not(${componentCls}-date-panel)
      &-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover-start::before,
      ${componentCls}-panel
      > :not(${componentCls}-date-panel)
      &-in-view${pickerCellCls}-in-range${pickerCellCls}-range-hover-end::before`]: {
      background: pickerBasicCellHoverWithRangeColor
    },
    // range start border-radius
    [`&-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-range-start-single):not(${pickerCellCls}-range-end) ${pickerCellInnerCls}`]: {
      borderStartStartRadius: borderRadiusSM,
      borderEndStartRadius: borderRadiusSM,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    },
    // range end border-radius
    [`&-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-range-end-single):not(${pickerCellCls}-range-start) ${pickerCellInnerCls}`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      borderStartEndRadius: borderRadiusSM,
      borderEndEndRadius: borderRadiusSM
    },
    [`&-range-hover${pickerCellCls}-range-end::after`]: {
      insetInlineStart: "50%"
    },
    // Edge start
    [`tr > &-in-view${pickerCellCls}-range-hover:first-child::after,
      tr > &-in-view${pickerCellCls}-range-hover-end:first-child::after,
      &-in-view${pickerCellCls}-start${pickerCellCls}-range-hover-edge-start${pickerCellCls}-range-hover-edge-start-near-range::after,
      &-in-view${pickerCellCls}-range-hover-edge-start:not(${pickerCellCls}-range-hover-edge-start-near-range)::after,
      &-in-view${pickerCellCls}-range-hover-start::after`]: {
      insetInlineStart: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
      borderInlineStart: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
      borderStartStartRadius: lineWidth,
      borderEndStartRadius: lineWidth
    },
    // Edge end
    [`tr > &-in-view${pickerCellCls}-range-hover:last-child::after,
      tr > &-in-view${pickerCellCls}-range-hover-start:last-child::after,
      &-in-view${pickerCellCls}-end${pickerCellCls}-range-hover-edge-end${pickerCellCls}-range-hover-edge-end-near-range::after,
      &-in-view${pickerCellCls}-range-hover-edge-end:not(${pickerCellCls}-range-hover-edge-end-near-range)::after,
      &-in-view${pickerCellCls}-range-hover-end::after`]: {
      insetInlineEnd: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
      borderInlineEnd: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
      borderStartEndRadius: lineWidth,
      borderEndEndRadius: lineWidth
    },
    // >>> Disabled
    "&-disabled": {
      color: colorTextDisabled,
      pointerEvents: "none",
      [pickerCellInnerCls]: {
        background: "transparent"
      },
      "&::before": {
        background: colorBgContainerDisabled
      }
    },
    [`&-disabled${pickerCellCls}-today ${pickerCellInnerCls}::before`]: {
      borderColor: colorTextDisabled
    }
  };
};
const genPanelStyle = (token) => {
  const {
    componentCls,
    pickerCellInnerCls,
    pickerYearMonthCellWidth,
    pickerControlIconSize,
    pickerPanelCellWidth,
    paddingSM,
    paddingXS,
    paddingXXS,
    colorBgContainer,
    lineWidth,
    lineType,
    borderRadiusLG,
    colorPrimary,
    colorTextHeading,
    colorSplit,
    pickerControlIconBorderWidth,
    colorIcon,
    pickerTextHeight,
    motionDurationMid,
    colorIconHover,
    fontWeightStrong,
    pickerPanelCellHeight,
    pickerCellPaddingVertical,
    colorTextDisabled,
    colorText,
    fontSize,
    pickerBasicCellHoverWithRangeColor,
    motionDurationSlow,
    pickerPanelWithoutTimeCellHeight,
    pickerQuarterPanelContentHeight,
    colorLink,
    colorLinkActive,
    colorLinkHover,
    pickerDateHoverRangeBorderColor,
    borderRadiusSM,
    colorTextLightSolid,
    borderRadius,
    controlItemBgHover,
    pickerTimePanelColumnHeight,
    pickerTimePanelColumnWidth,
    pickerTimePanelCellHeight,
    controlItemBgActive,
    marginXXS
  } = token;
  const pickerPanelWidth = pickerPanelCellWidth * 7 + paddingSM * 2 + 4;
  const hoverCellFixedDistance = (pickerPanelWidth - paddingXS * 2) / 3 - pickerYearMonthCellWidth - paddingSM;
  return {
    [componentCls]: {
      "&-panel": {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        background: colorBgContainer,
        border: `${lineWidth}px ${lineType} ${colorSplit}`,
        borderRadius: borderRadiusLG,
        outline: "none",
        "&-focused": {
          borderColor: colorPrimary
        },
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-prev-icon,
              ${componentCls}-super-prev-icon`]: {
            transform: "rotate(45deg)"
          },
          [`${componentCls}-next-icon,
              ${componentCls}-super-next-icon`]: {
            transform: "rotate(-135deg)"
          }
        }
      },
      // ========================================================
      // =                     Shared Panel                     =
      // ========================================================
      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel,
        &-week-panel,
        &-date-panel,
        &-time-panel`]: {
        display: "flex",
        flexDirection: "column",
        width: pickerPanelWidth
      },
      // ======================= Header =======================
      "&-header": {
        display: "flex",
        padding: `0 ${paddingXS}px`,
        color: colorTextHeading,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
        "> *": {
          flex: "none"
        },
        button: {
          padding: 0,
          color: colorIcon,
          lineHeight: `${pickerTextHeight}px`,
          background: "transparent",
          border: 0,
          cursor: "pointer",
          transition: `color ${motionDurationMid}`
        },
        "> button": {
          minWidth: "1.6em",
          fontSize,
          "&:hover": {
            color: colorIconHover
          }
        },
        "&-view": {
          flex: "auto",
          fontWeight: fontWeightStrong,
          lineHeight: `${pickerTextHeight}px`,
          button: {
            color: "inherit",
            fontWeight: "inherit",
            verticalAlign: "top",
            "&:not(:first-child)": {
              marginInlineStart: paddingXS
            },
            "&:hover": {
              color: colorPrimary
            }
          }
        }
      },
      // Arrow button
      [`&-prev-icon,
        &-next-icon,
        &-super-prev-icon,
        &-super-next-icon`]: {
        position: "relative",
        display: "inline-block",
        width: pickerControlIconSize,
        height: pickerControlIconSize,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          display: "inline-block",
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: `0 solid currentcolor`,
          borderBlockStartWidth: pickerControlIconBorderWidth,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: pickerControlIconBorderWidth,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      [`&-super-prev-icon,
        &-super-next-icon`]: {
        "&::after": {
          position: "absolute",
          top: Math.ceil(pickerControlIconSize / 2),
          insetInlineStart: Math.ceil(pickerControlIconSize / 2),
          display: "inline-block",
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: "0 solid currentcolor",
          borderBlockStartWidth: pickerControlIconBorderWidth,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: pickerControlIconBorderWidth,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      [`&-prev-icon,
        &-super-prev-icon`]: {
        transform: "rotate(-45deg)"
      },
      [`&-next-icon,
        &-super-next-icon`]: {
        transform: "rotate(135deg)"
      },
      // ======================== Body ========================
      "&-content": {
        width: "100%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
        "th, td": {
          position: "relative",
          minWidth: pickerPanelCellHeight,
          fontWeight: "normal"
        },
        th: {
          height: pickerPanelCellHeight + pickerCellPaddingVertical * 2,
          color: colorText,
          verticalAlign: "middle"
        }
      },
      "&-cell": _extends({
        padding: `${pickerCellPaddingVertical}px 0`,
        color: colorTextDisabled,
        cursor: "pointer",
        // In view
        "&-in-view": {
          color: colorText
        }
      }, genPickerCellInnerStyle(token)),
      // DatePanel only
      [`&-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-start ${pickerCellInnerCls},
        &-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-end ${pickerCellInnerCls}`]: {
        "&::after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: -1,
          background: pickerBasicCellHoverWithRangeColor,
          transition: `all ${motionDurationSlow}`,
          content: '""'
        }
      },
      [`&-date-panel
        ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-start
        ${pickerCellInnerCls}::after`]: {
        insetInlineEnd: -(pickerPanelCellWidth - pickerPanelCellHeight) / 2,
        insetInlineStart: 0
      },
      [`&-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-end ${pickerCellInnerCls}::after`]: {
        insetInlineEnd: 0,
        insetInlineStart: -(pickerPanelCellWidth - pickerPanelCellHeight) / 2
      },
      // Hover with range start & end
      [`&-range-hover${componentCls}-range-start::after`]: {
        insetInlineEnd: "50%"
      },
      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-content`]: {
          height: pickerPanelWithoutTimeCellHeight * 4
        },
        [pickerCellInnerCls]: {
          padding: `0 ${paddingXS}px`
        }
      },
      "&-quarter-panel": {
        [`${componentCls}-content`]: {
          height: pickerQuarterPanelContentHeight
        }
      },
      // ======================== Footer ========================
      [`&-panel ${componentCls}-footer`]: {
        borderTop: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      "&-footer": {
        width: "min-content",
        minWidth: "100%",
        lineHeight: `${pickerTextHeight - 2 * lineWidth}px`,
        textAlign: "center",
        "&-extra": {
          padding: `0 ${paddingSM}`,
          lineHeight: `${pickerTextHeight - 2 * lineWidth}px`,
          textAlign: "start",
          "&:not(:last-child)": {
            borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
          }
        }
      },
      "&-now": {
        textAlign: "start"
      },
      "&-today-btn": {
        color: colorLink,
        "&:hover": {
          color: colorLinkHover
        },
        "&:active": {
          color: colorLinkActive
        },
        [`&${componentCls}-today-btn-disabled`]: {
          color: colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      // ========================================================
      // =                       Special                        =
      // ========================================================
      // ===================== Decade Panel =====================
      "&-decade-panel": {
        [pickerCellInnerCls]: {
          padding: `0 ${paddingXS / 2}px`
        },
        [`${componentCls}-cell::before`]: {
          display: "none"
        }
      },
      // ============= Year & Quarter & Month Panel =============
      [`&-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-body`]: {
          padding: `0 ${paddingXS}px`
        },
        [pickerCellInnerCls]: {
          width: pickerYearMonthCellWidth
        },
        [`${componentCls}-cell-range-hover-start::after`]: {
          insetInlineStart: hoverCellFixedDistance,
          borderInlineStart: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
          borderStartStartRadius: borderRadiusSM,
          borderBottomStartRadius: borderRadiusSM,
          borderStartEndRadius: 0,
          borderBottomEndRadius: 0,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineEnd: hoverCellFixedDistance,
            borderInlineEnd: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
            borderStartStartRadius: 0,
            borderBottomStartRadius: 0,
            borderStartEndRadius: borderRadiusSM,
            borderBottomEndRadius: borderRadiusSM
          }
        },
        [`${componentCls}-cell-range-hover-end::after`]: {
          insetInlineEnd: hoverCellFixedDistance,
          borderInlineEnd: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
          borderStartEndRadius: borderRadius,
          borderEndEndRadius: borderRadius,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineStart: hoverCellFixedDistance,
            borderInlineStart: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
            borderStartStartRadius: borderRadius,
            borderEndStartRadius: borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      },
      // ====================== Week Panel ======================
      "&-week-panel": {
        [`${componentCls}-body`]: {
          padding: `${paddingXS}px ${paddingSM}px`
        },
        // Clear cell style
        [`${componentCls}-cell`]: {
          [`&:hover ${pickerCellInnerCls},
            &-selected ${pickerCellInnerCls},
            ${pickerCellInnerCls}`]: {
            background: "transparent !important"
          }
        },
        "&-row": {
          td: {
            transition: `background ${motionDurationMid}`,
            "&:first-child": {
              borderStartStartRadius: borderRadiusSM,
              borderEndStartRadius: borderRadiusSM
            },
            "&:last-child": {
              borderStartEndRadius: borderRadiusSM,
              borderEndEndRadius: borderRadiusSM
            }
          },
          "&:hover td": {
            background: controlItemBgHover
          },
          [`&-selected td,
            &-selected:hover td`]: {
            background: colorPrimary,
            [`&${componentCls}-cell-week`]: {
              color: new TinyColor(colorTextLightSolid).setAlpha(0.5).toHexString()
            },
            [`&${componentCls}-cell-today ${pickerCellInnerCls}::before`]: {
              borderColor: colorTextLightSolid
            },
            [pickerCellInnerCls]: {
              color: colorTextLightSolid
            }
          }
        }
      },
      // ====================== Date Panel ======================
      "&-date-panel": {
        [`${componentCls}-body`]: {
          padding: `${paddingXS}px ${paddingSM}px`
        },
        [`${componentCls}-content`]: {
          width: pickerPanelCellWidth * 7,
          th: {
            width: pickerPanelCellWidth
          }
        }
      },
      // ==================== Datetime Panel ====================
      "&-datetime-panel": {
        display: "flex",
        [`${componentCls}-time-panel`]: {
          borderInlineStart: `${lineWidth}px ${lineType} ${colorSplit}`
        },
        [`${componentCls}-date-panel,
          ${componentCls}-time-panel`]: {
          transition: `opacity ${motionDurationSlow}`
        },
        // Keyboard
        "&-active": {
          [`${componentCls}-date-panel,
            ${componentCls}-time-panel`]: {
            opacity: 0.3,
            "&-active": {
              opacity: 1
            }
          }
        }
      },
      // ====================== Time Panel ======================
      "&-time-panel": {
        width: "auto",
        minWidth: "auto",
        direction: "ltr",
        [`${componentCls}-content`]: {
          display: "flex",
          flex: "auto",
          height: pickerTimePanelColumnHeight
        },
        "&-column": {
          flex: "1 0 auto",
          width: pickerTimePanelColumnWidth,
          margin: `${paddingXXS}px 0`,
          padding: 0,
          overflowY: "hidden",
          textAlign: "start",
          listStyle: "none",
          transition: `background ${motionDurationMid}`,
          overflowX: "hidden",
          "&::after": {
            display: "block",
            height: pickerTimePanelColumnHeight - pickerTimePanelCellHeight,
            content: '""'
          },
          "&:not(:first-child)": {
            borderInlineStart: `${lineWidth}px ${lineType} ${colorSplit}`
          },
          "&-active": {
            background: new TinyColor(controlItemBgActive).setAlpha(0.2).toHexString()
          },
          "&:hover": {
            overflowY: "auto"
          },
          "> li": {
            margin: 0,
            padding: 0,
            [`&${componentCls}-time-panel-cell`]: {
              marginInline: marginXXS,
              [`${componentCls}-time-panel-cell-inner`]: {
                display: "block",
                width: pickerTimePanelColumnWidth - 2 * marginXXS,
                height: pickerTimePanelCellHeight,
                margin: 0,
                paddingBlock: 0,
                paddingInlineEnd: 0,
                paddingInlineStart: (pickerTimePanelColumnWidth - pickerTimePanelCellHeight) / 2,
                color: colorText,
                lineHeight: `${pickerTimePanelCellHeight}px`,
                borderRadius: borderRadiusSM,
                cursor: "pointer",
                transition: `background ${motionDurationMid}`,
                "&:hover": {
                  background: controlItemBgHover
                }
              },
              "&-selected": {
                [`${componentCls}-time-panel-cell-inner`]: {
                  background: controlItemBgActive
                }
              },
              "&-disabled": {
                [`${componentCls}-time-panel-cell-inner`]: {
                  color: colorTextDisabled,
                  background: "transparent",
                  cursor: "not-allowed"
                }
              }
            }
          }
        }
      },
      // https://github.com/ant-design/ant-design/issues/39227
      [`&-datetime-panel ${componentCls}-time-panel-column:after`]: {
        height: pickerTimePanelColumnHeight - pickerTimePanelCellHeight + paddingXXS * 2
      }
    }
  };
};
const genPickerStatusStyle = (token) => {
  const {
    componentCls,
    colorBgContainer,
    colorError,
    colorErrorOutline,
    colorWarning,
    colorWarningOutline
  } = token;
  return {
    [componentCls]: {
      [`&-status-error${componentCls}`]: {
        "&, &:not([disabled]):hover": {
          backgroundColor: colorBgContainer,
          borderColor: colorError
        },
        "&-focused, &:focus": _extends({}, genActiveStyle(merge(token, {
          inputBorderActiveColor: colorError,
          inputBorderHoverColor: colorError,
          controlOutline: colorErrorOutline
        }))),
        [`${componentCls}-active-bar`]: {
          background: colorError
        }
      },
      [`&-status-warning${componentCls}`]: {
        "&, &:not([disabled]):hover": {
          backgroundColor: colorBgContainer,
          borderColor: colorWarning
        },
        "&-focused, &:focus": _extends({}, genActiveStyle(merge(token, {
          inputBorderActiveColor: colorWarning,
          inputBorderHoverColor: colorWarning,
          controlOutline: colorWarningOutline
        }))),
        [`${componentCls}-active-bar`]: {
          background: colorWarning
        }
      }
    }
  };
};
const genPickerStyle = (token) => {
  const {
    componentCls,
    antCls,
    boxShadowPopoverArrow,
    controlHeight,
    fontSize,
    inputPaddingHorizontal,
    colorBgContainer,
    lineWidth,
    lineType,
    colorBorder,
    borderRadius,
    motionDurationMid,
    colorBgContainerDisabled,
    colorTextDisabled,
    colorTextPlaceholder,
    controlHeightLG,
    fontSizeLG,
    controlHeightSM,
    inputPaddingHorizontalSM,
    paddingXS,
    marginXS,
    colorTextDescription,
    lineWidthBold,
    lineHeight,
    colorPrimary,
    motionDurationSlow,
    zIndexPopup,
    paddingXXS,
    paddingSM,
    pickerTextHeight,
    controlItemBgActive,
    colorPrimaryBorder,
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter,
    colorBgElevated,
    borderRadiusLG,
    boxShadowSecondary,
    borderRadiusSM,
    colorSplit,
    controlItemBgHover,
    presetsWidth,
    presetsMaxWidth
  } = token;
  return [
    {
      [componentCls]: _extends(_extends(_extends({}, resetComponent(token)), genPikerPadding(token, controlHeight, fontSize, inputPaddingHorizontal)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: colorBgContainer,
        lineHeight: 1,
        border: `${lineWidth}px ${lineType} ${colorBorder}`,
        borderRadius,
        transition: `border ${motionDurationMid}, box-shadow ${motionDurationMid}`,
        "&:hover, &-focused": _extends({}, genHoverStyle(token)),
        "&-focused": _extends({}, genActiveStyle(token)),
        [`&${componentCls}-disabled`]: {
          background: colorBgContainerDisabled,
          borderColor: colorBorder,
          cursor: "not-allowed",
          [`${componentCls}-suffix`]: {
            color: colorTextDisabled
          }
        },
        [`&${componentCls}-borderless`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ======================== Input =========================
        [`${componentCls}-input`]: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: "100%",
          "> input": _extends(_extends({}, genBasicInputStyle(token)), {
            flex: "auto",
            // Fix Firefox flex not correct:
            // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
            minWidth: 1,
            height: "auto",
            padding: 0,
            background: "transparent",
            border: 0,
            "&:focus": {
              boxShadow: "none"
            },
            "&[disabled]": {
              background: "transparent"
            }
          }),
          "&:hover": {
            [`${componentCls}-clear`]: {
              opacity: 1
            }
          },
          "&-placeholder": {
            "> input": {
              color: colorTextPlaceholder
            }
          }
        },
        // Size
        "&-large": _extends(_extends({}, genPikerPadding(token, controlHeightLG, fontSizeLG, inputPaddingHorizontal)), {
          [`${componentCls}-input > input`]: {
            fontSize: fontSizeLG
          }
        }),
        "&-small": _extends({}, genPikerPadding(token, controlHeightSM, fontSize, inputPaddingHorizontalSM)),
        [`${componentCls}-suffix`]: {
          display: "flex",
          flex: "none",
          alignSelf: "center",
          marginInlineStart: paddingXS / 2,
          color: colorTextDisabled,
          lineHeight: 1,
          pointerEvents: "none",
          "> *": {
            verticalAlign: "top",
            "&:not(:last-child)": {
              marginInlineEnd: marginXS
            }
          }
        },
        [`${componentCls}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineEnd: 0,
          color: colorTextDisabled,
          lineHeight: 1,
          background: colorBgContainer,
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0,
          transition: `opacity ${motionDurationMid}, color ${motionDurationMid}`,
          "> *": {
            verticalAlign: "top"
          },
          "&:hover": {
            color: colorTextDescription
          }
        },
        [`${componentCls}-separator`]: {
          position: "relative",
          display: "inline-block",
          width: "1em",
          height: fontSizeLG,
          color: colorTextDisabled,
          fontSize: fontSizeLG,
          verticalAlign: "top",
          cursor: "default",
          [`${componentCls}-focused &`]: {
            color: colorTextDescription
          },
          [`${componentCls}-range-separator &`]: {
            [`${componentCls}-disabled &`]: {
              cursor: "not-allowed"
            }
          }
        },
        // ======================== Range =========================
        "&-range": {
          position: "relative",
          display: "inline-flex",
          // Clear
          [`${componentCls}-clear`]: {
            insetInlineEnd: inputPaddingHorizontal
          },
          "&:hover": {
            [`${componentCls}-clear`]: {
              opacity: 1
            }
          },
          // Active bar
          [`${componentCls}-active-bar`]: {
            bottom: -lineWidth,
            height: lineWidthBold,
            marginInlineStart: inputPaddingHorizontal,
            background: colorPrimary,
            opacity: 0,
            transition: `all ${motionDurationSlow} ease-out`,
            pointerEvents: "none"
          },
          [`&${componentCls}-focused`]: {
            [`${componentCls}-active-bar`]: {
              opacity: 1
            }
          },
          [`${componentCls}-range-separator`]: {
            alignItems: "center",
            padding: `0 ${paddingXS}px`,
            lineHeight: 1
          },
          [`&${componentCls}-small`]: {
            [`${componentCls}-clear`]: {
              insetInlineEnd: inputPaddingHorizontalSM
            },
            [`${componentCls}-active-bar`]: {
              marginInlineStart: inputPaddingHorizontalSM
            }
          }
        },
        // ======================= Dropdown =======================
        "&-dropdown": _extends(_extends(_extends({}, resetComponent(token)), genPanelStyle(token)), {
          position: "absolute",
          // Fix incorrect position of picker popup
          // https://github.com/ant-design/ant-design/issues/35590
          top: -9999,
          left: {
            _skip_check_: true,
            value: -9999
          },
          zIndex: zIndexPopup,
          [`&${componentCls}-dropdown-hidden`]: {
            display: "none"
          },
          [`&${componentCls}-dropdown-placement-bottomLeft`]: {
            [`${componentCls}-range-arrow`]: {
              top: 0,
              display: "block",
              transform: "translateY(-100%)"
            }
          },
          [`&${componentCls}-dropdown-placement-topLeft`]: {
            [`${componentCls}-range-arrow`]: {
              bottom: 0,
              display: "block",
              transform: "translateY(100%) rotate(180deg)"
            }
          },
          [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topRight`]: {
            animationName: slideDownIn
          },
          [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomRight`]: {
            animationName: slideUpIn
          },
          [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topRight`]: {
            animationName: slideDownOut
          },
          [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomRight`]: {
            animationName: slideUpOut
          },
          // Time picker with additional style
          [`${componentCls}-panel > ${componentCls}-time-panel`]: {
            paddingTop: paddingXXS
          },
          // ======================== Ranges ========================
          [`${componentCls}-ranges`]: {
            marginBottom: 0,
            padding: `${paddingXXS}px ${paddingSM}px`,
            overflow: "hidden",
            lineHeight: `${pickerTextHeight - 2 * lineWidth - paddingXS / 2}px`,
            textAlign: "start",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            "> li": {
              display: "inline-block"
            },
            // https://github.com/ant-design/ant-design/issues/23687
            [`${componentCls}-preset > ${antCls}-tag-blue`]: {
              color: colorPrimary,
              background: controlItemBgActive,
              borderColor: colorPrimaryBorder,
              cursor: "pointer"
            },
            [`${componentCls}-ok`]: {
              marginInlineStart: "auto"
            }
          },
          [`${componentCls}-range-wrapper`]: {
            display: "flex",
            position: "relative"
          },
          [`${componentCls}-range-arrow`]: _extends({
            position: "absolute",
            zIndex: 1,
            display: "none",
            marginInlineStart: inputPaddingHorizontal * 1.5,
            transition: `left ${motionDurationSlow} ease-out`
          }, roundedArrow(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow)),
          [`${componentCls}-panel-container`]: {
            overflow: "hidden",
            verticalAlign: "top",
            background: colorBgElevated,
            borderRadius: borderRadiusLG,
            boxShadow: boxShadowSecondary,
            transition: `margin ${motionDurationSlow}`,
            // ======================== Layout ========================
            [`${componentCls}-panel-layout`]: {
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "stretch"
            },
            // ======================== Preset ========================
            [`${componentCls}-presets`]: {
              display: "flex",
              flexDirection: "column",
              minWidth: presetsWidth,
              maxWidth: presetsMaxWidth,
              ul: {
                height: 0,
                flex: "auto",
                listStyle: "none",
                overflow: "auto",
                margin: 0,
                padding: paddingXS,
                borderInlineEnd: `${lineWidth}px ${lineType} ${colorSplit}`,
                li: _extends(_extends({}, textEllipsis), {
                  borderRadius: borderRadiusSM,
                  paddingInline: paddingXS,
                  paddingBlock: (controlHeightSM - Math.round(fontSize * lineHeight)) / 2,
                  cursor: "pointer",
                  transition: `all ${motionDurationSlow}`,
                  "+ li": {
                    marginTop: marginXS
                  },
                  "&:hover": {
                    background: controlItemBgHover
                  }
                })
              }
            },
            // ======================== Panels ========================
            [`${componentCls}-panels`]: {
              display: "inline-flex",
              flexWrap: "nowrap",
              direction: "ltr",
              [`${componentCls}-panel`]: {
                borderWidth: `0 0 ${lineWidth}px`
              },
              "&:last-child": {
                [`${componentCls}-panel`]: {
                  borderWidth: 0
                }
              }
            },
            [`${componentCls}-panel`]: {
              verticalAlign: "top",
              background: "transparent",
              borderRadius: 0,
              borderWidth: 0,
              [`${componentCls}-content,
            table`]: {
                textAlign: "center"
              },
              "&-focused": {
                borderColor: colorBorder
              }
            }
          }
        }),
        "&-dropdown-range": {
          padding: `${sizePopupArrow * 2 / 3}px 0`,
          "&-hidden": {
            display: "none"
          }
        },
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-separator`]: {
            transform: "rotate(180deg)"
          },
          [`${componentCls}-footer`]: {
            "&-extra": {
              direction: "rtl"
            }
          }
        }
      })
    },
    // Follow code may reuse in other components
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};
const initPickerPanelToken = (token) => {
  const pickerTimePanelCellHeight = 28;
  const {
    componentCls,
    controlHeightLG,
    controlHeightSM,
    colorPrimary,
    paddingXXS
  } = token;
  return {
    pickerCellCls: `${componentCls}-cell`,
    pickerCellInnerCls: `${componentCls}-cell-inner`,
    pickerTextHeight: controlHeightLG,
    pickerPanelCellWidth: controlHeightSM * 1.5,
    pickerPanelCellHeight: controlHeightSM,
    pickerDateHoverRangeBorderColor: new TinyColor(colorPrimary).lighten(20).toHexString(),
    pickerBasicCellHoverWithRangeColor: new TinyColor(colorPrimary).lighten(35).toHexString(),
    pickerPanelWithoutTimeCellHeight: controlHeightLG * 1.65,
    pickerYearMonthCellWidth: controlHeightLG * 1.5,
    pickerTimePanelColumnHeight: pickerTimePanelCellHeight * 8,
    pickerTimePanelColumnWidth: controlHeightLG * 1.4,
    pickerTimePanelCellHeight,
    pickerQuarterPanelContentHeight: controlHeightLG * 1.4,
    pickerCellPaddingVertical: paddingXXS,
    pickerCellBorderGap: 2,
    pickerControlIconSize: 7,
    pickerControlIconBorderWidth: 1.5
  };
};
const useStyle$1 = genComponentStyleHook("DatePicker", (token) => {
  const pickerToken = merge(initInputToken(token), initPickerPanelToken(token));
  return [
    genPickerStyle(pickerToken),
    genPickerStatusStyle(pickerToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      focusElCls: `${token.componentCls}-focused`
    })
  ];
}, (token) => ({
  presetsWidth: 120,
  presetsMaxWidth: 200,
  zIndexPopup: token.zIndexPopupBase + 50
}));
const useFlexGapSupport = () => {
  const flexible = shallowRef(false);
  return flexible;
};
const PickerButton = (props, _ref) => {
  let {
    attrs,
    slots
  } = _ref;
  return createVNode(Button, _objectSpread$9(_objectSpread$9({
    "size": "small",
    "type": "primary"
  }, props), attrs), slots);
};
const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`],
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
};
const genPresetStyle = (token) => genPresetColor(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      "&-inverse": {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
});
const genBaseStyle = (token) => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls
  } = token;
  const paddingInline = tagPaddingHorizontal - lineWidth;
  const iconMarginInline = paddingXXS - lineWidth;
  return {
    // Result
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      display: "inline-block",
      height: "auto",
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: `${token.tagLineHeight}px`,
      whiteSpace: "nowrap",
      background: token.tagDefaultBg,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: "start",
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: token.tagDefaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        color: token.colorTextDescription,
        fontSize: token.tagIconSize,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      [`&-checkable`]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        "&:active, &-checked": {
          color: token.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: token.colorPrimary,
          "&:hover": {
            backgroundColor: token.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: token.colorPrimaryActive
        }
      },
      [`&-hidden`]: {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: "transparent",
      background: token.tagBorderlessBg
    }
  };
};
const useStyle = genComponentStyleHook("Tag", (token) => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    fontSizeIcon
  } = token;
  const tagHeight = Math.round(fontSize * lineHeight);
  const tagFontSize = token.fontSizeSM;
  const tagLineHeight = tagHeight - lineWidth * 2;
  const tagDefaultBg = token.colorFillAlter;
  const tagDefaultColor = token.colorText;
  const tagToken = merge(token, {
    tagFontSize,
    tagLineHeight,
    tagDefaultBg,
    tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: token.colorFillTertiary
  });
  return [genBaseStyle(tagToken), genPresetStyle(tagToken), genTagStatusStyle(tagToken, "success", "Success"), genTagStatusStyle(tagToken, "processing", "Info"), genTagStatusStyle(tagToken, "error", "Error"), genTagStatusStyle(tagToken, "warning", "Warning")];
});
const checkableTagProps = () => ({
  prefixCls: String,
  checked: {
    type: Boolean,
    default: undefined
  },
  onChange: {
    type: Function
  },
  onClick: {
    type: Function
  },
  "onUpdate:checked": Function
});
const CheckableTag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckableTag",
  inheritAttrs: false,
  props: checkableTagProps(),
  // emits: ['update:checked', 'change', 'click'],
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("tag", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const handleClick = (e) => {
      const {
        checked
      } = props;
      emit("update:checked", !checked);
      emit("change", !checked);
      emit("click", e);
    };
    const cls = computed(() => classNames(prefixCls.value, hashId.value, {
      [`${prefixCls.value}-checkable`]: true,
      [`${prefixCls.value}-checkable-checked`]: props.checked
    }));
    return () => {
      var _a;
      return wrapSSR(createVNode("span", _objectSpread$9(_objectSpread$9({}, attrs), {}, {
        "class": [cls.value, attrs.class],
        "onClick": handleClick
      }), [(_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots)]));
    };
  }
});
const tagProps = () => ({
  prefixCls: String,
  color: {
    type: String
  },
  closable: {
    type: Boolean,
    default: false
  },
  closeIcon: PropTypes.any,
  /** @deprecated `visible` will be removed in next major version. */
  visible: {
    type: Boolean,
    default: undefined
  },
  onClose: {
    type: Function
  },
  onClick: eventType(),
  "onUpdate:visible": Function,
  icon: PropTypes.any,
  bordered: {
    type: Boolean,
    default: true
  }
});
const Tag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATag",
  inheritAttrs: false,
  props: tagProps(),
  // emits: ['update:visible', 'close'],
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("tag", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const visible = shallowRef(true);
    watchEffect(() => {
      if (props.visible !== undefined) {
        visible.value = props.visible;
      }
    });
    const handleCloseClick = (e) => {
      e.stopPropagation();
      emit("update:visible", false);
      emit("close", e);
      if (e.defaultPrevented) {
        return;
      }
      if (props.visible === undefined) {
        visible.value = false;
      }
    };
    const isInternalColor = computed(() => isPresetColor(props.color) || isPresetStatusColor(props.color));
    const tagClassName = computed(() => classNames(prefixCls.value, hashId.value, {
      [`${prefixCls.value}-${props.color}`]: isInternalColor.value,
      [`${prefixCls.value}-has-color`]: props.color && !isInternalColor.value,
      [`${prefixCls.value}-hidden`]: !visible.value,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-borderless`]: !props.bordered
    }));
    const handleClick = (e) => {
      emit("click", e);
    };
    return () => {
      var _a, _b, _c;
      const {
        icon = (_a = slots.icon) === null || _a === undefined ? undefined : _a.call(slots),
        color,
        closeIcon = (_b = slots.closeIcon) === null || _b === undefined ? undefined : _b.call(slots),
        closable = false
      } = props;
      const renderCloseIcon = () => {
        if (closable) {
          return closeIcon ? createVNode("span", {
            "class": `${prefixCls.value}-close-icon`,
            "onClick": handleCloseClick
          }, [closeIcon]) : createVNode(CloseOutlined, {
            "class": `${prefixCls.value}-close-icon`,
            "onClick": handleCloseClick
          }, null);
        }
        return null;
      };
      const tagStyle = {
        backgroundColor: color && !isInternalColor.value ? color : undefined
      };
      const iconNode = icon || null;
      const children = (_c = slots.default) === null || _c === undefined ? undefined : _c.call(slots);
      const kids = iconNode ? createVNode(Fragment, null, [iconNode, createVNode("span", null, [children])]) : children;
      const isNeedWave = props.onClick !== undefined;
      const tagNode = createVNode("span", _objectSpread$9(_objectSpread$9({}, attrs), {}, {
        "onClick": handleClick,
        "class": [tagClassName.value, attrs.class],
        "style": [tagStyle, attrs.style]
      }), [kids, renderCloseIcon()]);
      return wrapSSR(isNeedWave ? createVNode(Wave, null, {
        default: () => [tagNode]
      }) : tagNode);
    };
  }
});
Tag.CheckableTag = CheckableTag;
Tag.install = function(app) {
  app.component(Tag.name, Tag);
  app.component(CheckableTag.name, CheckableTag);
  return app;
};
function PickerTag(props, _ref) {
  let {
    slots,
    attrs
  } = _ref;
  return createVNode(Tag, _objectSpread$9(_objectSpread$9({
    "color": "blue"
  }, props), attrs), slots);
}
function getPlaceholder(locale2, picker, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale2.lang.yearPlaceholder) {
    return locale2.lang.yearPlaceholder;
  }
  if (picker === "quarter" && locale2.lang.quarterPlaceholder) {
    return locale2.lang.quarterPlaceholder;
  }
  if (picker === "month" && locale2.lang.monthPlaceholder) {
    return locale2.lang.monthPlaceholder;
  }
  if (picker === "week" && locale2.lang.weekPlaceholder) {
    return locale2.lang.weekPlaceholder;
  }
  if (picker === "time" && locale2.timePickerLocale.placeholder) {
    return locale2.timePickerLocale.placeholder;
  }
  return locale2.lang.placeholder;
}
function getRangePlaceholder(locale2, picker, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale2.lang.yearPlaceholder) {
    return locale2.lang.rangeYearPlaceholder;
  }
  if (picker === "month" && locale2.lang.monthPlaceholder) {
    return locale2.lang.rangeMonthPlaceholder;
  }
  if (picker === "week" && locale2.lang.weekPlaceholder) {
    return locale2.lang.rangeWeekPlaceholder;
  }
  if (picker === "time" && locale2.timePickerLocale.placeholder) {
    return locale2.timePickerLocale.rangePlaceholder;
  }
  return locale2.lang.rangePlaceholder;
}
function transPlacement2DropdownAlign(direction, placement) {
  const overflow = {
    adjustX: 1,
    adjustY: 1
  };
  switch (placement) {
    case "bottomLeft": {
      return {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow
      };
    }
    case "bottomRight": {
      return {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow
      };
    }
    case "topLeft": {
      return {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow
      };
    }
    case "topRight": {
      return {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow
      };
    }
    default: {
      return {
        points: direction === "rtl" ? ["tr", "br"] : ["tl", "bl"],
        offset: [0, 4],
        overflow
      };
    }
  }
}
function commonProps() {
  return {
    id: String,
    /**
     * @deprecated `dropdownClassName` is deprecated which will be removed in next major
     *   version.Please use `popupClassName` instead.
     */
    dropdownClassName: String,
    popupClassName: String,
    popupStyle: objectType(),
    transitionName: String,
    placeholder: String,
    allowClear: booleanType(),
    autofocus: booleanType(),
    disabled: booleanType(),
    tabindex: Number,
    open: booleanType(),
    defaultOpen: booleanType(),
    /** Make input readOnly to avoid popup keyboard in mobile */
    inputReadOnly: booleanType(),
    format: someType([String, Function, Array]),
    // Value
    // format:  string | CustomFormat<DateType> | (string | CustomFormat<DateType>)[];
    // Render
    // suffixIcon?: VueNode;
    // clearIcon?: VueNode;
    // prevIcon?: VueNode;
    // nextIcon?: VueNode;
    // superPrevIcon?: VueNode;
    // superNextIcon?: VueNode;
    getPopupContainer: functionType(),
    panelRender: functionType(),
    // // Events
    onChange: functionType(),
    "onUpdate:value": functionType(),
    onOk: functionType(),
    onOpenChange: functionType(),
    "onUpdate:open": functionType(),
    onFocus: functionType(),
    onBlur: functionType(),
    onMousedown: functionType(),
    onMouseup: functionType(),
    onMouseenter: functionType(),
    onMouseleave: functionType(),
    onClick: functionType(),
    onContextmenu: functionType(),
    onKeydown: functionType(),
    // WAI-ARIA
    role: String,
    name: String,
    autocomplete: String,
    direction: stringType(),
    showToday: booleanType(),
    showTime: someType([Boolean, Object]),
    locale: objectType(),
    size: stringType(),
    bordered: booleanType(),
    dateRender: functionType(),
    disabledDate: functionType(),
    mode: stringType(),
    picker: stringType(),
    valueFormat: String,
    placement: stringType(),
    status: stringType(),
    /** @deprecated Please use `disabledTime` instead. */
    disabledHours: functionType(),
    /** @deprecated Please use `disabledTime` instead. */
    disabledMinutes: functionType(),
    /** @deprecated Please use `disabledTime` instead. */
    disabledSeconds: functionType()
  };
}
function datePickerProps() {
  return {
    defaultPickerValue: someType([Object, String]),
    defaultValue: someType([Object, String]),
    value: someType([Object, String]),
    presets: arrayType(),
    disabledTime: functionType(),
    renderExtraFooter: functionType(),
    showNow: booleanType(),
    monthCellRender: functionType(),
    // deprecated  Please use `monthCellRender"` instead.',
    monthCellContentRender: functionType()
  };
}
function rangePickerProps() {
  return {
    allowEmpty: arrayType(),
    dateRender: functionType(),
    defaultPickerValue: arrayType(),
    defaultValue: arrayType(),
    value: arrayType(),
    presets: arrayType(),
    disabledTime: functionType(),
    disabled: someType([Boolean, Array]),
    renderExtraFooter: functionType(),
    separator: {
      type: String
    },
    showTime: someType([Boolean, Object]),
    ranges: objectType(),
    placeholder: arrayType(),
    mode: arrayType(),
    onChange: functionType(),
    "onUpdate:value": functionType(),
    onCalendarChange: functionType(),
    onPanelChange: functionType(),
    onOk: functionType()
  };
}
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function generateSinglePicker(generateConfig2, extraProps) {
  function getPicker(picker, displayName) {
    const comProps = _extends(_extends(_extends({}, commonProps()), datePickerProps()), extraProps);
    return defineComponent({
      compatConfig: {
        MODE: 3
      },
      name: displayName,
      inheritAttrs: false,
      props: comProps,
      slots: Object,
      setup(_props, _ref) {
        let {
          slots,
          expose,
          attrs,
          emit
        } = _ref;
        const props = _props;
        const formItemContext = useInjectFormItemContext();
        const formItemInputContext = FormItemInputContext.useInject();
        const {
          prefixCls,
          direction,
          getPopupContainer,
          size,
          rootPrefixCls,
          disabled
        } = useConfigInject("picker", props);
        const {
          compactSize,
          compactItemClassnames
        } = useCompactItemContext(prefixCls, direction);
        const mergedSize = computed(() => compactSize.value || size.value);
        const [wrapSSR, hashId] = useStyle$1(prefixCls);
        const pickerRef = ref();
        expose({
          focus: () => {
            var _a;
            (_a = pickerRef.value) === null || _a === undefined ? undefined : _a.focus();
          },
          blur: () => {
            var _a;
            (_a = pickerRef.value) === null || _a === undefined ? undefined : _a.blur();
          }
        });
        const maybeToString = (date) => {
          return props.valueFormat ? generateConfig2.toString(date, props.valueFormat) : date;
        };
        const onChange = (date, dateString) => {
          const value2 = maybeToString(date);
          emit("update:value", value2);
          emit("change", value2, dateString);
          formItemContext.onFieldChange();
        };
        const onOpenChange = (open) => {
          emit("update:open", open);
          emit("openChange", open);
        };
        const onFocus = (e) => {
          emit("focus", e);
        };
        const onBlur = (e) => {
          emit("blur", e);
          formItemContext.onFieldBlur();
        };
        const onPanelChange = (date, mode) => {
          const value2 = maybeToString(date);
          emit("panelChange", value2, mode);
        };
        const onOk = (date) => {
          const value2 = maybeToString(date);
          emit("ok", value2);
        };
        const [contextLocale] = useLocaleReceiver("DatePicker", locale$1);
        const value = computed(() => {
          if (props.value) {
            return props.valueFormat ? generateConfig2.toDate(props.value, props.valueFormat) : props.value;
          }
          return props.value === "" ? undefined : props.value;
        });
        const defaultValue = computed(() => {
          if (props.defaultValue) {
            return props.valueFormat ? generateConfig2.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
          }
          return props.defaultValue === "" ? undefined : props.defaultValue;
        });
        const defaultPickerValue = computed(() => {
          if (props.defaultPickerValue) {
            return props.valueFormat ? generateConfig2.toDate(props.defaultPickerValue, props.valueFormat) : props.defaultPickerValue;
          }
          return props.defaultPickerValue === "" ? undefined : props.defaultPickerValue;
        });
        return () => {
          var _a, _b, _c, _d, _e, _f;
          const locale2 = _extends(_extends({}, contextLocale.value), props.locale);
          const p = _extends(_extends({}, props), attrs);
          const {
            bordered = true,
            placeholder,
            suffixIcon = (_a = slots.suffixIcon) === null || _a === undefined ? undefined : _a.call(slots),
            showToday = true,
            transitionName,
            allowClear = true,
            dateRender = slots.dateRender,
            renderExtraFooter = slots.renderExtraFooter,
            monthCellRender = slots.monthCellRender || props.monthCellContentRender || slots.monthCellContentRender,
            clearIcon = (_b = slots.clearIcon) === null || _b === undefined ? undefined : _b.call(slots),
            id = formItemContext.id.value
          } = p, restProps = __rest$1(p, ["bordered", "placeholder", "suffixIcon", "showToday", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "monthCellRender", "clearIcon", "id"]);
          const showTime = p.showTime === "" ? true : p.showTime;
          const {
            format
          } = p;
          let additionalOverrideProps = {};
          if (picker) {
            additionalOverrideProps.picker = picker;
          }
          const mergedPicker = picker || p.picker || "date";
          additionalOverrideProps = _extends(_extends(_extends({}, additionalOverrideProps), showTime ? getTimeProps(_extends({
            format,
            picker: mergedPicker
          }, typeof showTime === "object" ? showTime : {})) : {}), mergedPicker === "time" ? getTimeProps(_extends(_extends({
            format
          }, restProps), {
            picker: mergedPicker
          })) : {});
          const pre = prefixCls.value;
          const suffixNode = createVNode(Fragment, null, [suffixIcon || (picker === "time" ? createVNode(ClockCircleOutlined, null, null) : createVNode(CalendarOutlined, null, null)), formItemInputContext.hasFeedback && formItemInputContext.feedbackIcon]);
          return wrapSSR(createVNode(Picker$1, _objectSpread$9(_objectSpread$9(_objectSpread$9({
            "monthCellRender": monthCellRender,
            "dateRender": dateRender,
            "renderExtraFooter": renderExtraFooter,
            "ref": pickerRef,
            "placeholder": getPlaceholder(locale2, mergedPicker, placeholder),
            "suffixIcon": suffixNode,
            "dropdownAlign": transPlacement2DropdownAlign(direction.value, props.placement),
            "clearIcon": clearIcon || createVNode(CloseCircleFilled, null, null),
            "allowClear": allowClear,
            "transitionName": transitionName || `${rootPrefixCls.value}-slide-up`
          }, restProps), additionalOverrideProps), {}, {
            "id": id,
            "picker": mergedPicker,
            "value": value.value,
            "defaultValue": defaultValue.value,
            "defaultPickerValue": defaultPickerValue.value,
            "showToday": showToday,
            "locale": locale2.lang,
            "class": classNames({
              [`${pre}-${mergedSize.value}`]: mergedSize.value,
              [`${pre}-borderless`]: !bordered
            }, getStatusClassNames(pre, getMergedStatus(formItemInputContext.status, props.status), formItemInputContext.hasFeedback), attrs.class, hashId.value, compactItemClassnames.value),
            "disabled": disabled.value,
            "prefixCls": pre,
            "getPopupContainer": attrs.getCalendarContainer || getPopupContainer.value,
            "generateConfig": generateConfig2,
            "prevIcon": ((_c = slots.prevIcon) === null || _c === undefined ? undefined : _c.call(slots)) || createVNode("span", {
              "class": `${pre}-prev-icon`
            }, null),
            "nextIcon": ((_d = slots.nextIcon) === null || _d === undefined ? undefined : _d.call(slots)) || createVNode("span", {
              "class": `${pre}-next-icon`
            }, null),
            "superPrevIcon": ((_e = slots.superPrevIcon) === null || _e === undefined ? undefined : _e.call(slots)) || createVNode("span", {
              "class": `${pre}-super-prev-icon`
            }, null),
            "superNextIcon": ((_f = slots.superNextIcon) === null || _f === undefined ? undefined : _f.call(slots)) || createVNode("span", {
              "class": `${pre}-super-next-icon`
            }, null),
            "components": Components,
            "direction": direction.value,
            "dropdownClassName": classNames(hashId.value, props.popupClassName, props.dropdownClassName),
            "onChange": onChange,
            "onOpenChange": onOpenChange,
            "onFocus": onFocus,
            "onBlur": onBlur,
            "onPanelChange": onPanelChange,
            "onOk": onOk
          }), null));
        };
      }
    });
  }
  const DatePicker2 = getPicker(undefined, "ADatePicker");
  const WeekPicker2 = getPicker("week", "AWeekPicker");
  const MonthPicker2 = getPicker("month", "AMonthPicker");
  const YearPicker2 = getPicker("year", "AYearPicker");
  const TimePicker2 = getPicker("time", "TimePicker");
  const QuarterPicker2 = getPicker("quarter", "AQuarterPicker");
  return {
    DatePicker: DatePicker2,
    WeekPicker: WeekPicker2,
    MonthPicker: MonthPicker2,
    YearPicker: YearPicker2,
    TimePicker: TimePicker2,
    QuarterPicker: QuarterPicker2
  };
}
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function generateRangePicker(generateConfig2, extraProps) {
  const RangePicker2 = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: "ARangePicker",
    inheritAttrs: false,
    props: _extends(_extends(_extends({}, commonProps()), rangePickerProps()), extraProps),
    slots: Object,
    setup(_props, _ref) {
      let {
        expose,
        slots,
        attrs,
        emit
      } = _ref;
      const props = _props;
      const formItemContext = useInjectFormItemContext();
      const formItemInputContext = FormItemInputContext.useInject();
      const {
        prefixCls,
        direction,
        getPopupContainer,
        size,
        rootPrefixCls,
        disabled
      } = useConfigInject("picker", props);
      const {
        compactSize,
        compactItemClassnames
      } = useCompactItemContext(prefixCls, direction);
      const mergedSize = computed(() => compactSize.value || size.value);
      const [wrapSSR, hashId] = useStyle$1(prefixCls);
      const pickerRef = ref();
      expose({
        focus: () => {
          var _a;
          (_a = pickerRef.value) === null || _a === undefined ? undefined : _a.focus();
        },
        blur: () => {
          var _a;
          (_a = pickerRef.value) === null || _a === undefined ? undefined : _a.blur();
        }
      });
      const maybeToStrings = (dates) => {
        return props.valueFormat ? generateConfig2.toString(dates, props.valueFormat) : dates;
      };
      const onChange = (dates, dateStrings) => {
        const values = maybeToStrings(dates);
        emit("update:value", values);
        emit("change", values, dateStrings);
        formItemContext.onFieldChange();
      };
      const onOpenChange = (open) => {
        emit("update:open", open);
        emit("openChange", open);
      };
      const onFocus = (e) => {
        emit("focus", e);
      };
      const onBlur = (e) => {
        emit("blur", e);
        formItemContext.onFieldBlur();
      };
      const onPanelChange = (dates, modes) => {
        const values = maybeToStrings(dates);
        emit("panelChange", values, modes);
      };
      const onOk = (dates) => {
        const value2 = maybeToStrings(dates);
        emit("ok", value2);
      };
      const onCalendarChange = (dates, dateStrings, info) => {
        const values = maybeToStrings(dates);
        emit("calendarChange", values, dateStrings, info);
      };
      const [contextLocale] = useLocaleReceiver("DatePicker", locale$1);
      const value = computed(() => {
        if (props.value) {
          return props.valueFormat ? generateConfig2.toDate(props.value, props.valueFormat) : props.value;
        }
        return props.value;
      });
      const defaultValue = computed(() => {
        if (props.defaultValue) {
          return props.valueFormat ? generateConfig2.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
        }
        return props.defaultValue;
      });
      const defaultPickerValue = computed(() => {
        if (props.defaultPickerValue) {
          return props.valueFormat ? generateConfig2.toDate(props.defaultPickerValue, props.valueFormat) : props.defaultPickerValue;
        }
        return props.defaultPickerValue;
      });
      return () => {
        var _a, _b, _c, _d, _e, _f, _g;
        const locale2 = _extends(_extends({}, contextLocale.value), props.locale);
        const p = _extends(_extends({}, props), attrs);
        const {
          prefixCls: customizePrefixCls,
          bordered = true,
          placeholder,
          suffixIcon = (_a = slots.suffixIcon) === null || _a === undefined ? undefined : _a.call(slots),
          picker = "date",
          transitionName,
          allowClear = true,
          dateRender = slots.dateRender,
          renderExtraFooter = slots.renderExtraFooter,
          separator = (_b = slots.separator) === null || _b === undefined ? undefined : _b.call(slots),
          clearIcon = (_c = slots.clearIcon) === null || _c === undefined ? undefined : _c.call(slots),
          id = formItemContext.id.value
        } = p, restProps = __rest(p, ["prefixCls", "bordered", "placeholder", "suffixIcon", "picker", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "separator", "clearIcon", "id"]);
        delete restProps["onUpdate:value"];
        delete restProps["onUpdate:open"];
        const {
          format,
          showTime
        } = p;
        let additionalOverrideProps = {};
        additionalOverrideProps = _extends(_extends(_extends({}, additionalOverrideProps), showTime ? getTimeProps(_extends({
          format,
          picker
        }, showTime)) : {}), picker === "time" ? getTimeProps(_extends(_extends({
          format
        }, omit(restProps, ["disabledTime"])), {
          picker
        })) : {});
        const pre = prefixCls.value;
        const suffixNode = createVNode(Fragment, null, [suffixIcon || (picker === "time" ? createVNode(ClockCircleOutlined, null, null) : createVNode(CalendarOutlined, null, null)), formItemInputContext.hasFeedback && formItemInputContext.feedbackIcon]);
        return wrapSSR(createVNode(InterRangerPicker, _objectSpread$9(_objectSpread$9(_objectSpread$9({
          "dateRender": dateRender,
          "renderExtraFooter": renderExtraFooter,
          "separator": separator || createVNode("span", {
            "aria-label": "to",
            "class": `${pre}-separator`
          }, [createVNode(SwapRightOutlined, null, null)]),
          "ref": pickerRef,
          "dropdownAlign": transPlacement2DropdownAlign(direction.value, props.placement),
          "placeholder": getRangePlaceholder(locale2, picker, placeholder),
          "suffixIcon": suffixNode,
          "clearIcon": clearIcon || createVNode(CloseCircleFilled, null, null),
          "allowClear": allowClear,
          "transitionName": transitionName || `${rootPrefixCls.value}-slide-up`
        }, restProps), additionalOverrideProps), {}, {
          "disabled": disabled.value,
          "id": id,
          "value": value.value,
          "defaultValue": defaultValue.value,
          "defaultPickerValue": defaultPickerValue.value,
          "picker": picker,
          "class": classNames({
            [`${pre}-${mergedSize.value}`]: mergedSize.value,
            [`${pre}-borderless`]: !bordered
          }, getStatusClassNames(pre, getMergedStatus(formItemInputContext.status, props.status), formItemInputContext.hasFeedback), attrs.class, hashId.value, compactItemClassnames.value),
          "locale": locale2.lang,
          "prefixCls": pre,
          "getPopupContainer": attrs.getCalendarContainer || getPopupContainer.value,
          "generateConfig": generateConfig2,
          "prevIcon": ((_d = slots.prevIcon) === null || _d === undefined ? undefined : _d.call(slots)) || createVNode("span", {
            "class": `${pre}-prev-icon`
          }, null),
          "nextIcon": ((_e = slots.nextIcon) === null || _e === undefined ? undefined : _e.call(slots)) || createVNode("span", {
            "class": `${pre}-next-icon`
          }, null),
          "superPrevIcon": ((_f = slots.superPrevIcon) === null || _f === undefined ? undefined : _f.call(slots)) || createVNode("span", {
            "class": `${pre}-super-prev-icon`
          }, null),
          "superNextIcon": ((_g = slots.superNextIcon) === null || _g === undefined ? undefined : _g.call(slots)) || createVNode("span", {
            "class": `${pre}-super-next-icon`
          }, null),
          "components": Components,
          "direction": direction.value,
          "dropdownClassName": classNames(hashId.value, props.popupClassName, props.dropdownClassName),
          "onChange": onChange,
          "onOpenChange": onOpenChange,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "onPanelChange": onPanelChange,
          "onOk": onOk,
          "onCalendarChange": onCalendarChange
        }), null));
      };
    }
  });
  return RangePicker2;
}
const Components = {
  button: PickerButton,
  rangeItem: PickerTag
};
function toArray(list) {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
}
function getTimeProps(props) {
  const {
    format,
    picker,
    showHour,
    showMinute,
    showSecond,
    use12Hours
  } = props;
  const firstFormat = toArray(format)[0];
  const showTimeObj = _extends({}, props);
  if (firstFormat && typeof firstFormat === "string") {
    if (!firstFormat.includes("s") && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }
    if (!firstFormat.includes("m") && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }
    if (!firstFormat.includes("H") && !firstFormat.includes("h") && showHour === undefined) {
      showTimeObj.showHour = false;
    }
    if ((firstFormat.includes("a") || firstFormat.includes("A")) && use12Hours === undefined) {
      showTimeObj.use12Hours = true;
    }
  }
  if (picker === "time") {
    return showTimeObj;
  }
  if (typeof firstFormat === "function") {
    delete showTimeObj.format;
  }
  return {
    showTime: showTimeObj
  };
}
function generatePicker(generateConfig2, extraProps) {
  const {
    DatePicker: DatePicker2,
    WeekPicker: WeekPicker2,
    MonthPicker: MonthPicker2,
    YearPicker: YearPicker2,
    TimePicker: TimePicker2,
    QuarterPicker: QuarterPicker2
  } = generateSinglePicker(generateConfig2, extraProps);
  const RangePicker2 = generateRangePicker(generateConfig2, extraProps);
  return {
    DatePicker: DatePicker2,
    WeekPicker: WeekPicker2,
    MonthPicker: MonthPicker2,
    YearPicker: YearPicker2,
    TimePicker: TimePicker2,
    QuarterPicker: QuarterPicker2,
    RangePicker: RangePicker2
  };
}
const {
  DatePicker,
  WeekPicker,
  MonthPicker,
  YearPicker,
  TimePicker,
  QuarterPicker,
  RangePicker
} = generatePicker(generateConfig);
const DatePicker$1 = _extends(DatePicker, {
  WeekPicker,
  MonthPicker,
  YearPicker,
  RangePicker,
  TimePicker,
  QuarterPicker,
  install: (app) => {
    app.component(DatePicker.name, DatePicker);
    app.component(RangePicker.name, RangePicker);
    app.component(MonthPicker.name, MonthPicker);
    app.component(WeekPicker.name, WeekPicker);
    app.component(QuarterPicker.name, QuarterPicker);
    return app;
  }
});
const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
const spaceProps = () => ({
  prefixCls: String,
  size: {
    type: [String, Number, Array]
  },
  direction: PropTypes.oneOf(tuple$1("horizontal", "vertical")).def("horizontal"),
  align: PropTypes.oneOf(tuple$1("start", "end", "center", "baseline")),
  wrap: booleanType()
});
function getNumberSize(size) {
  return typeof size === "string" ? spaceSize[size] : size || 0;
}
const Space = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASpace",
  inheritAttrs: false,
  props: spaceProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      space,
      direction: directionConfig
    } = useConfigInject("space", props);
    const [wrapSSR, hashId] = useStyle$4(prefixCls);
    const supportFlexGap = useFlexGapSupport();
    const size = computed(() => {
      var _a, _b, _c;
      return (_c = (_a = props.size) !== null && _a !== undefined ? _a : (_b = space === null || space === undefined ? undefined : space.value) === null || _b === undefined ? undefined : _b.size) !== null && _c !== undefined ? _c : "small";
    });
    const horizontalSize = ref();
    const verticalSize = ref();
    watch(size, () => {
      [horizontalSize.value, verticalSize.value] = (Array.isArray(size.value) ? size.value : [size.value, size.value]).map((item) => getNumberSize(item));
    }, {
      immediate: true
    });
    const mergedAlign = computed(() => props.align === undefined && props.direction === "horizontal" ? "center" : props.align);
    const cn = computed(() => {
      return classNames(prefixCls.value, hashId.value, `${prefixCls.value}-${props.direction}`, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
        [`${prefixCls.value}-align-${mergedAlign.value}`]: mergedAlign.value
      });
    });
    const marginDirection = computed(() => directionConfig.value === "rtl" ? "marginLeft" : "marginRight");
    const style = computed(() => {
      const gapStyle = {};
      if (supportFlexGap.value) {
        gapStyle.columnGap = `${horizontalSize.value}px`;
        gapStyle.rowGap = `${verticalSize.value}px`;
      }
      return _extends(_extends({}, gapStyle), props.wrap && {
        flexWrap: "wrap",
        marginBottom: `${-verticalSize.value}px`
      });
    });
    return () => {
      var _a, _b;
      const {
        wrap,
        direction = "horizontal"
      } = props;
      const children = (_a = slots.default) === null || _a === undefined ? undefined : _a.call(slots);
      const items = filterEmpty(children);
      const len = items.length;
      if (len === 0) {
        return null;
      }
      const split = (_b = slots.split) === null || _b === undefined ? undefined : _b.call(slots);
      const itemClassName = `${prefixCls.value}-item`;
      const horizontalSizeVal = horizontalSize.value;
      const latestIndex = len - 1;
      return createVNode("div", _objectSpread$9(_objectSpread$9({}, attrs), {}, {
        "class": [cn.value, attrs.class],
        "style": [style.value, attrs.style]
      }), [items.map((child, index) => {
        let originIndex = children.indexOf(child);
        if (originIndex === -1) {
          originIndex = `$$space-${index}`;
        }
        let itemStyle = {};
        if (!supportFlexGap.value) {
          if (direction === "vertical") {
            if (index < latestIndex) {
              itemStyle = {
                marginBottom: `${horizontalSizeVal / (split ? 2 : 1)}px`
              };
            }
          } else {
            itemStyle = _extends(_extends({}, index < latestIndex && {
              [marginDirection.value]: `${horizontalSizeVal / (split ? 2 : 1)}px`
            }), wrap && {
              paddingBottom: `${verticalSize.value}px`
            });
          }
        }
        return wrapSSR(createVNode(Fragment, {
          "key": originIndex
        }, [createVNode("div", {
          "class": itemClassName,
          "style": itemStyle
        }, [child]), index < latestIndex && split && createVNode("span", {
          "class": `${itemClassName}-split`,
          "style": itemStyle
        }, [split])]));
      })]);
    };
  }
});
Space.Compact = Compact;
Space.install = function(app) {
  app.component(Space.name, Space);
  app.component(Compact.name, Compact);
  return app;
};

export { Button as B, CloseCircleFilled as C, DatePicker$1 as D, Icon as I, LoadingOutlined as L, Space as S, CloseOutlined as a, devWarning as b, commonProps as c, datePickerProps as d, generateConfig as e, generatePicker as g, rangePickerProps as r, useInjectFormItemContext as u };
//# sourceMappingURL=index-D44xJIkB.mjs.map
