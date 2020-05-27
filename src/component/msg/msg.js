/*
 * @Author: zhuwd
 * @Date: 2019-02-02 21:00:01
 * @LastEditors: zhuwd
 * @LastEditTime: 2020-05-13 10:45:30
 * @FilePath: /react-app/src/component/msg/msg.js
 */
import React from 'react'
import { List, Badge } from 'antd-mobile'
import { connect } from 'react-redux'

@connect(
  state => state
)

class Msg extends React.Component{
  getLastItem(arr) {
    return arr[arr.length-1]
  }
  render() {
    const Item = List.Item
    const Brief = Item.Brief
    const userid = this.props.user._id
    const userInfo = this.props.chat.users
    // 按照聊天用户分组, 根据chatid
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v=> {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    console.log(Object.values(msgGroup))
    const chatList = Object.values(msgGroup).sort((a, b) => {
      const a_last = this.getLastItem(a).create_time
      const b_last = this.getLastItem(b).create_time
      return b_last - a_last
    })
    console.log(chatList)
    return (
      <div>
        <List>
          {chatList.map(v=>{
            const lastItem = this.getLastItem(v)
            const targetId = v[0].from === userid ? v[0].to : v[0].from
            const unreadNum = v.filter(v=>!v.read && v.to===userid).length
            const name = userInfo[targetId] ? userInfo[targetId].name : ''
            const avatar = userInfo[targetId] ? userInfo[targetId].avatar : ''
            return (
              <List key={lastItem._id}>
                <Item
                  extra={<Badge text={unreadNum}/>}
                  thumb={require(`../img/${avatar}.png`)}
                  arrow='horizontal'
                  onClick={() => {
                    this.props.history.push(`/chat/${targetId}`)
                  }}
                >
                  <Brief>{name}</Brief>
                  {lastItem.content}
                </Item>
              </List>
            )
          })}
        </List>
      </div>
    )
  }
}

export default Msg
