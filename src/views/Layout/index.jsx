import React, { Component } from 'react'
//导入自己封装sass.css文件
import styles from './index.module.scss'
//按需导入router
import { Route, Redirect } from 'react-router-dom'
//导入TabBar插件
import { TabBar } from 'antd-mobile'

// 导入子组件
import Home from '../Home'
import HouseList from '../HouseList'
import Info from '../Info'
import My from '../My'


//默认导出class类组件
export default class Index extends Component {
    //react的数据
  state = {
    selectedTab: '/layout/home'
  }

  // tabs数组
  TABS = [
    {
      title: '首页',
      icon: 'icon-index',
      path: '/layout/home'
    },
    {
      title: '找房',
      icon: 'icon-findHouse',
      path: '/layout/houselist'
    },
    {
      title: '资讯',
      icon: 'icon-info',
      path: '/layout/info'
    },
    {
      title: '我的',
      icon: 'icon-my',
      path: '/layout/my'
    }
  ]

  /**
   * 因为我们的内容变了，那么底部的tabBar的选中状态就应该同步过来
   * @param {*} prevProps
   * 重新渲染dom后调用的钩子
   */
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  // 渲染底部的tabBar
  renderTabBar = () => {
    return (
      <TabBar tintColor="#21B97A" noRenderContent>
        {this.TABS.map(item => {
          return (
            <TabBar.Item
              title={item.title}
              key={item.path}
              icon={<i className={`iconfont ${item.icon}`} />}
              selectedIcon={<i className={`iconfont ${item.icon}`} />}
              selected={this.state.selectedTab === item.path}
              onPress={() => {
                // this.setState({
                //   selectedTab: item.path
                // })

                // 切换路由，让上面的内容发生变化
                if (this.state.selectedTab === item.path) 
                    return
                this.props.history.push(item.path)
              }}
            ></TabBar.Item>
          )
        })}
      </TabBar>
    )
  }

  //渲染dom的钩子
  render() {
    return (
      <div className={styles.layout}>
        {/* 上面是变化的部分，使用嵌套路由 */}
        <Route path="/layout/home" component={Home} />
        <Route path="/layout/houselist" component={HouseList} />
        <Route path="/layout/info" component={Info} />
        <Route path="/layout/my" component={My} />
        <Redirect exact from="/layout" to="/layout/home" />

        {/* 下面是tabBar */}
        <div className={styles.tabbar}>{this.renderTabBar()}</div>
      </div>
    )
  }
}
