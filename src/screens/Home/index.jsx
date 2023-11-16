import { styles } from './styles';
import { View, Image, TouchableOpacity, FlatList, Text, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Logo from "../../assets/logo.png";
import Foto1 from "../../assets/foto1.jpg";
import Foto2 from "../../assets/foto2.jpg";
import Foto3 from "../../assets/foto3.jpg";
import Foto4 from "../../assets/foto4.jpg";
import Foto5 from "../../assets/foto5.jpg";
import Foto6 from "../../assets/foto6.jpg";
import Foto7 from "../../assets/foto7.jpg";
import ImagePerfilPost from "../../assets/imagePerfilPost.jpg";
import ImagePost from "../../assets/imagePost.jpg";

const data = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Foto1,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Foto2,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Foto3,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Foto4,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Foto5,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Foto6,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Foto7,
    },
];

export const Home = () => {

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
                <View style={styles.botoesHeader}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.botaoMensagens}>
                        <Octicons name="diff-added" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.botaoCurtidas}>
                        <AntDesign name="hearto" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.botaoMensagens}>
                        <AntDesign name="message1" size={24} color="black" />
                    </TouchableOpacity>
  
                </View>
            </View>

            <ScrollView style={styles.stories} showsVerticalScrollIndicator={false}>
                <FlatList
                    horizontal={true}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => (
                        <View style={styles.storiesCard} key={item.item.id}>
                            <Image style={styles.storiesCardImage} source={item.item.photoURL} />
                        </View>

                    )}
                />

                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <View style={styles.contentHeaderLeft}>
                            <Image style={styles.contentHeaderFoto} source={ImagePerfilPost} />
                            <Text style={styles.contentHeaderText}>Lugares Paradisíacos</Text>
                        </View>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />

                    </View>
                    <View style={styles.contentImage}>
                        <Image source={ImagePost} />
                    </View>

                    <View style={styles.contentFooter}>
                        <View style={styles.contentFooterOptions}>
                            <View style={styles.contentFooterOptionsButton}>
                                <AntDesign name="hearto" size={24} color="black" />
                                <Feather name="message-circle" size={24} color="black" />
                                <Ionicons name="paper-plane-outline" size={24} color="black" />
                            </View>
                            <Feather name="bookmark" size={24} color="black" />
                        </View>

                        <View style={styles.contentFooterTexts}>
                            <Text
                                style={[styles.contentFooterText1, styles.contentFooterText]}
                            >
                                Que tal se refrescar nessa praia?
                            </Text>
                            <Text
                                style={[styles.contentFooterText2, styles.contentFooterText]}
                            >
                                Ver todos os 10 comentários
                            </Text>
                            <Text
                                style={[styles.contentFooterText3, styles.contentFooterText]}
                            >
                                3 horas atrás
                            </Text>
                        </View>

                    </View>

                </View>

            </ScrollView>

            <View style={styles.containerTabBar}>
                <TouchableOpacity style={styles.tab}>
                    <Entypo name="home" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Ionicons name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                <Octicons name="video" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Feather name="shopping-bag" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                <FontAwesome5 name="user-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );

}