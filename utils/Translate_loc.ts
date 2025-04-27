import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function Translate_loc(field: Ref<string | undefined> | string | undefined, defaultKey = 'defaultKey') {
  const { t } = useI18n();

  return computed(() => {
    const value = typeof field === 'string' ? field : field?.value;
    return t(value || defaultKey);
  });
}