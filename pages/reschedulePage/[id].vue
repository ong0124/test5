<template>
    <header class="py-4 border-b bg-[url('/assets/images/headerTest2.png')] bg-cover bg-center flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-white text-xl capitalize">
        {{ $t('ReschedulePage.selectRescheduleTrip') }}
      </h1>
    </header>
  
    <div class="pb-6 px-3">
  <div class="space-y-3 pt-2">
    <div
      v-for="index in data"
      :key="index.id"
      class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 
      transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer
      hover:shadow-md active:shadow-sm"
      @click="goToDetail(index.id)"
    >
      <!-- 顶部信息栏 -->
      <div class="px-3 pt-3 pb-2 flex justify-between items-start border-b-2 border-gray-100">
        <!-- Left Section: 行程类型标签 and notTraveled -->
        <div class="flex items-center space-x-2 flex-1">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            <Icon :name="index.trip_type === 'roundTrip' ? 'heroicons:arrow-path' : 'heroicons:arrow-right'" 
                  class="w-3 h-3 mr-1 text-lwm-100"/>
            {{ index.trip_type === 'roundTrip' ? $t('HomePage.roundTrip') :  $t('HomePage.oneWay') }}
          </span>
          
          <!-- Not Traveled Status -->
          <span class="text-sm px-2 py-1 rounded-full bg-orange-100 text-orange-500">
            {{ $t('bookingStatus.notTraveled') }}
          </span>
        </div>

  <!-- Right Section: Price -->
  <div class="text-right">
    <span class="text-md text-gray-500">NT$</span>
    <span class="text-lg font-semibold text-gray-600">
      {{ index.trip_type === 'roundTrip' ? 300 * index.adult_num : 150 * index.adult_num }}
    </span>
  </div>
</div>

      
      <!-- 主行程信息 -->
      <div class="p-3">
        <!-- 去程信息 -->
        <div class="flex items-start">
          <div class="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center mr-2 flex-shrink-0">
            <Icon name="zondicons:travel" class="w-4 h-4 text-lwm-400"></Icon>
          </div>
          
          <div class="flex-1 min-w-0">
            <div class="flex items-center text-base font-medium text-gray-800 mb-1">
              <span class="truncate">{{ t(index.departure_loc) }}</span>
              <Icon :name="index.trip_type === 'roundTrip' ? 'material-symbols:arrow-right-alt-rounded' : 'material-symbols:arrow-right-alt-rounded'" 
                    class="mx-2 w-5 h-5 text-gray-500 flex-shrink-0"/>
              <span class="truncate">{{ t(index.destination_loc) }}</span>
            </div>
            
            <div class="flex items-center bg-gray-100 rounded-md p-2 mt-1">
              <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-100 mr-2 flex-shrink-0"></Icon>
              <div>
                <p class="text-sm text-gray-500">{{ $t('Booking.shuttleBusTime') }}</p>
                <p class="text-md font-semibold text-gray-800">
                  {{ formatDate(index.shuttle_date) }} {{ index.shuttle_time }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 票数信息 -->
        <div class="flex flex-wrap gap-2 mt-3 pl-10">
          <div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">
            <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
            <p>{{ $t('Booking.adultTicket') }}</p>
            <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{index.adult_num}}</p>
          </div>
          <div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">
            <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
            <p>{{ $t('Booking.childTicket1') }}</p>
            <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{index.child_num}}</p>
          </div>
        </div>
        
        <!-- 返程信息 -->
        <div v-if="index.trip_type === 'roundTrip'" class="mt-3 pt-3 border-t border-gray-200">
          <div class="flex items-start">
            <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2 flex-shrink-0">
              <Icon name="zondicons:travel" class="w-4 h-4 text-lwm-50 transform"></Icon>
            </div>
            
            <div class="flex-1 min-w-0">
              <div class="flex items-center text-base font-medium text-gray-800 mb-1">
                <span class="truncate">{{ t(index.return_departure) }}</span>
                <Icon name="material-symbols:arrow-right-alt-rounded" class="mx-2 w-5 h-5 text-gray-500 flex-shrink-0"/>
                <span class="truncate">{{ t(index.return_destination) }}</span>
              </div>
              
              <div class="flex items-center bg-gray-100 rounded-md p-2 mt-1">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-100 mr-2 flex-shrink-0"></Icon>
                <div>
                  <p class="text-sm text-gray-500">{{ $t('Booking.shuttleBusTime') }}</p>
                  <p class="text-md font-semibold text-gray-800">
                    {{ formatDate(index.return_shuttle_date) }} {{ index.return_shuttle_time }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="p-2 bg-gray-50 flex justify-between border-t border-gray-200">
        <NuxtLink 
          :to="'/reschedulePage/details/' + index.id"
          class="flex-1 flex items-center justify-center py-2 bg-white border border-blue-400 text-blue-400 rounded-lg text-sm font-medium mr-2"
        >
          <Icon name="mdi:pencil" class="w-4 h-4 mr-1"></Icon>
          {{ $t('forReschedule') }}
        </NuxtLink>
        <button class="flex-1 flex items-center justify-center py-2 bg-white border border-gray-500 text-gray-700 rounded-lg text-sm font-medium">
          <Icon name="mdi:close" class="w-4 h-4 mr-1"></Icon>
          {{ $t('cancelOrder') }}
        </button>
      </div>
    </div>
  </div>
  
  <p class="flex text-gray-500 items-center justify-center text-sm py-4">—— {{ $t('noMoreData') }} ——</p>
</div>
      
  </template>
  

<script setup lang="ts">
import type { BookingModel } from '~/server/models/booking';
import { useRoute,useRouter } from 'vue-router'

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const LineID = route.params.id;

const data = ref<BookingModel[]>([]);
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/reschedulePage/${LineID}`);
    data.value = result.data as BookingModel[];
    console.log("最終的 data.value:", data.value);
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};

const goToDetail = (bookingId: number) => {
  router.push(`/reschedulePage/details/${bookingId}`);
};
onMounted(fetchData); 
</script>