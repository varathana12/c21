import React from "react";
import {View,Text,StyleSheet,Image,Platform} from 'react-native'
import { MapView } from 'expo';
import ViewPin from '../components/ViewPin'
import {location} from "../data";
import pin from '../assets/images/placeholder.png'

export default class MapScreen extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }


    render(){

        return(
            <MapView style={styles.map}
                     initialRegion={{
                         latitude: 11.629549102704,
                         longitude: 104.87701304512,
                         latitudeDelta: 0.1022,
                         longitudeDelta: 0.103,
                     }}
            >
                {
                    location.map((item,index)=>{

                        return (
                            <MapView.Marker
                                identifier={index.toString()}
                                onLoad={()=>console.log("maker loaded")}
                                key={item}
                                coordinate={{latitude: item[1], longitude: item[2]}}
                                image={pin}
                            >
                                <MapView.Callout>
                                    <ViewPin url={'http://www.c21worldtrust.com/files/property/th/_S__18087952.jpg'}/>
                                </MapView.Callout>


                            </MapView.Marker>
                        )
                    })
                }
            </MapView>
        )
    }
}
var styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});