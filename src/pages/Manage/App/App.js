import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Col, Form, Input, Row, message, Modal, Divider, Tag } from 'antd';
import Panel from '../../../components/Panel';
import { API_LIST } from '../../../actions/api';
import Grid from '../../../components/Sword/Grid';

const FormItem = Form.Item;

@connect(({ api, loading }) => ({
  api,
  loading: loading.models.api,
}))
@Form.create()
class Api extends PureComponent {
  // ============ 查询 ===============
  handleSearch = params => {
    const { dispatch } = this.props;
    dispatch(API_LIST(params));
  };

  // ============ 查询表单 ===============
  renderSearchForm = onReset => {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
        <Col md={6} sm={24}>
          <FormItem label="查询名称">
            {getFieldDecorator('apiName')(<Input placeholder="查询名称" />)}
          </FormItem>
        </Col>
        <Col>
          <div style={{ float: 'right' }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={onReset}>
              重置
            </Button>
          </div>
        </Col>
      </Row>
    );
  };

  render() {
    const code = 'api';

    const {
      form,
      loading,
      api: { data },
    } = this.props;

    const columns = [
      {
        title: '应用编号',
        dataIndex: 'appCode',
      },
      {
        title: '应用名称',
        dataIndex: 'appName',
      },
    ];

    return (
      <Panel>
        <Grid
          code={code}
          form={form}
          onSearch={this.handleSearch}
          renderSearchForm={this.renderSearchForm}
          loading={loading}
          data={data}
          columns={columns}
        />
      </Panel>
    );
  }
}
export default Api;
