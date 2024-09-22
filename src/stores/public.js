import { defineStore } from "pinia";

export const usePublic = defineStore("counter", {
    state: () => ({
        ACTIVE_INDEX: 6,
    }),
});
