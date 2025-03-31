<template>
    <div>
      <h1 v-if="error.statusCode === 404" class="text-center p-2  text-red-500 text-2xl">{{ $t('errorPage.notFound') }}</h1>
      <h1 v-else>{{ $t('errorPage.generalError') }}</h1>
      <p class="m-1 text-gray-500 text-center ">{{ $t('errorPage.notFound') }}</p>
      <NuxtLink to="/" class="flex justify-center text-blue-500">{{ $t('errorPage.goHome') }}</NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps(['error'])
  </script>