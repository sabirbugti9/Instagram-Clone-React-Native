import React, { useEffect, useState } from 'react';
import { TextInput, Text, ActivityIndicator, SafeAreaView, ImageBackground, TouchableWithoutFeedback, Dimensions, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import story from '../../data/story';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfilePicture from '../../components/ProfilePicture/index';
const StoryScreen = () => {
    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);

    const route = useRoute();
    const navigation = useNavigation();
    const userId = route.params.userId;
    const storyDb = route.params.story;

    const k = [storyDb];
    console.log(k);
    useEffect(() => {
        const userStories = k.find(storyData => storyData.user.id === userId);
        setUserStories(userStories);
        setActiveStoryIndex(0);

    }, [])
    useEffect(() => {
        if (!userStories) {
            return;
        }
        if (activeStoryIndex < 0) {
            setActiveStoryIndex(0);
            return;
        }
        if (activeStoryIndex >= userStories.stories.length) {
            setActiveStoryIndex(userStories.stories.length - 1);
            return;
        }
        // if (userStories && userStories.stories.length > activeStoryIndex - 1) {

        // }


    }, [activeStoryIndex])
    // const navigateToNextUser = () => {
    //     navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });

    // }
    // const navigateToPrevUser = () => {
    //     navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
    // }

    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            // navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }
    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            // navigateToPrevUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);

    }

    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        if (x < screenWidth / 2) {
            handlePrevStory();
        } else {
            handleNextStory();
        }
    }

    if (!userStories) {
        return <SafeAreaView>
            <ActivityIndicator />

        </SafeAreaView>
    }
    const activeStory = userStories.stories[activeStoryIndex];
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground style={styles.image} source={{ uri: activeStory.imageUrl }}>
                    <View style={styles.userInfo}>
                        <ProfilePicture size={50} uri={userStories.user.imageUrl} />
                        <Text style={styles.userName}>{userStories.user.name}</Text>
                        <Text style={styles.postedTime}>{activeStory.postedTime}</Text>

                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.cameraButton}>
                            <Feather name="camera" size={35} color={"#ffffff"} />

                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput} editable maxLength={40} placeholder={"Send Message..."} placeholderTextColor="white" />
                        </View>
                        <View style={styles.messageButton}>
                            <Ionicons name="paper-plane-outline" size={35} color="#ffffff" />

                        </View>

                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );
}
export default StoryScreen;