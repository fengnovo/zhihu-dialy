import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import user from '../imgs/user.png' 
import {condeurl} from './util'

class CnodeHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stories: [],
            others: []
        }
        this.date = null;
        this.calling = true
        this.tabId = this.props.match.params.id || 'all'
        // this.renderList = this.renderList.bind(this)
        // this.renderThemes = this.renderThemes.bind(this)
        // this.s = this.s.bind(this)
    }

    componentDidMount () {
        fetch(condeurl+'/topics?tab='+this.tabId)
            .then(res => res.json())
            .then((data)=>{
                console.log(data.data);
                // this.setState({
                //     stories: data.stories
                // })
                // this.date = data.date
                // this.calling = false
                
            })

        
        
    }

    renderList () {
        return this.state.stories.map((item,i)=>{
            return  <li key={i}>
                <Link to={"/detail/"+item.id} >
                    <img src={item.images[0]} />
                    <span className="title">{item.title}</span>
                </Link>
            </li>
        })
    }

    s() {
        var _this = this;
		window.onscroll = function(e){
            var e =e || window.event;
			var top = document.documentElement.scrollTop||document.body.scrollTop;
            console.log(!_this.calling);
            console.log(top)
                    console.log(document.body.scrollHeight)
			if(!_this.calling){
				// console.log($('#container').height()) 
				if((top + 900)> document.body.scrollHeight){ 
                    console.log(top)
                    console.log(document.body.scrollHeight)
					_this.calling = true
                    // console.log(top);
                    fetch('http://111.230.139.105/api/zhihu/news/before/' + _this.date)
                    .then(res => res.json())
                    .then((data)=>{
                        console.log(data.stories);
                        console.log(_this)
                        _this.date = data.date;
                        _this.setState({
                            stories: _this.state.stories.concat(data.stories)
                        })
                        _this.calling = false
                    })
				}
			}  
		};
	}

    componentWillUnmount (){
		window.onscroll = null
	}

    render() {
        return (
            <div id="container">
                <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600" id="header">
                    <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">
                        <img style={{width:'4rem'}} src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
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
                    <Link className="mdl-navigation__link"  to={"/cnodeHome/all"} ><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>首页</Link>
                    <Link className="mdl-navigation__link"  to={"/cnodeHome/good"} >精华</Link>
                    <Link className="mdl-navigation__link"  to={"/cnodeHome/share"} >分享</Link>
                    <Link className="mdl-navigation__link"  to={"/cnodeHome/ask"} >问答</Link>
                    <Link className="mdl-navigation__link"  to={"/cnodeHome/job"} >招聘</Link>
                    <Link className="mdl-navigation__link"  to={"/cnodeHome/dev"} >客户端测试</Link>
                    </nav>
                </div>
                <main className="mdl-layout__content mdl-color--grey-100">
                    <div className="mdl-grid demo-content content-list">
                        { this.state.stories.length > 0 ? <ul>{this.renderList()}</ul> : null}
                        <div className="loading-pos"><div className="mdl-spinner mdl-js-spinner is-active"></div></div>
                    </div>
                </main>
                </div>

               
            </div>
        )
    }
}

export default CnodeHome;