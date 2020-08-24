<!--
 * @Author: SHEN
 * @Date: 2020-08-24 10:07:42
 * @LastEditors: SHEN
 * @LastEditTime: 2020-08-24 15:33:53
-->
<template>
  <div class="loading"></div>
</template>

<script>
import Loading from "@/components/loading/index.js";
export default {
  created() {
    const loading = Loading({ text: "加载中..." });

    setTimeout(() => {
      loading.close();
    }, 3000);
  },
};
</script>