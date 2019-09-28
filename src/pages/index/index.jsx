import Taro, { Component } from "@tarojs/taro";
import style from "./index.module.scss";
import { AtButton } from "taro-ui";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import avatarImg from "../../static/images/avatar.png";
import calendarImg from "../../static/images/icon-calendar.png";
import marksTop from "../../static/images/marks-top.png";
import marksDown from "../../static/images/marks-down.png";
import reloadIcon from "../../static/images/icon-reload.png";
import barrageIcon from "../../static/images/barrageIcon.png";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  state = {
    current: 1,
    text: "必须有人疾呼“要建造金字塔”，做不到也没关系。",
    barrageList: ["要是能重来，我要选李白"],
    startBarrage: false,
    test: "1111111"
  };

  componentWillMount() {
    setTimeout(() => {
      // this.state.barrageList.map((item, index) => {
      //   this.state.styleList.push(`right:${index * 10}px;opacipy:1`);
      // });
      this.setState({
        // test: "2222222"
        startBarrage: true
      });
    }, 1000);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { current, text, barrageList, test, startBarrage } = this.state;
    return (
      <View className={style.index}>
        <View className={style.header}>
          <Image src={avatarImg} alt="" className={style.avatarImg}></Image>
          亲爱的，下午好
          {test}
          <Image src={calendarImg} alt="" className={style.calendarImg}></Image>
        </View>
        <View className={style.swiper}>
          <Swiper className={style.swiperContainer} current={current}>
            <SwiperItem className={style.swiperItem}>
              <View className={style.swiperItemImg}>
                <View className={style.title}>
                  <Text className={style.day}>30</Text>
                  <View className={style.date}>
                    <View>2019年8月</View>
                    <View>星期五 农历七月三十</View>
                  </View>
                </View>
                <View className={style.line}></View>
                <View className={style.marksTop}>
                  <Image src={marksTop} className={style.marksTopImg}></Image>
                  <View className={style.tips}>
                    <Image
                      src={reloadIcon}
                      className={style.reloadIcon}
                    ></Image>
                    换一句
                  </View>
                </View>
                <View className={style.text}>{text}</View>
                <View className={style.button}></View>
                <View className={style.barrage}>
                  {/* {setTimeout(() => { */}
                  {barrageList.map((item, index) => (
                    <View
                      className={`${style.barrageItem} ${
                        startBarrage ? style.transition : ""
                      }`}
                    >
                      <Image
                        src={barrageIcon}
                        className={style.barrageIcon}
                      ></Image>
                      <Text>{item}</Text>
                    </View>
                  ))}
                  {/* }, 1000)} */}
                </View>
                <Image src={marksDown} className={style.marksDown}></Image>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
      </View>
    );
  }
}
