var n=0;

function fff(){
    n++;

    //별도의 Thread는 화면갱신이 불가능!!
    //document.getElementById('h2').innerHTML= n;

    //main thread에게 원하는 출력데이터를 메세지로 전송.
    postMessage(n);

    setTimeout(fff, 500);
}

fff();