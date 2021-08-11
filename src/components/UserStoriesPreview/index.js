import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Story from '../UserStoryPreview/index';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';

const Stories = () => {
    const [data, setData] = useState();
    const fetchProducts = async () => {
        const objectsArray = [];


        await firestore()
            .collection('Story').get()
            .then(documentSnapshot => {


                documentSnapshot.docs.forEach((e) => {
                    objectsArray.push(e.data());

                });

            });


        setData(objectsArray);

    };
    useEffect(async () => {
        await fetchProducts();
    }, [])
    // console.log("Data",ata);
    return (
        <FlatList
            data={data}
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.user.id}
            renderItem={itemData => {
                return (
                    <Story story={itemData.item} />
                );
            }}
        />


    );
}
export default Stories;