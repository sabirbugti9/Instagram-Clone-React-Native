import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
const Body = ({ imageUrl }) => {
    return (
        <Image source={{ uri: imageUrl }} style={styles.image} ></Image>
    );
}
export default Body;