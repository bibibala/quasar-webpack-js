<script setup>
import { useI18n } from "vue-i18n";
import { Key } from "src/utils/Key";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { usePublic } from "stores/public";

const { t } = useI18n();

const { ACTIVE_INDEX } = storeToRefs(usePublic());

const nav = computed(() => [
    {
        name: t("nav.languageInternationalization"),
        id: 0,
        icon: "mdi-sitemap-outline",
        children: [
            {
                name: t("nav.projectList"),
                id: 6,
                icon: "",
                path: "/project",
            },
        ],
    },
]);

const list = computed(() => [
    {
        name: t("nav.desktopTools"),
        id: 1,
        icon: "mdi-tunnel-outline",
        path: "/tool",
    },
]);

function indexChange(index) {
    ACTIVE_INDEX.value = index;
}

const open = computed(() => {
    return [6, 7].includes(Key.ACTIVE_INDEX);
});
</script>
<template>
    <div>
        <q-expansion-item
            :label-lines="1"
            group="somegroup"
            expand-separator
            :default-opened="open"
            icon="mdi-sitemap-outline"
            :label="nav[0].name"
        >
            <q-list bordered>
                <q-item
                    clickable
                    v-ripple
                    :to="item.path"
                    v-for="item in nav[0].children"
                    :key="item.id"
                    @click="indexChange(item.id)"
                    :active="ACTIVE_INDEX === item.id"
                    active-class="bg-primary text-secondary"
                >
                    <q-item-section avatar>
                        <q-icon :name="item.icon" />
                    </q-item-section>
                    <q-item-section> {{ item.name }}</q-item-section>
                </q-item>
            </q-list>
        </q-expansion-item>
        <q-list>
            <q-item
                clickable
                v-ripple
                :to="item.path"
                v-for="item in list"
                :key="item.id"
                @click="indexChange(item.id)"
                :active="ACTIVE_INDEX === item.id"
                active-class="bg-primary text-secondary"
            >
                <q-item-section avatar>
                    <q-icon :name="item.icon" />
                </q-item-section>
                <q-item-section> {{ item.name }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>
