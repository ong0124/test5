<template>
  <header class="py-4 border-b bg-[url('/assets/images/headerTest3.png')] bg-cover bg-center flex items-center">
    <div>
      <BackBtn />
    </div>
    <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">
      {{ $t('ReschedulePage.title') }}
    </h1>
  </header>

  <div class="flex bg-orange-100 pl-4 items-center h-8 overflow-hidden relative text-red-500">
        <Icon name="gg:danger" class="bg-red-500 w-8 h-5 flex-shrink-0" /> 
        {{ $t('announcementMessage')}}&nbsp;{{':'}}&nbsp;
        <div class="marquee-container flex-1 overflow-hidden">
          <div class="whitespace-nowrap animate-marquee ">
            <span class="px-4">{{ $t('ReschedulePage.message') }}</span>
          </div>
        </div>
    </div>

  <div class="px-6 pt-4">
    <div class="bg-amber-50 p-4 rounded-lg flex flex-col border-b-2 border-dashed">
      <div class="border-l-4 border-orange-300 text-gray-500">
          <p class="mx-2 text-lg font-bold">{{ $t('ReschedulePage.originalSchedule') }}</p>
      </div>
      <div class="text-gray-500 ">
        <div class="flex">
              <div class="flex-1 self-center"><p class="text-end">{{ Translate_loc(form.departure_loc) }}</p></div>
              <div class="flex-1 flex-col text-center">
                <div class="border-b-2 border-dashed mx-4 border-lwm-400 text-sm">
                  <p>{{ formatDate(form.shuttle_date) }}</p>
                </div>
                <div class="text-sm">
                  <p>{{ form.shuttle_time }}</p>
                </div>
              </div>
              <div class="flex-1 self-center"><p>{{ Translate_loc(form.destination_loc) }}</p></div>
        </div>
          <div class="grid grid-cols-2 pt-4">
            <div class="flex-col text-start ml-14 ">
              <p>{{ showFlightOrFerryTitle }} </p>
              <p>{{ $t('Booking.contact') }} </p>
              <p>{{ $t('Booking.phone') }} </p>
                <p>
                  {{ $t('Booking.adultTicket') }}
                </p>
                <p >
                  {{ $t('Booking.childTicket1') }} 
                </p>
            </div>
            <div class="flex-col text-start ml-5">
              <p>  {{ showFlightOrFerry }}</p>
              <p>  {{ form.contact_name }}</p>
              <p> {{ form.contact_phone }}</p>
              <p> {{ form.adult_num }}</p>
              <p> {{ form.child_num }}</p>
            </div>
          </div>
      </div>
    </div>

    <div v-if="form.trip_type === 'roundTrip'">
      <div class="bg-amber-50 p-4 rounded-lg flex flex-col border-b-2 ">
        <div class="border-l-4 border-orange-300 text-gray-500">
          <p class="mx-2 text-lg font-bold">{{ $t('Booking.return') }}</p>
        </div>
        <div class="text-gray-500">
          <div class="flex">
                <div class="flex-1 self-center"><p class="text-end">{{ Translate_loc(form.return_departure) }}</p></div>
                <div class="flex-1 flex-col text-center">
                  <div class="border-b-2 border-dashed mx-4 border-lwm-400 text-sm">
                    <p>{{ formatDate(form.return_shuttle_date) }}</p>
                  </div>
                  <div class="text-sm">
                    <p>{{ form.return_shuttle_time }}</p>
                  </div>
                </div>
                <div class="flex-1 self-center"><p>{{ Translate_loc(form.return_destination) }}</p></div>
          </div>
            <div class="grid grid-cols-2 pt-4 ">
              <div class="flex-col text-start ml-14 ">
                <p>{{ ReturnshowFlightOrFerryTitle }} </p>
                <p>{{ $t('Booking.contact') }} </p>
                <p>{{ $t('Booking.phone') }} </p>
                  <p>
                    {{ $t('Booking.adultTicket') }}
                  </p>
                  <p >
                    {{ $t('Booking.childTicket1') }} 
                  </p>
              </div>
              <div class="flex-col text-start ml-5">
                <p>  {{ ReturnshowFlightOrFerry }}</p>
                <p>  {{ form.contact_name }}</p>
                <p> {{ form.contact_phone }}</p>
                <p> {{ form.adult_num }}</p>
                <p> {{ form.child_num }}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  </div>

  <div class="px-6 pb-24">
    <div class="bg-white shadow-md rounded-b-xl overflow-hidden  pt-5 pb-2 px-6 space-y-3">
      <!-- 标题 -->
      <h2 class="text-xl font-semibold text-gray-800">
        {{ $t('ReschedulePage.newSchedule') }}
      </h2>

      <!-- 出发地与目的地 -->
      <div class="flex items-center justify-between bg-gray-100 p-3 rounded-lg px-8">
        <p class="font-medium text-gray-700">
          <span v-if="isSwapped" class=" text-blue-500">{{ Translate_loc(form.destination_loc) }}</span>
          <span v-else>{{ Translate_loc(form.departure_loc) }}</span>
        </p>
        <Icon name="fa6-solid:rotate" class="mx-4 bg-lwm-400 text-white p-2 rounded-full w-6 h-6 cursor-pointer transition-transform duration-500" :class="{'rotate-180': isSwapped}" @click="swapText" />
        <p class="font-medium text-gray-700">
          <span v-if="isSwapped" class=" text-blue-500">{{ Translate_loc(form.departure_loc) }}</span>
          <span v-else>{{ Translate_loc(form.destination_loc) }}</span>
        </p>
      </div>

      <!-- 往返票 -->
      <template v-if="form.trip_type === 'roundTrip'">
        <div class="border-l-4 border-lwm-300 items-center"><span class="text-gray-500 font-semibold ml-1">{{ $t('Booking.return') }} : </span></div>

        <div class="flex items-center justify-between bg-gray-100 p-3 rounded-lg px-8">
          <p class="font-medium text-gray-700">
            
            <span v-if="isSwapped" class=" text-blue-500">{{ Translate_loc(form.return_destination) }}</span>
            <span v-else>{{ Translate_loc(form.return_departure) }}</span>
          </p>

          <Icon name="fa6-solid:rotate" 
          class="mx-4 bg-lwm-400 text-white p-2 rounded-full w-6 h-6 cursor-pointer transition-transform duration-500" 
          :class="{'rotate-180': isSwapped}"
          @click="swapText" />

          <p class="font-medium text-gray-700">
            <span v-if="isSwapped" class=" text-blue-500">{{ Translate_loc(form.return_departure) }}</span>
            <span v-else>{{ Translate_loc(form.return_destination) }}</span>
          </p>
        </div>
      </template>

      <!-- 出发时间选择 -->
      <div class="flex items-center">
            <Icon name="lucide:tickets" class="w-5 h-5 text-lwm-400 mr-1"></Icon>
            <p class="text-gray-600 font-semibold mr-3">
              {{ $t('Booking.flightTime') }}
            </p>
            <a-config-provider :locale="antLocale">
              <div class="flex space-x-4">
                <a-time-picker class="border-gray-300 rounded-lg"
                  :minute-step="isSwapped ? 5 : 30"
                  value-format="HH:mm"
                  format="HH:mm"
                  :disabled-hours="disabledHours"
                  :disabled-minutes="disabledMinutes"
                  :hide-disabled-options="true"
                  :show-now="false"
                  v-model:value="shuttle_time"
                />
              </div>
            </a-config-provider>
        </div>
      <div class="space-y-2">
        <div class="flex items-center">
            <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-400 mr-1"></Icon>
            <p class="text-gray-600 font-semibold">
              {{ $t('ReschedulePage.departureTime') }}
            </p>
        </div>
        <a-config-provider :locale="antLocale">
          <div class="flex space-x-4">
            <a-space direction="vertical" :size="12">
              <a-date-picker class="border-gray-300 rounded-lg" :show-today="false" :disabled-date="disabledDate" v-model:value="shuttle_date" />
            </a-space>
            <a-time-picker class="border-gray-300 rounded-lg"
              :minute-step="isSwapped ? 5 : 30"
              value-format="HH:mm"
              format="HH:mm"
              :disabled-hours="disabledHours"
              :disabled-minutes="disabledMinutes"
              :hide-disabled-options="true"
              :show-now="false"
              v-model:value="shuttle_time"
            />
          </div>
        </a-config-provider>  
      </div>
      <!-- 返程时间 -->
      <template v-if="form.trip_type === 'roundTrip'">
        <div class="space-y-2">
          <div class="flex items-center">
            <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-50 mr-1"></Icon>
            <p class="text-gray-600 font-semibold">
              {{ $t('ReschedulePage.returnDepartureTime') }}
            </p>
          </div>
          <a-config-provider :locale="antLocale">
            <div class="flex space-x-4">
              <a-space direction="vertical" :size="12">
                <a-date-picker class="border-gray-300 rounded-lg" :show-today="false" :disabled-date="disabledDate" v-model:value="Return_shuttle_date" />
              </a-space>
              <a-time-picker class="border-gray-300 rounded-lg"
                :minute-step="isSwapped ? 5 : 30"
                value-format="HH:mm"
                format="HH:mm"
                :disabled-hours="disabledHours"
                :disabled-minutes="disabledMinutes"
                :hide-disabled-options="true"
                :show-now="false"
                v-model:value="Return_shuttle_time"
              />
            </div>
          </a-config-provider>
        </div>
      </template>

      <!-- 联系方式 -->
      <div class="space-y-4">
        <div class="flex items-center space-x-4 ml-4">
          <p class="text-gray-600 font-medium"><span class="text-2xl text-red-500">*</span>{{ $t('Booking.contact') }}</p>
          <input type="text"
            :placeholder="form.contact_name"
            v-model="contact"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm"
          />
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-gray-600 font-medium"><span class="text-2xl text-red-500">*</span>{{ $t('Booking.phone') }}</p>
          <input type="text"
            :placeholder="form.contact_phone"
            v-model="phone"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm"
          />
        </div>
      </div>
      <!-- 按钮 -->
      <div class="flex bg-white pt-1 rounded-b-lg mb-2">
        <!-- 确认修改 -->
        <div class="flex-1 border-r-2 border-t-2 rounded flex justify-center">
          <button @click="onSubmit"
            class="text-blue-400 py-2 rounded hover:text-blue-500 transition">
            {{ $t('ReschedulePage.confirmReschedule') }}
          </button>
        </div>
        <!-- 取消订单 -->
        <div class="flex-1 border-t-2 rounded flex justify-center">
          <button @click="()=>onDelete(id)"
            class="text-red-500 py-2 rounded hover:text-red-600 transition">
            {{ $t('cancelOrder') }}
          </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/en';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import zhTW from 'ant-design-vue/es/locale/zh_TW';
