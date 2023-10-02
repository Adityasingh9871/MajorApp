import { useState } from 'react'
import {Text,View,Modal,StyleSheet, Button} from 'react-native'

export default function InputModal()
{
    const [vis,setvis]=useState(false)
    return(
        <View>
            <Modal
                animationType='fade'
                transparent={false}
                visible={vis}
                onRequestClose={()=>{console.log(closed)}}
                >

            <View>
                <Text>hello</Text>
                <Button title='close' onPress={()=>setvis(false)} />
            </View>
            </Modal>
        </View>
    )
    
}