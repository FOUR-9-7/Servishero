import React, { useState, useEffect } from 'react'
import {Text, ImageBackground, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
import { color } from 'react-native-reanimated';
export default function Weather(props) {
const [forecastInfo, setForecastInfo]= useState ({
    main:'-',
    description: '-',
    temp: 0
})
useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
        main: json.weather[0].main,
         description: json.weather[0].description,
        temp: json.main.temp
    });
    })
    .catch((error) => {
    console.warn(error);
    });
    }
    }, [props.zipCode])
    return (
        <ImageBackground source={require('../bg2.jpg')}style={styles.backdrop}>
            
            <View >
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>  
             </View>   
              
    
        </ImageBackground>
    
    )
   }
   const style = StyleSheet.create({
    Item:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
    },
})
   const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });