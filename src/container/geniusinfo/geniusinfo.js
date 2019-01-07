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

class Geniusinfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
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
        <NavBar mode="dark" icon={<Icon type="left" />} rightContent={<Icon key="1" type="ellipsis" />}>牛人完善信息</NavBar>
        <AvatarSelector
          selectAvatar={imgname => {
            this.setState({
              avatar:imgname
            })
          }}
        />
        <List>
          <InputItem onBlur={v => this.handleChange('title',v)}>求职岗位</InputItem>
          <TextareaItem
            rows={3}
            autoHeight
            title='个人简介'
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

export default Geniusinfo