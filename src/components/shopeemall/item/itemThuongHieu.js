import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class ItemThuongHieu extends Component{
    render(){
        return(
            <TouchableOpacity style={{width: 90, height: 60, justifyContent: "center", alignItems: "center", borderWidth: 0.5, margin: 5}}>
                <Image source={{uri: "https://source.unsplash.com/1024x768/?tree"}} style={{width: 50, height: 50}}></Image>
            </TouchableOpacity>
        )
    }
}