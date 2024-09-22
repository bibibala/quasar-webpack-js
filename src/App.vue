<template>
    <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { resetLanguage } from "src/i18n";

const { locale } = useI18n();

onMounted(() => {
    resetLanguage(locale);
});
</script>
