import axios from 'axios';
import qs from 'query-string';
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';

export interface Application {
  id: string;
  number: number;
  name: string;
  contentType: 'img' | 'horizontalVideo' | 'verticalVideo';
  filterType: 'artificial' | 'rules';
  count: number;
  status: 'online' | 'offline';
  createdTime: string;
}

export interface ApplicationParams {
  page: number;
  size: number;
  param: Application;
}

export interface ApplicationListRes {
  list: Application[];
  total: number;
}

export function queryList(params: ApplicationParams) {
  return axios.get<Application>('/application/list', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}
