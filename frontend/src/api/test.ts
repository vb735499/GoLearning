const _get = async () =>{
    return await fetch('/query')
    .then((response) => response.clone())
    .then((response) => response.clone().json())
    .then((data) => {
        console.log(data)
        return data;
    })
    .catch(console.error);
}
const test = {
    _get
}
export default test;