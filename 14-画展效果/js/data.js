function sendGif(filename, data) {
  var files = [];
  if (Object.prototype.toString.call(filename) == '[object String]') {
    files.push(filename);
  } else if (Object.prototype.toString.call(filename) == '[object Array]') {
    files = filename;
  } else {
    return;
  }
  files.forEach(function (item) {
    var params = '';
    if (data && typeof data == 'object') {
      for (var k in data) {
        params += k + '=' + data[k] + '&';
      }
    }
    try {
      new Image().src = '//dd.browser.360.cn/static/a/' + item + '?' + params + 'mid=' + external.GetMID(external.GetSID(window)) + '&t=' +
        Date.now() + Math.random().toString().replace('0.', '').substr(0, 10);
    } catch (e) {

    }

  })
}



// 博物馆信息
var antiqueData = [{
    "id": 0,
    "name": '散花飞天',
    "imgUrl": 'https://p0.ssl.qhimg.com/t019c553164434d2766.jpg',
    "period": '唐',
    "size": '39窟后壁西龛',
    "desc": '敦煌壁画中的飞天，在最初的洞窟创建时就已经出现，从十六国开始，历经十个朝代，历时千余年，直到元代末期。敦煌莫高窟492个洞窟中，几乎窟窟画有飞天。一千余年间的敦煌飞天由于朝代的更替，中西文化的频繁交流等变化，姿态意境、风格情趣都在不断地变化。如敦煌飞天的鼎盛时期，即整个唐代，敦煌飞天术形象达到了最完美的阶段，是完全中国化的飞天。唐代大诗人李白咏赞敦煌飞天仙女诗：“素手把芙蓉，虚步蹑太清。霓裳曳广带，飘拂升天行。”。',
    "position": '1 / 10'
  }, {
    "id": 1,
    "name": '不空羂索观音菩萨像',
    "imgUrl": 'https://p2.ssl.qhimg.com/t01c6be54e2219182bc.jpg',
    "period": '2018年收录数字版权',
    "size": '现收藏于法国吉美博物馆',
    "desc": '主尊不空羂索观音一面八臂，结跏趺座于莲座之上。头上顶戴化佛，左肩披着以四个小白点为一菱形组的黑色鹿皮。八臂中主要双手各于胸前持长茎莲花。背光下方为菩萨端坐的大莲花，其下为植有含苞待放的莲花之方型宝池。两侧配置诸位眷属，呈现左右相对。其下为头光、身光皆具的诸供养菩萨。',
    "position": '2 / 10'
  },
  {
    "id": 2,
    "name": '唐武官俑',
    "imgUrl": 'https://p0.ssl.qhimg.com/t015f4b1317a44b4c06.jpg',
    "period": '2008 年征集',
    "size": '高 88.5 厘米，宽 24 厘米（左）<br/>高 90.5 厘米，宽 21 厘米（右）',
    "desc": '陶质彩绘。头戴鹖冠，着宽袍大袖，双手交握于胸前，站立于台座之上。体态敦实，造型厚重，眉宇间透露出一种威严霸气。（左）<br/>&nbsp;<br/>陶质彩绘。头戴小冠，着宽袍大袖，双手交握于胸前，双腿微分，站立于台座之上，神情肃穆。（右）',
    "position": '3 / 10'
  },
  {
    "id": 3,
    "name": '唐天王俑',
    "imgUrl": 'https://p0.ssl.qhimg.com/t011ccb9813cee75f8e.jpg',
    "period": '2008 年征集',
    "size": '高 93.2 厘米，宽 42 厘米（左）<br/>高 98.5 厘米，宽 39 厘米（右）',
    "desc": '陶质彩绘。天王嘴唇紧闭，正视前方，一手叉于腰间，一手握拳，身着盔甲，站立于台座之上。身体硕大，臂膀有力，气宇轩昂，神态威武。（左）<br/>&nbsp;<br/>陶质彩绘。天王怒目而视，张口呼喊，一手叉于腰间，一手握拳，身着盔甲，站立于台座之上。<br/>身体硕大，臂膀有力，气宇轩昂，神态威武。（右）',
    "position": '4 / 10'
  },
  {
    "id": 4,
    "name": '唐汉人牵驼俑/唐吐蕃人牵驼俑',
    "imgUrl": 'https://p2.ssl.qhimg.com/t01b524d362c1172527.jpg',
    "period": '1987 年铁家堡墓群出土',
    "size": '高 69 厘米',
    "desc": '陶质。头戴黑色幞冠，面部丰腴，目视前方。口微张，身前倾，向右侧，右臂向上弯曲，做牵驼状。身着翻领侧襟束腰长袍，袍上有彩绘，足蹬高腰靴站立。（左）<br/>&nbsp;<br/>陶质。陶俑站立，头部发辫后盘，方面阔，暴目前视。身前倾，向右侧，右臂 向上弯曲，做牵驼状。身着翻领侧襟束腰长袍，足蹬高腰靴站立。（右）',
    "position": '5 / 10'
  },
  {
    "id": 5,
    "name": '明四臂观音铜佛像',
    "imgUrl": 'https://p4.ssl.qhimg.com/t01465ed743c528fd52.jpg',
    "period": '1979 年敦煌县政府移交',
    "size": '高 41 厘米，宽 22 厘米',
    "desc": '铜质，通体鎏金。观音铜像二面四臂，结跏趺坐于仰瓣莲花座上，头顶无量光佛相。观音静相，袒露四臂，身披璎珞， 衣曳飘带。第一双手在胸前合掌，第二双手上举。',
    "position": '6 / 10'
  },
  {
    "id": 6,
    "name": '清宗喀巴铜造像',
    "imgUrl": 'https://p1.ssl.qhimg.com/t018a74b2b1c9183f2c.jpg',
    "period": '1998 年征集',
    "size": '高 14.5 厘米',
    "desc": '铜质。铜佛结跏趺坐于仰瓣莲花座上，头戴尖顶圆帽，双手做说法印。静相，双目紧闭，身披袈裟，双肩装饰莲枝。',
    "position": '7 / 10'
  }, {
    "id": 7,
    "name": '元鎏金财神铜像',
    "imgUrl": 'https://p3.ssl.qhimg.com/t01ebb8a5f2a79ff35c.jpg',
    "period": '1976 年七里镇铁家堡一队采集',
    "size": '高 12 厘米',
    "desc": '铜质，通体鎏金。天王结跏趺坐于莲花台上，头戴天冠，面部丰腴，双眉紧锁，怒目而视，双耳垂环状耳饰。上身袒露，身佩多样饰物。右手置于右膝上，手中执宝螺，左手托抱一金鼠。',
    "position": '8 / 10'
  },
  {
    "id": 8,
    "name": '清代龙袍',
    "imgUrl": 'https://p2.ssl.qhimg.com/t018ccb415b633ce168.jpg',
    "period": '982 年敦煌县政府移交',
    "size": '长 145 厘米，宽 70 厘米，袖长 82 厘米',
    "desc": '青罗。错襟式样，镂空金扣，马蹄宽袖，前胸后背各有金线刺绣的团龙三条，两肩各绣一条龙，还有石榴、月季、寿字等吉祥图案，下摆有斜向排列的彩色线条，名谓水脚。水脚之上还有许多翻滚的水浪，水浪之上还有山石宝物。为皇帝的吉服。',
    "position": '9 / 10'
  },
  {
    "id": 9,
    "name": '唐彩绘镇墓兽',
    "imgUrl": 'https://p2.ssl.qhimg.com/t011f09ebd4dd721c0f.jpg',
    "period": ' 1995 年佛爷庙墓群出土',
    "size": '高 100 厘米，宽 50 厘米',
    "desc": '陶质彩绘。头顶高大的双角蜷曲勾卷，兽面凹额，长眉剑立，暴睛，狮鼻，巨口做嘶啸状。上髭微卷，两鬓腮浓髯虬曲，下颏垂须。两膀侧出双翼，颈、脊处鬃鬣剑立。身体两侧绘不规则的豹斑纹。做蹲踞状，后肢跽坐于云山之上。',
    "position": '10 / 10'
  }
]
// 艺术馆信息
var artworkData = [{
    "id": 10,
    "name": '赛博敦煌',
    "imgUrl": 'https://p2.ssl.qhimg.com/t01c6b384f1e3d4b0af.jpg',
    "author": '熊笑笑',
    "desc": '结合时下热点的朋克机械风，未来感的机械敦煌。',
    "imgStyle":'width: auto; height: 100%;',
    "position": '1 / 6'
  },
  {
    "id": 11,
    "name": '敦煌新世界',
    "imgUrl": 'https://p4.ssl.qhimg.com/t011d43c3644e86ef39.jpg',
    "author": '晨鸣达',
    "desc": '敦煌新世界中，奏乐的朋克仙女、佛教机器人、金刚力士等，营造出一个和谐的自我世界。',
    "imgStyle":'width: 100%; height: auto;',
    "position": '2 / 6'
  },
  {
    "id": 13,
    "name": '人类改造计划',
    "imgUrl": 'https://p0.ssl.qhimg.com/t01def6d747fdae2e5d.jpg',
    "author": '西川沂水',
    "desc": '使用新奇潮流元素结合敦煌的造型和纹样，表现的未来感题材。',
    "imgStyle":'width: auto; height: 100%;',
    "position": '3 / 6'
  },
  {
    "id": 14,
    "name": '美丽敦煌',
    "imgUrl": 'https://p0.ssl.qhimg.com/t01781ea116579adf37.jpg',
    "author": '鑫兰灰人',
    "desc": '使用新奇潮流的手法用来表现敦煌的复古画面，奏乐的敦煌仙子在画面中极具飘逸感。',
    "imgStyle":'width: auto; height: 100%;',
    "position": '4 / 6'
  },
  {
    "id": 14,
    "name": '潮流敦煌',
    "imgUrl": 'https://p5.ssl.qhimg.com/t01fca8de6240d4a129.jpg',
    "author": 'MUCRO',
    "desc": '复古与现代的碰撞，将时下热门的自拍风与复古敦煌结合，融入新奇的元素和对比夸张的色彩。 <br/>&nbsp;<br/>美甲潮流元素与复古敦煌的结合，加入了对比强烈的色彩的分割式构图插画。<br/>&nbsp;<br/>敦煌墙绘中的“分割式构图”与当今设计流行趋势中的“分屏”概念进行结合用于设计街舞。<br/>&nbsp;<br/>敦煌仙子在海滩上惬意自在，现代元素与复古的碰撞结合出美妙的画面。',
    "imgStyle":'width:auto; height: 100%;',
    "position": '5 / 6'
  },
  {
    "id": 15,
    "name": '赛博佛系',
    "imgUrl": 'https://p1.ssl.qhimg.com/t01fd624e8e4523981b.jpg',
    "author": 'MUCRO',
    "desc": '佛系敦煌与赛博朋克的结合呈现出不一样的潮流未来感。',
    "imgStyle":'width:100%; height:auto;',
    "position": '6 / 6'
  },
  

]

