const _get = async () =>{
    return await fetch('/api/query')
    .then((response) => response.clone())
    .then((response) => {
        return response.clone().json();
    })
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch(console.error);
}
const APIService = {
    _get
}
export default APIService;