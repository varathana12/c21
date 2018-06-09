import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import { MapView } from 'expo';




export default class MakerPoint extends React.Component{
    state={
        loaded:false
    }
    render(){

        const {item} = this.props
        //console.log('http://www.c21worldtrust.com/files/icon/'+item[3])
        const pin = <Image source={{uri:'http://www.c21worldtrust.com/files/icon/'+item[3]}}
                           onLoad={()=>{}}/>
        console.log("start")
        const {loaded} = this.state
        return(
            <MapView.Marker
                coordinate={{latitude: item[1], longitude: item[2]}}
                title={"title"}
                description={"description"}
                onPress={()=>console.log('maker')}
            >
                <Image source={{uri:'http://www.c21worldtrust.com/files/icon/'+item[3] }}
                       onLoadStart={()=>{console.log("end loading")}}/>
                {
                    loaded ? pin:null
                }
            </MapView.Marker>
        )
    }
}

;