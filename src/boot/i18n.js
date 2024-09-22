import zh from "src/i18n/zh";
import en from "src/i18n/en";
import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";

export default boot(({ app }) => {
    const i18n = createI18n({
        locale: "en-US",
        legacy: false,
        globalInjection: true,
        messages: {
            zh: zh,
            en: en,
        },
        datetimeFormats: {
            en: {
                short: {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                },
            },
            zh: {
                short: {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                },
            },
        },
    });
    app.use(i18n);
});
