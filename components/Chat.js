import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import Fire from './Fire'

export default class Chat extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        Fire.shared.on(message =>
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }))
        )
    }

    componentWillUnmount() {
        Fire.shared.off()
    }

    get user() { 
        return {
          _id: Fire.shared.uid,
        };
    }

    render() {
        return (
          <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
          />
        );
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  