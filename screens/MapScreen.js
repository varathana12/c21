import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { MapView } from 'expo';
export default class MapScreen extends React.Component{

    render(){
        var markers = [
            {
                latitude: 45.65,
                longitude: -78.90,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            }
        ];
        return(
            <MapView style={styles.map}
                     initialRegion={{
                         latitude: 37.78825,
                         longitude: -122.4324,
                         latitudeDelta: 0.0,
                         longitudeDelta: 0.0,
                     }}
            >
                <MapView.Marker
                    coordinate={{latitude: 40.78825,
                        longitude: -120.4324}}
                    title={"title"}
                    description={"description"}

                >
                    <MapView.Callout tooltip>
                        <View >
                            <Text>{"hello"}{"\n"}{"world"}</Text>
                        </View>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{latitude: 45.78825,
                        longitude: -125.4324}}
                    title={"title"}
                    description={"description"}

                >
                    <MapView.Callout tooltip>
                        <View style={{backgroundColor:"white",width:200,height:200}}>
                            <Text>{"hello"}{"\n"}{"world"}</Text>
                        </View>
                    </MapView.Callout>
                </MapView.Marker>

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