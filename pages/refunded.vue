<template>
    <header class="py-4 border-b bg-[url('/assets/images/headerTest3.png')] bg-cover bg-center flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">
        {{ $t('bookingStatus.refunded') }}
      </h1>
    </header>
  
    <div>  
      <div class="pl-2 pt-4 pb-16">

        <div
              v-for="(item, index) in refundData" :key="index"
              class="bg-white p-3 rounded-lg shadow-sm mb-4"
            >
              <!-- Top Section -->
              <div class="flex justify-between items-center pb-1 mb-1 border-b-2">
                <div class="flex items-center text-gray-700 w-2/3">
                  <Icon name="tabler:receipt-refund" class="bg-gray-500 mr-1 w-6 h-6"></Icon>
                  <p>{{ Translate_loc(item.departure_loc) }}</p>
                  <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
                  <p>{{ Translate_loc(item.destination_loc) }}</p>
                </div>
                <span class="text-md text-lwm-50">退款</span>
              </div>

              <!-- Middle Section -->
              <div class="flex justify-between items-center pt-1">
                <div class="flex-col items-center text-gray-400 w-2/3 text-sm">
                    <div class="flex gap-2 mt-2">
                      <div class="flex items-center bg-orange-50 rounded-sm px-1 py-1 text-sm">
                        <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
                        <p>{{ $t('Booking.adultTicket') }}</p>
                        <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{ item.adult_num }}</p>
                      </div>
                      <div class="flex items-center bg-amber-50 rounded-sm px-1 py-1 text-sm">
                        <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
                        <p>{{ $t('Booking.childTicket1') }}</p>
                        <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{ item.child_num }}</p>
                      </div>
                    </div>
                    
                    <div class="flex">
                      <p class="w-18 ">{{ $t('Booking.arrivalAtAirportTime') }} : </p>
                      <p class="pl-2">{{ formatDate(item.arrivalpoint_date) }} {{ item.arrivalpoint_time }}</p>
                    </div>
                    <div class="flex">
                        <p class="w-18 ">{{ $t('Booking.shuttleBusTime') }} : </p>
                        <p class="pl-2">{{ formatDate(item.shuttle_date) }} {{ item.shuttle_time }}</p>
                    </div>
                </div>
                <div class="flex">
                  <p>退款:</p>&nbsp;
                  <p>NT$</p>
                  <p> {{ item.refund_amount !== null ? item.refund_amount : '-'  }}</p>
                </div>
              </div>

              <div v-if="item.status === 'complete'" 
               class="flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md">
                <div class="flex items-center flex-grow">
                  <p class="text-lwm-400 font-semibold px-2">
                    {{ $t('bookingStatus.refundedtoUser') }}
                  </p>
                  <p class="text-gray-700 px-2">退款金额 : </p>&nbsp;
                  <p class="text-lwm-400">NT$</p>&nbsp;
                  <p class="text-lwm-400">{{ item.refund_amount }}</p>
                </div>
                <button class="p-1 rounded-md hover:bg-gray-200 transition flex items-center justify-center">
                  <Icon name="mingcute:right-fill" class="w-5 h-5 text-gray-500"></Icon>
                </button>
              </div>

              <div v-else
               class="flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md">
                <div class="flex items-center flex-grow">
                  <p class="text-lwm-50 font-semibold px-2">
                    {{ $t('bookingStatus.refundedApproving') }}
                  </p>
                  <p class="text-gray-700 px-2">在申请过程中，请耐心等待</p>
                </div>
                <button class="p-1 rounded-md hover:bg-gray-200 transition flex items-center justify-center">
                  <Icon name="mingcute:right-fill" class="w-5 h-5 text-gray-500"></Icon>
                </button>
              </div>



              <div class="flex justify-end space-x-2 mt-2 text-sm">
                <!-- <button class="px-4 py-1 bg-gray-200 bg-opacity-50 rounded-md text-gray-800">删除记录</button> -->
                <button class="px-4 py-1 bg-gray-200 bg-opacity-50 rounded-md text-gray-800">联系客服</button>
                <button class="px-4 py-1 bg-orange-200 bg-opacity-50 rounded-md text-lwm-50">查看详情</button>
              </div>
            </div>

      </div>
    </div>
  </template>


<script setup lang="ts">
import type { RefundModel } from '~/server/models/refund';
const route = useRoute();
const refundData = ref<RefundModel[]>([]); // 根據你的實際型別調整

const LineID = route.query.LineID;
//const LineID = 'U4ffb99c8f96669df5097214aabdb6911';


const fetchData = async () => {
  try {
    if (!LineID) {
      throw new Error('LineID 不存在');
    }

    const result = await $fetch(`/api/readRefundByLineID/${LineID}`);
    refundData.value = result.data;
    console.log('退款資料:', refundData.value);
  } catch (error) {
    console.error('讀取退款資料失敗:', error);
  }
};

onMounted(fetchData);
</script>