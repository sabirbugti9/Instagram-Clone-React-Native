import React from 'react';
import ProfilePicture from '../ProfilePicture/index';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const Story = (props) => {
    const {
        story: {
            user: {
                id,
                imageUrl,
                name
            }
        }

    } = props;

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate("Story", { userId: id, story: props.story });
    }
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <ProfilePicture uri={imageUrl} />
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>

    );
}
export default Story;