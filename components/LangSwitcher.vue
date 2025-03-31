<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

const isDropdownVisible = ref(false);
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const selectLanguage = (value: "zh-TW"| "zh-CN" | "en-US" ) => {
  language.value = value; 
  isDropdownVisible.value = false; 
};

</script>

<template>
  <div class="relative">
    <button
      class="flex items-center border-2 bg-lwm-100 border-white rounded-3xl text-white px-2"
      @click="toggleDropdown"
    >
      <Icon name="tabler-arrows-exchange" class="mr-1" />
      {{ language }}
    </button>

    <!-- 下拉菜单 -->
    <ul
      v-if="isDropdownVisible"
      class="absolute bg-white text-black rounded-md shadow-lg mt-2 z-10"
    >
      <li
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item"
        class="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"
      >
        <input
          type="radio"
          :id="typeof item === 'object' ? item.code : item"
          :value="typeof item === 'object' ? item.code : item"
          v-model="language"
          @change="selectLanguage(language)"
          class="mr-2"
        />
        <label
          :for="typeof item === 'object' ? item.code : item"
          class="cursor-pointer"
        >
          {{ typeof item === "object" ? item.name : item }}
        </label>
      </li>
    </ul>
  </div>
</template>
