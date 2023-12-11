import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import biagio from "../../../assets/profile.png";
import styles from "./styles";
import moment from "moment/moment";

const NewsCard = ({ post }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
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
