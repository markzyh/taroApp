import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import style from "./index.module.less";
import Test from "../../components/test";
import { AtButton } from "taro-ui";
// import "taro-ui/dist/style/components/button.scss";
export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  state = {
    test: "测试",
    propsData: "propsData"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  redirectTo() {
    Taro.navigateTo({
      url: "/pages/login/login?id=12&type=test"
    });
  }

  render() {
    const { test, propsData } = this.state;
    console.log(style.testclass);
    return (
      <View className={style.index}>
        <Text className={style.hello}>Hello world!</Text>
        <Test
          propsData={propsData}
          my-class={style.redtext}
          className={style.redtext}
        />
        <AtButton type="primary">按钮文案</AtButton>
        <Text onClick={() => this.redirectTo()}>click</Text>
      </View>
    );
  }
}
