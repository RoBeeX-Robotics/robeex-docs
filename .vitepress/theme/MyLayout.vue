<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import TeacherModeSwitch from "./TeacherModeSwitch.vue";

const { Layout } = DefaultTheme;
const { frontmatter, lang } = useData();
const fullscreenAvailable = ref(false);
const fullscreenLabel = computed(() =>
    lang.value.startsWith("fa") ? "نمایش تمام‌صفحه" : "View content fullscreen",
);

onMounted(() => {
    fullscreenAvailable.value = document.fullscreenEnabled;
});

async function enterFullscreen() {
    const content = document.querySelector<HTMLElement>(".VPDoc main");
    if (!content) return;

    try {
        await content.requestFullscreen();
    } catch (error) {
        console.warn("Could not enter fullscreen.", error);
    }
}
</script>

<template>
    <Layout>
        <template #doc-before>
            <div
                v-if="frontmatter.hasTeacherNotes || fullscreenAvailable"
                class="doc-toolbar"
            >
                <TeacherModeSwitch v-if="frontmatter.hasTeacherNotes" />
                <button
                    v-if="fullscreenAvailable"
                    type="button"
                    class="doc-fullscreen-button"
                    :aria-label="fullscreenLabel"
                    :title="fullscreenLabel"
                    @click="enterFullscreen"
                >
                    {{ fullscreenLabel }}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
                    </svg>
                </button>
            </div>
        </template>
    </Layout>
</template>

<style scoped>
.doc-toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
}

.doc-fullscreen-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0 12px;
    height: 56px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--teacher-mode-background);
    color: var(--vp-c-text-2);
    cursor: pointer;
    gap: 12px;
}

.doc-fullscreen-button:hover {
    color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
}

.doc-fullscreen-button:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
}
</style>
