<template>
  <div class=" flex flex-col min-h-screen">
    <header class="py-8 border-b bg-lwm-50 flex items-center">
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold capitalize">
        {{ $t('title') }}
      </h1>
    </header>
    <div class="flex-1 flex items-center justify-center bg-white h-screen">
        <div class="border-2 rounded-lg flex flex-col items-center w-3/4">
          <div class="flex flex-col">
            <div class="p-4">
              <p class="text-black text-3xl font-bold pb-4 pt-4 text-center">{{ $t('login') }}</p>
            </div>
            <div class="mx-8 pb-8">
              <input
                type="text"
                :placeholder="$t('username')"
                v-model="name"
                class="flex-1 px-2 mb-12 border-b-2 border-gray-600  focus:outline-none text-xl w-full"/>
              <input
              type="text"
              :placeholder="$t('password')"
              v-model="password"
              class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-xl w-full"/>
            </div>
            <div class="flex flex-col items-center pb-4">
              <a href="#" class="text-blue-600 underline">{{ $t('noAccount') }}</a>
              <button class="bg-orange-400 w-2/3 py-2 rounded-lg font-bold text-white text-base">{{ $t('login') }}</button>
            </div>
            <div class="flex justify-center pb-4">
              <p class="relative text-gray-600 text-base before:content-['——'] after:content-['——'] before:mr-2 after:ml-2">
              {{ $t('tryAnotherLogin') }}
              </p>
            </div>
            <div class="flex justify-center ">
              <button @click="login" class="flex justify-center w-2/3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                <img src="/assets/icons/line.png" alt="LINE" class="w-6 h-6 mr-2" />
                {{ $t('loginWithLine') }}
              </button>
            </div>

            <div class="flex justify-center py-8">
              <a href="#" class="text-red-600 underline">{{ $t('forgotEmailOrPassword') }}</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


  <!-- <div class="flex flex-col items-center space-y-4">

    <div v-if="loggedIn" class="text-center">
      <p class="text-lg font-semibold">你好，{{ user?.displayName }}</p>
      <img :src="user?.pictureUrl" alt="Avatar" class="w-16 h-16 rounded-full mx-auto mt-2" />
      <button @click="logout" class="mt-3 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
        登出
      </button>
    </div>

    <button v-else @click="login" class="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
      <img src="/assets/icons/line.png" alt="LINE" class="w-6 h-6 mr-2" />
      使用 LINE 登入
    </button>
    </div> -->

<script setup>
import { ref, onMounted } from 'vue'
import liff from '@line/liff'

const user = ref(null)
const loggedIn = ref(false)

const name = ref('')
const password = ref('')

// LIFF 初始化
const initLiff = async () => {
    try {
    await liff.init({ liffId: LIFF_ID }) // 替換成你的 LIFF ID
    loggedIn.value = liff.isLoggedIn()

    if (loggedIn.value) {
        const profile = await liff.getProfile()
        user.value = profile
    }
    } catch (error) {
    console.error('LIFF 初始化失敗:', error)
    }
}

// 登入 LINE
const login = () => {
    if (!liff.isLoggedIn()) {
    liff.login()
    }else{
      navigateTo('/test2'); 
    }
}

// 登出 LINE
const logout = () => {
    liff.logout()
    loggedIn.value = false
    user.value = null
}

onMounted(() => {
    initLiff()
})
</script>