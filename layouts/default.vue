<template>
  <LayoutHtml class="layout">
    <LayoutResize class="layout__resize">
      <LayoutHeader class="layout__header" />

      <main class="layout__main">
        <slot />
      </main>
    </LayoutResize>
  </LayoutHtml>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout {
  &__resize {}

  &__header {}

  &__main {}
}
</style>
