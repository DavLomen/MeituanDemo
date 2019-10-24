import React,{Component} from "react"
import './style.css'
import {Icon} from "antd";



//搜索搜索框
function Search(props){
    return(
        <div className="Search">
            <div className="location">
                <Icon className="location_icon" type="environment" />
                <span className="loction_text">{props.obj.address}</span>
            </div>
            <div className="Search_Input">
                <Icon className="Search_icon" type="search" />
                <input type="text" placeholder="请输入商家或者商品名称"/>
            </div>
        </div>
    )

}

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address:"定位中..."
        }
    }
    render() {
        return(
            <div className="Header">
                <Search obj={this.state}/>
            </div>
        )
    }
}



export default Header
