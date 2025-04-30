<template>
    <!-- 待付款卡片 -->
    <StatusCard
      link="/toPay"
      beforeBarClass="before:bg-yellow-400"
      title="HomePage.oneWay"
      titleBorderClass="border-l-yellow-400"
      from="bookingStatus.pier"
      to="bookingStatus.airport"
      icon="material-symbols-arrow-right-alt"
      status="bookingStatus.toPay"
      arrivalTime="2025-01-01 15:30"
      shuttleTime="2025-01-01 15:30"
      :adult="1"
      :child="0"
    >
      <template #footer>
        <div>
          <p>合計：NT$
            <span class="text-xl text-red-500">150.00</span>
          </p>
        </div>
        <button class="border border-blue-300 text-blue-500 rounded-full px-4 mt-1 text-sm">
          立即支付
        </button>
      </template>
    </StatusCard>
  
    <!-- 未出行卡片 -->
    <StatusCard
      link="/notTraveled"
      beforeBarClass="before:bg-lwm-400"
      title="HomePage.roundTrip"
      titleBorderClass="border-l-lwm-400"
      from="bookingStatus.airport"
      to="bookingStatus.pier"
      icon="pepicons-pop:repeat"
      status="bookingStatus.notTraveled"
      arrivalTime="2025-01-01 15:30"
      shuttleTime="2025-01-01 15:30"
      :adult="2"
      :child="1"
    >
      <template #footer>
        <div class="flex flex-col items-end text-sm">
          <div class="flex items-center">
            <p class="mr-1">退款：NT$</p>
            <p class="text-lwm-50 text-xl">300.00</p>
          </div>
          <button class="border border-gray-300 text-gray-500 rounded-full px-4 mt-1 text-sm">
            查看详情
          </button>
        </div>
      </template>
    </StatusCard>
  </template>
  
  <script setup lang="ts">
  </script>
  