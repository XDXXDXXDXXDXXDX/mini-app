<template>
  <div class="container">
    <div class="userinfo">
      <button v-tap="getUserProfile" v-if="!hasUserInfo">获取头像昵称</button>
      <div v-else>
        <img class="userinfo-avatar" :src="userInfo.avatarUrl" />
        <p class="userinfo-nickname">{{ userInfo.nickName }}</p>
      </div>
    </div>
    <div class="usermotto">
      <span class="user-motto">{{ motto }}</span>
    </div>
  </div>
</template>

<style>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  box-sizing: border-box;
}

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

