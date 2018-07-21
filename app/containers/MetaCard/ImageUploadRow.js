/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import XInput from '../XForm/XInput'

import {Row, Col, Upload, message, Icon, Spin} from 'antd'


import helper from '../../utils/helper'

import api from '../../utils/api'

import avatar_default from './assets/ava.png'
export default class ImageUploadRow extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      uploading: false,
    }
  }

  render() {

    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin/>;
    const loading = (<Spin indicator={antIcon}/>)
    const self = this;
    const props = {
      name: 'file',
      action: api.upload,
      multiple: false,
      showUploadList: false,
      data: {
        token: this.props.token
      },
      onChange(info) {

        if (info.file.status == 'uploading') {
          self.setState({
            uploading: true
          })
        }
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
          self.setState({
            uploading: false
          })
        }
        if (info.file.status === 'done') {
          message.success(`上传成功!`);
          const avatar = info.file.response.result;


          self.props.changeAvatar(avatar)

        } else if (info.file.status === 'error') {
          message.error(`上传失败`);
        }
      },
    };

    const styles = {
      row: {
        fontSize: 14,
        lineHeight: '32px',
        marginBottom: 12
      },
      selectContainer: {
        width: '100%',
        paddingLeft: 12,
        height: '100%'
      },
      label: {
        fontSize: 14,
        lineHeight: '72px',
        textAlign: 'right'
      },
      required: {
        color: 'red'
      },
      input: {
        width: '100%',
        height: '100%',
        border: '1px solid #e6e6e6',
        paddingLeft: 12
      },
      img_wrapper: {
        height: 72,
        margin: 0,
        padding: 0,
        width: 72,
        position: 'relative'
      },
    }

    return (
      <Row style={styles.row}>
        <Col span={6} style={styles.label}>
          {this.props.label}
        </Col>
        <Col span={12} className="fh" style={{paddingLeft: 24}}>

          <div style={styles.img_wrapper}>

            <img className="form-avatar-preview" src={this.props.avatar || avatar_default}/>
            <div className="img-upload-overlay">

              <Upload {...props}>
                <Icon type="camera" style={{
                                    display: this.state.uploading ? 'none' : 'block'
                                }}/>
              </Upload>
              {this.state.uploading ? loading : ''}

            </div>
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    )
  }
}
