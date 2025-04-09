<template>
    <header class="py-4 border-b bg-[url('/assets/images/headerTest2.png')] bg-cover bg-center flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl capitalize text-white">
        {{ $t('footer.myTrip') }}
      </h1>
    </header>
  
    <div class="pb-12">  
      <div class="p-3 pt-4">
        <div v-for="index in notTraveled" :key="index.id" class="mb-4 transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer
             hover:shadow-md active:shadow-sm">
          <div class="bg-white rounded-md shadow-sm p-2 relative flex flex-col w-full border-l-4 border-l-orange-400">
            <!-- Top Hole (Before) -->
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
            <!-- Bottom Hole (After) -->
            <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
            <!-- Top Part -->
            <div class="flex justify-between items-center ml-2">
              <div class="flex border-b-2 items-center border-lwm-400">
                <Icon name="zondicons:travel" class="w-4 h-4 mr-1 text-lwm-400"></Icon>
                <p>{{ t(index.departure_loc) }}</p>
                <Icon 
                          :name="index.trip_type === 'roundTrip' ? 'pepicons-pop:repeat' : 'material-symbols-arrow-right-alt'" 
                          class="mx-2 w-6 h-6 text-gray-600"
                      ></Icon>
                <p>{{ t(index.destination_loc) }}</p>
              </div>
              <div class="flex justify-end space-x-2">
                <div class="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                  <span>{{ index.trip_type === 'roundTrip' ? $t('HomePage.roundTrip') : $t('HomePage.oneWay') }}</span>
                </div>
                <p class="flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-sm">
                  {{ $t('bookingStatus.notTraveled') }}
                </p>
              </div>
            </div>
            <!-- Middle Part -->
            <div class="text-md text-gray-700">
              <!-- Arrival Time -->
              <div class="text-gray-500">
                <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                  <Icon name="i-majesticons-ship-line" class="w-5 h-5 text-lwm-50"></Icon>
                  <p class="w-32 truncate">{{ $t('Booking.arrivalPortTime') }}</p>
                  <p class="text-gray-800">2025-03-10</p>
                  <p class="pl-2 font-semibold text-gray-900">09:30:00</p>
                </div>
              </div>
              <!-- Shuttle Bus Time -->
              <div class="text-gray-500">
                <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                  <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-100"></Icon>
                  <p class="w-32 truncate" title="{{ $t('Booking.shuttleBusTime') }}">{{ $t('Booking.shuttleBusTime') }}</p>
                  <p class="text-gray-800">{{ formatDate(index.shuttle_date) }}</p>
                  <p class="pl-2 font-semibold text-gray-700">{{ index.shuttle_time }}</p>
                </div>
              </div>
            </div>
            <DashLine v-if="index.trip_type === 'roundTrip'"/>
            <!-- Return Trip (if roundTrip) -->
            <div v-if="index.trip_type === 'roundTrip'" class="text-md text-gray-700">
              <!-- Return Arrival Time -->
              <div class="text-gray-500">
                <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                  <Icon name="i-material-symbols-flight-land" class="w-5 h-5 text-lwm-50"></Icon>
                  <p class="w-32 truncate">{{ $t('Booking.arrivalAtAirportTime') }}</p>
                  <p class="text-gray-800">2025-03-15</p>
                  <p class="pl-2 font-semibold text-gray-900">17:30:00</p>
                </div>
              </div>
              <!-- Return Shuttle Bus Time -->
              <div class="text-gray-500">
                <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                  <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-100"></Icon>
                  <p class="w-32 truncate" title="{{ $t('Booking.shuttleBusTime') }}">{{ $t('Booking.shuttleBusTime') }}</p>
                  <p class="text-gray-800">{{ formatDate(index.return_shuttle_date) }}</p>
                  <p class="pl-2 font-semibold text-gray-700">{{ index.return_shuttle_time }}</p>
                </div>
              </div>
            </div>
            <!-- Bottom Part -->
            <div class="mt-2 ml-2 flex justify-between items-center">
              <div>
                <span class="font-semibold text-gray-700 text-md">NT$ </span>
              <span class="text-md text-gray-700">{{ index.trip_type === 'roundTrip' ? index.adult_num*300 : index.adult_num*150 }}</span>
              </div>
              <div class="flex gap-2 mt-2">
                      <div class="flex items-center bg-orange-50 rounded-sm px-1 py-1 text-sm">
                        <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
                        <p>{{ $t('Booking.adultTicket') }}</p>
                        <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{ index.adult_num }}</p>
                      </div>
                      <div class="flex items-center bg-amber-50 rounded-sm px-1 py-1 text-sm">
                        <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
                        <p>{{ $t('Booking.childTicket1') }}</p>
                        <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{ index.child_num }}</p>
                      </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="p-3 pt-4 -mt-7">
      <div v-for="index in complete" :key="index.id" class="mb-4 text-gray-600 
      transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-95 cursor-pointer
      hover:shadow-md active:shadow-sm">
        <div class="bg-white rounded-md shadow-sm p-2 relative flex flex-col w-full border-l-4 border-gray-300">
          <!-- Top Hole -->
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
          <!-- Bottom Hole -->
          <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
          <!-- Top Part -->
          <div class="flex justify-between items-center ml-2">
            <div class="flex border-b-2 items-center border-gray-400">
              <Icon name="zondicons:travel" class="w-4 h-4 mr-1 text-gray-300"></Icon>
              <p>{{ t(index.departure_loc) }}</p>
              <Icon 
                :name="index.trip_type === 'roundTrip' ? 'pepicons-pop:repeat' : 'material-symbols-arrow-right-alt'" 
                class="mx-2 w-6 h-6 text-gray-500"
              ></Icon>
              <p>{{ t(index.destination_loc) }}</p>
            </div>
            <div class="flex justify-end space-x-2">
              <div class="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
                <span>{{ index.trip_type === 'roundTrip' ? $t('HomePage.roundTrip') : $t('HomePage.oneWay') }}</span>
              </div>
              <p class="flex items-center text-gray-500 bg-gray-100 px-2 py-1 rounded-md text-sm">
                {{ $t('bookingStatus.complete') }}
              </p>
            </div>
          </div>

          <!-- Middle Part (Arrival and Shuttle Bus Times) -->
          <div class="text-md text-gray-700">
            <!-- Arrival Time -->
            <div class="text-gray-500">
              <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                <Icon name="i-material-symbols-flight-land" class="w-5 h-5 text-gray-300"></Icon>
                <p class="w-32 truncate">{{ $t('Booking.arrivalAtAirportTime') }}</p>
                <p class="text-gray-800">2025-03-13</p>
                <p class="pl-2 font-semibold text-gray-900">12:30:00</p>
              </div>
            </div>
            <!-- Shuttle Bus Time -->
            <div class="text-gray-500">
              <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-gray-300"></Icon>
                <p class="w-32 truncate" title="{{ $t('Booking.shuttleBusTime') }}">{{ $t('Booking.shuttleBusTime') }}</p>
                <p class="text-gray-800">{{ formatDate(index.shuttle_date) }}</p>
                <p class="pl-2 font-semibold text-gray-700">{{ index.shuttle_time }}</p>
              </div>
            </div>
          </div>

          <!-- Round Trip (Return Trip if roundTrip) -->
          <DashLine v-if="index.trip_type === 'roundTrip'" />
          <div v-if="index.trip_type === 'roundTrip'" class="text-md text-gray-700">
            <!-- Return Arrival Time -->
            <div class="text-gray-500">
              <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                <Icon name="i-material-symbols-flight-land" class="w-5 h-5 text-gray-300"></Icon>
                <p class="w-32 truncate">{{ $t('Booking.arrivalAtAirportTime') }}</p>
                <p class="text-gray-800"></p>
                <p class="pl-2 font-semibold text-gray-900"></p>
              </div>
            </div>
            <!-- Return Shuttle Bus Time -->
            <div class="text-gray-500">
              <div class="flex items-center px-2 rounded-md mt-2 space-x-2">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-gray-300"></Icon>
                <p class="w-32 truncate" title="{{ $t('Booking.shuttleBusTime') }}">{{ $t('Booking.shuttleBusTime') }}</p>
                <p class="text-gray-800">{{ formatDate(index.return_shuttle_date) }}</p>
                <p class="pl-2 font-semibold text-gray-700">{{ index.return_shuttle_time }}</p>
              </div>
            </div>
          </div>

          <!-- Bottom Part (Ticket Info) -->
          <div class="mt-2 ml-2 flex justify-between items-center">
            <div>
              <span class="font-semibold text-gray-400 text-md">NT$ </span>
              <span class="text-md text-gray-400">{{ index.trip_type === 'roundTrip' ? index.adult_num*300 : index.adult_num*150 }}</span>
            </div>
            <div class="flex gap-2 mt-2">
                      <div class="flex items-center bg-gray-50 rounded-sm px-1 py-1 text-sm">
                        <Icon name="mdi:account" class="w-5 h-5 text-gray-400 mr-1"></Icon>
                        <p>{{ $t('Booking.adultTicket') }}</p>
                        <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{ index.adult_num }}</p>
                      </div>
                      <div class="flex items-center bg-gray-50 rounded-sm px-1 py-1 text-sm">
                        <Icon name="mdi:account-child" class="w-5 h-5 text-gray-400 mr-1"></Icon>
                        <p>{{ $t('Booking.childTicket1') }}</p>
                        <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">{{ index.child_num }}</p>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </div>



      <p class="flex text-gray-500 items-center  justify-center text-sm">—— {{ $t('noMoreData') }} ——</p> 
    </div>

  </template>
  

<script setup lang="ts">
import type { BookingModel } from '~/server/models/booking';
import { useRoute } from 'vue-router'
import dayjs from "dayjs";

const { t } = useI18n();
const route = useRoute();
const LineID = route.params.id;

const data = ref<BookingModel[]>([]);
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/myTrip/${LineID}`);
    data.value = result.data as BookingModel[];
    console.log("最終的 data.value:", data.value);
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};
const notTraveled = computed(() => data.value.filter(b => b.status === "notTraveled"));
const complete = computed(() => data.value.filter(b => b.status === "complete"));

const formatDate = (date: string | null) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};
onMounted(fetchData); 
</script>