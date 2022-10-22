import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const respose = await httpRequest.get(path, options);
    return respose.data;
};

export default httpRequest;
