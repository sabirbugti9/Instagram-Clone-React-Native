import React from 'react';
import Body from './conponents/Body/index';
import Footer from './conponents/Footer';
import Header from './conponents/Header';
import { View } from 'react-native';

const Post = ({ post }) => {

    return (
        <View>
            <Header imageUrl={post.user.imageUrl} name={post.user.name} />
            <Body imageUrl={post.imageUrl} />
            <Footer caption={post.caption} likesCount={post.likesCount} postedAt={post.postedAt} />
        </View>
    );
}
export default Post;