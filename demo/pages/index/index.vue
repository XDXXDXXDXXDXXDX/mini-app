<template>
  <div class="container">
    <div class="userinfo">
      <template v-if="!hasUserInfo">
        <button v-if="canIUseGetUserProfile" bindtap="getUserProfile">
          获取头像昵称
        </button>
        <div wx:else> 请使用1.4.4及以上版本基础库 </div>
      </template>
      <template v-else>
        <image
          bindtap="binddivTap"
          class="userinfo-avatar"
          src="userInfo.avatarUrl"
          mode="cover"
        ></image>
        <p class="userinfo-nickname">{{ userInfo.nickName }}</p>
      </template>
    </div>
    <div class="usermotto">
      <p class="user-motto">{{ motto }}</p>
    </div>
  </div>
</template>

