import { Quasar } from "quasar";
import enUS from "quasar/lang/en-US";
import zhCN from "quasar/lang/zh-CN";
import { haveLang, getLangLa, setLang } from "src/utils/useStorage";

/**
 *
 * @param lang
 * @param locale
 * @returns {Promise<void>}
 */
export async function changeLanguage(lang, locale) {
    await setLang(lang);
    await resetLanguage(locale);
}

/**
 *
 * @param locale
 * @returns {Promise<void>}
 */
export function resetLanguage(locale) {
    if (haveLang()) {
        switch (getLangLa()) {
            case "en":
                locale.value = "en-US";
                Quasar.lang.set(enUS);
                break;
            case "zh":
                locale.value = "zh-CN";
                Quasar.lang.set(zhCN);
                break;
        }
    } else {
        // 默认英文
        Quasar.lang.set(enUS);
        locale.value = "en-US";
    }
}

const translations = {
    zh: {
        project: '项目',
// Add more fields as needed
    },
    en: {
        project: 'Project',
// Add more fields as needed
    },
// More languages can be easily added here
};

export function createLang(translations, defaultLang = 'en') {
    const locale = getLangLa();
    if (translations[locale]) {
        return translations[locale];
    }
    return translations[defaultLang] || {};
}

console.log(createLang(translations))

