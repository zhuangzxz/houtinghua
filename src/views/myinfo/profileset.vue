<template>
  <div class="profileset">
    <div class="allProfile_setH5" id="setH5" v-if="isMainPanelShow" @click="showMain()">
      <ul class="whiteList">
        <li >
          <a href="#/myinfo/basicinfo" id="myBHInfo">基本资料</a>
        </li>
        <li v-if="isMyBaseMatchShow">
          <a href="javascript:;" id="myBHMatch" >择偶要求</a>
        </li>
        <li>
          <a href="javascript:;" id="mySelfintroduction">我的介绍</a>
        </li>
        <li>
          <a href="javascript:;" id="myBHAuth">我的认证</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped type="text/css">

  .profileset{
    text-align: left!important;
  }
  .whiteList {
    margin: 15px 0 20px 0;
    padding: 0 0 0 15px;
    background: #fff;
    border-top: 1px solid #e6e6e8;
    border-bottom: 1px solid #e6e6e8;
    overflow: hidden;
  }
  .whiteList li {
      position: relative;
      height: 48px;
      border-bottom: 1px solid #e6e6e8;
      overflow: hidden;
      zoom: 1;
  }
  .whiteList li:before {
    position: absolute;
    width: 8px;
    height: 12px;
    top: 20px;
    right: 15px;
    background: url(http://static5.baihe.com/images/newH5/arrowBg2.png) no-repeat;
    background-size: 100% 100%;
    content: "";
  }
  .whiteList li a {
    display: block;
    color: #333;
    font: 16px/48px microsoft yahei;
    overflow: hidden;
  }

  .inforList {
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
  .inforList li {
    position: relative;
    height: 45px;
    margin: 0 0 0 15px;
    font: 16px/44px microsoft yahei;
    color: #333;
    border-bottom: 1px solid #e6e6e6;
  }
  .myData{
    padding-bottom:50px;
  }
  .myData .inforList li:nth-child(1):before, .myData .inforList li:nth-child(3):before, .myData .inforList li:nth-child(4):before {
    background: none;
    content: "";
  }
  .myData .inforList li:nth-child(2):before {
    position: absolute;
    width: 13px;
    height: 20px;
    top: 16px;
    right: 12px;
    background: url(http://static5.baihe.com/images/newH5/editBg.png) no-repeat;
    background-size: 100% 100%;
    content: "";
  }
  .inforList li:before {
    position: absolute;
    width: 7px;
    height: 11px;
    top: 17px;
    right: 12px;
    background: url(http://static5.baihe.com/images/newH5/arrowBg9.png) no-repeat;
    background-size: 100% 100%;
    content: "";
  }
  .inforList li span {
      float: right;
      color: #999;
  }
  .inforList li input {
    float: right;
    width: 200px;
    height: 44px;
    margin-right: 30px;
    text-align: right;
    color: #666;
    font: 14px/44px microsoft yahei;
    border: none;
    outline: none;
    padding: 0;
  }
  .dw-hsel {
    position: absolute;
    height: 1px;
    width: 1px;
    left: 0;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
  }
  .inforList .area span {
      display: inline-block;
      float: right;
  }
  .inforList li span {
      float: right;
      color: #999;
  }
  .inforList .area input {
    float: none;
    width: 150px;
    height: 43px;
    margin-right: 30px;
    /*padding-right: 22px;*/
    /*background: #fff url(http://static5.baihe.com/images/newH5/icon_sel.gif) no-repeat right center;*/
  }
  .dw-hsel {
    position: absolute;
    height: 1px;
    width: 1px;
    left: 0;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
  }
  .js_province, .js_city {
      padding-right: 7px;
      font: 16px/48px microsoft yahei;
      color: #666;
      border: none;
      outline: none;
  }
  .myData .orgBtn, .zeouTj .orgBtn {
    margin: 15px;
  }
  .orgBtn {
    background: #ff6400;
  }
  .orgBtn, .orgBtn1, .orgBtn3 {
    display: block;
    height: 42px;
    margin: 20px 15px 0;
    font: 18px/42px microsoft yahei;
    text-align: center;
    color: #fff;
    text-decoration: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    overflow: hidden;
  }
</style>

<script type="text/javascript">
import { Picker, Popup, Toast } from 'vant'
import Vue from 'vue'
import citys from '../../../public/vender/data/citylist'
Vue.use(Popup)
Vue.use(Picker)
export default {
  methods: {
    showMain () {
      this.isMainPanelShow = true
      this.isMyBaseInfoShow = false
      this.isMyBaseMatchShow = false
    },
    showBaseInfo (state) {
      if (state) {
        this.isMyBaseInfoShow = true
        this.isMainPanelShow = false
        this.isMyBaseMatchShow = false
        console.log('qiehuan ', this.isMyBaseInfoShow)
      } else {
        this.isMyBaseInfoShow = false
      }
    },
    onConfirmHeight (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoHeight = false
      this.myinfo.height = value
    },
    onConfirmLocation (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoLocation = false
      this.myinfo.cityChn = value
    },
    onConfirmEducation (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoEducation = false
      this.myinfo.educationChn = value
    },
    onConfirmMarriage (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoMarriage = false
      this.myinfo.marriage = value
    },
    onConfirmChildren (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoChildren = false
      this.myinfo.children = value
    },
    onConfirmHousing (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoHousing = false
      this.myinfo.housing = value
    },
    onConfirmCar (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoCar = false
      this.myinfo.car = value
    },
    onConfirmOccupation (value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.isPopupShow.basicInfoOccupation = false
      this.myinfo.occupation = value
    },
    onCancel () {
      Toast('取消')
    },
    onChange (picker, values) {
      picker.setColumnValues(1, citys[values[0]])
    }
  },
  data () {
    return {
      isMainPanelShow: true,
      isMyBaseInfoShow: false,
      isMyBaseMatchShow: false,

      isPopupShow: {
        basicInfoHeight: false,
        basicInfoLocation: false,
        basicInfoEducation: false,
        basicInfoMarriage: false,
        basicInfoChildren: false,
        basicInfoHousing: false,
        basicInfoCar: false,
        basicInfoOccupation: false
      },
      myinfo: {
        height: 170,
        cityChn: '',
        provinceId: 8611,
        cityId: 1,
        educationChn: '',
        education: '',
        marriage: '',
        children: '',
        housing: '',
        car: '',
        occupation: ''
      },
      heightList: ['165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175'],
      citysList: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['北京'],
          className: 'column2',
          defaultIndex: 0
        }
      ],
      educationList: ['初中', '中专/职高/技校', '高中', '大专', '本科', '硕士', '博士'],
      marriageList: ['未婚', '离异', '丧偶', '已婚'],
      childrenList: ['没有', '有，和我住一起', '有，有时和我住一起', '有，不和我住一起'],
      housingList: ['以后再告诉你', '与父母同住', '租房', '已购房(有贷款)', '已购房(无贷款)', '住单位房', '住亲朋家', '需要时购置'],
      carList: ['未购车', '已购车', '单位用车', '需要时购置'],
      occupationList: ['计算机/互联网', '电子电器/通信技术', '机械/仪器仪表', '销售', '客服及技术支持', '财务/审计/税务', '证券/金融/投资/银行', '保险', '生产/营运', '质量/安全管理', '工程/能源', '贸易/采购', '物流/仓储/运输', '技工', '化工/环保', '生物/制药/医疗器械', '医院/医疗/护理', '广告', '市场/公关', '影视/媒体', '写作/出版/印刷', '翻译', '艺术/设计/创意', '建筑/房地产/装饰装修', '物业管理', '人力资源', '高级经营管理', '行政/后勤', '咨询/顾问', '律师/法务/合规', '教育/培训', '科研', '酒店/旅游/餐饮/娱乐 ', '美容/健身', '商业零售服务', '交通运输服务', '保安/家政服务', '警察/其它', '公务员', '运动员', '农/林/牧/渔', '自由职业/兼职', '储备干部/培训生/实习生', '在校学生', '退休', '其它']
    }
  },
  created () {
    this.$store.commit('changeMainPanelFooterBar', false)
    this.$store.commit('changeMyInfoHeadBarShowBack', true)
  }
}
</script>
