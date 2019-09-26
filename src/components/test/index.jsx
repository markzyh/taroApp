import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";

export default class Test extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  static externalClasses = ["my-class"];
  state = {
    test: "测试",
    selector: ["美国", "中国", "巴西", "日本"],
    selectorChecked: "美国",
    timeSel: "12:01",
    dateSel: "2018-04-22"
  };
  defaultProps = {
    propsData: "默认"
  };
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    });
  };
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    });
  };

  componentWillMount() {
    console.log(this.$router);
    console.log(this.$componentType);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { test } = this.state;
    const { propsData } = this.props;
    return (
      <View className="my-class">
        <Text className="">我是测试组件</Text>
        <Text>{propsData}</Text>
        <View>
          <Picker mode="date" onChange={this.onDateChange}>
            <View className="picker">当前选择：{this.state.dateSel}</View>
          </Picker>
        </View>
      </View>
    );
  }
}
