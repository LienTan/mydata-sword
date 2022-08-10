import React, { PureComponent } from 'react';
import { Form, Input, Card, Button } from 'antd';
import { connect } from 'dva';
import Panel from '../../../components/Panel';
import styles from '../../../layouts/Sword.less';
import { ENV_DETAIL, ENV_SUBMIT } from '../../../actions/env';

const FormItem = Form.Item;

@connect(({ env, loading }) => ({
  env,
  submitting: loading.effects['env/submit'],
}))
@Form.create()
class EnvEdit extends PureComponent {
  componentWillMount() {
    const {
      dispatch,
      match: {
        params: { id },
      },
    } = this.props;
    dispatch(ENV_DETAIL(id));
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      dispatch,
      match: {
        params: { id },
      },
      form,
    } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const params = {
          id,
          ...values,
        };
        console.log(params);
        dispatch(ENV_SUBMIT(params));
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      env: { detail },
      submitting,
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const action = (
      <Button type="primary" onClick={this.handleSubmit} loading={submitting}>
        提交
      </Button>
    );

    return (
      <Panel title="修改" back="/manage/env" action={action}>
        <Form hideRequiredMark style={{ marginTop: 8 }}>
          <Card className={styles.card} bordered={false}>
            <FormItem {...formItemLayout} label="环境名称">
              {getFieldDecorator('envName', {
                rules: [
                  {
                    required: true,
                    message: '请输入环境名称',
                  },
                ],
                initialValue: detail.envName,
              })(<Input placeholder="请输入环境名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="前置路径">
              {getFieldDecorator('envPrefix', {
                rules: [
                  {
                    required: true,
                    message: '请输入前置路径',
                  },
                ],
                initialValue: detail.envPrefix,
              })(<Input placeholder="请输入前置路径" />)}
            </FormItem>
            {/* <FormItem {...formItemLayout} label="全局header参数">
              {getFieldDecorator('globalHeaders', {
                rules: [
                  {
                    required: true,
                    message: '请输入全局header参数',
                  },
                ],
                initialValue: detail.globalHeaders,
              })(<Input placeholder="请输入全局header参数" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="全局变量">
              {getFieldDecorator('globalParams', {
                rules: [
                  {
                    required: true,
                    message: '请输入全局变量',
                  },
                ],
                initialValue: detail.globalParams,
              })(<Input placeholder="请输入全局变量" />)}
            </FormItem> */}
          </Card>
        </Form>
      </Panel>
    );
  }
}

export default EnvEdit;
