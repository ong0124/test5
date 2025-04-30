<template>
    <NuxtLink :to="link">
      <div class="pl-2 pt-4">
        <div
          class="bg-white p-3 rounded-lg flex flex-col mb-4 relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:rounded-l-lg"
          :class="beforeBarClass"
        >
          <!-- Header -->
          <div class="flex justify-between items-center pb-1 border-b-2 border-gray-300 mb-2">
            <p :class="['text-gray-700 border-l-4 pl-1 ml-2 font-semibold', titleBorderClass]">
              {{ $t(title) }}
            </p>
            <div class="flex items-center">
              <p>{{ $t(from) }}</p>
              <Icon :name="icon" class="mx-2 w-6 h-6" />
              <p>{{ $t(to) }}</p>
            </div>
            <p 
            class=" font-semibold"
            :class="TextColor">
              {{ $t(status) }}
            </p>
          </div>
  
          <!-- Middle Content -->
          <div class="flex justify-between">
            <div class="flex flex-col text-sm space-y-1 px-2 border-r border-gray-300 flex-1">
              <div class="flex items-center text-sm">
                <div>
                  <p>{{ $t('Booking.arrivalPortTime') }} :</p>
                  <p>{{ formatDate(arrivalDate) }} {{ arrivalTime }}</p>
                </div>
              </div>
              <div class="flex items-center text-sm">
                <div>
                  <p>{{ $t('Booking.shuttleBusTime') }} :</p>
                  <p>{{ formatDate(shuttleDate) }} {{ shuttleTime }}</p>
                </div>
              </div>
              <div class="flex text-sm">
                <p>{{ $t('Booking.adultTicket') }}</p>
                <p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">{{ adult }}</p>
                <p>{{ $t('Booking.childTicket1') }}</p>
                <p class="border border-gray-500 bg-gray-200 px-4 mx-1 my-auto">{{ child }}</p>
              </div>
            </div>
  
            <!-- Footer Content -->
            <div class="flex flex-col justify-end items-end pl-4 flex-1 text-sm">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </template>
  
  <script setup lang="ts">
    defineProps<{
      link: object;
      beforeBarClass: string;
      title: string;
      titleBorderClass: string;
      TextColor: string;
      from: string;
      to: string;
      icon: string;
      status: string;
      arrivalDate: string;
      arrivalTime: string;
      shuttleDate: string;
      shuttleTime: string;
      adult: number;
      child: number;
    }>();
      </script>
  