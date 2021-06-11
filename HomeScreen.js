import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader'



export default class HomeScreen extends React.Component{
  goToBuzzerScreen = (buzzerColor)=>{
    this.props.navigation.navigate("BuzzerScreen",{color : buzzerColor})
  }
  render(){
    return(
      <View>
            <AppHeader/>
      <TouchableOpacity style = {[styles.button, {backgroundColor : "coral"}]} 
      onPress={this.goToBuzzerScreen("coral")}>
      <Text style = {styles.buttonText}> Team 1 </Text> 
      </TouchableOpacity>
      
       <TouchableOpacity style = {[styles.button, {backgroundColor : "wheat"}]}
       onPress={this.goToBuzzerScreen("wheat")}>
      <Text style = {styles.buttonText}> Team 2 </Text> 
      </TouchableOpacity>

       <TouchableOpacity style = {[styles.button, {backgroundColor : "navy"}]}
       onPress={this.goToBuzzerScreen("navy")}>
      <Text style = {styles.buttonText}> Team 3 </Text> 
      </TouchableOpacity>

       <TouchableOpacity style = {[styles.button, {backgroundColor : "purple"}]}
       onPress={this.goToBuzzerScreen("purple")}>
      <Text style = {styles.buttonText}> Team 4 </Text> 
      </TouchableOpacity>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent : "center",
    alignSelf : "center",
    borderRadius : 15,
    marginTop : 50,
    width : 200,
    height : 50,
    
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
