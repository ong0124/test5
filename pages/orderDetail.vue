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
  <div class="bg-amber-50 py-4 px-2 rounded-t-xl relative overflow-hidden border-b border-gray-500 ">
    <div class="absolute top-2/2 left-2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
    <div class="absolute top-2/2 right-2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>

    <div class="flex items-center justify-between">
      <div class="flex-1 text-gray-600 text-lg text-end pr-6">
        <p>{{ $t('bookingStatus.pier') }}</p>
      </div>

      <div class="flex-2 text-center text-gray-600">
        <div class="border-b-2 border-dashed border-lwm-50 mx-2 pb-1 text-md font-medium">
          <p>{{ $t('orderDetail.date') }}</p>
        </div>
        <div class="text-sm text-gray-600">
          <p>{{ $t('orderDetail.time') }}</p>
        </div>
      </div>

      <div class="flex-1 text-gray-600 text-lg text-start pl-6">
        <p>{{ $t('bookingStatus.airport') }}</p>
      </div>
    </div>
  </div>
</div>

<div class="px-6">
  <div class="bg-white p-4 rounded-lg flex flex-col border-b-2 space-y-3 text-gray-500">
    
    <div class="text-md space-y-1 ">
      <p class="">{{ $t('Booking.contact') }}: 张**</p>
      <p>{{ $t('Booking.phone') }}: 183XXXXXX</p>
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
    <p>{{ $t('orderDetail.orderNumber') }} : 2025020100001</p>
    <div class="flex">
      <p class="mr-2">{{ $t('orderDetail.orderStatus') }} : </p>
      <p class="text-green-700"> {{ $t('orderDetail.paid') }}</p>
    </div>
    <div class="flex">
      <p class="mr-2">{{ $t('orderDetail.orderDate') }} : </p>
      <p> {{ $t('confirmationPage.dateTime') }}</p>
    </div>
    
    <div class="flex justify-end pt-1 px-2">
      <nuxt-link to="/refundApply" class="flex items-center gap-2 text-md border border-lwm-50 text-lwm-50 rounded-full px-4 py-1 hover:bg-lwm-50 hover:text-white transition">
        {{ $t('applyRefund') }}
        <Icon name="mingcute:right-fill" class="h-5 w-5"></Icon>
      </nuxt-link>
    </div>
  </div>
</div>

</template>