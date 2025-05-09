import liff from "@line/liff";
import { LIFF_ID } from "@/utils/liff.config";

export interface LiffUserProfile {
  user_id: string | null;
  user_name: string | null;
  user_picture: string | null;
}

export async function loginWithLINE(): Promise<LiffUserProfile | null> {
  if (typeof window === "undefined") return null;

  await liff.init({ liffId: LIFF_ID });

  if (!liff.isLoggedIn()) {
    liff.login();
    return null;
  }

  const profile = await liff.getProfile();
  const userProfile: LiffUserProfile = {
    user_id: profile.userId,
    user_name: profile.displayName,
    user_picture: profile.pictureUrl ?? null,
  };

  try {
    const createResponse = await $fetch('/api/LoginCustomer/createUser', {
      method: 'POST',
      body: {
        LineID: userProfile.user_id,
        full_name: userProfile.user_name
      }
    });

    if (!createResponse.success) {
      console.error('建立使用者時發生錯誤：', createResponse.message);
      return null;
    }

    saveUserToLocal(userProfile);
    return userProfile;

  } catch (error) {
    console.error('建立使用者時發生錯誤:', error);
    return null;
  }
}

export async function logoutUser(): Promise<void> {
  if (typeof window === "undefined") return;

  await liff.init({ liffId: LIFF_ID });

  liff.logout();
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_picture");
  alert('登出成功');
}

export function loadUser(): LiffUserProfile | null {
  if (typeof window === "undefined") return null;

  const user_id = localStorage.getItem("user_id");
  const user_name = localStorage.getItem("user_name");
  const user_picture = localStorage.getItem("user_picture");

  if (user_id) {
    return {
      user_id,
      user_name,
      user_picture,
    };
  }

  return null;
}

export async function checkLoginStatus(): Promise<LiffUserProfile | null> {
  if (typeof window === "undefined") return null;

  const localUser = loadUser();
  if (localUser?.user_id) {
    return localUser;
  }

  await liff.init({ liffId: LIFF_ID });

  if (liff.isLoggedIn()) {
    try {
      const profile = await liff.getProfile();
      const userProfile: LiffUserProfile = {
        user_id: profile.userId,
        user_name: profile.displayName,
        user_picture: profile.pictureUrl ?? null,
      };

      saveUserToLocal(userProfile);
      return userProfile;
    } catch (error) {
        alert("登录 LINE 失败");
      console.error("獲取 LIFF 使用者資訊失敗", error);
    }
  }

  return null;
}

function saveUserToLocal(user: LiffUserProfile): void {
  if (typeof window === "undefined") return;

  localStorage.setItem("user_id", user.user_id ?? "");
  localStorage.setItem("user_name", user.user_name ?? "");
  localStorage.setItem("user_picture", user.user_picture ?? "");
}