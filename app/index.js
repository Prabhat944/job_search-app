import {View, ScrollView, SafeAreaView} from "react-native"
import {COLORS, icons, images, SIZES} from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";
import {Stack, useRouter} from "expo-router";
import { useState } from "react";


const Home = () => {
    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState("");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
      
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerTitle:"",
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={()=>setIsDrawerOpen(true)}/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                )

            }} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{flex:1,padding:SIZES.medium}}>
                    <Welcome
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      handleClick={()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                      }}
                      />
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;