import React, { useContext, useEffect, useState } from 'react'
import BText from "../widgets/utils/text"
import {AuthContext} from '../../contexts/auth_context';
import BButton from "../widgets/utils/button";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../styles/news";
import { Image, Linking, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { INews } from "../../data/entities/News";
import { DefaultNews } from "../../constants/ui";
import { NEWS_DATA } from "../../data/fakeData/News";
import { getData } from "../../data/store/store";

export default function NewsScreen(){
    const [news, setNews] = useState<INews[]>()
    const authContext = useContext(AuthContext);
    useEffect(() => {
        if(!news){
            setNews(NEWS_DATA)
        }
    }, [news])
    const onPressLogin = () => {
        getData('user').then(user => {
            if(user && user.userId) {
                authContext.login(true);
                authContext.verify(true);
            } else {
                authContext.login(true);
            }
          }).catch(err => 
            console.error(err)
          )
    }
    var testText = [];
    for(var i = 0; i<10; i++) {
        testText.push(
            <BText>TestText {i}</BText>
        )
    }
    
    const onPressMoreLink = async (link: string) => {
        Linking.canOpenURL(link).then((supported) => {
            if (supported) {
                Linking.openURL(link)
            } else {
                Linking.canOpenURL(DefaultNews.newsUrl).then((supported) => {
                    Linking.openURL(link)
                })
            }
        })
    }
    const renderItem = (item: INews, index: number) => {
        const img = {uri: item.image, height: 100}
        return (
            <View key={index}>
                <BText numberOfLines={1} style={styles.itemTitle}>
                    {item.title}
                </BText>
                <Image source={img} style={styles.itemImage}/>
                <BText numberOfLines={2} style={styles.itemDescription}>{item.description}</BText>
                <TouchableOpacity onPress={() => onPressMoreLink(item.link)}>
                    <BText style={styles.itemMoreLink}>mehr erfahren...</BText>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginArea}>
                <BText>Du willst auch deine Boulder- und Kletterrouten tracken? Dann melde dich jetzt an!</BText>
                <View style={styles.loginButtonContainer}>
                    <BButton onPress={onPressLogin} style={styles.loginButton}><BText>Login</BText></BButton>
                </View>
            </View>
            <ScrollView style={styles.content}>
                <BText style={styles.headline}>Climbing News</BText>
                {news && news.map((item,index) => {
                    return renderItem(item,index);
                })}
            </ScrollView>
        </SafeAreaView>
    )
}