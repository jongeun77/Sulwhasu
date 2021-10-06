$(function(){
  //recomm
  const btn_tab =$('.btn_tab')
  const recomm_list =$('ul.recomm_list')
 
  btn_tab.click(recomm)

  function recomm(e){
    e.preventDefault()

  const idx =$(this).index()
  console.log(idx)
  //tab
  btn_tab.removeClass('on')//removeclass는 this가 아니다. 전체 3개 탭을 다 뺴야하므로 btn_tab
  $(this).addClass('on')//this 딱 현재 한개

  recomm_list.removeClass('Act')//list
  //remove Class다한다.
  recomm_list.eq(idx).addClass('Act')//탭의갯수만큼
  }
  
})

$(function(){
//flagship

const slider =$('.flag_slider li')
const flagside_l =$('.flagside.left')
const flagside_r =$('.flagside.right')
const btm =$('.flag_btm_wrap li')


flagside_r.click(right)
flagside_l.click(left)
btm.click(bottom)



first()
function first(){
  slider.eq(0).addClass('on')
  btm.eq(0).addClass('Act')
}
function reset(){
  slider.removeClass('on')
  btm.removeClass('Act')
}

function right(e){
  e.preventDefault()
  const idx =$('.flag_slider li.on').index()
  reset()

  if(idx<3){
    slider.eq(idx + 1).addClass('on')
  }
  if(idx==3){
    slider.eq(0).addClass('on')
  }
  btm.eq(idx).addClass('Act')
 
}
function left(e){
  e.preventDefault()
  const idx =$('.flag_slider li.on').index()
  reset()
  if(idx>0){
    slider.eq(idx-1).addClass('on')
  }
  if(idx==0){
    slider.eq(3).addClass('on')
  }
  btm.eq(idx).addClass('Act')
}
function bottom(e){
  e.preventDefault()

  const idx =$(this).index()

  reset()
  btm.eq(idx).addClass('Act')
  slider.eq(idx).addClass('on')

}
//footer
const footer_l =$('.footer_lang')

footer_l.click(footer_lang)

function footer_lang(e){
  e.preventDefault()
  $(this).toggleClass('show')
 
}


})