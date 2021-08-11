import React from 'react';
import { View, Text } from 'react-native';
import ProfilePicture from '../../../ProfilePicture/index';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo'
const Header = ({ imageUrl, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <ProfilePicture uri={imageUrl} size={40} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Icon name="dots-three-vertical" size={16} />

            </View>

        </View>
    );
}
export default Header;