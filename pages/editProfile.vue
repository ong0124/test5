<template>
  <div class="h-screen">
    <div class="h-1/4 bg-lwm-50">
      <header class="flex items-center py-4 relative">
        <BackBtn />
        <h1 class="absolute left-1/2 transform -translate-x-1/2 text-lg text-white">
          {{ $t("accountInfo.title") }}
        </h1>
      </header>


      <div class="mx-4 pt-2 pb-6 rounded-xl bg-white flex flex-col shadow-md">
        <div class="space-y-4 px-3 py-4 bg-white rounded-lg">
          <!-- User ID -->
          <div class="grid grid-cols-[150px_1fr] items-center">
            <p class="flex items-center font-medium ml-4 text-gray-700">
              <span class="text-2xl text-red-500">*</span>
              {{ $t("accountInfo.userId") }}
            </p>
            <input 
              type="text" 
              placeholder="22XXXE2X" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"
            >
          </div>

          <!-- Nickname -->
          <div class="grid grid-cols-[150px_1fr] items-center">
            <p class="flex items-center font-medium ml-4 text-gray-700">
              <span class="text-2xl text-red-500">*</span>
              {{ $t("accountInfo.nickname") }}
            </p>
            <input 
              type="text" 
              placeholder="——先生/女生" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"
            >
          </div>

          <!-- Phone -->
          <div class="grid grid-cols-[150px_1fr] items-center">
            <p class="flex items-center font-medium ml-4 text-gray-700">
              <span class="text-2xl text-red-500">*</span>
              {{ $t("accountInfo.phone") }}
            </p>
            <input 
              type="text" 
              placeholder="09XXXXXXX0" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"
            >
          </div>

          <!-- Email -->
          <div class="grid grid-cols-[150px_1fr] items-center">
            <p class="flex items-center font-medium ml-4 text-gray-700">
              <span class="text-2xl text-red-500">*</span>
              {{ $t("accountInfo.email") }}
            </p>
            <input 
              type="text" 
              placeholder="XXXXX@gmail.com" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lwm-400"
            >
          </div>

          <!-- Birth Date -->
          <div class="grid grid-cols-[150px_1fr] items-center">
            <p class="flex items-center font-medium ml-4 text-gray-700">
              <span class="text-2xl text-red-500">*</span>
              出生日期
              <Icon name="mdi:information" class="h-5 w-5 ml-2 text-lwm-50"></Icon>
            </p>
            <a-space direction="vertical" :size="12">
                    <a-date-picker 
                    :show-today="false"
                    :inputReadOnly="true" 
                    class="w-full px-4 py-2 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2  focus:ring-lwm-400"
                    />
            </a-space>
          </div>
        </div>


        <button class="mt-6 mx-4 bg-lwm-400 rounded-md p-3 text-white text-lg  shadow-md hover:opacity-80 transition flex items-center justify-center">
          <Icon name="mingcute:save-line" class="h-5 w-5 mr-2"></Icon>
          {{ $t("accountInfo.saveButton") }}
        </button>
      </div>
    </div>
  </div>
</template>
