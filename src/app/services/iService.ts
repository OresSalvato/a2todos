export interface IService<T> {
    getList();
    create(object: T);
    edit();
    update(index: number, value: T);
    delete(index: number);
}