
// 상품목록 추가(요소명, all | man | woman, 목록개수)
function show_product(el, category_name, list_num) {
    var item_list = $(el); // 상품 목록 위치
    var list = '';  // 삽입될 html data
    var kwd = 'won';
    var origin_price = '';
    var buff = [];
  
    // 카테고리 소트 후 버퍼 배열에 저장
    for(var i = 0; i < product_data.length; i++) {
      if(category_name !== 'all' && product_data[i].category !== category_name){
        continue;
      }
      buff.push(product_data[i]);
    }
    // console.log('buff 길이 ', buff.length);
  
    if(list_num > buff.length) list_num = buff.length;
  
    for(var i = 0; i < list_num; i++) {
      list += '<li>';
      list += '<a href="#">';
      list += '<img src="' + buff[i].img_url + '">';
      list += '<img class="brand" src="' + buff[i].brand_logo + '">';
      list += '<span class="name">' + buff[i].name + '</span>'
      list += '<span class="title">' + buff[i].title + '</span>'
  
      if(buff[i].origin_price == "") {
        kwd = "";
        origin_price = "";
      // } else if(buff[i].origin_price != "") {
      //   $('.origin_price').css('color','red');
      }else { origin_price = buff[i].origin_price;}
  
      list += '<del class="origin_price">' + origin_price + kwd + '</del>';
      list += '<strong class="sale_price">' + buff[i].sale_price + ' won</strong>';
      list += '</a></li>'
    }

    item_list.empty();
    item_list.append(list); // 상품목록 추가
    buff = [];  // 버퍼 초기화
    // $('.origin_price').css('text-decoration', 'none');s
  }
  
  
  $(function(){
  
    // 상품목록 추가(요소명, all | man | woman, 목록개수)
    show_product('#m-issue ul', 'all', 10);
    show_product('#new_product ul', 'all', 5);
  
    $('.category_menu > a').eq(0).css('text-decoration', 'underline');
  
    // 카테고리 토글 버튼
    $('#category_btn').click(function(){
      $('#category').slideToggle();
    });
  
    // 다른데 누르면 자동으로 닫히기
    $('section').click(function(){
      $('#category').slideUp();
    })  
  
    // TOP SELLER 상품 카테고리 변경(ALL | WOMAN | MAN)
    $('.category_menu > a').click(function(){
      $('.category_menu > a').css('text-decoration', 'none');
      $(this).css('text-decoration', 'underline');
      console.log($(this).index());
      var idx = $(this).index();
      var category_name = $(this).attr('class');
      console.log(category_name)
      show_product('#m-issue ul', category_name, 8);
      return false;
    });
  
     
  
  });