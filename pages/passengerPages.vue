<template>
    <header class="py-4 border-b bg-[url('/assets/images/headerTest3.png')] bg-cover bg-center flex items-center">
      <div class="flex">
        <BackBtn/>
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-2xl text-white capitalize">
        {{ $t('profileSettings.passenger') }}
      </h1>
    </header>
  
    <div>  
      <div class="px-5 py-4">
        <p class="text-xl pb-2 flex items-center space-x-2">
          <Icon name="fluent:person-square-add-20-filled" class="bg-orange-500 w-7 h-7" />
          &nbsp;
          {{ $t('PassengerPage.passengers') }}
        </p>

        <div class="relative bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ease-in-out">
          <div class="flex flex-col w-full pr-1">
            <div class="flex justify-start items-center mb-2 border-b border-b-lwm-50 pb-2">
              <div class="bg-orange-100 px-3 m-1 text-orange-500 text-sm font-medium">
                <p>{{ $t('PassengerPage.local') }}</p>
              </div>
              <div class="bg-amber-100 px-3 m-1 text-amber-700 text-sm font-medium">
                <p>{{ $t('PassengerPage.passengers') }}</p>
              </div>
              <div class="bg-green-100 px-3 m-1 text-gray-900 text-sm font-medium">
                <p>成人</p>
              </div>
              
              
              <div class="flex ml-auto">
                <Icon name="uil:setting" class="w-6 h-6 mr-1 bg-gray-400"></Icon>
              </div>
            </div>

            <div class="text-sm">
              <div class="flex mb-2 justify-start items-center">
                <Icon name="solar:pin-circle-bold" class="w-6 h-6 mr-1 bg-lwm-50"></Icon>&nbsp;
                <p class="flex text-lg text-gray-600 ">
                  {{ $t('PassengerPage.passengers1') }}
                </p>
              </div>
              <div class="text-gray-600">
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.name') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700">王**</p>
                </div>
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.birthday') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700">2002年08月15日</p>
                </div>
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.IdNumber') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700">XXXXXX</p>
                </div>
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.phoneNumber') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700">12XXXXXXXX8</p>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute top-1/2 right-4 transform -translate-y-2/2 flex justify-center items-center bg-gray-100 rounded-full mr-2">
            <img src="/assets/icons/GreaterThan.png" alt="More" class="w-8 h-8"/>
          </div>
        </div>

        <div class="relative bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ease-in-out">
          <div class="flex flex-col w-full pr-1">
            <div class="flex justify-start items-center mb-2 border-b border-b-lwm-50 pb-2">
              <div class="bg-yellow-100 px-3 m-1 text-yellow-600 text-sm font-medium">
                <p>{{ $t('PassengerPage.non-Local') }}</p>
              </div>
              <div class="bg-amber-100 px-3 m-1 text-amber-700 text-sm font-medium">
                <p>{{ $t('PassengerPage.passengers') }}</p>
              </div>
              <div class="bg-green-100 px-3 m-1 text-gray-900 text-sm font-medium">
                <p>成人</p>
              </div>
              
              
              <div class="flex ml-auto">
                <Icon name="uil:setting" class="w-6 h-6 mr-1 bg-gray-400"></Icon>
              </div>
            </div>

            <div class="text-sm">
              <div class="flex mb-2 justify-start items-center">
                <Icon name="solar:pin-circle-outline" class="w-6 h-6 mr-1 bg-orange-300"></Icon>&nbsp;
                <p class="flex text-lg text-gray-600">
                  {{ $t('PassengerPage.passengers2') }}
                </p>
              </div>
              <div class="text-gray-600 ">
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.name') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700 ">李**</p>
                </div>
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.birthday') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700">2006年06月22日</p>
                </div>
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.IdNumber') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700">XXXXXX</p>
                </div>
                <div class="flex mb-1">
                  <p class="font-medium text-gray-500">{{ $t('PassengerPage.phoneNumber') }}&nbsp;:&nbsp;</p>
                  <p class="pl-2 font-light text-gray-700">11XXXXXXXX7</p>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute top-1/2 right-4 transform -translate-y-2/2 flex justify-center items-center bg-gray-100 rounded-full mr-2">
            <img src="/assets/icons/GreaterThan.png" alt="More" class="w-8 h-8"/>
          </div>
        </div>

        <!-- <div class="bg-white p-4 rounded-lg flex mb-4">
            <div class="flex text-normal pl-2 flex-1">
            <div class="flex flex-1 flex-col">
              <div class="flex flex-1">
                <div class="bg-red-400 py-1 px-2 text-white rounded-sm">
                 <p>{{ $t('PassengerPage.passengers2') }}</p>
                </div>
              </div>
              <div> 
              </div>
              <div class="pt-4 mx-4">
                <div class="flex">
                  <p class="font-bold">{{ $t('PassengerPage.passengers2') }}</p>
                  <div class="pl-2 rounded-lg">
                    <p class="text-xs bg-gray-300 px-2">{{ $t('PassengerPage.non-Local') }}</p>
                  </div>
                </div>
                <div class="text-gray-400">
                  <div class="flex">
                    <p>{{ $t('PassengerPage.IdNumber') }} : </p>
                    <p class="pl-2">-</p>
                  </div>
                  <div class="flex">
                    <p>{{ $t('PassengerPage.phoneNumber') }} : </p>
                    <p class="pl-2">-</p>
                  </div>
                  <div class="flex">
                    <p>{{ $t('PassengerPage.birthday') }} : </p>
                    <p class="pl-2">-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="place-content-center">
            <img src="/assets/icons/GreaterThan.png" alt="More" class="w-6 h-6"/>
          </div>
        </div> -->
        <!-- <div class="fixed inset-x-0 bottom-12 flex justify-center">
            <NuxtLink class="bg-green-400 text-white w-1/3 py-2 rounded flex justify-center">{{ $t('PassengerPage.addPassenger') }}</NuxtLink>
        </div> -->
      </div>
    </div>
  </template>


<script setup lang="ts">
import type { Users } from '~~/server/models/users';
const localPath = useLocalePath();
const route = useRoute();

// const form = reactive({
//   full_name: '',
//   password: '',
//   created_at: '',
//   LineID: '',
//   email: '',
//   birthday: '',
//   account_name: ''
// });

//   const fetchData = async () => {
//   try {
//     const result = (await $fetch('/api/GETDetailUsers' + route.params.id)) as any;
//     const data = result.data as Users;

//     form.full_name = data.full_name ?? '';
//     form.password = data.password ?? '';
//     form.created_at = data.created_at ?? '';
//     form.LineID = data.LineID ?? '';
//     form.email = data.email ?? '';
//     form.birthday = data.birthday ?? '';
//     form.account_name = data.account_name ?? '';


//   } catch {
//     alert('Get users detail error');
//   }
// };

// onMounted(fetchData);

</script>
