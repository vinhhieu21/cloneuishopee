import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const { width, height } = Dimensions.get('window')
export default class sliderHome extends Component {
    i = 0;
    componentDidMount() {
        this.timeout = setInterval(() => this.tick(), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.timeout)
    }

    tick = () => {
        // if (this.i === this.props.item.length - 1) {
        //     return;
        // }
        this.slider.goToSlide(this.i);
        this.i += 1;
        if (this.i === this.props.item.length) {
            this.i = 0;
            //clearInterval(this.timeout)
        }
    }
    render() {
        return (
            <View>
                <AppIntroSlider
                    ref={ref => this.slider = ref}
                    data={this.props.item}
                    renderItem={({ item }) => <View><Image source={{ uri: item.img }}
                        style={{ width: width, height: height / 4 }}
                    /></View>}
                    onSlideChange={() => { this.i += 1 }}
                    keyExtractor={({ item, index }) => index.toString()}
                    showNextButton={false}
                    showDoneButton={false}
                    activeDotStyle={{
                        //backgroundColor: "#ffffff",
                        borderWidth: 1,
                        borderColor: "#ffffff",
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        //marginTop: 50,
                        //height: 1,
                    }}
                    dotStyle={{
                        backgroundColor: "#ffffff",
                        //marginTop: 50,
                        width: 6,
                        height: 1,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#a3a375",
        width: width / 2,
        height: height / 9
    },
    button: {
        margin: 3,
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        width: width / 4,
        fontSize: 12,
        color: '#ff3300',
        textAlign: "center"
    }
})