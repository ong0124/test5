<template>
    <div class="flex">
      <!-- 連結 -->
      <a
        href="#"
        class="text-sm text-blue-700 ml-1"
        @click.prevent="showPopup = true"
      >
        {{ $t('HomePage.terms') }}
      </a>
  
      <!-- 彈出框 -->
      <div
        v-if="showPopup"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
       >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
          <h2 class="text-lg font-bold mb-4">{{ $t('HomePage.terms') }}</h2>
          <div class="text-xs text-gray-700">
            <p class="text-base font-medium">{{ $t('PopUpRules.title1') }}</p>
              <p>{{ $t('PopUpRules.general_ticket') }}</p>
              <p>{{ $t('PopUpRules.infant_ticket') }}</p>
              <p class="text-base font-medium">{{ $t('PopUpRules.title2') }}</p>
              <p>{{ $t('PopUpRules.notice') }}</p>
              <p>{{ $t('PopUpRules.real_info') }}</p>
              <p>{{ $t('PopUpRules.online_deadline') }}</p>
              <p>{{ $t('PopUpRules.refund_deadline') }}</p>
              <p>{{ $t('PopUpRules.ticket_validity') }}</p>
              <p>{{ $t('PopUpRules.contact') }}</p>
              <p class="text-base font-medium">{{ $t('PopUpRules.title3') }}</p>
              <p>{{ $t('PopUpRules.process') }}</p>
              <p>{{ $t('PopUpRules.safety') }}</p>
              <p>{{ $t('PopUpRules.valuables') }}</p>
              <p>{{ $t('PopUpRules.insurance') }}</p>
              <p>{{ $t('PopUpRules.invoice') }}</p>
          </div>
          <button
            class="mt-4 px-4 py-2 bg-lwm-400 text-white rounded hover:bg-green-700"
            @click="showPopup = false"
          >
          {{ $t('okButton') }}
          </button>
        </div>
      </div>
    </div>
  </template>
  

  <script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TermsPopup',
  setup() {
    const showPopup = ref(false);

    return {
      showPopup,
    };
  },
});
</script>
