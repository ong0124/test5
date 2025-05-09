<template>
  <HeaderNavigator />
    <div class="flex flex-col pb-16">
        <div class="shadow mt-6 mx-10 rounded-lg bg-gray-50">
            <div class="flex">
                <div @click="showContent(1)"
                :class="{ 'bg-lwm-100 rounded-tl-lg text-white': activeTab === 2 }" class="flex-1 flex justify-center rounded-tl-lg 
                transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer
               ">
                    <button @click="showContent(1)" :class="{ ' text-lwm-400 font-bold': activeTab === 1 }">{{ $t('HomePage.oneWay') }}</button>
                </div>

                <div @click="showContent(2)"
                :class="{ 'bg-lwm-100 rounded-tr-lg text-white': activeTab === 1 }" class="flex-1 flex justify-center rounded-tr-lg
                transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer
                ">
                    <button @click="showContent(2)" :class="{ ' text-lwm-400 font-bold': activeTab === 2 }">{{ $t('HomePage.roundTrip') }}</button>
                </div>
                
            </div>
            <div v-if="activeTab === 1">
              <OneWayTicket/>
            </div>
            <div v-if="activeTab === 2">
                <RoundedWayTicket/>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// 多语言函数
const { t } = useI18n()

// 复选框状态
const isChecked = ref(false)

// 当前选中的 tab
const activeTab = ref(1)

// 切换 tab 时触发
const showContent = (tab: number) => {
  activeTab.value = tab
}
</script>
