<template>
    <footer class="border-t bg-white fixed inset-x-0 bottom-0">
        <div class="flex justify-between py-1">
            <button
             v-for="page in pages"
             :key="page.name"
             @click="selectPage(page.name, page.route)"
             class="flex flex-col items-center mx-auto text-sm transition-transform duration-200 transform hover:scale-110 active:scale-95">
                <Icon
                :name="page.icon"
                class="h-5 w-5"
                :class="selectedPage === page.name ? 'bg-gradient-to-t from-orange-300 to-orange-600 ' : 'text-gray-400'"
                />
                <span
                :class="selectedPage === page.name ? 'font-bold bg-gradient-to-b from-orange-300 to-orange-600 text-transparent bg-clip-text' : 'text-gray-500'"
                >
                {{ $t(`footer.${page.name}`) }}
                </span>
            </button>
        </div>
    </footer>
</template>


<script setup lang="ts">
import { checkLoginStatus } from '~/utils/Useliff';
import { ref } from "vue";
const localPath = useLocalePath();
const selectedPage = ref("shuttle");
const { t } = useI18n();


// 定義導航項目
const pages = [
  { name: "shuttle", icon: "material-symbols-directions-car", route: "/" },
  { name: "reschedule", icon: "jam-write", route: "/reschedulePage/" },
  { name: "myTrip", icon: "streamline-baggage", route: "/myTrip/" },
  { name: "profile", icon: "ri:user-5-line", route: "/profile/profile" },
];

const selectPage = async (pageName: string, route: string) => {
  selectedPage.value = pageName;

  let user = await checkLoginStatus(); 

  if (!user || !user.user_id) {
    alert(t('alertMessage13'))
    user = await loginWithLINE(); 
    if (!user) {
      console.log('登入失敗');
    return;
  }
}

  const LineID = user.user_id;

  if (pageName === "myTrip") {
    route = `/myTrip/${LineID}`;
    console.log(`Line ID: ${LineID}`);
  }

  if (pageName === "reschedule") {
    route = `/reschedulePage/${LineID}`;
    console.log(`Line ID: ${LineID}`);
  }

  const selectedRoute = localPath(route);
  navigateTo(selectedRoute);
};

</script>
