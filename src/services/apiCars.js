import { $instance } from './baseUrl'

export const getCarsRequest = async () => {
    const {data} = await $instance.get("/adverts");
    return data;
};

