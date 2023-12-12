import React from "react";

// Core Components
import { Image, Text, TouchableOpacity } from "react-native";

// Libraries
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment/moment";

// Assets
import biagio from "../../../assets/profile.png";

// Styles
import styles from "./styles";

const NewsCard = ({ post, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => navigation.navigate("NewsPost", { id: `${post?.id}` })}
    >
      <Image source={biagio} resizeMode={"cover"} style={styles.image} />
      <LinearGradient
        colors={["#0000", "#000A", "#000"]}
        style={styles.titleContainer}
      >
        <Text style={styles.text}>{post?.title}</Text>
        <Text style={styles.timestamp}>
          {moment(post?.publishedAt)?.format("HH:MM DD, MMMM")}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default NewsCard;
