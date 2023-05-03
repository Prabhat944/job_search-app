import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router';

const JobsTypes=["Full-time","Part-time","Contractor"];

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router=useRouter();
  const [activeJobTypes,setActiveJobTypes] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Dev_the_DAKU</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            placeholder='What are you looking for'
            onChangeText={(text) => setSearchTerm(text )}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
           data={JobsTypes}
           renderItem={({item})=>(
            <TouchableOpacity 
              style={styles.tab(activeJobTypes, item)}
              onPress={()=>{
                setActiveJobTypes(item);
                router.push(`/search/${item}`);
              }}>
              <Text style={styles.tabText(activeJobTypes, item)}>{item}</Text>
            </TouchableOpacity>
           )}
           keyExtractor={item=>item}
           horizontal
           contentContainerStyle={{columnGap:SIZES.small }}/>
      </View>
    </View>
  )
}

export default Welcome