import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
// import "./login.less";
export default class Login extends Component {
  config = {
    navigationBarTitleText: "另一个页面"
  };
  defaultProps = {};

  componentWillMount() {
    console.log(this.$router);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { test } = this.state;
    const { propsData } = this.props;
    return (
      <div>
        login
        <View className="login">
          <Text>我是login</Text>
          <Button className="my-class">button</Button>
        </View>
      </div>
    );
  }
}
