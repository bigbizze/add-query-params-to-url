export type ParamObject = {
    [key: string]: any
}
export default function add_query_params_to_url(params: ParamObject, url?: string) {
    return `${url}?${Object.entries(params).map(x => (
        `${x[0]}=${encodeURIComponent(x[1])}`
    )).join("&")}`;
}
