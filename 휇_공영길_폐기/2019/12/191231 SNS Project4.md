```javascript
import React,{useState, useEffect} from 'react'
import BellImg from './Img/bell.png'
import Upper from './Img/upper.png';
import UserFollow from './UserFollow';
import Axios from 'axios';

const NoticeIco = ()=> {

    
    const [user,setUser] = useState([]);
    const [open,setOpen] = useState(false);
    const openFriend = () => {
        setUser([]);
        setOpen(now => {
            if(!now) {
                Axios.get("http://15.165.94.77/follow/status",{
                    headers:{
                        Authorization:'Bearer '+document.cookie.split('ACCESS=')[1].split(';')[0]
                    }
                }).then(res => {
                    setUser(res.data.follower);
                })
            } 
            return !now
        })
    }
    const userRender = () => {
        return user.map((now,index) => <UserFollow userId={now} key={index} /> );
    }
    const RenderRing = () => {
        return (
            <div className="Friend">
                <div className="FriendImgWrap">
                    <img src={Upper} />
                </div>
                <div className="FriendHead">
                    <h1>팔로우 신청</h1>
                </div>
                <div className="FriendBody">
                    {userRender()}
                </div>               
            </div>
        )
    }


    return(
        <div className="Notcion">
            <img onClick={openFriend} alt="Img" src={BellImg}/>
            {open?RenderRing():""}
        </div>
    );
}

export default NoticeIco;
```

