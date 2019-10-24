import React,{Component} from "react"
import "./style.less"
import {Icon} from "antd";



class Filtrate extends Component{
    componentDidMount(){
        let moduleList = document.getElementById("moduleList")
        this.setState({
            ModuleFrom_top:moduleList.getBoundingClientRect().y
        })
    }
    constructor(props){
        super(props)
        this.state = {
            Point_state:false,//综合筛选开关
            Top_Sall:false,//最高销量是否选中状态
            Distance:false,//距离是否选中状态
            ChoiceDetail:false,//筛选开关
            ModuleFrom_top:"",//组件到页面的距离
            TeseArray:[
                {name:"免配送费",id:0},
                {name:"0元起送",id:1},
                {name:"新商家",id:2},
                {name:"品牌商家",id:3},
                {name:"评论高分",id:4},
                {name:"跨天预定",id:5},
                {name:"支持发票",id:6},
            ],//商家特色列表
            priceArray:[
                {id:1,value:"20元以下"},
                {id:2,value:"20-40元"},
                {id:3,value:"40元以上"}
            ],//人均价格列表
            Discounts:[
                {
                    name:"优惠商家",
                    url:"https://p1.meituan.net/xianfu/68d64dd10b1498f5067a1c03e6d24869624.png",
                    id:1
                },
                {
                    name:"首单立减",
                    url:"https://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
                    id:2
                },
                {
                    name:"满减优惠",
                    url:"https://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
                    id:3
                },
                {
                    name:"进店领劵",
                    url:"https://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
                    id:4
                },
                {
                    name:"第二份半价",
                    url:"https://p0.meituan.net/xianfu/0c89ff7d86aa47827e62afa6d41a15f5535.png",
                    id:5
                },
                {
                    name:"满返代金劵",
                    url:"https://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
                    id:6
                },
                {
                    name:"折扣商品",
                    url:"https://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
                    id:7
                },
                {
                    name:"提前下单优惠",
                    url:"https://p0.meituan.net/xianfu/538a2adfab46a37ec42853aece765704603.png",
                    id:8
                },
                {
                    name:"满赠活动",
                    url:"https://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
                    id:9
                },
                {
                    name:"门店新客立减",
                    url:"https://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
                    id:10
                },
                {
                    name:"买赠活动",
                    url:"https://p1.meituan.net/xianfu/04d485a1b8e040bff21c02c19a9731d92048.png",
                    id:11
                },
                {
                    name:"减配送费",
                    url:"https://p0.meituan.net/xianfu/10d0777e47844ea90b89d23c01eabe3c1164.png",
                    id:12
                },
            ],//优惠活动
        }
        this.Point_State = this.Point_State.bind(this)
        this.Top_Sall = this.Top_Sall.bind(this)
        this.Distance = this.Distance.bind(this)
        this.Go_Filtrate  = this.Go_Filtrate.bind(this)
        this.onColse  = this.onColse.bind(this)
    }
    render() {
        let DialogHeight = window.innerHeight
        return(
            <div className="Filtrate_component">
                {/*遮蔽层开关设置*/}
                {this.state.Point_state || this.state.ChoiceDetail?
                    <div className="SynList" style={{height:DialogHeight + "px"}} onClick={this.onColse}></div>: ''}
                <div className="moduleList" id="moduleList">
                    <div className="module" onClick={this.Point_State}>综合排序
                        {this.state.Point_state?<Icon className="Icon" type="up" />:<Icon className="Icon" type="down" />}
                    </div>
                    <div className={`module ${this.state.Top_Sall?'adtive':''}`} onClick={this.Top_Sall}>销量最高</div>
                    <div className={`module ${this.state.Distance?'adtive':''}`}onClick={this.Distance}>距离最近</div>
                    <div className="module"onClick={this.Choice}>筛选<Icon className="Icon" type="filter" /></div>
                </div>
                {this.state.Point_state?<div className="PoiontList">
                    <div className="item">综合排序</div>
                    <div className="item">速度最快</div>
                    <div className="item">评分最高</div>
                    <div className="item">起送价最低</div>
                    <div className="item">配送费最低</div>
                    <div className="item">人均高到低</div>
                    <div className="item">人均低到高</div>
                </div>:''}
                {this.state.ChoiceDetail?
                    <div className="content">
                        <div className="ChoiceDetail">
                            {/*美团专送模块*/}
                            <div className="module_1">
                                <div className="ZhuanSong">
                                    <img src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/d57d2aa33312492bfbe3a8b0be5cbadd.png" alt=""/>
                                    美团专送
                                </div>
                            </div>
                            {/*商家特色模块*/}
                            <div className="module_2">
                                <div className="ShopTese">
                                    <div className="title">商家特色(可多选)</div>
                                    <div className="list">
                                        {this.state.TeseArray.map((item,key)=>{
                                            return(
                                                <div className="item" key={key}>{item.name}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/*人均价模块*/}
                            <div className="module_3">
                                <div className="title">人均价</div>
                                <div className="list">
                                    {this.state.priceArray.map((item,key)=>{
                                        return(
                                            <div className="item" key={key}>{item.value}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="module_4">
                                <div className="title">优惠活动(单选)</div>
                                <div className="list">
                                    {this.state.Discounts.map((item,key)=>{
                                        return(
                                            <div className="item" key={key}>
                                                <img src={item.url} alt=""/>
                                                {item.name}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="box">
                                <div className="btn_l">清除筛选</div>
                                <div className="btn_r">完成</div>
                            </div>
                        </div>
                    </div>
                    :''}
            </div>
        )
    }

    //综合排序
    Point_State(){
        let Point_state = !this.state.Point_state
        this.setState({
            Point_state:Point_state,
            Top_Sall:false,
            Distance:false,
            ChoiceDetail:false
        })
        document.body.parentNode.style.overflow = "hidden"
        this.Go_Filtrate(Point_state)
    }
//销量最高
    Top_Sall(){
        this.setState({
            Top_Sall:true,
            Point_state:false,
            Distance:false,
            ChoiceDetail:false
        })
    }
//距离最近
    Distance(){
        this.setState({
            Distance:true,
            Top_Sall:false,
            Point_state:false,
            ChoiceDetail:false
        })
    }
    //筛选
    Choice = ()=>{
        let ChoiceDetail = !this.state.ChoiceDetail
        this.setState({
            ChoiceDetail:ChoiceDetail,
            Top_Sall:false,
            Point_state:false,
            Distance:false
        })
        this.Go_Filtrate(ChoiceDetail)
    }

    //点击跳到节点坐标
    Go_Filtrate(state){
        if(state){
            document.documentElement.scrollTop = this.state.ModuleFrom_top
        }
    }
    //遮蔽层关闭
    onColse(){
        document.body.parentNode.style.overflow = "auto"
        this.setState({
            Point_state:false,
            ChoiceDetail:false
        })
    }
}



export default Filtrate
