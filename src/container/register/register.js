import React, { Component } from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, Radio, WhiteSpace, Button} from 'antd-mobile'
class Register extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem
            onChange={v=>this.handleChange('user',v)}
          >用户名</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('pwd',v)}
          >密码</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('repeatpwd',v)}
          >确认密码</InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type==='genius'}
            onChange={()=>this.handleChange('type','genius')}
          >
            牛人
          </RadioItem>
          <RadioItem
            checked={this.state.type==='boss'}
            onChange={()=>this.handleChange('type','boss')}
          >
            BOSS
          </RadioItem>
          <WhiteSpace />
          <Button type='primary'>注册 </Button>
        </List>
      </div>
    )
  }
}

export default Register
