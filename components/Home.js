import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.Button}
                    onPress={()=> this.props.navigation.navigate('Main' , {text:'from home'}) }   
                >    
                    <Text style={styles.ButtonText}>Main</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.Button}
                    onPress={ ()=> this.props.navigation.navigate('Chat') } 
                >
                    <Text style={styles.ButtonText}>Chat</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button:{
        backgroundColor:'red',
        margin:10
    },
    ButtonText:{
        fontSize:25,
        padding:5
    }
  });
