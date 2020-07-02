```javascript
import React,{Component} from 'react'; 
import TimelineMainCreatePost from './TimelineMainCreatePoster/TimelineMainCreatePost';
import TimelineMainPoster from './Poster/TimelineMainPoster';
import '../../Css/Timeline/TimelineMain.scss';
import {get,patch} from 'axios';


class TimelineMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            posting:false,
            data:[],
            page:1
        }
    }

    componentDidMount(){
        if(!document.cookie) window.location.href="/login";
        setInterval(()=>{
            patch('http://15.165.94.77/auth',{},{headers:{
                Authorization:'Bearer '+document.cookie.split('REFRESH=')[1].split(';')[0]
            }})
            .then(res => {
                document.cookie=`ACCESS=${res.data.access_token}`;
            })
        },18000);
        get("http://15.165.94.77/following",{headers:{
            Authorization:'Bearer '+document.cookie.split('ACCESS=')[1].split(';')[0]
        }})
        .then(res => {
            this.setState({data:res.data.following_users});
        })
        get(`http://15.165.94.77/tweets/${this.props.userId}?page=${this.state.page}`).then(res => {
            console.log("게시글 받기");
            Promise.all(res.data.tweets.map((now) => get(`http://15.165.94.77/tweet/${now}`)
                .then(response => {
                    console.log(response);
                    const data = [...this.state.data];
                    response.data.id = now;
                    data.push(response.data);
                    this.setState({data});
                })        
            )).then(() => {
                const data = [...this.state.data];
                const newData = data.sort(function(a, b) {
                    var dateA = new Date(a['writed_at']).getTime();
                    var dateB = new Date(b['writed_at']).getTime();
                    return dateA > dateB ? -1 : 1;
                });
                this.setState({data:newData});
            })
        })
    }
    _RenderRing = () => {
        return (this.state.data.map((now,index) => {
            return <TimelineMainPoster 
                images={now.images}
                key={index} 
                content={now.content} 
                id={now.id} 
                time={now.writed_at} 
                name={now.user_name} 
                like={now.like} 
                comments={now.comments} 
            />;
        }));
    }

    focusOn = () => this.setState({posting:true});
    focusBlur = () => this.setState({posting:false});
    render(){
        return (
            <div className="TimelineMain">            
                <TimelineMainCreatePost style={this.state.posting?[100,"85%","150px",53]:[0,"75%","",0]} Focus={this.focusOn} Blur={this.focusBlur} nowPosting={this.state.posting} />
                {this.state.data.length>0?this._RenderRing():
                <div>
                    <h1 style={{textAlign:"center"}}>글이 없습니다.</h1>
                </div>
                }
                <div className={this.state.posting?"Background":""}></div>
            </div>
        );
    }
}

export default TimelineMain;
```

