import '../../App.scss'
import avatar from '../../assets/images/bozai.png'
import {useEffect, useRef, useState} from "react";
import _ from 'lodash'
import classNames from "classnames";
import {v4 as uuidv4} from 'uuid';
import dayjs from "dayjs";
import axios from "axios";
/* eslint-disable react/prop-types */

const useGetList = () => {
  // 获取接口数据
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    const getList = async () => {
      const {data} = await axios.get('http://localhost:3004/list')
      setCommentList(data)
    }
    getList()
  }, [])
    return { commentList, setCommentList}
}
function Item ({ item, onDel }) {
  return(
    <div className="reply-list">
      {/* 评论项 */}
      <div className="reply-item">
        {/* 头像 */}
        <div className="root-reply-avatar">
          <div className="bili-avatar">
            <img
              className="bili-avatar-img"
              alt=""
            />
          </div>
        </div>

        <div className="content-wrap">
          {/* 用户名 */}
          <div className="user-info">
            <div className="user-name">{item.user.uname}</div>
          </div>
          {/* 评论内容 */}
          <div className="root-reply">
            <span className="reply-content">{item.content}</span>
            <div className="reply-info">
              {/* 评论时间 */}
              <span className="reply-time">{item.ctime}</span>
              {/* 评论数量 */}
              <span className="reply-time">点赞数:{item.like}</span>
              {item.user.uid === user.uid &&
                <span className="delete-btn" onClick={() => onDel(item.rpid)}>删除</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257', // 用户头像
  avatar, // 用户昵称
  uname: '黑马前端',
}
// 导航 Tab 数组
const tabs = [{type: 'hot', text: '最热'}, {type: 'time', text: '最新'},]

const Commons = () => {

  const {commentList, setCommentList} = useGetList();
  const [tagState, setTagState] = useState('hot')
  const [content, setContent] = useState('')
  const inputRef = useRef(null)
  const handleDel = (rpid) => {
    setCommentList(commentList.filter(item => item.rpid !== rpid))
  }
  const handleTabChange = (type) => {
    if (type === 'hot') {
      // 点赞数
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      // 创建时间
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
    setTagState(type)
  }
  // useRef()
  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidv4(),
        user: {
          uid: '3608010511',
          avatar: '',
          uname: '许嵩',
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'),
        like: 881,
      }
    ])
    setContent('')
    inputRef.current.focus()
  }
  return (<div className="app">
    {/* 导航 Tab */}
    <div className="reply-navigation">
      <ul className="nav-bar">
        <li className="nav-title">
          <span className="nav-title-text">评论</span>
          {/* 评论数量 */}
          <span className="total-reply">{10}</span>
        </li>

        <li className="nav-sort">
          {/* 高亮类名： active */}
          {tabs.map((item, index) => (
            <span key={index} className={classNames('nav-item', {active: tagState === item.type})}
                  onClick={() => handleTabChange(item.type)}>{item.text}</span>))}
        </li>


      </ul>
    </div>

    <div className="reply-wrap">
      {/* 发表评论 */}
      <div className="box-normal">
        {/* 当前用户头像 */}
        <div className="reply-box-avatar">
          <div className="bili-avatar">
            <img className="bili-avatar-img" src={avatar} alt="用户头像"/>
          </div>
        </div>
        <div className="reply-box-wrap">
          {/* 评论框 */}
          <textarea
            value={content}
            ref={inputRef}
            onChange={(e) => setContent(e.target.value)}
            className="reply-box-textarea"
            placeholder="发一条友善的评论"
          />
          {/* 发布按钮 */}
          <div className="reply-box-send">
            <div className="send-text" onClick={handlePublish}>发布</div>
          </div>
        </div>
      </div>
      {/* 评论列表 */}
      {commentList.map(item => <Item key={item.rpid} item={item} onDel={handleDel}/>)}

    </div>
  </div>)
}

export default Commons
