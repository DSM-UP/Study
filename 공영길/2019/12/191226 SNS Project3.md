```javascript
import React,{Component, useEffect, useState} from 'react';
import TimelineNav from '../Timeline/Nav/TimelineNav';
import LeftBar from '../Reuse/Leftbar';
import RightBar from '../Reuse/Rightbar';
import '../../Css/UserInfo/UserInfo.scss'
import FollowButton from './followButton';
import UserShow from './UserShow';
import axios from 'axios';
import TimelineMain from '../Timeline/TimelineMain';
import TimelineMainPoster from '../Timeline/Poster/TimelineMainPoster';
import User from './User';
import ProfileImg from '../Timeline/Reuse/ProfileImg';

const UserInfo = () => {
    const [data,setData] = useState({});
    const [poster,setPoster] = useState([]);
    const [follow,setFollow] = useState(false);
    const [follower,setFollower] = useState([]);
    const getPoster = () => {
        const posters = axios.get(`http://15.165.94.77/user${window.location.href.substr(window.location.href.lastIndexOf('/'),window.location.href.length-1)}`).then(res => {
            setData(res.data);
            return res.data.tweets;
        }).then(tweets => {
            setPoster([]);
            Promise.all(tweets.map(now => {
                axios.get(`http://15.165.94.77/tweet/${now}`).then(res => {
                    res.data.id = now;
                    setPoster(poster => poster.concat(res.data));
                }).then(() => {
                    setPoster(nowPoster => {
                        const POSTER = [...nowPoster];
                        const newPoster = POSTER.sort(function(a,b) {
                            const A = new Date(a['writed_at']).getTime();
                            const B = new Date(b['writed_at']).getTime();
                            return A > B ? -1 : 1;
                        })
                        return newPoster;
                    })
                })
            }))
        })
    }
    const onFollow = () => {
        setFollow(true);
        axios.get('http://15.165.94.77/follow/status',{
            headers:{
                Authorization:'Bearer '+document.cookie.split('ACCESS=')[1].split(';')[0]
            }
        }).then(res => {
            console.log(res);
            Promise.all(res.data.follower.map((now,index) => {
                axios.get(`http://15.165.94.77/user/${now}`).then(res => {
                    setFollower(nowData => {
                        res.data.id = now;
                        return nowData.concat(res.data);
                    });
                })
            }))
        })
    }

    const UserRenderRing = () => {
        return follower.map(now => 
            <User name={now.name} id={now.id} />    
        );
    }

    const RenderRing = () => {
        if(follow) {
            return (
                <div className="follow">
                    <div className="followHeader">
                        <span>팔로우</span>
                    </div>
                    {UserRenderRing()}
                </div>
            )
        } else {
            return (
                <>
                    <div className="MainHeader">
                        <div className="HeaderLeft">
                            <ProfileImg style={{width:"180px",height:"180px"}} />
                            프로필 이미지 설정
                        </div>
                        <div className="HeaderRight">
                            <UserShow head="이름" value={data.name} />
                            <UserShow head="이메일" value={data.email} />
                            <div className="followWrap" >
                                <FollowButton head="팔로잉" value={data.following} onClick={onFollow}/>
                                <FollowButton head="팔로워" value={data.follower} onClick={onFollow}/>
                            </div>
                            <div className="btnWrap">
                                <button className="setting">개인 설정</button>
                            </div>
                        </div>
                    </div>
                    <div className="MainBody">
                        {PosterRender()}
                    </div>
                </>
            )
        }
    }
    useEffect(() => {
        getPoster();
    },[])

    const PosterRender = () => {
       return poster.map((now,index) => {
            return <TimelineMainPoster 
                getPosters={getPoster}
                images={now.images}
                key={index} 
                content={now.content} 
                id={now.id} 
                time={now.writed_at} 
                name={now.user_name} 
                like={now.like} 
                comments={now.comments} 
            />
        });
    }
    return (
        <>
            <TimelineNav active={3}/>
            <div className="UserInfo">
                <LeftBar/>
                <div className="UserInfoMain">
                    {RenderRing()}
                </div>
                <RightBar/>
            </div>
        </>
    );
}

export default UserInfo;
```

