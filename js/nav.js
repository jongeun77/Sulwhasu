$(function(){
  // $('.select_language').click(function(){
  //   $('.select_language').toggleClass('show')
  //   $('.icon-angle-down').toggleClass('show')
  // })
  //변수 const 사용하면 한줄로 on, show, active붙인 부분이 this로 적용되니 쉽다. 속도가 빠르다.

  const select_language = $('.select_language');
  const search_container =$('.search_container');
  const h_open_search =$('.h_open_search');
  const sch_close =$('.sch_close');

  /* language */
  select_language.click(function(){
    $(this).toggleClass('show')
  })

  /* open close search */
  h_open_search.click(function(){
    search_container.addClass('show')
    main.addClass('on') //1. 모바일에 나오는 메인은 블러된다.
  })
  sch_close.click(function(){
    search_container.removeClass('show')
  })

  /* gnb */
  const gnb =$('.gnb')//Active
  const gnb_menu_list =$('.nav_d1>a') //selector    
  const sub_menu =$('.gnb_menu>li>ul') //over
 
  gnb_menu_list.on('mouseenter',function(){
    if($(this).parent('li').index()==0){
      sub_menu.stop().removeClass('over')
      gnb.stop().removeClass('Active')
    }
    else{
      gnb_menu_list.not(this).next('ul').removeClass('over')
      $(this).next('ul').addClass('over')
      gnb.addClass('Active')
    }
  })
  




/* mobile nav */
const mob_nav_btn=$('.mob_nav_btn')
const mob_nav=$('.mob_nav')
const m_nav_bg=$('.mob_nav .bg')
const mob_btn=$('.m_nav_tit')
const m_sub_menu=$('.m_nav_list li>dl')

/* nav */
mob_nav_btn.click(function(){
  mob_nav.addClass('move')
  m_nav_bg.delay(300).fadeIn()
})
m_nav_bg.click(function(){
  $(this).fadeOut() 
  mob_nav.removeClass('move')
})

mob_btn.click(function(){
  const str =$(this).attr('class')/* 자기자신 클래스 알아냄 (m_nav_tit)*/
  console.log(str)

  const idx =$('.m_nav_tit.On') /* on이 붙은 li */
  
  /* 슬라이드 닫기, 온뗴기 */
  idx.next(m_sub_menu).slideToggle()//기존에 on이 붙은 클래스의 옆에 있는 dl-on붙으면 옆에 dl들은 다 토글로 닫힌다
  idx.toggleClass('On')//on을 토글로 뗸다.(remove)

  if(idx==str){}

  else{
    $(this).toggleClass('On') /* On: li색상 */
    $(this).next(m_sub_menu).slideToggle() /* 섭메뉴 토글 */
  
  }

})

/* search */
const main =$('#main')

main.click(function(){ //2. 자기자신에 블러를 뗸다.
  search_container.removeClass('show')
  $(this).removeClass('on')
})
})//end

