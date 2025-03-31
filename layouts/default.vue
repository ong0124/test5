<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const { locale } = useI18n();

// 定義要隱藏 BottomNavigator 的路由
const hideBottomNavigatorRoutes = [ '/test','/Management/'];

const shouldShowBottomNavigator = computed(() => {
  // 只移除開頭的語言前綴，例如 `/zh-TW/payment` 變成 `/payment`
  const normalizedPath = route.path.replace(/^\/(zh-TW|en-US|zh-CN|zh|en)/, '');
  return !hideBottomNavigatorRoutes.includes(normalizedPath);
});

// Debugging
watchEffect(() => {
  console.log("Current Route Path:", route.path);
  console.log("Normalized Route Path:", route.path.replace(/^\/(zh-TW|en-US|zh-CN|zh|en)/, ''));
  console.log("Current Locale:", locale.value);
  console.log("Should Show BottomNavigator:", shouldShowBottomNavigator.value);
});
</script>

<template>
  <div class="bg-gray-100">
    <slot />
    <BottomNavigator v-if="shouldShowBottomNavigator" />
  </div>
</template>
