$(function(){
  /* 1.슬라이드, 바텀 버튼 함수지정 */
  const visu_slide =$('.visu_slide') 
  const visu_btm_list =$('.visu_btm_list')
  const visu_right = $('.right.visu_arrow'); //오른쪽버튼
  const visu_left = $('.left.visu_arrow'); //왼쪽버튼
  const play_Btn = $('.start.control') //스타트
  const stop_Btn = $('.stop.control') //스탑
  
  first(); //초기세팅 

  function first(){
    // 2.기본세팅 슬라이드,바텀버튼 on,act다 붙어있게 보이게해논다.+ silde_event(베일,텍스트 애니메이션, 바텀붙는것)
    visu_slide.eq(0).addClass('on')
    visu_btm_list.eq(0).addClass('Act')
  
     slide_Event();
   }

  //3.on일때 함수지정(슬라이드, 슬라이드순서값, 베일, 텍스트박스)
 function slide_Event(){

  const on_slide =$('.visual_wrap>li.on')//활성화된 슬라이드 저장
  const idx = on_slide.index()//활성화된 슬라이드 순서값 저장
  const veil = on_slide.children('.visu_veil')//활성화된 슬라이드의 자식 veil
  const txt_wrap = on_slide.children('.visu_txt_wrap')//활성화된 슬라이드의 자식 텍스트랩

   veil.animate({'width':'44%','opacity':'1'},1000) //베일애니메이션
   txt_wrap.delay(500).animate({'opacity':'1'},1000) //텍스트박스애니메이션

   visu_btm_list.removeClass('Act') //아래버튼 떼기
   visu_btm_list.eq(idx).addClass('Act') //아래버튼 붙이기 
  
 }

//4.right 화살표 클릭시
  function right(e){
    e.preventDefault()
    e.stopPropagation()//상위에 영향가지 않게한다(메인의 서치누르면 나오는 전체 블러가 꺼지니까)
      const idx =$('.visu_slide.on').index()
  
    reset()
  
    if(idx < 2){
      visu_slide.eq(idx +1).addClass('on')
    }
    if(idx ==2){
      visu_slide.eq(0).addClass('on')
    }
  
    slide_Event()  
  
  }     
 
  //5.left 화살표 클릭시
  
  function left(e){
      e.preventDefault()
    
      const idx =$('.visu_slide.on').index()
    
      reset();
    
      if(idx > 0){ //on붙은 슬라이드값이 0보다 크면 1230123...idx에 -1이 붙는다
        visu_slide.eq(idx -1).addClass('on')
      }
      if(idx == 0){//0이되면 다시 마지막페이지 eq(2)로간다.
        visu_slide.eq(2).addClass('on')
      }
      slide_Event();
  
    }

 //6.리셋
  function reset() {
    visu_slide.removeClass('on');
    visu_btm_list.removeClass('Act');

    visu_slide.children('.visu_veil').animate({
        'width': '0%',
        'opacity': '0'
    }, 1000);
    visu_slide.children('.visu_txt_wrap').delay(1000).animate({
        'opacity': '0'
    }, 1000);
  }

//7.바텀에 슬라이드 연결
  function bottom(e){
    e.preventDefault()

    const idx = $(this).index()

    reset()
    visu_slide.eq(idx).addClass('on')
    
    slide_Event()

  }
//8. stop 버튼
  function stop(){
    stop_Btn.fadeOut()
    play_Btn.fadeIn()

    slider_stop = clearInterval(slider_play)

  }
 //9. play 버튼
 function play(){

  play_Btn.fadeOut()
  stop_Btn.fadeIn()
  slider_play= setInterval(auto,6000)
}

//바텀 플레이버튼 
 let slider_play = setInterval(auto,6000);
 let slider_stop;//stop

 //10. 슬라이드 자동플레이
 auto()//슬라이더 자동플레이

 function auto(){
  visu_right.trigger('click')//트리거 함수로 게속 클릭하게한다 슬라이드 자동반복
}

 // 명령어정리.
 visu_right.click(right);
 visu_left.click(left);
 visu_btm_list.click(bottom);
 stop_Btn.click(stop);
 play_Btn.click(play);




 
// right 설명..
//  visu_right.click(function(){
  
//   right()
//   // const idx =$('.visual_wrap>li.on').index() //활성화된 슬라이드 숫자값

//   // visu_slide.removeClass('on')//활성화된 슬라이드에 모두 on을 빼고 시작

//   // reset() //처음세팅으로 돌리는 함수 

//   // if(idx<2){
//   //   visu_slide.eq(idx+1).addClass('on')//활성화된 슬라이드에 +1 
//   // }
//   // if(idx==2){
//   //   visu_slide.eq(0).addClass('on')
//   // } //마지막 3번쨰 슬라이드후에는 다시 처음으로 가야됨 

//   // slide_Event();
//   //이렇게 만들어도 되고 아래 'right'이라는 함수에 또 정리
 
//  })







})