import enUS from 'ant-design-vue/es/locale/en_US';
import type { BookingModel } from '~/server/models/booking';
import { FormItemRest } from 'ant-design-vue';

    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const id = route.params.id;
   // const pricePerTicket = ref(150);
    const phone = ref(''); // 聯繫電話
    const contact = ref('');
    const shuttle_date = ref<Dayjs>();  
    const shuttle_time = ref<string>('')
    const Return_shuttle_date = ref<Dayjs>();  
    const Return_shuttle_time = ref<string>('')
    const ferry_time = ref<string>('');
    const flight_time = ref<string>('')
    const totalPriceNow = computed(() => {
      // return counts.adult  * pricePerTicket.value;
      const adultCount = counts.value.adult;
      // 计算前两个成人票价为 150，后续成人票价为 100
      return (Math.min(adultCount, 2) * 150) + Math.max(adultCount - 2, 0) * 100;
    });
    
    const totalPriceFinal = computed(() => {
      return totalPriceNow.value -Number(form.totalprice);
    });
    
    const { locale } = useI18n();
    const isSwapped = ref(false);
    const swapText = () => {
      isSwapped.value = !isSwapped.value;
    };
    const flightNumber = ref('');
    const ferryTime = ref<string >('');
    const antLocales = {
      'zh-CN': zhCN,
      'zh-TW': zhTW,
      'en-US': enUS,
    };
    
    const antLocale = computed(() => antLocales[locale.value] || zhTW);
    const disabledDate = (current: Dayjs): boolean => {
      return current && current.isBefore(dayjs().add(1, 'day').startOf('day'))
    };
    
    const disabledHours = () => {
      // 只允许 8 到 17 点
      return Array.from({ length: 24 }, (_, i) => i).filter(hour => hour < 8 || hour > 18);
    };
    
    const disabledMinutes = (selectedHour: number | null) => {
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute < 30); // 8:30 之前禁用
      }
      if (selectedHour === 18) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute >= 1); // 17:30 之后禁用
      }
      return [];
    };
    
    const disabledHoursF = () => {
      // 只允许 8 到 17 点
      const ferryTimeHour = dayjs(ferryTime.value, 'HH:mm').hour();
      return Array.from({ length: 24 }, (_, i) => i).filter(hour => hour < ferryTimeHour || hour > 18);
    };
    
    const disabledMinutesF = (selectedHour: number | null) => {
      const ferryTimeMinute = dayjs(ferryTime.value, 'HH:mm').minute();
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute < 30); // 8:30 之前禁用
      }
      if (selectedHour === 19) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute >= 1); // 17:30 之后禁用
      }
      return Array.from({ length: 60 }, (_, i) => i)
      .filter(minute => minute < ferryTimeMinute);
    };
    
    
    const swappedDeparture = computed(() =>
    isSwapped.value ? form.destination_loc : form.departure_loc
    );
    const swappedDestination = computed(() =>
    isSwapped.value ? form.departure_loc : form.destination_loc
    );
    const swappedReturnDeparture = computed(() =>
    isSwapped.value ? form.return_destination : form.return_departure
    );
    const swappedReturnDestination = computed(() =>
    isSwapped.value ? form.return_departure : form.return_destination
    );

  const onDelete = async (id: string | string[]) => {
    try {
      await $fetch('/api/DeleteBookingById/' + id, {
        method: 'DELETE'
      });
      
      alert(t('alertMessage5'))
      router.push('/'); 
    } catch {
      alert(t('alertMessage6'));
    }
  };

