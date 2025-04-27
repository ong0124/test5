<template>
    <header class="py-4 border-b bg-[url('/assets/images/headerTest3.png')] bg-cover bg-center flex items-center">
      <div>
        <BackBtn/>
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">
        {{ $t('bookingStatus.notTraveled') }}
      </h1>
    </header>
  
    <div class="pb-20">    
      <div
        v-for="index in data"
        :key="index.id"
        class="bg-white p-3 mx-2 my-4 rounded-lg shadow-sm"
      >
        <div class="flex flex-col">
          <div class="flex items-center justify-between pb-2 border-b border-lwm-400">
            <div class="flex items-center space-x-2">
              <Icon name="healthicons:travel-alt" class="w-6 h-6 text-lwm-400"></Icon>
              <p class="font-medium">{{ $t('bookingStatus.pier') }}</p>
              <Icon :name= "index.trip_type === 'oneWay' ? 'material-symbols-arrow-right-alt' : 'pepicons-pop:repeat'"
               class="w-5 h-5 text-gray-500"></Icon>
              <p class="font-medium">{{ $t('bookingStatus.airport') }}</p>
            </div>
            
            <div class="flex justify-end space-x-2">
              <div class="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                <!-- <Icon name="ri:information-fill" class="w-4 h-4 text-lwm-100 mr-1"></Icon> -->
                <span>{{ index.trip_type === 'oneWay' ? '单程' : '往返' }}</span>
              </div>
              <p class="flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-sm">
                <!-- <Icon name="charm:clock" class="w-5 h-5 mr-1"></Icon> -->
                {{ $t('bookingStatus.notTraveled') }}
              </p>
            </div>
          </div>

          <div v-if="index.trip_type === 'oneWay'">
            <div class="mt-3 text-sm text-gray-700">
              <div class="flex justify-between mt-1">
                <p class="font-medium">抵達地點時間 :</p>
                <p>{{ formatDate(index.arrivalpoint_date) }} {{ index.arrivalpoint_time }}</p>
              </div>
              <div class="flex justify-between mt-1">
                <p class="font-medium">{{ $t('Booking.flightNumber') }} :</p>
                <p>{{ index.flight_num }}</p>
              </div>
              <div class="flex justify-between mt-1">
                <p class="font-medium">{{ $t('Booking.ferryTime') }} /{{ $t('Booking.flightTime') }} :</p>
                <p>{{ index.flight_time }}</p>
              </div>
            </div>
  
            <div class="flex flex-wrap gap-2 mt-2">
              <div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">
                <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
                <p>{{ index.adult_num }}</p>
                <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">1</p>
              </div>
              <div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">
                <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
                <p>{{ index.child_num }}</p>
                <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p>
              </div>
            </div>
  
            <div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center">
              <div class="flex items-center font-medium">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-50 mr-1"></Icon>
                <p>{{ $t('Booking.shuttleBusTime') }} :</p>
              </div>
              <p class="text-gray-700 font-semibold">{{ formatDate(index.shuttle_date) }} {{ index.shuttle_time }}</p>
            </div>
          </div>

          <div v-else>
            <div class="mt-3 text-gray-700">
            <div class="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm">
              <Icon name="ri:information-fill" class="w-4 h-4 text-lwm-100 mr-1"></Icon>
              <span>去程</span>
            </div>
            <div class="flex justify-between mt-1 text-sm">
              <p class="font-medium">抵達地點時間 :</p>
              <p>{{ formatDate(index.arrivalpoint_date) }} {{ index.arrivalpoint_time }}</p>
            </div>
            <div class="flex justify-between mt-1 text-sm">
              <p class="font-medium">{{ $t('Booking.flightNumber') }} :</p>
              <p>{{ index.flight_num }}</p>
            </div>
            <div class="flex justify-between mt-1 text-sm">
              <p class="font-medium">{{ $t('Booking.ferryTime') }} /{{ $t('Booking.flightTime') }}  :</p>
              <p>{{ index.flight_time }} / {{ index.ferry_time }}</p>
            </div>
            
            <div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center">
              <div class="flex items-center font-medium">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-50 mr-1"></Icon>
                <p>{{ $t('Booking.shuttleBusTime') }} :</p>
              </div>
              <p class="text-gray-700 font-semibold">{{ formatDate(index.shuttle_date) }} {{ index.shuttle_time }}</p>
            </div>
          </div>

          <DashLine/>

          <div class="mt-1 text-sm text-gray-700">
            <div class="flex items-center text-sm text-gray-600 bg-gray-100  px-3 py-1 rounded-md">
              <Icon name="ri:information-fill" class="w-4 h-4 text-lwm-100 mr-1"></Icon>
              <span>返程</span>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">抵達地點時間 :</p>
              <p>{{ formatDate(index.return_arrival_date) }} {{ index.return_arrival_time }}</p>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.flightNumber') }} :</p>
              <p>{{ index.flight_num }}</p>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.ferryTime') }} /{{ $t('Booking.flightTime') }}  :</p>
              <p>{{ index.flight_time }} / {{ index.ferry_time }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-2">
            <div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">
              <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
              <p>{{ index.adult_num }}</p>
              <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">1</p>
            </div>
            <div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">
              <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
              <p>{{ index.child_num }}</p>
              <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p>
            </div>
          </div>

          <div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center">
              <div class="flex items-center font-medium">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-50 mr-1"></Icon>
                <p>{{ $t('Booking.shuttleBusTime') }} :</p>
              </div>
              <p class="text-gray-700 font-semibold">{{ formatDate(index.return_shuttle_date) }} {{ index.return_shuttle_time }}</p>
          </div>

          </div>


          <div class="mt-4 flex justify-between">
              <nuxt-link :to="{ path: '/myTrip/orderDetail', query: { bookingId: index.id } }" class="px-3 py-1 text-gray-500 bg-gray-100 text-sm rounded-full">
                {{ $t('orderDetail.title') }}
              </nuxt-link>
              <div class="flex space-x-2">
                <nuxt-link :to="`/reschedulePage/details/${index.id}`" class="px-3 py-1 text-gray-600 text-sm border border-gray-600 rounded-md">
                  {{ $t('forReschedule') }}
                </nuxt-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </template>


<script setup lang="ts">
import type { BookingModel } from '~/server/models/booking';
const route = useRoute();


const LineID = route.query.LineID;


const data = ref<BookingModel[]>([]);
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/notTraveled/${LineID}`);
    data.value = result.data as BookingModel[];
    console.log("最終的 data.value:", data.value);
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};
onMounted(fetchData); 

</script>