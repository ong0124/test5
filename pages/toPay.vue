<template>
    <header class="py-4 border-b bg-[url('/assets/images/headerTest2.png')] bg-cover bg-center flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize">
        {{ $t('bookingStatus.toPay') }}
      </h1>
    </header>
  
    <div>
      <div class="flex bg-orange-100 pl-4 items-center h-8 overflow-hidden relative text-red-500">
        <Icon name="gg:danger" class="bg-red-500 w-8 h-5 flex-shrink-0" /> 
        {{ $t('announcementMessage')}}&nbsp;{{':'}}&nbsp;
        <div class="marquee-container flex-1 overflow-hidden">
          <div class="whitespace-nowrap animate-marquee ">
            <span class="px-4">{{ $t('bookingStatus.message1') }}</span>
          </div>
        </div>
      </div>
  
      <div class="p-2 bg-gray-100 pb-20">

      <!-- Card Container -->
      <div v-for="index in 1" :key="index" class="bg-white p-4 rounded-lg shadow-md space-y-3 mb-3">
        <!-- Row 1: Top Section (Checkbox, Route Info & Price) -->
        <div class="flex items-center justify-between border-b border-gray-200 pb-2">
          <!-- Left: Checkbox -->
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="checkbox" class="h-4 w-4 border-black rounded-full" />
            <label for="checkbox" class="text-md text-gray-700 font-bold border-l-4 border-yellow-400 pl-2">
              {{ $t('HomePage.oneWay') }}
            </label>
          </div>

          <!-- Center: Route Information -->
          <div class="flex-1 flex justify-center items-center text-md font-medium text-gray-600 ml-10">
            <p>{{ $t('bookingStatus.pier') }}</p>
            <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
            <p>{{ $t('bookingStatus.airport') }}</p>
          </div>
        </div>

        <!-- Row 2: Booking Details -->
        <div class="border-b border-gray-200 pb-2">
          <div class="text-gray-700 text-sm space-y-1">
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.contact') }}</p>
              <p class="pl-2">张三</p>
            </div>
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.phone') }}</p>
              <p class="pl-2">123-456-7890</p>
            </div>
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.flightNumber') }}</p>
              <p class="pl-2">MTXXX</p>
            </div>
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.arrivalAtAirportTime') }}</p>
              <p class="pl-2">2025-01-01 15:00</p>
            </div>
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.ferryTime') }}</p>
              <p class="pl-2">16:30</p>
            </div>
            <div class="flex justify-between items-center gap-2 mt-2">
                <div class="flex gap-2">
                  <div class="flex items-center bg-orange-50 rounded-sm px-2 py-1 text-xs">
                    <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
                    <p>{{ $t('Booking.adultTicket') }}</p>
                    <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">2</p>
                  </div>
                  <div class="flex items-center bg-amber-50 rounded-sm px-2 py-1 text-xs">
                    <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
                    <p>{{ $t('Booking.childTicket1') }}</p>
                    <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p>
                  </div>
                </div>
                <div class="text-md text-red-500 font-semibold">
                  <span class="font-normal text-gray-700">NT$ </span>300.00
                </div>
            </div>
          </div>
        </div>

        <!-- Row 3: Shuttle Bus Time (Now properly aligned in the row) -->
        <div class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md">
          <p class="font-medium text-gray-500">{{ $t('Booking.shuttleBusTime') }}</p>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:bus-clock" class="w-4 h-4 text-lwm-400"></Icon>
            <p class="text-gray-700 font-medium">2025-02-01 15:30</p>
          </div>
        </div>

        <!-- Row 4: Actions -->
        <div class="flex justify-between items-center text-sm">
          <!-- More Button -->
          <button class="text-gray-500 hover:text-gray-700">
            {{ '更多' }}
          </button>

          <!-- Action Buttons -->
          <div class="flex space-x-2">
            <button class="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-100">
              {{ '取消订单' }}
            </button>
            <button class="bg-lwm-100 text-white px-4 py-1 rounded-md hover:bg-lwm-200">
              {{ '确定支付' }}
            </button>
          </div>
        </div>
      </div>



      <div v-for="index in 1" :key="index" class="bg-white p-4 rounded-lg shadow-md space-y-3 mb-3">
        <!-- Row 1: Top Section (Checkbox, Route Info & Price) -->
        <div class="flex items-center justify-between border-b border-gray-200 pb-2">
          <!-- Left: Checkbox -->
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="checkbox1" class="h-4 w-4 border-black rounded-full" />
            <label for="checkbox1" class="text-md text-gray-700 font-bold border-l-4 border-yellow-400 pl-2">
              {{ $t('HomePage.roundTrip') }}: {{ $t('Booking.outward') }}
            </label>
          </div>

          <!-- Center: Route Information -->
          <div class="flex-1 flex justify-center items-center text-md font-medium text-gray-600">
            <p>{{ $t('bookingStatus.pier') }}</p>
            <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
            <p>{{ $t('bookingStatus.airport') }}</p>
          </div>

        </div>

        <!-- Row 2: Booking Details -->
        <div class="border-b border-gray-200 pb-2">
          <div class="text-gray-700 text-sm space-y-1">
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.contact') }}</p>
              <p class="pl-2">张三</p>
            </div>
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.phone') }}</p>
              <p class="pl-2">123-456-7890</p>
            </div>
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.arrivalPortTime') }}</p>
              <p class="pl-2">2025-01-01 15:30</p>
            </div>
            <div class="flex">
              <p class="w-24 font-medium">{{ $t('Booking.flightTime') }}</p>
              <p class="pl-2">15:00</p>
            </div>
          </div>
        </div>

        <!-- Row 3: Shuttle Bus Time -->
        <div class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md">
          <p class="font-medium text-gray-500">{{ $t('Booking.shuttleBusTime') }}</p>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:bus-clock" class="w-4 h-4 text-lwm-400"></Icon>
            <p class="text-gray-700 font-medium">2025-02-01 15:30</p>
          </div>
        </div>

        <!-- Round Trip Section (No Price) -->
        <div class="border-t border-gray-300 border-dashed pt-2">
          <!-- Row 1: Round Trip Header -->
          <div class="flex items-center justify-between border-b border-gray-200 pb-2">
            <div class="flex items-center space-x-2">
              <Icon name="pepicons-pop:repeat-circle-filled" class="h-5 w-5 bg-blue-600 rounded-full"></Icon>
              <label class="text-md text-gray-700 font-bold border-l-4 border-yellow-400 pl-2">
                {{ $t('HomePage.roundTrip') }}: {{ $t('Booking.return') }}
              </label>
            </div>

            <!-- Center: Route Information -->
            <div class="flex-1 flex justify-center items-center text-md font-medium text-gray-600">
              <p>{{ $t('bookingStatus.airport') }}</p>
              <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
              <p>{{ $t('bookingStatus.pier') }}</p>
            </div>
          </div>

          <!-- Row 2: Booking Details -->
          <div class="border-b border-gray-200 pb-2">
            <div class="text-gray-700 text-sm space-y-1">
              <div class="flex">
                <p class="w-24 font-medium">{{ $t('Booking.flightNumber') }}</p>
                <p class="pl-2">MTXXX</p>
              </div>
              <div class="flex">
                <p class="w-24 font-medium">{{ $t('Booking.arrivalAtAirportTime') }}</p>
                <p class="pl-2">2025-01-01 15:30</p>
              </div>
              <div class="flex">
                <p class="w-24 font-medium">{{ $t('Booking.ferryTime') }}</p>
                <p class="pl-2">15:00</p>
              </div>
              <div class="flex justify-between items-center gap-2 mt-2">
                <div class="flex gap-2">
                  <div class="flex items-center bg-orange-50 rounded-sm px-2 py-1 text-xs">
                    <Icon name="mdi:account" class="w-5 h-5 text-orange-500 mr-1"></Icon>
                    <p>{{ $t('Booking.adultTicket') }}</p>
                    <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">2</p>
                  </div>
                  <div class="flex items-center bg-amber-50 rounded-sm px-2 py-1 text-xs">
                    <Icon name="mdi:account-child" class="w-5 h-5 text-amber-500 mr-1"></Icon>
                    <p>{{ $t('Booking.childTicket1') }}</p>
                    <p class="border border-gray-400 rounded-sm bg-white px-4 mx-1 my-auto">0</p>
                  </div>
                </div>
                <div class="text-md text-red-500 font-semibold">
                  <span class="font-normal text-gray-700">NT$ </span>600.00
                </div>
              </div>
            </div>
          </div>

          <!-- Row 3: Shuttle Bus Time -->
          <div class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md">
            <p class="font-medium text-gray-500">{{ $t('Booking.shuttleBusTime') }}</p>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:bus-clock" class="w-4 h-4 text-lwm-400"></Icon>
              <p class="text-gray-700 font-medium">2025-02-01 15:30</p>
            </div>
          </div>
        </div>

        <!-- Row 4: Actions -->
        <div class="flex justify-between items-center text-sm">
          <!-- More Button -->
          <button class="text-gray-500 hover:text-gray-700">
            {{ '更多' }}
          </button>

          <!-- Action Buttons -->
          <div class="flex space-x-2">
            <button class="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-100">
              {{ '取消订单' }}
            </button>
            <button class="bg-lwm-100 text-white px-4 py-1 rounded-md hover:bg-lwm-200">
              {{ '确定支付' }}
            </button>
          </div>
        </div>
      </div>


</div>


    </div>
  </template>
  