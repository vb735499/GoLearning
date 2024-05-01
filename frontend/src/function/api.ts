const api = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    return data.message;
}

export default api;
