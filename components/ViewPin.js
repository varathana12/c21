import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'




export default class ViewPin extends React.Component{
    state = {
        loaded:false
    }

    render(){
        const {container,image,containerItem,wrapContainer,title,containerTitle} = styles
        const {url} = this.props
        const {loaded} = this.state
        console.log(loaded)
        return(
            <View style={container}>
                <View style={containerTitle}>
                    <Text style={title}>land for sale</Text>
                </View>
                <View style={wrapContainer}>

                        <Image style={image} source={{uri:url}}/>
                    <View style={containerItem}>
                        <Text>Price: US $1,583</Text>
                        <Text>Selling Price: US $950,000</Text>
                        <Text>Type: Land</Text>
                        <Text>Status: Sale</Text>
                        <Text>Code: WT435</Text>
                    </View>
                </View>

            </View>
        )
    }
}

var styles = StyleSheet.create({

    container: {

        maxWidth:320,
        width:'auto',
        height:"auto",
        backgroundColor:'white'
    },
    containerTitle:{
        padding:8,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    wrapContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:10
    },
    image: {
        flexDirection:'column',
        width:120,
        height:100,
        borderRadius:4
    },
    containerItem:{

        flexDirection:'column',
        paddingLeft:10,

    }

});