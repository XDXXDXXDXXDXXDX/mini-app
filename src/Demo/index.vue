<template>
  <div class="container">
    <div class="userinfo">
      <button v-if="!hasUserInfo">获取头像昵称</button>
      <div v-else>
        <img class="userinfo-avatar" :src="userInfo.avatarUrl" />
        <p class="userinfo-nickname">{{ userInfo.nickName }}</p>
      </div>
    </div>
    <div class="usermotto">
      <p class="user-motto">{{ motto }}</p>
    </div>
  </div>
</template>

<style>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
}

.userinfo-avatar {
  overflow: hidden;
  width: 128px;
  height: 128px;
  margin: 20px;
  border-radius: 50%;
}

.usermotto {
  margin-top: 200px;
}
</style>

