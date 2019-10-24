import React,{Component} from "react"
import Header from  '../../componets/Header/index'
import Filtrate from "../../componets/Filtrate/index"
import "./style.less"
//上部分数据
let icon_url_1 = [
    {
        name:"美食",
        url:"https://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png"
    },
    {
        name:"美团超市",
        url:"https://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png "
    },
    {
        name:"生疏鲜果",
        url:"https://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png"
    },
    {
        name:"美团专送",
        url:"https://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png"
    },
    {
        name:"快餐简餐",
        url:"https://p1.meituan.net/jungle/83bfbcf07221cb1ccbcd9114e81ec7ac9209.png"
    },
]
//下部分数据
let icon_url_2 = [
    {
        name:"下午茶",
        url:"https://p1.meituan.net/jungle/a2a306c5467aba7fac8d7410d161f8db9364.png"
    },
    {
        name:"汉堡披萨",
        url:"https://p0.meituan.net/jungle/58b60a312cf86f3a3afc4c96ff0e53438774.png"
    },
    {
        name:"家常菜",
        url:"https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png"
    },
    {
        name:"小吃馆",
        url:"https://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png"
    },
    {
        name:"鲜花蛋糕",
        url:"https://p1.meituan.net/jungle/dfd03fd91f640682c16179ba85837f739679.png"
    },
]



class Home extends Component{
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        //子分类图标
        return(
            <div className="Home">
                <Header></Header>
                <div className="ClassList">
                    {icon_url_1.map((item,key)=>{
                        return(
                            <div className="box" key={key}>
                                <div className="image">
                                    <img src={item.url} alt=""/>
                                </div>
                                <div className="text">{item.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="ClassList">
                    {icon_url_2.map((item,key)=>{
                        return(
                            <div className="box" key={key}>
                                <div className="image">
                                    <img src={item.url} alt=""/>
                                </div>
                                <div className="text">{item.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="Filtrate">
                    <div className="Title_text">—— 附近商家 ——</div>
                    <Filtrate/>
                </div>
            </div>
        )
    }
}

export default  Home

