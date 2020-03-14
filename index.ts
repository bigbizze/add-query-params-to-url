type ParamObject = {
    [key: string]: any
}

exports.addParams = function (params: ParamObject, url?: string) {
    return `${url}?${Object.entries(params).map(x => (
        `${x[0]}=${encodeURIComponent(x[1])}`
    )).join("&")}`;
};
