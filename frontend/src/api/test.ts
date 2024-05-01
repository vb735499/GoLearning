const _get = async () =>{
    return await fetch('/api')
    .then((response) => response.clone().json())
    .then((data) => {
        return data.message;
    })
    .catch(console.error);
}

const test = {
    _get
}
export default test;
