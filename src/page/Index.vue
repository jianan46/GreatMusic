<template>
  <h3>
    Your Ip address is:<span class="ip">{{ ip }}</span>
  </h3>
  <MusicComp></MusicComp>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import axios from "axios";
import MusicComp from "../components/MusicComp.vue";
const ip = ref("");
onBeforeMount(() => {
  axios.get("https://api.ipify.org?format=json").then((res) => {
    ip.value = res.data.ip;
  });
});
</script>

<style scoped>
.ip {
  color: lightcoral;
}
</style>
