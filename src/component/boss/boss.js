import React, {Component} from 'react'
import axios from 'axios'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Boss extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('user/list', {
      params: {
        type: 'genius'
      }
    }).then(res => {
      if (res.data.code === 0) {
        this.setState({
          data: res.data.data
        })
      }
    })
  }
  render() {
    console.log(this.state)
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {this.state.data.map(v => (
          v.avatar ? <Card key={v._id}>
            <Card.Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            />
            <Card.Body>
              <div>{v.desc.split('\n').map(v => (
                <p key={v}>{v}</p>
              ))}</div>
            </Card.Body>
          </Card> : null
        ))}
      </WingBlank>
    )
  }
}

export default Boss