<template>
    <footer class="border-t bg-white fixed inset-x-0 bottom-0">
        <div class="flex justify-between">
            <button
             v-for="page in pages"
             :key="page.name"
             @click="selectPage(page.name, page.route, user_id)"
             class="flex flex-col items-center mx-auto text-sm">
                <Icon
                :name="page.icon"
                class="h-5 w-5"
                :class="selectedPage === page.name ? 'text-green-500' : 'text-gray-400'"
                />
                <span
                :class="selectedPage === page.name ? 'text-green-500 font-bold' : 'text-gray-500'"
                >
                {{ $t(`Management.${page.name}`) }}
                </span>
            </button>
        </div>
    </footer>
</template>


<script setup lang="ts">
import { ref } from "vue";
const localPath = useLocalePath();
// 定義當前選中的導航按鈕
const selectedPage = ref("shuttle");
const user_id = ref("7"); // 這裡可以是從後端獲取的 ID


// 定義導航項目
const pages = [
  { name: "viewOrder", icon: "material-symbols-grid-view-outline-rounded", route: "/Management/" },
  { name: "checkUser", icon: "material-symbols-person-search-outline", route: "/Management/" },
  { name: "refundApprove", icon: "hugeicons-stamp-02", route: "/Management/" },
  { name: "offDaySetting", icon: "material-symbols-calendar-month-outline", route: "/Management/" },
];

const selectPage = (pageName: string, route: string, user_id?: string) => {
  selectedPage.value = pageName;
  
  // 如果是 'myTrip'，則拼接 user_id
  if (pageName === "myTrip" && user_id) {
    route = `/myTrip/${user_id}`;
  }
  if (pageName === "reschedulePage" && user_id) {
    route = `/reschedulePage/${user_id}`;
  }
  const selectedRoute = localPath(route);
  navigateTo(selectedRoute);
};

</script>