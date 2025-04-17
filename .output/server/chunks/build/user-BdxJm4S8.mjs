import { defineStore } from 'pinia';

const useUserStore = defineStore("user", {
  state: () => ({
    user_id: null,
    user_name: null,
    user_picture: null
  }),
  actions: {
    async loginWithLINE() {
      return;
    },
    logout() {
      return;
    },
    loadUser() {
      return;
    },
    async checkLoginStatus() {
      return;
    }
  }
});

export { useUserStore as u };
//# sourceMappingURL=user-BdxJm4S8.mjs.map
