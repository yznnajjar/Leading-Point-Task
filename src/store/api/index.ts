import {
    createApi,
    fetchBaseQuery,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import type { RootState } from '../index';


const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.DASHBOARD_API,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).user.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    
    return result;
};

export const dashboardAPI = createApi({
    reducerPath: 'dashboardAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});

export default dashboardAPI;
