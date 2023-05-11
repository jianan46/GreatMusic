<template>
  <div id="vs"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Player from "xgplayer";
import MusicPreset from "xgplayer-music";
onMounted(() => {
  new Player({
    id: "vs",
    url: "public/1030.mp3",
    mediaType: "audio",
    volume: 0.8,
    width: 1024,
    height: 50,
    // 音乐播放控制模块配置
    music: {
      list: [
        {
          src: "./song01.m4a",
          vid: "000001",
        },
      ],
      preloadNext: true, // 预加载下一首
      switchKeepProgress: false, // 切换歌曲保持进度
    },
    presets: ["default", MusicPreset],
    ignores: ["playbackrate", "backward", "forword"],
    controls: {
      initShow: true,
      mode: "flex",
    },
    marginControls: true,
  });
});
</script>

<style></style>
