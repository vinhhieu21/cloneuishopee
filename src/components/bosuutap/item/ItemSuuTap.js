import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class ItemSuuTap extends Component {
    constructor(props){
        super(props);
        this.state={
            selled: "",
        }
    }
    componentDidMount(){
        if(this.props.selled){

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <View style={{ backgroundColor: "#ffffff", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                            style={{ width: width / 2, height: width / 2, margin: 5 }}
                        />
                        <View>
                            <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                                style={{ width: width / 3, height: width / 4, margin: 5 }}
                            />
                            <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                                style={{ width: width / 3, height: width / 4, margin: 5 }}
                            />
                        </View>
                    </View>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <Text style={styles.textSelled}>Đã bán {(this.props.selled - this.props.selled%1000)/1000}k+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#a3a375",
    },
    button: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "#d6d6c2",
        backgroundColor: "#f5f5f0",
        justifyContent: "center"
    },
    text: {
        width: width,
        fontSize: 14,
        fontWeight: "800",
        marginLeft: 10,
        marginTop: 10
    },
    textSelled: {
        width: width,
        fontSize: 12,
        fontWeight: "800",
        marginLeft: 10,
        marginBottom: 10
    }
})