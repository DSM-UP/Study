```javascript
import React,{useRef,useState} from 'react';
import {post} from 'axios';
import '../../../Css/Timeline/TimelineMainCreatePost.scss';
import PlusBtnIco from './PlusBtnIco';
import UploadImgIco from './UploadImgIco';
import PosterImg from '../Poster/Img/PosterImg';


const TimelineMainCreatePost = ({Focus,Blur,style,nowPosting,getPosters}) => {

    const textarea = useRef();
    const Posting = () => {
        if(nowPosting&&textarea.current.value.length>0) {
            const formData = new FormData();
            for(let i=0;i<inputIndex.length;i++)
                formData.append(i+1,input[i].current.files[0]);
            formData.append('content',value);
            post('http://15.165.94.77/tweet',formData,{
                headers:{
                    Authorization:'Bearer '+document.cookie.split('ACCESS=')[1].split(';')[0]
                }
            })
            .then(res => {
                console.log(res,"게시글 포스팅");
                Blur();
                getPosters();
            })
        } else {
            alert('글자를 입력해주세요');
        }
    }
    const [value,setValue] = useState('');
    const [inputIndex,setInputIndex] = useState([]);
    const changeValue = e => setValue(e.target.value)

    const input = [useRef(),useRef(),useRef(),useRef()];
    const renderRingImg = () => {
        return inputIndex.map((now,index) => <img className="UploadImg" index={index} src={URL.createObjectURL(input[now].current.files[0])} />)
    }

    const openInput = () => {
        eval(`input[${inputIndex.length}].current.click()`);
    }
    const plusIndex = () => setInputIndex(now => [...now,inputIndex.length]);
    return (
        <div onFocus={Focus} className="Timeline-CreatePoster" style={{zIndex:style[0],position:"relative"}}>
            <textarea onChange={changeValue} value={value} ref={textarea}  style={{width:style[1],height:style[2],borderRadius:style[3]}} className="Timeline-CreatePost" type="text" placeholder="무슨 일이 일어나고 있나요?"></textarea>  
            <div className="Timeline-CreatePost-Ico">
                <button className="post" onClick={Posting}>글쓰기</button>
                <UploadImgIco onClick={openInput}/>
            </div>
            <div className="ImgWrap">
                {nowPosting&&renderRingImg()}
            </div>
            <input type="file" className="hidden" onChange={plusIndex} ref={input[0]} />
            <input type="file" className="hidden" onChange={plusIndex} ref={input[1]} />
            <input type="file" className="hidden" onChange={plusIndex} ref={input[2]} />
            <input type="file" className="hidden" onChange={plusIndex} ref={input[3]} />
        </div>
    )
    
}

export default TimelineMainCreatePost;
```

