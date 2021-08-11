import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const onLkePressed = () => {
        setIsLiked(!isLiked);
        const amount = isLiked  ? -1 : 1;
        setLikesCount(likesCount + amount);
    }
    useEffect(() => {
        setLikesCount(likesCountProp);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        onLkePressed();
                    }}>
                        <ADIcon name={isLiked == false ? "hearto" : "heart"} size={25} color={isLiked == false ? "#545454" : "#e73838"} />
                    </TouchableOpacity>
                    <FontistoIcon name="comment" size={23} color={"#545454"} />
                    <IoniconsIcon name="paper-plane-outline" size={25} color={"#545454"} />
                </View>
                <FontAwesome name="bookmark-o" size={25} color={"#545454"} />
            </View>
            <Text style={styles.like}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
}
export default Footer;