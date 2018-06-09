import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Platform,
    Image
} from 'react-native';
import { ImagePicker, Constants, FileSystem } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import QRdecoder from 'react-native-qrimage-decoder';
import qrImage from '../assets/images/qr-code.png'
export default class PhotoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: null,
        };
    }

    onPressPath = async (e) => {
        try {
            const image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            });

            this.setState({
                src: image.uri,
            });
        } catch (err) {
            console.log(err);
        }
    }

    onPressBase64 = async (e) => {
        try {
            const image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
            });

            if (image.uri.lastIndexOf('.') > 0) {
                let mimetype;
                const ext = image.uri.substr(image.uri.lastIndexOf('.')).toLowerCase();

                if (ext === '.jpg' || ext === '.jpeg' || ext === '.jpe') {
                    mimetype = 'image/jpeg';
                } else if (ext === '.png') {
                    mimetype = 'image/png';
                } else if (ext === '.gif') {
                    mimetype = 'image/gif';
                }

                if (mimetype) {
                    this.setState({
                        src: `data:${mimetype};base64,${image.base64}`,
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    onSuccess = (data) => {
        Alert.alert('成功', data);
    }

    onError = (data) => {
        Alert.alert('エラー', data);
    }

    render() {
        const name=
            Platform.OS === 'ios'
            ? "ios-images"
            : "md-images"

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.onPressPath}>
                   <Image source={qrImage} style={{width:150,height:150}}/>
                </TouchableOpacity>
                <QRdecoder src={this.state.src} onSuccess={this.onSuccess} onError={this.onError} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        backgroundColor:'white'
    },
    button: {
        backgroundColor: Constants.manifest.primaryColor,
        paddingVertical: 20,
        paddingHorizontal: 40,
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
