import { stringify } from 'qs';
import func from '../utils/Func';
import request from '../utils/request';

export async function list(params) {
  return request(`/api/mydata-manage/app/list?${stringify(params)}`);
}

export async function submit(params) {
  return request('/api/mydata-manage/app/submit', {
    method: 'POST',
    body: params,
  });
}

export async function detail(params) {
  return request(`/api/mydata-manage/app/detail?${stringify(params)}`);
}

export async function remove(params) {
  return request('/api/mydata-manage/app/remove', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function select(params) {
  return request(`/api/mydata-manage/app/select?${stringify(params)}`);
}

export async function syncTask(params) {
  return request(`/api/mydata-manage/app/syncTask?${stringify(params)}`, {
    method: 'PUT'
  });
}