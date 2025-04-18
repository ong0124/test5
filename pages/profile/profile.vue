<template>
    <div class="bg-green-900 bg-opacity-85">
    <div class="flex py-12 items-center bg-[url('/assets/images/profileTest1.png')] bg-cover">
        <div 
        @click="loginWithLINE"
        class="flex bg-white bg-opacity-40 rounded-full items-center justify-center w-64 h-20 p-2 mx-auto">
            <div class="px-4 flex-none ">
                <a-avatar 
                    :size="56" 
                    :src="user_picture || defaultAvatar" 
                    style="cursor: pointer;"
                >
                    <template #icon><UserOutlined /></template>
                </a-avatar>
            </div>
            <div class="flex flex-col flex-1 ">
                <p>{{  userStore.user_name || $t('profile.nickname') }}</p>
                <div class="flex">
                </div>
            </div>
        </div>
        </div>

        <div class="bg-gray-100 rounded-t-3xl shadow h-screen pt-4">
            <div class="flex p-2 justify-between bg-white rounded-lg mx-4 mb-2 shadow-sm">
               <button
               v-for="status in BookingStatus"::key="status.name"
               @click="selectStatus(status.name,status.route)"
               class=" flex flex-col items-center mx-auto text-sm"
               >
                <img :src="status.icon" :alt="status.name" class="w-8 h-8"/>
                {{ $t(`bookingStatus.${status.name}`) }}
               </button>
               <p class="border-l-4 border-dashed border-l-gray-200"></p>
            </div>

            <div class="flex flex-col p-1 bg-white rounded-lg mx-4">
                <div class="border-b border-b-gray-100 flex px-2 py-3 items-center "
                    v-for="settings in ProfileSettings"::key="settings.name"
                    @click="selectStatus(settings.name,settings.route)"
                >
                    <div class="flex flex-1 ">
                        <div class="flex flex-1 text-md ">
                            <img :src="settings.icon" :alt="settings.name" class="w-6 h-6 mr-2"/>
                            {{ $t('profileSettings.' + settings.name) }}
                        </div>
                        <img src="/assets/icons/GreaterThan.png" alt="More" class="w-5 h-5 "/>
                    </div>
                </div>
                <div>
                    <div class=" flex p-3 items-center" @click="userStore.logout()">
                            <div class="flex flex-1 text-sm -400 justify-center ">
                                <img src="/assets/icons/Logout.png" alt="Logout" class="w-5 h-5 mr-2" />
                                <p>{{ $t('profile.logout') }}</p>
                            </div>
                    </div>
                </div>
            </div>

            <div class="text-gray-600 text-sm text-center p-4 flex justify-center">
                <p>Powered by</p>&nbsp;
                <p>上車巴</p>
            </div>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ToPayIcon from '@/assets/icons/ToPay2.png';
import NotTraveledIcon from '@/assets/icons/NotTraveled2.png';
import RefundIcon from '@/assets/icons/Refund2.png';
import orderIcon from '@/assets/icons/orderIcon2.png';
import PasswordIcon from '@/assets/icons/Password2.png';
import SettingsIcon from '@/assets/icons/Settings.png';
import ContactIcon from '@/assets/icons/Contact2.png';
import ReviewIcon from '@/assets/icons/Review2.png';
import passengerIcon from '@/assets/icons/passengericon.png';
import { defineProps } from 'vue';

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const defaultAvatar = 'https://example.com/default-avatar.jpg'; 
const user_picture = ref<string | null>(null); 
const localPath = useLocalePath();

// 定義導航項目
const BookingStatus = [
  { name: 'toPay', icon: ToPayIcon, route: '/toPay' },
  { name: 'notTraveled', icon: NotTraveledIcon, route: '/notTraveled' },
  { name: 'refunded', icon: RefundIcon, route: '/refunded' },
  { name: 'all', icon: orderIcon, route: '/allBookingStatus' },
];

const ProfileSettings = [
  { name: 'passenger', icon: passengerIcon, route: '/passengerPages' },
  { name: 'changePassword', icon: PasswordIcon, route: '/profile' },
//   { name: 'systemSettings', icon: SettingsIcon, route: '/profile' },
  { name: 'contactSupport', icon: ContactIcon, route: '/profile' },
  { name: 'feedback', icon: ReviewIcon, route: '/profile' },
];

// 切換選中的導航按鈕
const selectStatus = (statusName: string, route: string) => {
  navigateTo(route); // 使用 Nuxt 的 `navigateTo` 方法進行導航
};

const loginWithLINE = async () => {
  userStore.loadUser(); // 先尝试从 localStorage 读取数据
  if (!userStore.user_id) { // 如果 localStorage 没有用户信息，则执行登录
    await userStore.loginWithLINE();
    }
    if (userStore.user_id && userStore.user_name) {
      try {

      const checkResponse = await $fetch(`/api/GETDetailUsers/${userStore.user_id}`);

      if (checkResponse?.data) {
        console.log('使用者已存在於資料庫');
        return;
      }
    } catch (error: any) {
      // 只有當錯誤是 404 時才繼續創建，其他錯誤拋出
      if (error?.statusCode !== 404) {
        console.error('查詢使用者時發生錯誤:', error);
        return;
      }
    }

    try {
      const createResponse = await $fetch('/api/LoginCustomer/createUser', {
        method: 'POST',
        body: {
          LineID: userStore.user_id,
          full_name: userStore.user_name
        }
      });

      if (createResponse.success) {
        console.log('LINE 使用者資料已成功寫入資料庫');
      }
    } catch (error) {
      console.error('建立使用者時發生錯誤:', error);
    }
  }
};
</script>