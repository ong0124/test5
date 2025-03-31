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
        v-for="index in 1"
        :key="index"
        class="bg-white p-3 mx-2 my-4 rounded-lg shadow-sm"
      >
        <div class="flex flex-col">
          <div class="flex items-center justify-between pb-2 border-b border-lwm-400">
            <div class="flex items-center space-x-2">
              <Icon name="healthicons:travel-alt" class="w-6 h-6 text-lwm-400"></Icon>
              <p class="font-medium">{{ $t('bookingStatus.pier') }}</p>
              <Icon name="material-symbols-arrow-right-alt" class="w-5 h-5 text-gray-500"></Icon>
              <p class="font-medium">{{ $t('bookingStatus.airport') }}</p>
            </div>
            
            <div class="flex justify-end space-x-2">
              <div class="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                <!-- <Icon name="ri:information-fill" class="w-4 h-4 text-lwm-100 mr-1"></Icon> -->
                <span>单程</span>
              </div>
              <p class="flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-sm">
                <!-- <Icon name="charm:clock" class="w-5 h-5 mr-1"></Icon> -->
                {{ $t('bookingStatus.notTraveled') }}
              </p>
            </div>
          </div>

          <div class="mt-3 text-sm text-gray-700">
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.arrivalAtAirportTime') }} :</p>
              <p>2025-03-02 12:00</p>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.flightNumber') }} :</p>
              <p>AX2277</p>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.ferryTime') }} :</p>
              <p>13:30</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-2">
            <div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">
              <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
              <p>{{ $t('Booking.adultTicket') }}</p>
              <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">1</p>
            </div>
            <div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">
              <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
              <p>{{ $t('Booking.childTicket1') }}</p>
              <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p>
            </div>
          </div>

          <div class="mt-3 flex justify-between items-center border-t border-gray-300 pt-2">
            <p class="text-gray-500 text-xs">下单时间：2025.01.01 15:30</p>
          </div>

          <div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center">
            <div class="flex items-center font-medium">
              <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-50 mr-1"></Icon>
              <p>{{ $t('Booking.shuttleBusTime') }} :</p>
            </div>
            <p class="text-gray-700 font-semibold">2025-01-04 14:30</p>
          </div>



          <div class="mt-4 flex justify-between">
              <nuxt-link to="/orderDetail" class="px-3 py-1 text-gray-500 bg-gray-100 text-sm rounded-full">
                {{ $t('orderDetail.title') }}
              </nuxt-link>
              <div class="flex space-x-2">
                <nuxt-link to="/reschedulePage" class="px-3 py-1 text-gray-600 text-sm border border-gray-600 rounded-md">
                  {{ $t('applyRefund') }}
                </nuxt-link>
                <nuxt-link to="/reschedulePage" class="px-3 py-1 text-gray-600 text-sm border border-gray-600 rounded-md">
                  {{ $t('forReschedule') }}
                </nuxt-link>
              </div>
            </div>
        </div>
      </div>

      <div 
        v-for="index in 1" 
        :key="index" 
        class="bg-white p-3 mx-2 my-4 rounded-lg shadow-sm"
        >
        <div class="flex flex-col">

          <div class="flex items-center justify-between pb-2 border-b border-lwm-400">
            <div class="flex items-center space-x-2">
              <Icon name="healthicons:travel-alt" class="w-6 h-6 text-lwm-400"></Icon>
              <p class="font-medium">{{ $t('bookingStatus.pier') }}</p>
              <Icon name="pepicons-pop:repeat" class="w-5 h-5 text-gray-500"></Icon>
              <p class="font-medium">{{ $t('bookingStatus.airport') }}</p>
            </div>
            
            <div class="flex justify-end space-x-2">
              <div class="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                <!-- <Icon name="ri:information-fill" class="w-4 h-4 text-lwm-100 mr-1"></Icon> -->
                <span>往返</span>
              </div>
              <p class="flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-sm">
                <!-- <Icon name="charm:clock" class="w-5 h-5 mr-1"></Icon> -->
                {{ $t('bookingStatus.notTraveled') }}
              </p>
            </div>
          </div>

          <div class="mt-3 text-gray-700">
            <div class="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm">
              <Icon name="ri:information-fill" class="w-4 h-4 text-lwm-100 mr-1"></Icon>
              <span>去程</span>
            </div>
            <div class="flex justify-between mt-1 text-sm">
              <p class="font-medium">{{ $t('Booking.arrivalAtAirportTime') }} :</p>
              <p>2025-03-02 12:00</p>
            </div>
            <div class="flex justify-between mt-1 text-sm">
              <p class="font-medium">{{ $t('Booking.flightNumber') }} :</p>
              <p>AX2277</p>
            </div>
            <div class="flex justify-between mt-1 text-sm">
              <p class="font-medium">{{ $t('Booking.ferryTime') }} :</p>
              <p>13:30</p>
            </div>
            
            <div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center">
              <div class="flex items-center font-medium">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-50 mr-1"></Icon>
                <p>{{ $t('Booking.shuttleBusTime') }} :</p>
              </div>
              <p class="text-gray-700 font-semibold">2025-01-04 14:30</p>
            </div>
          </div>

          <DashLine/>

          <div class="mt-1 text-sm text-gray-700">
            <div class="flex items-center text-sm text-gray-600 bg-gray-100  px-3 py-1 rounded-md">
              <Icon name="ri:information-fill" class="w-4 h-4 text-lwm-100 mr-1"></Icon>
              <span>返程</span>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.arrivalAtAirportTime') }} :</p>
              <p>2025-03-14 14:00</p>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.flightNumber') }} :</p>
              <p>OAASR</p>
            </div>
            <div class="flex justify-between mt-1">
              <p class="font-medium">{{ $t('Booking.ferryTime') }} :</p>
              <p>19:30</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-2">
            <div class="flex items-center bg-orange-50 rounded-sm px-3 py-1 text-sm">
              <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
              <p>{{ $t('Booking.adultTicket') }}</p>
              <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">1</p>
            </div>
            <div class="flex items-center bg-amber-50 rounded-sm px-3 py-1 text-sm">
              <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
              <p>{{ $t('Booking.childTicket1') }}</p>
              <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p>
            </div>
          </div>

          <div class="mt-3 flex justify-between items-center border-t border-gray-300 pt-2">
            <p class="text-gray-500 text-xs">下单时间：2025.01.01 15:30</p>
          </div>

          <div class="mt-1 p-2 text-md flex bg-gray-100 rounded-md justify-between items-center">
              <div class="flex items-center font-medium">
                <Icon name="mdi:bus-clock" class="w-5 h-5 text-lwm-50 mr-1"></Icon>
                <p>{{ $t('Booking.shuttleBusTime') }} :</p>
              </div>
              <p class="text-gray-700 font-semibold">2025-01-04 14:30</p>
          </div>

          <div class="mt-4 flex justify-between">
            <nuxt-link to="/orderDetail" class="px-3 py-1 text-gray-500 bg-gray-100 text-sm rounded-full">
              {{ $t('orderDetail.title') }}
            </nuxt-link>
            <div class="flex space-x-2">
              <nuxt-link to="/reschedulePage" class="px-3 py-1 text-gray-600 text-sm border border-gray-600 rounded-md">
                {{ $t('applyRefund') }}
              </nuxt-link>
              <nuxt-link to="/reschedulePage" class="px-3 py-1 text-gray-600 text-sm border border-gray-600 rounded-md">
                {{ $t('forReschedule') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  </template>
  