<template>
    <div class="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
        <div class="py-4 bg-green-500">
            <header class="flex items-center ">
                <BackBtn/>
                <h1 class="absolute left-1/2 transform -translate-x-1/2 text-lg capitalize text-white ">
                    {{ $t('paymentPage.title') }}
                </h1>
            </header>
        </div>

    <div class="flex-1 container mx-auto px-4 py-6 max-w-md">
        <div class="mb-8">
            <h2 class="text-lg font-medium text-gray-700 mb-4 flex items-center ml-2 space-x-2 leading-none">
                <Icon name="fluent:payment-16-filled" class="w-6 h-6 text-green-500"></Icon>
                <span class="align-middle">{{ $t('paymentPage.choose_method') }}</span>
            </h2>

            <div class="space-y-4">
                <button @click="selectPayment('LINE_PAY')" class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-green-400 active:border-green-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]">
                    <span class="text-gray-700 font-medium group-hover:text-green-600 group-active:text-green-700">LINE PAY</span>
                    <div class="flex items-center">
                        <div class="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-green-400 group-active:border-green-500">
                            <img src="/assets/images/LINEPayIcon.png" alt="LinePay Icon" class="w-full h-auto object-contain"/>
                        </div>
                        <Icon name="formkit:right" class="w-5 h-5 text-gray-400 group-hover:text-green-500 group-active:text-green-600 ml-2"></Icon>
                    </div>
                </button>

                <button @click="selectPayment('PayPal')" class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-sky-400 active:border-sky-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]">
                    <span class="text-gray-700 font-medium group-hover:text-sky-600 group-active:text-sky-700">PayPal</span>
                    <div class="flex items-center">
                        <div class="w-20 h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-sky-400 group-active:border-sky-500">
                            <img src="/assets/images/PayPalIcon.png" alt="PayPal Icon" class="w-full h-auto object-contain"/>
                        </div>
                        <Icon name="formkit:right" class="w-5 h-5 text-gray-400 group-hover:text-sky-500 group-active:text-sky-600 ml-2"></Icon>
                    </div>
                </button>

                <button @click="selectPayment('CreditCard')" class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-blue-400 active:border-blue-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]">
                    <span class="text-gray-700 font-medium group-hover:text-blue-600 group-active:text-blue-700">{{ $t('paymentPage.credit_card') }}</span>
                    <div class="flex items-center">
                        <div class="w-fit h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-blue-400 group-active:border-blue-500">
                            <img src="/assets/images/download.png" alt="Credit Card Icon" class="h-full w-auto object-contain"/>
                        </div>
                        <Icon name="formkit:right" class="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-active:text-blue-600 ml-2"></Icon>
                    </div>
                </button>

                <button @click="selectPayment('Cash')" class="payment-btn w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-gray-50 hover:border-blue-400 active:border-blue-500 shadow-sm hover:shadow-md active:shadow-lg transition-all duration-300 group active:scale-[0.98]">
                    <span class="text-gray-700 font-medium group-hover:text-blue-600 group-active:text-blue-700">{{ $t('paymentPage.Cash') }}</span>
                    <div class="flex items-center">
                        <div class="w-fit h-12 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-200 group-hover:border-blue-400 group-active:border-blue-500">
                            <img src="/assets/images/cash.png" alt="Credit Card Icon" class="h-full w-auto object-contain"/>
                        </div>
                        <Icon name="formkit:right" class="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-active:text-blue-600 ml-2"></Icon>
                    </div>
                </button>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-5 mb-8 border border-gray-100">
            <h3 class="text-md font-medium text-gray-700 mb-2 pb-2 flex items-center border-b">
                <Icon name="solar:clipboard-broken" class="w-5 h-5 text-green-500 mr-2"></Icon>
                {{ $t('paymentPage.OrderTotal') }}
            </h3>
            <div class="space-y-3">
                <div class="flex justify-between text-gray-600">
                    <span>{{ $t('paymentPage.OrderAmount') }}</span>
                    <span>NT$ {{ data?.totalprice }}</span>
                </div>
                <div class="flex justify-between text-gray-600">
                    <span>服务税</span>
                    <span>NT$ 0.00</span>
                </div>
                <div class="border-t border-gray-200 my-2"></div>
                <div class="flex justify-between font-semibold text-gray-600">
                    <span>{{ $t('paymentPage.total') }}</span>
                    <span class="text-green-600">NT$ {{ data?.totalprice }}</span>
                </div>
            </div>
        </div>
    </div>


    <div class="sticky bottom-12 bg-white py-4 px-6 shadow-lg border-t border-gray-100">
        <button 
             @click="pay"
            class="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg text-center shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
        >
            <Icon name="mdi:tick" class="w-5 h-5 text-white mr-2"></Icon>
            {{ $t('paymentPage.pay_button') }} (NT$ {{ data?.totalprice }})
        </button>
    </div>
</div>


</template>


<script setup lang="ts">
import type { BookingModel } from '~/server/models/booking';
const route = useRoute();
const router = useRouter()
import { useRouter } from 'vue-router'
const localPath = useLocalePath();
// const bookingId = 107;
// const LineID = 'U8dac240baa90713af3fc9941786bc6b6';
const bookingId = route.query.bookingid;
const LineID = route.query.LineID;
const data = ref<BookingModel | null>(null);
const selectedMethod = ref('')

const selectPayment = async (method: string) => {
  selectedMethod.value = method
  console.log('選擇的付款方式:', method)
};

const fetchData = async () => {
  try {
    const result = await $fetch(`/api/FindBookingDetailById/${bookingId}`);
    data.value = result.data as BookingModel;
    console.log('Booking:',data.value);
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};

onMounted(fetchData); 

const pay = async () => {
  //const paymentStatus = selectedMethod.value === 'Cash' ? '現金' : '已付款';
  try {
    const res = await $fetch('/api/POSTpayment', {
      method: 'POST',
      body: {
        booking_id: bookingId,
        payment_amount: data.value?.totalprice, 
        payment_method: selectedMethod.value,
        payment_status: selectedMethod.value === 'Cash' ? '現金' : '已付款',
        LineID: LineID
      }
    })

    console.log('付款成功:', res);
    // 跳转到登车点页面，带上 query 参数
    await router.push({ path: localPath('/boardingpoint') })

  } catch (err) {
    console.error('Create payment failed:', err)
    alert('付款提交失敗')
  }
}
</script>