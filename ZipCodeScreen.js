import React from 'react';

const availableZipItems = [
    { place: 'Puket', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkdsaen', code: '40000' },
    { place: 'Chonburifd', code: '20000' },
   ]
   const cdfcd = ({place, code,navigation}) => (
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