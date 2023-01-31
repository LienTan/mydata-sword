export const APP_NAMESPACE = 'app';

export function APP_LIST(payload) {
  return {
    type: `${APP_NAMESPACE}/fetchList`,
    payload,
  };
}

export function APP_DETAIL(id) {
  return {
    type: `${APP_NAMESPACE}/fetchDetail`,
    payload: { id },
  };
}

export function APP_CLEAR_DETAIL() {
  return {
    type: `${APP_NAMESPACE}/clearDetail`,
    payload: {},
  };
}

export function APP_SUBMIT(payload) {
  return {
    type: `${APP_NAMESPACE}/submit`,
    payload,
  };
}

export function APP_REMOVE(payload) {
  return {
    type: `${APP_NAMESPACE}/remove`,
    payload,
  };
}
