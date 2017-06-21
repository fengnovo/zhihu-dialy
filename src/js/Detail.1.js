import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {imgUrl, changeTime} from './util'
import user from '../imgs/user.png' 

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stories: [],
            others: [],
            short: [],
            long: [],
            loading: false,
            content: ''
        }
        this.date = null;
        this.calling = true
        this.renderList = this.renderList.bind(this)
        this.renderThemes = this.renderThemes.bind(this)
        this.renderShortComment = this.renderShortComment.bind(this)
        this.renderLongComment = this.renderLongComment.bind(this)
        
    }

    componentDidMount () {
        this.setState({
            loading: true,
        })
        fetch(`http://111.230.139.105/api/zhihu/news/${this.props.match.params.id}`)
            .then(res => res.json())
            .then((data)=>{
                // console.log(data);
                    // if(data.css){
                    //     $('<link type="text/css" rel="stylesheet" href='+data.css+' />').appendTo('head'); 
                    //     setTimeout(()=>{
                    //         this.setState({
                    //             // loading: false
                    //         })
                    //     },5000)
                    // }
                    var _html = '';
                    if(data.image){
                        _html += '<div class="banner" style="background-size: cover;background-image:url('+imgUrl(data.image)+')">'
                                +'<span class="title">'+data.title+'</span>'
                                +'</div>';
                    }
                    data.body = data.body.replace(/http:\/\/pic1.zhimg.com/g,'http://111.230.139.105:9999')
                    data.body = data.body.replace(/https:\/\/pic1.zhimg.com/g,'http://111.230.139.105:9999')
                    data.body = data.body.replace(/http:\/\/pic2.zhimg.com/g,'http://111.230.139.105:9999')
                    data.body = data.body.replace(/https:\/\/pic2.zhimg.com/g,'http://111.230.139.105:9999')
                    data.body = data.body.replace(/http:\/\/pic3.zhimg.com/g,'http://111.230.139.105:9999')
                    data.body = data.body.replace(/https:\/\/pic3.zhimg.com/g,'http://111.230.139.105:9999')
                    data.body = data.body.replace(/http:\/\/pic4.zhimg.com/g,'http://111.230.139.105:9999')
                    data.body = data.body.replace(/https:\/\/pic4.zhimg.com/g,'http://111.230.139.105:9999')
                    _html += '<div class="content-pic" id="content-pic">'+data.body+'</div>';
                    this.setState({
                        content: _html,
                        loading: false
                    })
                
            })

        fetch('http://111.230.139.105/api/zhihu/themes')
            .then(res => res.json())
            .then((data)=>{
                console.log(data.others);
                this.setState({
                    others: data.others
                })
            })
        
        fetch(`http://111.230.139.105/api/zhihu/story/${this.props.match.params.id}/short-comments`)
            .then(res => res.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    short: data.comments
                })
            })
        fetch(`http://111.230.139.105/api/zhihu/story/${this.props.match.params.id}/long-comments`)
            .then(res => res.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    long: data.comments
                })
            })


        
        
    }

    renderShortComment(){
		let comments = this.state.short;
        return comments.map((item,i) => <li className="p-5 waves-effect" key={i}>
									<img src={imgUrl(item.avatar)} alt={item.author} />
									<div className="m-l-7">
										<span className="name">{item.author}</span>
										<p className="m-r-1">{item.content}</p>
										<span className="time">{changeTime(item.time)}</span>
									</div>
								</li>)
	}

    renderLongComment () {
        let comments = this.state.long;
        return comments.map((item,i) => <li className="p-5 waves-effect" key={i}>
									<img src={imgUrl(item.avatar)} alt={item.author} />
									<div className="m-l-7">
										<span className="name">{item.author}</span>
										<p className="m-r-1">{item.content}</p>
										<span className="time">{changeTime(item.time)}</span>
									</div>
								</li>)
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

    renderThemes () {
        return this.state.others.map((item,i)=>{
            return  <a className="mdl-navigation__link" href="" key={i}>{item.name}</a>
        })
    }


    render() {
        return (
            <div id="container">
                <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600" id="header">
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
                <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50" id="drawer">
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
                    <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800 m-b-10">
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>首页</a>
                    {/*<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
                    <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>*/}
                    { this.state.others.length > 0 ? this.renderThemes() : <div className="mdl-spinner mdl-js-spinner is-active"></div>}
                    </nav>
                </div>
                    <main className="mdl-layout__content detail-content-test mdl-cell">
                        <div className="mdl-grid">
                            <div className="mdl-cell--8-col">
                                <div className="demo-back">
                                    <a onClick={()=>{window.history.back()}} className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" title="go back" role="button">
                                        <i className="material-icons" role="presentation">arrow_back</i>
                                    </a>
                                </div>
                                <div className="demo-blog__posts mdl-grid">
                                    <div className="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
                                        {this.state.loading ? <div className="loading-pos"><div className="mdl-spinner mdl-js-spinner is-active"></div></div> : <div id="detail-content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>} 
                                    </div>
                                </div>
                            </div>
                                <div className="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--3-col detail-comment-test">
                                    <span>评论</span>
                                    <ul id="comment-content">
                                        {this.renderShortComment()}
                                        {this.renderLongComment()}
                                    </ul>
                                </div>
                        </div>
                    </main>
                   
                </div>
            </div>
        )
    }
}

export default Detail;