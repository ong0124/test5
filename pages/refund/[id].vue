<template>
      <header class="py-4 border-b bg-[url('/assets/images/headerTest3.png')] bg-cover bg-center flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl capitalize text-white">
        {{ $t('RefundPage.title') }}
      </h1>
    </header>

    <div class="px-6 pt-4 pb-4">
      <div class="bg-white p-4 rounded-lg flex flex-col mb-4">
        <div class="flex items-center border-b-2 pb-1 border-dashed">
          <Icon name="ri:information-fill" class="w-6 h-6 text-lwm-100 mr-1"></Icon>
          <p class=" text-lwm-500 text-lg">{{ $t('confirmationPage.tripInfo') }}</p>
        </div>

        <div class="border-b-2 border-dashed
         py-2 px-4 flex flex-col items-center">
          <div class="flex items-center space-x-3 text-lg font-medium mb-2">
            <p>{{ departure_loc }}</p>
            <Icon name="material-symbols-arrow-right-alt" class="w-6 h-6 text-gray-500"></Icon>
            <p>{{ destination_loc }}</p>
          </div>

          <div class="flex items-center space-x-4 text-sm font-medium text-gray-600">
            <p>{{ formatDate(form.shuttle_date) }}</p>
            <p>{{ form.shuttle_time }}</p>
          </div>
        </div>

        <div v-if="form.trip_type === 'roundTrip'"class="border-b-2 border-dashed
         py-2 px-4 flex flex-col items-center">
          <div class="flex items-center space-x-3 text-lg font-medium mb-2">
            <p>{{ return_departure }}</p>
            <Icon name="material-symbols-arrow-right-alt" class="w-6 h-6 text-gray-500"></Icon>
            <p>{{ return_destination }}</p>
          </div>

          <div class="flex items-center space-x-4 text-sm font-medium text-gray-600">
            <p>{{ formatDate(form.return_shuttle_date) }}</p>
            <p>{{ form.return_shuttle_time }}</p>
          </div>
        </div>

      
        <div class="flex mt-2">
          <p class="text-gray-400 mr-2">{{ $t('Booking.flightNumber') }} :  </p>
          <p>MF1544</p>
        </div>
        
        <div class="flex mt-1">
            <p class="text-gray-400">{{ $t('Booking.adultTicket') }}</p>
            <p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">{{ form.adult_num }}</p>
            <p class="text-gray-400">{{ $t('Booking.childTicket') }}</p>
            <p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">{{ form.child_num }}</p>
        </div>
        <div class="flex py-2">
          <p class="mr-2 text-gray-400">{{ $t('RefundPage.paid')}} : </p>
          <p class="mr-2">NT$</p>
          <p class="text-lwm-50 font-bold">{{ $t('confirmationPage.amount') }}</p>
        </div>
        <div class="flex">
          <p class="text-gray-400 mr-2">{{ $t('Booking.contact') }} : </p>
          <p>{{ form.contact_name }}</p>
        </div>
        <div class="flex py-2">
          <label class="self-center pr-2 text-gray-400">{{ $t('RefundPage.refundType') }} : </label>
          <select 
            v-model="refundReason" 
            class="w-4/6 h-fit border rounded-lg px-3 py-2 focus:ring-lwm-100"
          >
            <option value="refundReason1">{{ $t('RefundPage.changeOfPlans') }}</option>
            <option value="refundReason2">{{ $t('RefundPage.tripCancellationOrAdjustment') }}</option>
            <option value="refundReason3">{{ $t('RefundPage.bookingError') }}</option>
            <option value="refundReason4">{{ $t('RefundPage.flightOrFerryIssue') }}</option>
            <option value="refundReason5">{{ $t('RefundPage.systemError') }}</option>
            <option value="refundReason6">{{ $t('RefundPage.other') }}</option>
          </select>
        </div>
        <div class="flex justify-end pt-4">
            <button @click="CreateRefund" class="bg-lwm-400 text-white w-2/6 py-2 rounded flex justify-center">{{ $t('RefundPage.applyRefund') }}</button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { BookingModel } from "~/server/models/booking";
import dayjs from 'dayjs';
const route = useRoute();
const router = useRouter();

const id = route.params.id;
const { t } = useI18n();
const refundReason = ref('');

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
  shuttle_date: dayjs(),
  shuttle_time: '',
  return_shuttle_date: dayjs() , 
  return_shuttle_time: '', 
});  
const departure_loc = computed(() => t(form.departure_loc as string|| 'defaultKey'));
const destination_loc = computed(() => t(form.destination_loc as string|| 'defaultKey'));
const return_departure = computed(() => t(form.return_departure as string|| 'defaultKey'));
const return_destination = computed(() => t(form.return_destination as string|| 'defaultKey'));


const fetchData = async () => {
  try {
    const result = await $fetch(`/api/FindBookingDetailById/${id}`);
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


const formatDate = (date: dayjs.Dayjs | string | null) => {
  return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};


const formRefund = computed(() => ({
  booking_id: id,
  LineID: form.LineID,
  reason: refundReason.value,
}));

const CreateRefund = async () => {
  if (!refundReason.value) {
    alert(t('alertMessage11'));
    return
  }

  try {
    const result  = await useFetch(`/api/PostRefund/${id}`, {
      method: 'POST',
      body: formRefund.value
    });
    if(result.data.value?.success){
      alert(t('alertMessage9'))
      router.push('/');
    }else {
    console.log("checkRefund" + JSON.stringify(formRefund))
    alert(t('alertMessage10'));
  }
  } catch (error) {
    console.error('Refund request failed:', error);
    alert('Failed to apply for a refund. Please try again.');
  }
};
onMounted(fetchData); 
</script>