const _get = async () =>{
    return await fetch('/api/data')
    .then((response) => response.clone())
    .then((response) => response.clone().json())
    .then((data) => {
        console.log(data)
        return data;
        console.log("data.message:");
        console.log(data.message);
        return data.message;
    })
    .catch(console.error);
}
const test = {
    _get
}
export default test;