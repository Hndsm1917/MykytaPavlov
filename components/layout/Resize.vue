<template>
  <div
    :class="{
      'js-is-mobile': currentProjectConfig.name === 'mobile',
    }"
    :style="[{ fontSize: `${fontSize}px` }]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useResizer } from '@/composables/resizer'

const { fontSize, currentProjectConfig } = useResizer()
</script>

<style scoped lang="scss"></style>
