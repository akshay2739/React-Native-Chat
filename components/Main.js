import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity , TextInput} from 'react-native'




export default class Main extends Component {

    state = {
        name:''
    }

    render() {

        return (
            <View style={styles.container}>
               <TextInput
                    style={styles.nameInput}
                    placeholder='Enter Your name'
                    value={this.state.name}
                    onChangeText={(name)=> this.setState({name})}
                />

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat')}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                            
            </View>
        )
    }
}

const offset = 24;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nameInput: { 
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
      },
      buttonText: { 
        marginLeft: offset,
        fontSize: offset,
      }
    
  });