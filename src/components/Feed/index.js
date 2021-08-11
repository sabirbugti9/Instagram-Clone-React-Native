import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Stories from '../UserStoriesPreview/index';
import Post from '../Post/index';
import firestore from '@react-native-firebase/firestore';
const Feed = () => {
    const [data, setData] = useState();
    const fetchProducts = async () => {
        const objectsArray = [];


        await firestore()
            .collection('Post').get()
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
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => item.likesCount}
            ListHeaderComponent={
                <Stories />
            }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <Post post={item} />

                );
            }}
        />

    );
}
export default Feed;
