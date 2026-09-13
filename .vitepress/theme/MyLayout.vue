<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import TeacherModeSwitch from './TeacherModeSwitch.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <TeacherModeSwitch v-if="frontmatter.hasTeacherNotes" />
    </template>
  </Layout>
</template>