const onSubmit = async () => {
  try {
    const body={
    departure_loc: swappedDeparture.value,
    destination_loc: swappedDestination.value,
    return_departure: swappedReturnDeparture.value,
    return_destination: swappedReturnDestination.value,
    shuttle_date: shuttle_date.value ? shuttle_date.value.format("YYYY-MM-DD") : form.shuttle_date,
    shuttle_time: shuttle_time.value || form.shuttle_time,
    return_shuttle_date: Return_shuttle_date.value ? Return_shuttle_date.value.format("YYYY-MM-DD") : form.return_shuttle_date, 
    return_shuttle_time: Return_shuttle_time.value ||form.return_shuttle_time, 
    ferry_time:ferry_time.value || form.ferry_time,
    flight_time:flight_time.value || form.flight_time,
    adult_num: counts.value.adult || form.adult_num,
    child_num:counts.value.child ||form.child_num,
    contact_phone: phone.value ||form.contact_phone,
    contact_name: contact.value || form.contact_name,
    totalprice: totalPriceNow.value || form.totalprice
  };
  await $fetch('/api/detailsUpdate/' + id, {
    method: 'PUT',
    body
  }
);
alert(t('alertMessage7'))
router.push('/');
} catch(error) {
    console.error("Update failed:", error);
    alert(t('alertMessage8'));
  }
};

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