// 商品信息
var goodsData = {
  'good_0': {
    "goodName": '敦煌博物馆文创九色鹿桑蚕丝巾',
    "goodDesc": '丝巾图样源于敦煌壁画《九色鹿经图》，该丝巾送于亲友具有吉祥的寓意',
    "goodPrice": '188',
    "buyGoodLink": 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23525947774.69.7d42a63fUBnBH2&id=618302845137&rn=ffbbaf27ccca1de9aee8fa8f075acc3b&abbucket=19',
    "goodImgs": [{
      "goodImgId": 'good_0_0',
      "goodImgUrl": 'https://p1.ssl.qhimg.com/t01bb0635dbee4352a1.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_0_1',
      "goodImgUrl": 'https://p2.ssl.qhimg.com/t012e7161de865f49b1.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_0_2',
      "goodImgUrl": 'https://p1.ssl.qhimg.com/t018763f98939975d95.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_0_3',
      "goodImgUrl": 'https://p0.ssl.qhimg.com/t016a63ebaf511b8c2b.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_0_4',
      "goodImgUrl": 'https://p4.ssl.qhimg.com/t01a4834931c8d557ed.jpg',
      "goodImgDesc": ''
    }]
  },
  'good_1': {
    "goodName": '敦煌博物馆文创手机壳',
    "goodDesc": '青年要酷 菩萨要潮 再创敦煌系列·手机壳',
    "goodPrice": '49-54',
    "buyGoodLink": 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23525947774.82.3feaa63fk8LUqy&id=625600799516&rn=c2ce739b3778c1b539e4164dc0182a96&abbucket=10',
    "goodImgs": [{
      "goodImgId": 'good_1_0',
      "goodImgUrl": 'https://p5.ssl.qhimg.com/t01a247b980fa481100.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_1_1',
      "goodImgUrl": 'https://p3.ssl.qhimg.com/t01ed04c3b86d467ec2.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_1_2',
      "goodImgUrl": 'https://p1.ssl.qhimg.com/t01c6ca4d21e4081238.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_1_3',
      "goodImgUrl": 'https://p3.ssl.qhimg.com/t01454c56781bae832e.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_1_4',
      "goodImgUrl": 'https://p4.ssl.qhimg.com/t0125abc94a767444b8.jpg',
      "goodImgDesc": ''
    }]
  },
  'good_2': {
    "goodName": '敦煌博物馆文创Tom尤克里里',
    "goodDesc": '美学与制琴工艺结合，艺术魅力从指间诞生。',
    "goodPrice": '799',
    "buyGoodLink": 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23525947774.37.5f99a63fnJfRzv&id=626680911246&rn=ff2317220c822dd54188f45d7f087082&abbucket=19',
    "goodImgs": [{
      "goodImgId": 'good_2_0',
      "goodImgUrl": 'https://p2.ssl.qhimg.com/t01fb249dc17c0c64ee.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_2_1',
      "goodImgUrl": 'https://p5.ssl.qhimg.com/t01a7e80b941c4602ed.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_2_2',
      "goodImgUrl": 'https://p5.ssl.qhimg.com/t0166da30bbf93cceb3.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_2_3',
      "goodImgUrl": 'https://p5.ssl.qhimg.com/t01efedadd4b8f58008.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_2_4',
      "goodImgUrl": 'https://p5.ssl.qhimg.com/t017d46c76eb1649d21.jpg',
      "goodImgDesc": ''
    }]
  },
  'good_3': {
    "goodName": '敦煌博物馆文创小夜灯',
    "goodDesc": '枕边的伎乐天，伎乐天系列小夜灯',
    "goodPrice": '99',
    "buyGoodLink": 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23525947774.22.57d0a63f1W9nqf&id=648114838260&rn=4051bfdc83f3215727fada6e3d8c75bf&abbucket=19',
    "goodImgs": [{
      "goodImgId": 'good_3_0',
      "goodImgUrl": 'https://p3.ssl.qhimg.com/t0133aa68e404d4bd55.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_3_1',
      "goodImgUrl": 'https://p4.ssl.qhimg.com/t0144f05cf6d26bb097.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_3_2',
      "goodImgUrl": 'https://p0.ssl.qhimg.com/t0135948ac6fdaa2057.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_3_3',
      "goodImgUrl": 'https://p0.ssl.qhimg.com/t01505d842400826806.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_3_4',
      "goodImgUrl": 'https://p0.ssl.qhimg.com/t0126c9ccdc4b9d0c43.jpg',
      "goodImgDesc": ''
    }]
  },
  'good_4': {
    "goodName": '敦煌博物馆文创折扇纸扇子',
    "goodDesc": '瑞兽系列·浴火重生折扇',
    "goodPrice": '59',
    "buyGoodLink": 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23525947774.42.766ea63fYZMWwD&id=643850230576&rn=1ec841fa6ae43cbd35b5ed7d33cd67ae&abbucket=19',
    "goodImgs": [{
      "goodImgId": 'good_4_0',
      "goodImgUrl": 'https://p4.ssl.qhimg.com/t011f7b6ef34f31aa34.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_4_1',
      "goodImgUrl": 'https://p3.ssl.qhimg.com/t011ed63d46070aafcf.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_4_2',
      "goodImgUrl": 'https://p4.ssl.qhimg.com/t017cd6f2cfbb64ebf8.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_4_3',
      "goodImgUrl": 'https://p3.ssl.qhimg.com/t01d793aceaffff8dc8.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_4_4',
      "goodImgUrl": 'https://p0.ssl.qhimg.com/t01e44ddeb3d44f3fb4.jpg',
      "goodImgDesc": ''
    }]
  },
  'good_5': {
    "goodName": '敦煌博物馆文创联名卡姿兰礼品',
    "goodDesc": '色无忌惮 觉醒敦煌 千年之韵 灵鹿呈现',
    "goodPrice": '69-169',
    "buyGoodLink": 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23525947774.249.7d42a63fUBnBH2&id=630632289483&rn=ffbbaf27ccca1de9aee8fa8f075acc3b&abbucket=19',
    "goodImgs": [{
      "goodImgId": 'good_5_0',
      "goodImgUrl": 'https://p3.ssl.qhimg.com/t01b5b5e3d203c61fb8.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_5_1',
      "goodImgUrl": 'https://p2.ssl.qhimg.com/t0121f251bd62ef779f.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_5_2',
      "goodImgUrl": 'https://p2.ssl.qhimg.com/t01f70365819d37ab52.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_5_3',
      "goodImgUrl": 'https://p0.ssl.qhimg.com/t018a29f60d43af496f.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_5_4',
      "goodImgUrl": 'https://p2.ssl.qhimg.com/t0124e3eeb9432ac3e7.jpg',
      "goodImgDesc": ''
    }]
  },
  'good_6': {
    "goodName": '敦煌博物馆官方敦煌好礼',
    "goodDesc": '国礼·大师铸 胁侍菩萨像',
    "goodPrice": '13000',
    "buyGoodLink": 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23525947774.48.4436a63fGZUQ0a&id=618567763299&rn=dfabdcc79508999608ee9b996b43eae1&abbucket=19',
    "goodImgs": [{
      "goodImgId": 'good_6_0',
      "goodImgUrl": 'https://p3.ssl.qhimg.com/t012de4bd5cc17722ab.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_6_1',
      "goodImgUrl": 'https://p4.ssl.qhimg.com/t0131908cee29689a41.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_6_2',
      "goodImgUrl": 'https://p1.ssl.qhimg.com/t0110db878fa28c85b6.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_6_3',
      "goodImgUrl": 'https://p4.ssl.qhimg.com/t01732eda89996c2f02.jpg',
      "goodImgDesc": ''
    }, {
      "goodImgId": 'good_6_4',
      "goodImgUrl": 'https://p1.ssl.qhimg.com/t010779941df1ae2699.jpg',
      "goodImgDesc": ''
    }]
  }
}