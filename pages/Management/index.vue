<template>
<ManagementHeader/>
   <div class="">
    <div class="flex w-full max-w-full overflow-hidden">
      <!-- 側邊欄 -->
      <div class="shadow-md flex ">
        <div class="bg-stone-50 flex flex-col">
          <div
            v-for="option in options"
            :key="option.name"
            @click="selectedoption = option.name"
            class="flex flex-col py-4 items-center text-sm shadow-sm px-4 cursor-pointer transition-all duration-200"
            :class="selectedoption === option.name ? 'text-lwm-500 font-bold bg-teal-50' : 'text-gray-500 hover:text-green-400'"
          >
            <Icon :name="option.icon" class="h-6 w-6" />
            <span class="ml-1">{{ $t(`Management.${option.name}`) }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full max-w-full">
        <div class="flex flex-col">
          <!-- 標題 + 按鈕 -->
          <div class="pt-2 pl-4 bg-sky-50 flex justify-evenly items-center">
            <h2 class="font-bold pb-2 ">{{ $t(titleKey) }}</h2>
            <button 
              v-if="buttonText" 
              :class="buttonClass"
              class="shadow-md rounded-xl px-2 mx-2 mb-2 text-white"
            >
              {{ $t(buttonText) }}
            </button>
          </div>
          <div class="bg-white px-4 py-2 ">
            <div class="flex items-center border rounded-md w-1/3">
              <Icon name="material-symbols-search-rounded" class="h-5 w-5 text-gray-500 mx-2" /></input>
              <input
              type="text"
              class=" py-1 w-full rounded-md focus:ring-0 focus:border-transparent border-none outline-none"
              :placeholder="$t('Management.searchOrder')"
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <!-- 滾動容器 -->
          <div class="overflow-x-auto w-full">
            <table class="table-auto min-w-full border-collapse border border-green-400 mr-12">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border p-2 text-xs md:text-sm sticky left-0 bg-indigo-50 z-10">訂單ID</th>
                  <th v-for="(header, index) in tableHeaders.slice(1)" :key="index" class="border p-2 text-xs md:text-sm bg-indigo-50">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in paginatedOrders" :key="index" class="border-b">
                  <td class="border p-2 text-xs md:text-sm sticky left-0 bg-white z-10">{{ order.id }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ order.contact }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ order.phone }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ t(`${order.departure_loc}`) }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ t(`${order.destination_loc}`) }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ formatDate(order.shuttle_date) }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ order.shuttle_time }}</td>
                  <td class="border p-2 text-xs md:text-sm">
                    <span :class="statusClass(order.status)">{{ order.status }}</span>
                  </td>
                  <td class="border p-2 text-xs md:text-sm">{{ order.adult_num }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ order.child_num }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ order.totalTickets }}</td>
                  <td class="border p-2 text-xs md:text-sm">{{ order.totalprice }}</td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-center items-center mt-4 space-x-4">
              <button 
                @click="prevPage" 
                :disabled="currentPage === 1"
                class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                上一頁
              </button>

              <span>第 {{ currentPage }} 頁 / 共 {{ totalPages }} 頁</span>

              <button 
                @click="nextPage" 
                :disabled="currentPage === totalPages"
                class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                下一頁
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
  <ManagementBottom/>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import type { BookingModel } from '~~/server/models/booking';
import dayjs from "dayjs";

const { t } = useI18n();
const i18n = useI18n();
const searchQuery = ref('')

// 訂單數據

// 使用 i18n 獲取表頭名稱
// const translatedHeaders = computed(() => [
//   t("Management.orderNumber"),
//   t("Management.boardingCode"),
//   t("Management.boardingPoint"),
//   t("Management.dropOffPoint"),
//   t("Management.flightNumber"),
//   t("Management.rideTime"),
//   t("Management.status"),
//   t("Management.fullTicketCount"),
//   t("Management.unitPrice"),
//   t("Management.orderDate"),
//   t("Management.orderContact"),
//   t("Management.orderPhoneNumber")
// ]);


const tableHeaders = [
  '訂單 ID','聯絡人', '電話', '上車地點', '下車地點','日期',  
  '時間', '狀態','成人票(人)','兒童票(人)', '全票數', '總價格',
];
const currentPage = ref(1); // 當前頁數
const itemsPerPage = 5; // 每頁顯示 5 筆數據

// 計算當前頁面的數據
const paginatedOrders = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredOrders.value.slice(start, start + itemsPerPage);
});

// 總頁數
const totalPages = computed(() => Math.ceil(filteredOrders.value.length / itemsPerPage));

// 換頁功能
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const formatDate = (date: string | null) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
// 篩選訂單
const filteredOrders = computed(() => {
  return orders.value.filter(order => 
  Object.values(order).some(value => 
  String(value).includes(searchQuery.value)
)
);
});

// 設置狀態顏色
const statusClass = (status: string) => ({
  'text-green-600 font-bold': status === '已完成',
  'text-red-600 font-bold': status === '未出行',
  'text-yellow-600 font-bold': status === '处理中'
});
// 定義可選項目的類型
type OptionKey = "viewOrder" | "printOrder" | "addOrder" | "deleteOrder" | "editOrder";

const selectedoption = ref<OptionKey>("viewOrder");

// 側邊欄導航選項
const options: { name: OptionKey; icon: string }[] = [
  { name: "viewOrder", icon: "material-symbols-grid-view-outline-rounded" },
  { name: "printOrder", icon: "material-symbols-print-outline" },
  { name: "addOrder", icon: "material-symbols-add-diamond-outline" },
  { name: "deleteOrder", icon: "material-symbols-delete-outline" },
  { name: "editOrder", icon: "material-symbols-edit-square-outline" },
];

// 定義標題映射
const titles: Record<OptionKey, string> = {
  viewOrder: "Management.viewOrder",
  printOrder: "Management.printOrder",
  addOrder: "Management.addOrder",
  deleteOrder: "Management.deleteOrder",
  editOrder: "Management.editOrder",
};

// 定義按鈕映射（部分選項沒有按鈕）
const buttons: Partial<Record<OptionKey, { text: string; class: string }>> = {
  printOrder: { text: "Management.print", class: "bg-blue-400" },
  addOrder: { text: "Management.add", class: "bg-green-500" },
  deleteOrder: { text: "Management.delete", class: "bg-red-500" },
  editOrder: { text: "Management.modify", class: "bg-yellow-400" },
};



// 計算標題與按鈕
const titleKey = computed(() => titles[selectedoption.value]);
const buttonText = computed(() => buttons[selectedoption.value]?.text ?? "");
const buttonClass = computed(() => buttons[selectedoption.value]?.class ?? "");
const orders = ref<any[]>([]);
const data = ref<BookingModel[]>([]);
const fetchData = async () => {
  try {
    const result = await $fetch('/api/GETallOrders');
    data.value = result.data as BookingModel[];
    orders.value = data.value.map(booking => ({
      id: booking.id,
      departure_loc: booking.departure_loc,
      destination_loc: booking.destination_loc,
      shuttle_date: booking.shuttle_date,
      shuttle_time: booking.shuttle_time,
      status: booking.status,
      adult_num: booking.adult_num,
      child_num: booking.child_num,
      totalTickets:booking.total_tickets,
      totalprice: booking.totalprice,
      contact: booking.contact_name,
      phone: booking.contact_phone
    }));
    console.log("check" +  JSON.stringify(data.value))
  } catch {
    alert('Fetch error');
  }
};

onMounted(() => {
  i18n.locale.value = 'zh-TW';
})
onMounted(fetchData)
</script>
