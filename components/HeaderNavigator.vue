<script setup lang="ts">
</script>

<template>
  <header class="py-4 border-b bg-[url('/assets/images/headerTest2.png')] bg-cover bg-center flex items-center">
    <div>
        <LangSwitcher class="pl-4"/>
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl text-white capitalize ">
        {{ $t('title') }}
      </h1>
  </header>
</template>