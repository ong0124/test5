<template>
      <header class="py-4 border-b bg-[url('/assets/images/headerTest3.png')] bg-cover bg-center flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white font-bold capitalize">
        {{ $t('orderDetail.title') }}
      </h1>
      </header>

<div class="px-6 pt-4 ">
  <div class="bg-amber-50 py-4 px-2 rounded-t-xl relative overflow-hidden border-b border-gray-300 ">
    <div class="absolute top-2/2 left-2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
    <div class="absolute top-2/2 right-2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>

    <div class="flex items-center justify-between">
      <div class="flex-1 text-gray-600 text-lg text-end pr-6">
        <p>{{ departure_loc }}</p>
      </div>

      <div class="flex-2 text-center text-gray-600">
        <div class="border-b-2 border-dashed border-lwm-50 mx-2 pb-1 text-md font-medium">
          <p>{{ formatDate(form.shuttle_date) }}</p>
        </div>
        <div class="text-sm text-gray-600">
          <p>{{ form.shuttle_time }}</p>
        </div>
      </div>

      <div class="flex-1 text-gray-600 text-lg text-start pl-6">
        <p>{{ destination_loc }}</p>
      </div>
    </div>
  </div>
  <div v-if="form.trip_type === 'roundTrip'" 
  class="bg-amber-50 py-4 px-2 relative overflow-hidden border-b border-gray-500 ">
    <div class="flex items-center justify-between">
      <div class="flex-1 text-gray-600 text-lg text-end pr-6">
        <p>{{ return_departure }}</p>
      </div>

      <div class="flex-2 text-center text-gray-600">
        <div class="border-b-2 border-dashed border-lwm-50 mx-2 pb-1 text-md font-medium">
          <p>{{ formatDate(form.return_shuttle_date) }}</p>
        </div>
        <div class="text-sm text-gray-600">
          <p>{{ form.shuttle_time }}</p>
        </div>
      </div>

      <div class="flex-1 text-gray-600 text-lg text-start pl-6">
        <p>{{ return_destination }}</p>
      </div>
    </div>
  </div>
</div>

<div class="px-6">
  <div class="bg-white p-4 rounded-lg flex flex-col border-b-2 space-y-3 text-gray-500">
    
    <div class="text-md space-y-1 ">
      <p class="flex">{{ $t('Booking.contact') }}: {{ form.contact_name }}</p>
      <p>{{ $t('Booking.phone') }}: {{ form.contact_phone }}</p>
    </div>

    <div class="p-3 border border-lwm-50 rounded-xl space-y-2">
      <p class="font-bold">{{ $t('PassengerPage.passengers1') }}</p>
      <div class="flex gap-4">
        <div class="flex flex-col space-y-1">
          <p>{{ $t('orderDetail.name') }}</p>
          <p>{{ $t('orderDetail.nationality') }}</p>
          <p>{{ $t('PassengerPage.IdNumber') }}</p>
        </div>
        <div class="flex flex-col space-y-1">
          <p>X先生</p>
          <p class="bg-yellow-200 text-center px-2 rounded-md w-fit">{{ $t('PassengerPage.non-Local') }}</p>
          <p>6786XXXXX</p>
        </div>
      </div>
    </div>

    <div class="p-3 border border-lwm-50 rounded-xl space-y-2">
      <p class="font-bold">{{ $t('PassengerPage.passengers2') }}</p>
      <div class="flex gap-4">
        <div class="flex flex-col space-y-1">
          <p>{{ $t('orderDetail.name') }}</p>
          <p>{{ $t('orderDetail.nationality') }}</p>
          <p>{{ $t('PassengerPage.IdNumber') }}</p>
        </div>
        <div class="flex flex-col space-y-1">
          <p>X先生</p>
          <p class="bg-green-200 text-center px-2 rounded-md w-fit">{{ $t('PassengerPage.local') }}</p>
          <p>6786XXXXX</p>
        </div>
      </div>
    </div>

    <div class="pt-2 text-lwm-50 font-semibold">
      <p>{{ $t('orderDetail.status') }}: {{ $t('orderDetail.ticketIssued') }}</p>
    </div>
  </div>
</div>

<div class="px-6 pb-4 text-gray-500">
  <div class="bg-white p-4 rounded-lg flex flex-col space-y-2 text-sm">
    <p>{{ $t('orderDetail.orderNumber') }} : {{ bookingId }}</p>
    <div class="flex">
      <p class="mr-2">{{ $t('orderDetail.orderStatus') }} : </p>
      <p class="text-green-700"> {{ $t('orderDetail.paid') }}</p>
    </div>
    <div class="flex">
      <p class="mr-2">{{ $t('orderDetail.orderDate') }} : </p>
      <p> {{ $t('confirmationPage.dateTime') }}</p>
    </div>
    
    <div class="flex justify-end pt-1 px-2">
      <nuxt-link :to="`/refund/${bookingId}`" class="flex items-center gap-2 text-md border border-lwm-50 text-lwm-50 rounded-full px-4 py-1 hover:bg-lwm-50 hover:text-white transition">
        {{ $t('applyRefund') }}
        <Icon name="mingcute:right-fill" class="h-5 w-5"></Icon>
      </nuxt-link>
    </div>
  </div>
</div>

</template>




<script setup lang="ts">
import type { BookingModel } from '~/server/models/booking';
import { useRoute } from 'vue-router';


const route = useRoute();
const { t } = useI18n();

    const form = reactive({
        trip_type: '',
        LineID:'',
        adult_num: '',
        child_num: '',
        contact_phone: '',
        totalprice: '',
        contact_name: '',
        departure_loc: '',
        destination_loc: '',
        return_departure: '',
        return_destination: '',
        arrivalpoint_date: '', 
        arrivalpoint_time: '',
        flight_num: '',
        ferry_time: '',
        flight_time: '',
        shuttle_date: '',
        shuttle_time: '',
        return_shuttle_date: '' , 
        return_shuttle_time: '', 
    });  
    const departure_loc = computed(() => t(form.departure_loc as string|| 'defaultKey'));
    const destination_loc = computed(() => t(form.destination_loc as string|| 'defaultKey'));
    const return_departure = computed(() => t(form.return_departure as string|| 'defaultKey'));
    const return_destination = computed(() => t(form.return_destination as string|| 'defaultKey'));
 
const bookingId = route.query.bookingId;
console.log("Received bookingId:", bookingId);
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/FindBookingDetailById/${bookingId}`);
    const data = result.data as BookingModel;

      Object.assign(form, 
      {
        trip_type: data.trip_type,
        LineID: data.LineID,
        adult_num: data.adult_num,
        child_num: data.child_num,
        contact_phone: data.contact_phone,
        totalprice: data.totalprice,
        contact_name: data.contact_name,
        departure_loc: data.departure_loc,
        destination_loc: data.destination_loc,
        return_departure: data.return_departure,
        return_destination: data.return_destination,
        arrivalpoint_date: data.arrivalpoint_date, 
        arrivalpoint_time: data.arrivalpoint_time,
        flight_num: data.flight_num,
        ferry_time: data.ferry_time,
        flight_time: data.flight_time,
        shuttle_date: data.shuttle_date,
        shuttle_time: data.shuttle_time,
        return_shuttle_date: data.return_shuttle_date, 
        return_shuttle_time: data.return_shuttle_time, 
      }
    );
    console.log('form:', form); // 將 API 返回的數據賦值給 form
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};
onMounted(fetchData); 
</script>