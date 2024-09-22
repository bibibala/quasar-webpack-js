<template>
    <VLayout>
        <template #body>
            <q-table
                :table-header-class="q.dark.isActive ? 'bg-dark' : 'bg-accent'"
                flat
                :rows="list"
                :columns="header"
                row-key="id"
            ></q-table>
        </template>
    </VLayout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";
import VLayout from "components/VLayout.vue";

const q = useQuasar();
const { t, locale } = useI18n();

// 定义表头
const header = ref([
    { name: "name", align: "left", label: t("header.name"), field: "name" },
    {
        name: "projectManagerName",
        align: "left",
        label: t("header.projectManagerName"),
        field: "projectManagerName",
    },
    {
        name: "userCount",
        align: "left",
        label: t("header.userCount"),
        field: "userCount",
    },
    {
        name: "createDate",
        align: "left",
        label: t("header.createDate"),
        field: "createDate",
    },
    {
        name: "remark",
        align: "left",
        label: t("header.remark"),
        field: "remark",
    },
    {
        name: "action",
        align: "left",
        label: t("header.action"),
        field: "action",
        style: "width: 180px",
    },
]);

const list = ref([]);

watch(locale, () => {
    header.value = [
        { name: "name", align: "left", label: t("header.name"), field: "name" },
        {
            name: "projectManagerName",
            align: "left",
            label: t("header.projectManagerName"),
            field: "projectManagerName",
        },
        {
            name: "userCount",
            align: "left",
            label: t("header.userCount"),
            field: "userCount",
        },
        {
            name: "createDate",
            align: "left",
            label: t("header.createDate"),
            field: "createDate",
        },
        {
            name: "remark",
            align: "left",
            label: t("header.remark"),
            field: "remark",
        },
        {
            name: "action",
            align: "left",
            label: t("header.action"),
            field: "action",
            style: "width: 180px",
        },
    ];
});
</script>
