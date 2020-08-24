<!--
 * @Author: SHEN
 * @Date: 2020-08-24 14:57:32
 * @LastEditors: SHEN
 * @LastEditTime: 2020-08-24 15:00:42
-->
<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <!--loading上面显示的文字-->
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      visible: false,
    };
  },
};
</script>
