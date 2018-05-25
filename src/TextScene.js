import React from 'react';
import { Text, View, StyleSheet, asset, Sound, VrButton} from 'react-vr';
    

export default class TextScene extends React.Component {


    render () {
        return (
            <View>
                
                <Text
                    style={{
                        backgroundColor: '#777879',
                        fontSize: 0.5,
                        fontWeight: '400',
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            { translate: [-4, 1, -0.5] },
                            { scale: 0.5 },
                            { rotateY: 90 } 
                        ]
                    }}
                >Piano music here
                    <Sound
                    source={{ wav: asset('MONO-036.wav') }}
                    loop={true}
                    />
                </Text>
                <Text
                    style={{
                        backgroundColor: '#A482DF',
                        borderRadius: 0.3,
                        fontSize: 0.5,
                        fontWeight: '400',
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            { translate: [1, 2.5, -12] },
                            { scale: 1 }
                        ]
                    }}
                >Loral-1300Com</Text>
                <Text
                    style={{
                        backgroundColor: '#777879',
                        fontSize: 0.5,
                        fontWeight: '400',
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            { translate: [-2.5, 0.5, -3] },
                            { scale: 0.25 }
                        ]
                    }}
                >The Mechanic</Text>
            </View>
        )
    }
}