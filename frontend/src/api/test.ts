const _get = async () =>{
    return await fetch('/api/data')
    .then((response) => response.clone())
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
