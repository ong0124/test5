<template>
    <button @click="handlePayment">支付</button>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const handlePayment = async () => {
    // 这里调用后端接口，获取支付信息
    const response = await fetch('/api/createPayment', {
      method: 'POST',
      body: JSON.stringify({
        // 传递必要的支付信息
        amount: 100,
        currency: 'TWD', // 示例
      }),
    })
  
    const data = await response.json()
  
    // 这里假设返回的data里有支付的url或信息
    if (data.paymentUrl) {
      window.location.href = data.paymentUrl
    }
  }
  </script>
  