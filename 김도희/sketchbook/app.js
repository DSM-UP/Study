const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");

canvas.width = 450;  //canvas내의 픽셀 범위를 지정해 줘야 픽셀로 그리기 가능
canvas.height = 450;

//context(ctx)는 canvas 내의 픽셀을 뜻함
ctx.strockeStyle = "#2c2c2c"; //처음색 검정
ctx.lineWidth = 1; //선 굵기

let painting = false;

function onmousemove(event)
{
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath(); //선을 그릴때 사용하는 함수
        ctx.moveTo(x,y); //그리기 시작하는 선
    } 
        //만약 1---2 1과 2라는 좌표 사이에 있는 직선을 그린다 하면
        //시작 좌표를 1로 잡고(move) 끝 좌표를 2를 잡는다(to)
        //그러나 캔버스처럼 길이를 알 수 없는 선을 그리는 경우 
        //시작점과 끝점이 계속 변하므로 둘 다 x,y로 설정해준것이다.
        //canvas 직선의 원리 1---2----3  123은 보이지 않지만 픽셀마다 좌표가 존재한다.
      
    else{  
        ctx.lineTo(x,y); // 그림의 끝이 되는 선 
        ctx.stroke(); //헌재까지 설정된 그림을 그리는 함수
    }
}

function stoppainting()
{
    painting = false;
}

function startpainting()
{
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove", onmousemove);
    canvas.addEventListener("mousedown", startpainting);
    canvas.addEventListener("mouseleave", stoppainting);
    canvas.addEventListener("mouseup", stoppainting);
}