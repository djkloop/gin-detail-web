/*
 * @LastEditors: djkloop
 */
$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:3000/api/v1/detail/123',
    method: 'get',
  }).then(res => {
    const { photos, title, price } = res.data
    // 修改标题
    $('#title_box').text(title)
    // 加载价格
    $('#price_box').text(price)
    // 添加图片
    let html = ``;
    photos.forEach(item => {
      html += `<img id="${item.id}" src="images/photos/${item.image_path}" width="400" height="400" />`
    })
    $('#showbox').html(html)
    var showproduct = {
      'boxid': 'showbox',
      'sumid': 'showsum',
      'boxw': 400,//宽度,该版本中请把宽高填写成一样
      'boxh': 400,//高度,该版本中请把宽高填写成一样
      'sumw': 60,//列表每个宽度,该版本中请把宽高填写成一样
      'sumh': 60,//列表每个高度,该版本中请把宽高填写成一样
      'sumi': 7,//列表间隔
      'sums': 5,//列表显示个数
      'sumsel': 'sel',
      'sumborder': 1,//列表边框，没有边框填写0，边框在css中修改
      'lastid': 'showlast',
      'nextid': 'shownext'
    };//参数定义	  
    $.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行
  })
})

