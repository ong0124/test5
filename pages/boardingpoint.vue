<template>
  <header class="py-4 border-b bg-[url('/assets/images/headerTest3.png')] bg-cover bg-center flex items-center ">
    <div>
        <BackBtn/>
    </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl capitalize text-white">
        {{ $t('boardingpointPage.title') }}
      </h1>
  </header>

  <div class="flex flex-col pb-16">
    <p class="text-center text-lg pt-2">
      {{ $t('boardingpointPage.information') }}
    </p>
    <img src="/assets/images/boardingpoint.png" alt="boardingpointpng" class="rounded-lg pl-4 pr-4 pb-4"></img>
    <p class="text-center text-lg">
      {{ $t('boardingpointPage.flowchart') }}
    </p>
    <img src="/assets/images/flowchat.png" alt="flowchartpng" class="rounded-lg pl-4 pr-4">
    
    <div class="flex justify-center pt-4 ">
      <button class="bg-orange-400 text-xl text-white font-bold rounded-md py-1 px-8 "
      @click="goTo"
      >确定</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const goTo = () => {
  router.push('/'); // 替换为你要跳转的路径，例如 "/order/123"
};

</script>