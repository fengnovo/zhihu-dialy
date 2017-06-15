import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import user from '../imgs/user.png' 
import dog from '../imgs/dog.png'


class A1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stories: []
        }
        this.renderList = this.renderList.bind(this)
    }

    componentDidMount () {
        fetch('http://111.230.139.105/api/zhihu//news/latest')
        .then(res => res.json())
        .then((data)=>{
            console.log(data.stories);
            this.setState({
                stories: data.stories
            })
        })
    }

    renderList () {
        return this.state.stories.map((item,i)=>{
            item.images[0] = item.images[0].replace('https://pic1.zhimg.com','http://111.230.139.105:9999')
            item.images[0] = item.images[0].replace('https://pic2.zhimg.com','http://111.230.139.105:9999')
            item.images[0] = item.images[0].replace('https://pic3.zhimg.com','http://111.230.139.105:9999')
            item.images[0] = item.images[0].replace('https://pic4.zhimg.com','http://111.230.139.105:9999')
            return  <li key={i}>
                <a href="http://www.baidu.com">
                    <img src={item.images[0]} />
                    <span className="title">{item.title}</span>
                </a>
            </li>
        })
    }

    render() {
        return (
            <div>
                <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
                    <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">
                        <img style={{width:'4rem'}} src="http://static.daily.zhihu.com/img/new_home_v3/mobile_top_logo.png" />
                        <span style={{'marginLeft':'1rem'}}>知乎日报</span>
                    </span>
                    <div className="mdl-layout-spacer"></div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                        <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                        <input className="mdl-textfield__input" type="text" id="search" />
                        <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                        </div>
                    </div>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
                        <i className="material-icons">more_vert</i>
                    </button>
                    <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
                        <li className="mdl-menu__item">About</li>
                        <li className="mdl-menu__item">Contact</li>
                        <li className="mdl-menu__item">Legal information</li>
                    </ul>
                    </div>
                </header>
                <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
                    <header className="demo-drawer-header">
                    <img src={user} className="demo-avatar" />
                    <div className="demo-avatar-dropdown">
                        <span>fengnoku@gmail.com</span>
                        <div className="mdl-layout-spacer"></div>
                        <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                        <i className="material-icons" role="presentation">arrow_drop_down</i>
                        <span className="visuallyhidden">Accounts</span>
                        </button>
                        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
                        <li className="mdl-menu__item">退出</li>
                        </ul>
                    </div>
                    </header>
                    <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
                    <div className="mdl-layout-spacer"></div>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span className="visuallyhidden">Help</span></a>
                    </nav>
                </div>
                <main className="mdl-layout__content mdl-color--grey-100">
                    <div className="mdl-grid demo-content content-list">
                        {/*<div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                            <div className="mdl-card__title mdl-card--expand mdl-color--teal-300" style={{'backgroundImage': `url(${dog})`}}>
                                <h2 className="mdl-card__title-text">Updates</h2>
                            </div>
                            <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                                Non dolore elit adipisicing ea reprehenderit consectetur culpa.
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
                            </div>
                        </div>

                       <ul>
                            <li>
                                <a href="http://www.baidu.com">
                                    <img src="https://pic2.zhimg.com/v2-b600a2ff775840e1046f50fc986d42bd.jpg" />
                                    <span className="title">是，现在就是靠「信念」赚钱的时代</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic4.zhimg.com/v2-6f1685b29850752e3768b7e0850fb013.jpg" />
                                    <span className="title">失忆的人会忘了自己是谁，为何却忘不了桌子仍然是桌子？</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic3.zhimg.com/v2-93cf4478d99b7e19db93173a1bf5229e.jpg" />
                                    <span className="title">「互联网女皇」发布了每年必读的报告，我们帮你划了重点</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic4.zhimg.com/v2-3c72c22e77f54c3c635bbe442a69c7ff.jpg" />
                                    <span className="title">因为「猪队友」，3 个月的案子硬生生拖了 5 年</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic4.zhimg.com/v2-f815bd5367595cbf6cbb23ba9b56babb.jpg" />
                                    <span className="title">瞎扯 · 如何正确地吐槽</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic4.zhimg.com/v2-963e46d64d8794b86c6d857cf8b2afd7.jpg" />
                                    <span className="title">回过头看这高中课文的一段细节，不禁冒出冷汗</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic2.zhimg.com/v2-886f63ec04e8d982d3641c0d542ddd59.jpg" />
                                    <span className="title">奥巴马以公司的名义买了套房，这个小手段很聪明啊</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic1.zhimg.com/v2-56334cb8751946f8fb5f6e321b43d334.jpg" />
                                    <span className="title">职场头两年 · 工作能力强的人有哪些共同特征？</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic2.zhimg.com/v2-5551926d40b7aed540033bafc7713639.jpg" />
                                    <span className="title">汉朝人民吃的「鲊」，不就是现在的寿司嘛</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic4.zhimg.com/v2-38be49d654dd0b69e14c6c9f5f111f43.jpg" />
                                    <span className="title">回过头看这高中课文的一段细节，不禁冒出冷汗</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic1.zhimg.com/v2-625140220d9676e473630d77a45ff1d8.jpg" />
                                    <span className="title">历史上美国也造过高铁，最后却失败了……</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic1.zhimg.com/v2-d8cf6cde5762903406e77435ee0c2718.jpg" />
                                    <span className="title">他画得那么烂，却让我止不住泪</span>
                                </a>
                            </li>
                            <li>
                                <a href="/story/9454410">
                                    <img src="https://pic4.zhimg.com/v2-963e46d64d8794b86c6d857cf8b2afd7.jpg" />
                                    <span className="title">10 分钟，带你看完 40 年来的「个人电脑进化史」</span>
                                </a>
                            </li>
                        </ul>
                        */}
                        { this.state.stories.length > 0 ? <ul>{this.renderList()}</ul> : null}
                    </div>
                </main>
                </div>

               
            </div>
        )
    }
}

export default A1;