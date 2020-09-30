import React from 'react';
import { FlatList,View,Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   const ZipItem = ({place, code,navigation}) => (
       <TouchableHighlight onPress={()=>{
           navigation.navigate('Weather',{zipCode: code})
       }}>
    
            <View style={style.zipItem}>
                <Text>{place}</Text>
                <Text>{code}</Text>
            </View>
        </TouchableHighlight>
    )
   const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
    <ImageBackground source={require('../bg.jpg')}style={styles.backdrop}>
        <View>
             <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />

         </View>
    </ImageBackground>
    );
   
   }

   const style = StyleSheet.create({
       zipItem:{
           flex:1,
           flexDirection: 'row',
           justifyContent: 'space-evenly',
       },
       zipPlace:{
           flex:1,
       },
       zipCode:{
           flex:1,
       },
   })
   const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });