<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

type DocsMode = 'student' | 'teacher'

const docsModeStorageKey = 'robeex-docs-view-mode'
const mode = ref<DocsMode>('student')
const { lang } = useData()

const labels = computed(() => {
  if (lang.value.startsWith('fa')) {
    return {
      legend: 'حالت نمایش',
      student: 'دانش‌آموز',
      teacher: 'مدرس'
    }
  }

  return {
    legend: 'Viewing mode',
    student: 'Student',
    teacher: 'Teacher'
  }
})

function isDocsMode(value: unknown): value is DocsMode {
  return value === 'student' || value === 'teacher'
}

function applyMode(nextMode: DocsMode, persist = true) {
  mode.value = nextMode
  document.documentElement.dataset.docsMode = nextMode

  if (!persist) return

  try {
    localStorage.setItem(docsModeStorageKey, nextMode)
  } catch {
    // The selected mode still applies to this page when storage is unavailable.
  }
}

onMounted(() => {
  const initialMode = document.documentElement.dataset.docsMode
  applyMode(isDocsMode(initialMode) ? initialMode : 'student', false)
})
</script>

<template>
  <fieldset class="teacher-mode-switch">
    <legend class="visually-hidden">{{ labels.legend }}</legend>
    <span class="teacher-mode-label" aria-hidden="true">
      {{ labels.legend }}
    </span>

    <div class="teacher-mode-options">
      <label :class="{ active: mode === 'student' }">
        <input
          type="radio"
          name="docs-mode"
          value="student"
          :checked="mode === 'student'"
          @change="applyMode('student')"
        >
        <span>{{ labels.student }}</span>
      </label>

      <label :class="{ active: mode === 'teacher' }">
        <input
          type="radio"
          name="docs-mode"
          value="teacher"
          :checked="mode === 'teacher'"
          @change="applyMode('teacher')"
        >
        <span>{{ labels.teacher }}</span>
      </label>
    </div>
  </fieldset>
</template>