const fetchData = async () => {
  try {
    const result = await $fetch(`/api/reschedulePage/details/${id}`);
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
  counts.value.adult = Number(form.adult_num) || 0;
  counts.value.child = Number(form.child_num) || 0;
  console.log('form:', form); // 將 API 返回的數據賦值給 form
}catch (err) {
  console.error('Error fetching booking:', err);
  alert('Get blog detail error');
}
};

const counts = ref({
  adult: 0,
  child: 0
});

const formatDate = (date: dayjs.Dayjs | string | null) => {
  return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};

const showFlightOrFerry = computed(()=>
form.departure_loc === "Booking.pier" ? form.flight_time : form.ferry_time
);

const showFlightOrFerryTitle = computed(()=>
form.departure_loc === "Booking.pier" ? t('Booking.flightTime') : t('Booking.ferryTime')
);

  const ReturnshowFlightOrFerry = computed(()=>
  form.return_departure === "Booking.pier" ? form.flight_time : form.ferry_time
  );

  const ReturnshowFlightOrFerryTitle = computed(()=>
  form.return_departure === "Booking.pier" ? t('Booking.flightTime') : t('Booking.ferryTime')
  );

  const increment = (type: "adult" | "child") => {
  if (type === "child") {
    counts.value.child += 1;
  } else if (type === "adult") {
    counts.value.adult += 1;
  }
};

const decrement = (type: "adult" | "child") => {
  if (type === "child") {
    counts.value.child -= 1;
  } else if (type === "adult") {
    counts.value.adult -= 1;
  }
};

onMounted(fetchData); 
</script>
