import Http from './HttpService';
//Get
const getAll = () => {
    return Http.get('/employees');
};
//Get
const get = id => {
    return Http.get(`/employees/${id}`);
};
//PUT -  /Patch - partial update
const update = (id, employee) => {
    return Http.put(`/employees/${id}`, employee);
};
//POST
const create = employee => {
    return Http.post('/employees', employee);
};

//DELET
const remove = id => {
    return Http.delete(`/employees/${id}`)
};

export default {
    getAll,
    get,
    update,
    create,
    remove
};