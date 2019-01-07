import React, {Component} from 'react'
import { List, InputItem, TextareaItem, Button, NavBar, Icon } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {update} from '../../redux/user.redux'

@connect(
  state => state.user,
  {update}
)

class BossInfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: ''
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}/> :null}
        <NavBar mode="dark" icon={<Icon type="left" />} rightContent={<Icon key="1" type="ellipsis" />}>BOSS完善信息</NavBar>
        <AvatarSelector
          selectAvatar={imgname => {
            this.setState({
              avatar:imgname
            })
          }}
        />
        <List>
          <InputItem onBlur={v => this.handleChange('title',v)}>招聘职位</InputItem>
          <InputItem onBlur={v => this.handleChange('company',v)}>公司名称</InputItem>
          <InputItem onBlur={v => this.handleChange('money',v)}>职位薪资</InputItem>
          <TextareaItem
            rows={3}
            autoHeight
            title='职位要求'
            onBlur={v => this.handleChange('desc',v)}/>
          <Button
            onClick={()=>{
              this.props.update(this.state)
            }}
            type='primary'>保存</Button>
        </List>
      </div>
    )
  }
}

export default BossInfo