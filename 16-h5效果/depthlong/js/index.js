;

(function () {
  $(document).ready(function () {
    var isSafe = Number(new URLSearchParams(location.search).get('isSafe')) == 1 ? 'safe' : 'llq' || "llq";

    console.log(window.outerWidth)
    // // 开始 背景图片的加载
    // var _img = new Image()
    // _img.src = 'https://p1.ssl.qhimg.com/t01eee28f1573fd4a55.png';
    // _img.onload = () => {
    //   $('.loading_wrap').fadeOut();
    //   // 首次 欢迎页展现
    // sendGif('1279.2048.gif', {
    //   _referer: isSafe
    // })
    // }
    // _img.onerror = () => {
    //   console.log('图片加载失败')
    // }

    setTimeout(function () {
      $('.loading_wrap').fadeOut();
      sendGif('1279.2048.gif', {
        _referer: isSafe
      })
    }, 2000);

    // 首次拖拽标志
    var isFirstDrag = false;
    // 记录展示过的长廊 编号
    var oldActiveIndex = 0;
    // 长廊的总宽度
    var contentWidth = 0;
    $('.view_item').each(function (index, item) {
      contentWidth += $(this).outerWidth();
    });
    // 进入展馆开始按钮
    $('.start_btn').click(function () {
      // 点击进入展馆
      sendGif('1279.1035.gif', {
        _referer: isSafe
      })
      // 像父级发送信息
      window.parent.postMessage({
        hideContorl: true
      }, '*');

      $('.loading_wrap').fadeIn(300, function () {
        $('.depth_long_start').fadeOut();
        mySwiper.init();
        // 引入页展现
        sendGif('1279.4067.gif', {
          _referer: isSafe
        })
      });
    });

    // 滑动提示p
    $('.guide').on('mousedown', function () {
      $(this).fadeOut();
      mySwiper.setTransition(1000); //设定过渡的时间
      mySwiper.setTranslate(-100); //设定位移，可以为正数
    })

    // 长廊 初始化
    var mySwiper = new Swiper('.window', {
      freeMode: true,
      slidesPerView: 'auto',
      freeModeMomentumVelocityRatio: 0.05,
      resistanceRatio: 0.3,
      mousewheel: true,
      initialSlide: 0,
      init: false,
      observer: true,
      observeParents: true,
      lazy: {
        loadPrevNext: true,
      },
      on: {
        sliderMove: function (swiper, event) {
          contentAnmiate(swiper)
        },
        init: function (swiper) {
          //Swiper初始化了
          $('.depth_long_main').fadeIn(1000, function () {
            $('.loading_wrap').fadeOut();
          })
        },
      }
    })


    // 层级位移
    function contentAnmiate(swiper) {
      $('.guide').css({
        'opacity': 1 - swiper.progress * 100,
      })
      if (1 - swiper.progress * 100 < 0) {
        $('.guide').css({
          'opacity': 0,
          "display": 'none'
        })
      }

      // 首次拖拽打点
      if (swiper.progress > 0 && !isFirstDrag) {
        sendGif('1279.2251.gif', {
          _referer: isSafe
        })
        isFirstDrag = true;
      }

      if (swiper.realIndex == 0) {
        if (oldActiveIndex != swiper.realIndex) {
          // 引入页展现打点
          sendGif('1279.4067.gif', {
            _referer: isSafe
          })
        }
        oldActiveIndex = 0;
        $('.view_item_1 .inner_item_1,.view_item_1 .inner_item_4').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress) * -1.05, 'px, 0px, 0px')
        })
        $('.view_item_1 .inner_item_2').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress) * -1.2, 'px, 0px, 0px'),
        })
        $('.view_item_1 .inner_item_3').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress) * -1.6, 'px, 0px, 0px'),
        })
      } else if (swiper.realIndex == 1) {

        if (oldActiveIndex != swiper.realIndex) {
          // 博物馆展现打点
          sendGif('1279.6894.gif', {
            _referer: isSafe
          })
        }
        oldActiveIndex = 1;
        $('.view_item_2 .inner_item_1').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 2000) * -0.6, 'px, 0px, 0px')
        })
        $('.view_item_2 .inner_item_3,.view_item_2 .inner_item_5').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 4000) * -0.5, 'px, 0px, 0px'),
        })
        $('.view_item_2 .inner_item_4_item').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 4000) * -0.85, 'px, 0px, 0px'),
        })

      } else if (swiper.realIndex == 2) {
        if (oldActiveIndex != swiper.realIndex) {
          // 博物馆展现打点
          sendGif('1279.9291.gif', {
            _referer: isSafe
          })
        }
        oldActiveIndex = 2;

        $('.view_item_3 .inner_item_3').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 8000) * -0.3, 'px, 0px, 0px'),
        })
        $('.view_item_3 .inner_item_4_item_1,.view_item_3 .inner_item_4_item_2').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 8000) * -0.6, 'px, 0px, 0px'),
        })
      } else if (swiper.realIndex == 3) {
        if (oldActiveIndex != swiper.realIndex) {
          // 博物馆展现打点
          sendGif('1279.3756.gif', {
            _referer: isSafe
          })
        }
        oldActiveIndex = 3;
        $('.view_item_4 .inner_item_1 .inner_item_1_item_1').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 10300) * 0.1, 'px, 0px, 0px')
        })
        $('.view_item_4 .inner_item_3').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 10300) * -0.3, 'px, 0px, 0px'),
        })
        $('.view_item_4 .inner_item_4').css({
          transform: 'translate3d('.concat((contentWidth * swiper.progress - 10300) * -0.4, 'px, 0px, 0px'),
        })
      }

      $('.view_item_3 .inner_item_1').css({
        transform: 'translate3d('.concat((contentWidth * swiper.progress) * -0.15, 'px, 0px, 0px')
      })
      $('.view_item_4 .inner_item_1').css({
        transform: 'translate3d('.concat((contentWidth * swiper.progress) * -0.3, 'px, 0px, 0px')
      })


    }
    // 滚轮控制
    document.onmousewheel = function (e) {
      if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
        contentAnmiate(mySwiper);
      }
    }; 
    // 未生成swiper;  1: 未生成 swiper 2:生成博物馆 3：生成赛博
    var AntiqueSwiper = 1;  
    // swiper 详情实例
    var antiqueSwiper = null;

    // 蒙层打点区分 蒙层分类  1,博物馆   2，买手   3，艺术品
    var maskType = null;

    // 博物馆点击
    $('.click_items').click(function () {

      // 当前的index
      var Index = $(this).attr('data-index');
      // 详情 所看到的Index
      var SlideActiveIndex = Index;
      // 详情swiper slideStr
      var showSlide = "";
      // slide 数据
      var slideList = [];

      // 避免当前画展重复生成 详情 Swiper;
      // 判断是哪个画展 
      if (Index <= 9) {
        // 文物点击打点
        sendGif('1279.6633.gif', {
          _referer: Index + '_' + isSafe
        })
        SlideActiveIndex = Index;
        if (AntiqueSwiper == 2 && antiqueSwiper) {

          // antiqueSwiper.slideTo(SlideActiveIndex, 0, false);
          antiqueSwiper.slideToLoop(SlideActiveIndex * 1, 0, false); //切换到第一个slide，速度为1秒
          // 博物馆
          $('.info_mask').fadeIn().css({
            display: 'flex'
          });
          maskType = 1;
          // 介绍详情展现打点
          sendGif('1279.440.gif', {
            _referer: isSafe
          })
          return false;
        }
        slideList = antiqueData;

      } else {
        // 艺术品点击打点
        sendGif('1279.3197.gif', {
          _referer: Index + '_' + isSafe
        })
        SlideActiveIndex = Index % 10;
        if (AntiqueSwiper == 3 && antiqueSwiper) {
          // antiqueSwiper.slideTo(SlideActiveIndex, 0, false);
          antiqueSwiper.slideToLoop(SlideActiveIndex * 1, 0, false); //切换到第一个slide，速度为1秒
          // 艺术展
          $('.info_mask').fadeIn().css({
            display: 'flex'
          });
          maskType = 3;
          // 艺术品 详情展示 打点
          sendGif('1279.5829.gif', {
            _referer: isSafe
          })
          return false;
        }
        slideList = artworkData;
      }
      antiqueSwiper ? antiqueSwiper.destroy(false) : null;
      $('.info_wrap .swiper-wrapper').empty();
      slideList.forEach(function (item) {
        // 'style="'+ item.imgStyle +'
        if (Index <= 9) {
          showSlide += '<div class="swiper-slide info_slide"><div class="img_wrap"><img src="' + item.imgUrl + '" alt="" > '
        } else {
          showSlide += '<div class="swiper-slide info_slide art_slide"><div class="img_wrap"><img src="' + item.imgUrl + '" style="' + item.imgStyle + '" alt="" > '
        }

        showSlide += '</div>' +
          '<div class="img_info">' +
          '<div class="info_content">' +
          '<h4>' + item.name + '</h4>';
        if (Index <= 9) {
          showSlide += '<div class="info_item">' +
            '<p class="info_t">年份</p>' +
            '<p class="info_desc">' + item.period + '</p>' +
            '</div>' +
            '<div class="info_item">' +
            '<p class="info_t">规格</p>' +
            '<p class="info_desc">' + item.size + '</p>' +
            '</div>';
        } else {
          showSlide += '<div class="info_item">' +
            '<p class="info_t">作者</p>' +
            '<p class="info_desc">' + item.author + '</p>' +
            '</div>';
        }
        showSlide += '<div class="info_item">' +
          '<p class="info_t">描述</p>' +
          '<p class="info_desc">' + item.desc + '</p>' +
          '</div>';
        if (Index <= 9) {
          showSlide += '<div class="item_pos"><span>国宝文物展厅</span> <i>' + item.position + '</i></div>';
        } else {
          showSlide += '<div class="item_pos"><span>敦煌艺术宴</span> <i>' + item.position + '</i></div>';
        }
        showSlide += '</div></div></div>';
      });
      $('.info_wrap .swiper-wrapper').html(showSlide);
      // 博物馆详情 swiper
      antiqueSwiper = new Swiper('.info_wrap', {
        observer: true,
        observeParents: true,
        loop: true,
        initialSlide: SlideActiveIndex * 1,
        navigation: {
          nextEl: '.info_next_btn',
          prevEl: '.info_prev_btn',
        },
        on: {
          imagesReady: function (swiper) {
            if (Index <= 9) {
              AntiqueSwiper = 2;
              maskType = 1;
              //  博物馆介绍详情展现打点
              sendGif('1279.440.gif', {
                _referer: isSafe
              })
              
            } else {
              AntiqueSwiper = 3;
              maskType = 3;
              // 艺术馆
              sendGif('1279.5829.gif', {
                _referer: isSafe
              })
          
            }

            $('.info_mask').fadeIn().css({
              display: 'flex'
            });
          },
          slideChange: function (swiper) {
            // 弹窗每次展示不 打点 依据 蒙层展示类型赋值来区分是否是蒙层第一次展现
            if(maskType) {
              if (Index <= 9) {
                // 博物馆切换打点
                sendGif('1279.4059.gif', {
                  _referer: isSafe
                })
              } else {
                // 艺术馆切换打点
                sendGif('1279.7387.gif', {
                  _referer: isSafe
                })
              }
            }
          },
        }
      });
      // antiqueSwiper.slideToLoop(SlideActiveIndex-2, 0, false);//切换到第一个slide，速度为1秒
    })
    // 买手 商品详情swiper
    var goodSwiper = null;
    // 买手 物品点击详情
    $('.click_items_good').click(function () {
      maskType = 2;
      $('#big_good_swiper,#goods_mini_swiper').find('.swiper-wrapper').empty();
      var goodId = $(this).attr('data-id');
      var goodData = goodsData[goodId];



      // 买手馆 展现打点
      sendGif('1279.5509.gif', {
        _referer: goodId + '_' + isSafe
      })
      $('.good_h').html(goodData.goodName).next('.good_desc').html(goodData.goodDesc)
        .next('.buy_bood').find('.good_price span').text(goodData.goodPrice);
      $('.buy_btn').attr({
        "data_link": goodData.buyGoodLink,
        "good_id": goodId
      })
      var swiperContent = '';
      goodData.goodImgs.forEach(function (item, index) {
        swiperContent += '<div class="swiper-slide" img-id="' + item.goodImgId + '"><img src="' + item.goodImgUrl + '" alt=""></div>';
      });
      $('#big_good_swiper,#goods_mini_swiper').find('.swiper-wrapper').html(swiperContent);

      // 商品 swiper 
      goodSwiper = new Swiper('#big_good_swiper', {
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: {
            el: '#goods_mini_swiper',
            resistanceRatio: 0,
            spaceBetween: 10,
            slidesPerView: 5,
            watchSlidesVisibility: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true
          },
        },
        on: {
          imagesReady: function () {
            $('.good_mask').fadeIn().css({
              display: 'flex'
            });
            // 买手馆 详情展现打点
            sendGif('1279.5108.gif', {
              _referer: isSafe
            })

          },
          slideChange: function (swiper) {
            // 买手馆 详情切换展现
            sendGif('1279.5570.gif', {
              _referer: isSafe
            })
          },
        }
      })

    })
    // 点击购买
    $('.buy_btn').click(function () {
      var href = $(this).attr('data_link');
      var goodId = $(this).attr('good_id');
      sendGif('1279.8099.gif', {
        _referer: goodId + '_' + isSafe
      })

      window.open(href, false);

    })
    // 蒙层关闭
    $('.close_handle').click(function () {
      if (maskType == 1) {
        // 关闭博物馆打点
        sendGif('1279.1495.gif', {
          _referer: isSafe
        })
      } else if (maskType == 3) {
        // 关闭 赛博馆打点
        sendGif('1279.4156.gif', {
          _referer: isSafe
        })
      } else {
        // 买手 馆打点
        sendGif('1279.9963.gif', {
          _referer: isSafe
        })
      }
      $('.info_mask,.good_mask').fadeOut(300);
      // 置空弹框类型
      maskType = null;
      setTimeout(function () {
        if (goodSwiper) {
          goodSwiper.destroy(false);
        }
      }, 300);
    })

    $('.over_btn').click(function () {
      sendGif('1279.7279.gif', {
        _referer: isSafe
      })
      window.open('http://www.dhbwg.org.cn/about/', false)
    })
  });
})()