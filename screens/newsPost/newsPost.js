import React from "react";

// Core Components
import { View, Text, Image, ScrollView } from "react-native";

// Assets
import biagio from "../../assets/profile.png";

// Styles
import styles from "./styels";

const NewsPost = ({ route }) => {
  const { id } = route.params;
  const post = {
    id: id,
    title: "Blog post title",
    image: biagio,
    author: "Jane Doe",
    date: "January 1, 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.tur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.title}>{post.id}</Text>
      <View style={styles.meta}>
        <Text style={styles.author}>by {post.author}</Text>
        <Text style={styles.date}>{post.date}</Text>
      </View>
      <Image source={post.image} style={styles.image} />
      <Text style={styles.content}>{post.content}</Text>
    </ScrollView>
  );
};

export default NewsPost;
