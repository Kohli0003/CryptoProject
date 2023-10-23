
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders={
    'X-RapidAPI-Key': '20ab819f25msh3ab88b1c8582ce0p1c18d5jsn66261c69924a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl="https://coinranking1.p.rapidapi.com";

const createRequest = (url)=>({url,headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest('/coins')
        })
    })
});
export const {
    useGetCryptosQuery,
}=cryptoApi;