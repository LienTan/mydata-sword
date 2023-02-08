export const TASK_NAMESPACE = 'task';
/** 数据提供者 */
export const TASK_TYPE_PRODUCER = 1;
/** 数据获取者 */
export const TASK_TYPE_CONSUMER = 2;
/** 订阅数据变更 */
export const TASK_SUBSCRIBED = 1;

export function TASK_LIST(payload) {
  return {
    type: `${TASK_NAMESPACE}/fetchList`,
    payload,
  };
}

export function TASK_DETAIL(id) {
  return {
    type: `${TASK_NAMESPACE}/fetchDetail`,
    payload: { id },
  };
}

export function TASK_CLEAR_DETAIL() {
  return {
    type: `${TASK_NAMESPACE}/clearDetail`,
    payload: {},
  };
}

export function TASK_SUBMIT(payload) {
  return {
    type: `${TASK_NAMESPACE}/submit`,
    payload,
  };
}

export function TASK_REMOVE(payload) {
  return {
    type: `${TASK_NAMESPACE}/remove`,
    payload,
  };
}

export function TASK_INIT() {
  return {
    type: `${TASK_NAMESPACE}/fetchInit`,
    payload: {},
  };
}

export function TASK_LOG_LIST(payload) {
  return {
    type: `${TASK_NAMESPACE}/fetchTaskLogList`,
    payload,
  };
}
