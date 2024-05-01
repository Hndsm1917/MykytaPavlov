<template>
  <Html
    :lang="head.htmlAttrs.lang"
    :dir="head.htmlAttrs.dir"
  >
    <Head>
      <Title>{{ t('layouts.title') }}</Title>

      <template
        v-for="{ id, rel, href, hreflang } in head.link"
        :key="id"
      >
        <Link
          :id="id"
          :rel="rel"
          :href="href"
          :hreflang="hreflang"
        />
      </template>

      <template
        v-for="{ id, property, content } in head.meta"
        :key="id"
      >
        <Meta
          :id="id"
          :property="property"
          :content="content"
        />
      </template>

      <Meta
        property="og:site_name"
        :content="t('layouts.title')"
      />
      <Meta
        property="og:title"
        :content="t('layouts.title')"
      />
      <Meta
        property="twitter:title"
        :content="t('layouts.title')"
      />

      <Meta
        property="keywords"
        :content="t('layouts.keywords')"
      />

      <Meta
        property="og:description"
        :content="t('layouts.description')"
      />
      <Meta
        property="description"
        :content="t('layouts.description')"
      />
      <Meta
        property="twitter:description"
        :content="t('layouts.description')"
      />
    </Head>
    <Body>
      <slot />
    </Body>
  </Html>
</template>

<script setup lang="ts">
const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})
</script>
