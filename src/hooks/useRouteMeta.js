import { computed } from "vue";
import { useRouter } from "vue-router";

export function useRouteMeta() {
    const router = useRouter();
    const text = computed(() => {
        return router.currentRoute.value.meta.title;
    });
    return {
        text,
    };
}
