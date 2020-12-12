
export const getSocFromUrl = () => {
    const urlQueryString = window.location.search
    const urlParameters = new URLSearchParams(urlQueryString)
    return urlParameters.get('soc')
}

 export const getJobCode = () => {
    const requestUrl = `http://api.lmiforall.org.uk/api/v1/soc/code/${getSocFromUrl()}`

 }