export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const apiKey = process.env.NEXT_PUBLIC_API_KEY_PUBLIC
export const hash = process.env.NEXT_PUBLIC_HASH
export const ts = process.env.NEXT_PUBLIC_TS

export const generateUrl = (path, params = null) => {
    let paramsQuery = null
    if(params) paramsQuery = params.join('&')
    const url = `${baseUrl}/${path}?${paramsQuery ? `${paramsQuery}&` : ''}ts=${ts}&apikey=${apiKey}&hash=${hash}`

    return url
}