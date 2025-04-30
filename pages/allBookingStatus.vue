<template>
  <header class="py-4 border-b bg-[url('/assets/images/headerTest2.png')] bg-cover bg-center flex items-center">
    <div>
      <BackBtn />
    </div>
    <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">
      {{ $t('bookingStatus.all') }}
    </h1>
  </header>
  <div class="pb-16">
    <div v-for="item in data" :key="item.id">
      <template v-if="item.status === 'notTraveled'">
        <StatusCard
        :link="{ path: 'myTrip/orderDetail', query: { bookingId: item.id } }"
        beforeBarClass="before:bg-lwm-400"
        :title="item.trip_type === 'oneWay' ? 'HomePage.oneWay' : (item.trip_type === 'roundTrip' ? 'HomePage.roundTrip' : 'HomePage.unknownTrip')"
        titleBorderClass="border-l-lwm-400"
        TextColor="text-red-500"
        :from="item.departure_loc"
        :to="item.destination_loc"
        :icon="item.trip_type === 'oneWay' ? 'material-symbols-arrow-right-alt' : 'pepicons-pop:repeat'"
        status="bookingStatus.toPay"
        :arrivalDate="item.arrivalpoint_date"
        :arrivalTime="item.arrivalpoint_time"
        :shuttleDate="item.shuttle_date"
        :shuttleTime="item.shuttle_time"
        :adult="item.adult_num"
        :child="item.child_num"
      >
        <template #footer>
          <!-- <div>
            <p>合計：NT$
              <span class="text-xl text-red-500">150.00</span>
            </p>
          </div> -->
          <button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm">
            查看详情
          </button>
        </template>
      </StatusCard>
      </template>
      <template v-if="item.status === 'complete'">
        <StatusCard
        :link="{ path: 'myTrip/orderDetail', query: { bookingId: item.id } }"
        beforeBarClass="before:bg-gray-300"
        :title="item.trip_type === 'oneWay' ? 'HomePage.oneWay' : (item.trip_type === 'roundTrip' ? 'HomePage.roundTrip' : 'HomePage.unknownTrip')"
        titleBorderClass="border-l-gray-300"
        TextColor="text-gray-300"
        :from="item.departure_loc"
        :to="item.destination_loc"
        :icon="item.trip_type === 'oneWay' ? 'material-symbols-arrow-right-alt' : 'pepicons-pop:repeat'"
        status="bookingStatus.complete"
        :arrivalDate="item.arrivalpoint_date"
        :arrivalTime="item.arrivalpoint_time"
        :shuttleDate="item.shuttle_date"
        :shuttleTime="item.shuttle_time"
        :adult="item.adult_num"
        :child="item.child_num"
      >
        <template #footer>
          <!-- <div>
            <p>合計：NT$
              <span class="text-xl text-red-500">150.00</span>
            </p>
          </div> -->
          <button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm">
            查看详情
          </button>
        </template>
      </StatusCard>
      </template>
      <template v-if="item.refund_status === 'approved'">
        <StatusCard
        :link="{ path: 'myTrip/orderDetail', query: { bookingId: item.id } }"
        beforeBarClass="before:bg-gray-500"
        :title="item.trip_type === 'oneWay' ? 'HomePage.oneWay' : (item.trip_type === 'roundTrip' ? 'HomePage.roundTrip' : 'HomePage.unknownTrip')"
        titleBorderClass="border-l-gray-500"
        TextColor="text-lwm-400"
        :from="item.departure_loc"
        :to="item.destination_loc"
        :icon="item.trip_type === 'oneWay' ? 'material-symbols-arrow-right-alt' : 'pepicons-pop:repeat'"
        status="bookingStatus.refundedtoUser"
        :arrivalDate="item.arrivalpoint_date"
        :arrivalTime="item.arrivalpoint_time"
        :shuttleDate="item.shuttle_date"
        :shuttleTime="item.shuttle_time"
        :adult="item.adult_num"
        :child="item.child_num"
      >
        <template #footer>
          <div>
            <p>退款：NT$
              <span class="text-xl text-red-500">{{ item.refund_amount}}</span>
            </p>
          </div>
          <button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm">
            查看详情
          </button>
        </template>
      </StatusCard>
      </template>
      <template v-if="item.refund_status === 'pending'">
        <StatusCard
        :link="{ path: 'myTrip/orderDetail', query: { bookingId: item.id } }"
        beforeBarClass="before:bg-gray-500"
        :title="item.trip_type === 'oneWay' ? 'HomePage.oneWay' : (item.trip_type === 'roundTrip' ? 'HomePage.roundTrip' : 'HomePage.unknownTrip')"
        titleBorderClass="border-l-gray-500"
        TextColor="text-lwm-400"
        :from="item.departure_loc"
        :to="item.destination_loc"
        :icon="item.trip_type === 'oneWay' ? 'material-symbols-arrow-right-alt' : 'pepicons-pop:repeat'"
        status="bookingStatus.refundedApproving"
        :arrivalDate="item.arrivalpoint_date"
        :arrivalTime="item.arrivalpoint_time"
        :shuttleDate="item.shuttle_date"
        :shuttleTime="item.shuttle_time"
        :adult="item.adult_num"
        :child="item.child_num"
      >
        <template #footer>
          <div>
            <p>退款：NT$
              <span class="text-xl text-red-500">{{ item.refund_amount}}</span>
            </p>
          </div>
          <button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm">
            查看详情
          </button>
        </template>
      </StatusCard>
      </template>
    </div>
    <nuxt-link to="/toPay">
      <div class="pl-2 pt-4">
        <div
          v-for="index in 1"
          :key="index"
          class="bg-white p-3 rounded-lg flex flex-col mb-4 h-full relative 
            before:absolute before:top-0 before:left-0 before:w-2 before:h-full 
            before:bg-yellow-400 before:rounded-l-lg"
        >
          <div class="flex justify-between items-center pb-1 border-b-2 border-gray-300">
            <p class="text-gray-700 border-l-4 border-l-yellow-400 pl-1 ml-2 font-semibold">{{ $t('HomePage.oneWay') }}</p>
            <div class="flex items-center">
              <p>{{ $t('bookingStatus.pier') }}</p>
              <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
              <p>{{ $t('bookingStatus.airport') }}</p>
            </div>
            <p class="text-red-500 font-semibold">
              {{ $t('bookingStatus.toPay') }}</p>
          </div>

          <div class="flex flex-1 justify-between mt-3">
            <div class="flex flex-col text-gray-700 space-y-1 px-2 border-r border-gray-300 flex-1">
              <div class="flex items-center text-sm">
                <div class="">
                      <p class="w-18 ">{{ $t('Booking.arrivalPortTime') }} : </p>
                      <p class="">2025-01-01 15:30</p>
                </div>
              </div>
              <div class="flex items-center text-sm">
                <div class="">
                      <p class="w-18 ">{{ $t('Booking.shuttleBusTime') }} : </p>
                      <p class="">2025-01-01 15:30</p>
                </div>
              </div>
              <div class="flex text-sm">
                <p>{{ $t('Booking.adultTicket') }} </p>
                <p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">1</p>
                <p>{{ $t('Booking.childTicket1') }} </p>
                <p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">0</p>
              </div>
            </div>

            <div class="flex flex-col justify-end items-end pl-4 flex-1">
              <div class="">
                <p>合计：NT$ 
                  <span class="text-xl text-red-500">150.00</span>
                </p>
              </div>
              <button class="border border-blue-300 text-blue-500 rounded-full px-4 mt-1 text-sm">
                立即支付
              </button>
            </div>
          </div>
        </div>
      </div>


    </nuxt-link>
  </div>

</template>


<script setup lang="ts">
import type { BookingModel } from '~/server/models/booking';
const route = useRoute();
const router = useRouter();

//const LineID = route.params.id;
const LineID = '7asfda';

const data = ref<BookingModel[]>([]);
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/allBookingStatusByLineID/${LineID}`);
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