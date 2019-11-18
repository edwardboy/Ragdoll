import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, NativeModules, UIManager, findNodeHandle } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  _onLayout = e => {
    let {x, y, width, height} = e.nativeEvent.layout;
    console.log(
      'x:' + x + ', y:' + y + ', width:' + width + ', height:' + height,
    );
  };

  _onScroll = e => {};

  _onPress(index) {
    // console.log(e);
    let element;

    switch (index) {
      case 0:
        {
            element = this.firstText;
        }
        break;

      case 1:
        {
            element = this.secondText;
        }
        break;

      case 2:
        {
            element = this.thirdText;
        }
        break;

      case 3:
        {
            element = this.fourthText;
        }
        break;

        case 4:
        {
            element = this.aText;
        }
        break;

        case 5:
        {
            element = this.bText;
        }
        break;

        case 6:
        {
            element = this.cText;
        }
        break;

        case 7:
        {
            element = this.dText;
        }
        break;

      default:
        break;
    }

    UIManager.measure( findNodeHandle(element), (x, y, width, height, pageX, pageY) =>{
        console.log('x:' + x + ', y:' + y + ', width:' + width + ', height:' + height );
        this.scrollView.scrollTo({ x:0, y:y, animated:true});
    })
  }

  render() {
    return (
      <ScrollView ref={ref => (this.scrollView = ref)} style={styles.container}>
        <Text
          ref={ref => (this.firstText = ref)}
          onPress={() => this._onPress(0)}
          onLayout={this._onLayout}
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: 'orange',
            lineHeight: 300,
            textAlign: 'center',
          }}>
          1
        </Text>
        <Text
          ref={ref => (this.secondText = ref)}
          onPress={() => this._onPress(1)}
          onLayout={this._onLayout}
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: 'orange',
            lineHeight: 300,
            textAlign: 'center',
          }}>
          2
        </Text>
        <Text
          ref={ref => (this.thirdText = ref)}
          onPress={() => this._onPress(2)}
          onLayout={this._onLayout}
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: 'orange',
            lineHeight: 300,
            textAlign: 'center',
          }}>
          3
        </Text>
        <Text
          ref={ref => (this.fourthText = ref)}
          onPress={() => this._onPress(6)}
          onLayout={this._onLayout}
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: 'orange',
            lineHeight: 300,
            textAlign: 'center',
          }}>
          7
        </Text>
        <Text
          ref={ref => (this.aText = ref)}
          onPress={() => this._onPress(3)}
          onLayout={this._onLayout}
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: 'orange',
            lineHeight: 300,
            textAlign: 'center',
          }}>
          4
        </Text>
        <Text
          ref={ref => (this.bText = ref)}
          onPress={() => this._onPress(4)}
          onLayout={this._onLayout}
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: 'orange',
            lineHeight: 300,
            textAlign: 'center',
          }}>
          5
        </Text>
        <Text
          ref={ref => (this.cText = ref)}
          onPress={() => this._onPress(5)}
          onLayout={this._onLayout}
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: 'orange',
            lineHeight: 300,
            textAlign: 'center',
          }}>
          6
        </Text>
        
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
    // justifyContent: 'center',
    // alignItems:'center',
  },
});
