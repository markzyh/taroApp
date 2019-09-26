import Taro, { Component } from "@tarojs/taro";
import style from "./index.module.scss";
import { AtButton } from "taro-ui";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import avatarImg from "../../static/images/avatar.png";
import calendarImg from "../../static/images/icon-calendar.png";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  state = {
    imgUrls: [
      "https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180",
      "https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180",
      "https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"
    ]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {
      current,
      isAutoplay,
      duration,
      isCircular,
      interval,
      hasIndicatorDots,
      imgUrls
    } = this.state;
    return (
      <View className={style.index}>
        <View className={style.header}>
          <img src={avatarImg} alt="" className={style.avatarImg} />
          亲爱的，下午好
          <img src={calendarImg} alt="" className={style.calendarImg} />
        </View>
        <View className={style.swiper}>
          <Swiper
            className={style.swiperContainer}
            indicatorColor="#999"
            indicatorActiveColor="#333"
            current="1"
          >
            {imgUrls.map((item, idx) => (
              <SwiperItem key={idx} className={style.swiperItem}>
                <Image
                  src={item}
                  className={style.swiperItemImg}
                  width="355"
                  height="150"
                />
              </SwiperItem>
            ))}
          </Swiper>
        </View>
        {/* <AtButton type="primary">按钮文案</AtButton> */}
      </View>
    );
  }
}
