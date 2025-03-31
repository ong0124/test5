<template>
  <a-avatar 
    :size="56" 
    :src="user_picture || defaultAvatar" 
    @click="loginWithLINE"
    style="cursor: pointer;"
  >
    <template #icon><UserOutlined /></template>
  </a-avatar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import liff from '@line/liff'; 
import { LIFF_ID } from '@/utils/liff.config'; 
import { useUserStore } from "@/stores/user";

const defaultAvatar = 'https://example.com/default-avatar.jpg'; 
const user_picture = ref<string | null>(null); 
const userStore = useUserStore();

const loginWithLINE = async () => {
  if (import.meta.server) return;

  await liff.init({ liffId: LIFF_ID }); // 直接使用配置文件中的 LIFF_ID

  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  const profile = await liff.getProfile();
  user_picture.value = profile.pictureUrl ?? defaultAvatar;
};
</script>