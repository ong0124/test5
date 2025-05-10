import { computed } from 'vue';
import { c as useI18n } from './server.mjs';

function Translate_loc(field, defaultKey = "defaultKey") {
  const { t } = useI18n();
  return computed(() => {
    const value = typeof field === "string" ? field : field == null ? undefined : field.value;
    return t(value || defaultKey);
  });
}

export { Translate_loc as T };
//# sourceMappingURL=Translate_loc-2iMZA2qi.mjs.map
