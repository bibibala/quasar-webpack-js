import service from "../../utils/request";

/**
 * @returns
 */
export function v2TranslateListV2(
    appId,
    page,
    searchContent,
    fixSearch,
    translateStatus
) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/list",
        data: {
            appId,
            page,
            searchContent,
            fixSearch,
            translateStatus,
        },
    });
}

/**
 * @returns
 */
export function appInfo() {
    return service.request({
        method: "post",
        url: "v2/admin/translate/app/info",
        data: {},
    });
}

/**
 * @returns
 */
export function channelListUpdate(appId, channels) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/channel/list/update",
        data: {
            appId,
            channels,
        },
    });
}

/**
 * @returns
 */
export function excelExport(appId, translateStatus) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/excel/export",
        responseType: "blob",
        data: {
            appId,
            translateStatus,
        },
    });
}

/**
 * @returns
 */
export function excelImport(file, appId) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("appId", appId);
    return service.request({
        method: "post",
        url: "v2/admin/translate/excel/import",
        data: formData,
        timeout: 10 * 60 * 1000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

/**
 * @returns
 */
export function onlineConvert(content, from, to) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/online/convert",
        data: {
            content,
            from,
            to,
        },
    });
}

/**
 * @returns
 */
export function channelSelect(appId, channels) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/channel/select",
        data: {
            appId,
            channels,
        },
    });
}

/**
 * @returns
 */
export function projectCreate(name, desc, platform, appId) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/project/create",
        data: {
            name,
            desc,
            platform,
            appId,
        },
    });
}

/**
 * @returns
 */
export function moduleConfig(appId, modules) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/module/config",
        data: {
            appId,
            modules,
        },
    });
}

/**
 * @returns
 */
export function projectList() {
    return service.request({
        method: "post",
        url: "v2/admin/translate/project/list",
        data: {},
    });
}

/**
 * @returns
 */
export function editTranslate(appId, key, content, currentChannel) {
    return service.request({
        method: "post",
        url: "v2/admin/translate/edit",
        data: {
            appId,
            key,
            content,
            currentChannel,
        },
    });
}
