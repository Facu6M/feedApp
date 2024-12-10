import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      name: "Hannah Rodriguez",
      content: "Entretenimiento",
      likes: 5,
      comments: ["Genial!", "Me encanta"],
    },
    {
      id: "2",
      name: "Carlos Pérez",
      content: "Deportes",
      likes: 3,
      comments: ["Muy interesante", "Increíble partido"],
    },
    {
      id: "3",
      name: "Laura Fernández",
      content: "Tecnología",
      likes: 0,
      comments: ["¡Lo quiero!"],
    },
    {
      id: "4",
      name: "Juan Martínez",
      content: "Arte",
      likes: 2,
      comments: ["Muy creativo"],
    },
    {
      id: "5",
      name: "Sofia García",
      content: "Moda",
      likes: 4,
      comments: ["Hermosa colección"],
    },
  ]);

  const [comment, setComment] = useState("");

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        post.likes += 1;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleAddComment = (id) => {
    if (comment.trim() !== "") {
      const updatedPosts = posts.map((post) => {
        if (post.id === id) {
          post.comments.push(comment);
        }
        return post;
      });
      setPosts(updatedPosts);
      setComment("");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.userImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.postContent}>{item.content}</Text>
        </View>

        <Image
          source={{
            uri: "https://cdn.icon-icons.com/icons2/2248/PNG/512/dots_horizontal_icon_135684.png",
          }}
          style={styles.moreOptionsIcon}
        />
      </View>

      <View style={styles.postContentContainer}>
        <Text style={styles.postDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>

      <Image
        source={{
          uri: "https://i.pinimg.com/originals/02/17/e8/0217e8ba2cda0577e7a490566a47f49e.jpg",
        }}
        style={styles.largeImage}
      />

      <View style={styles.interactionsContainer}>
        <TouchableOpacity
          onPress={() => handleLike(item.id)}
          style={styles.likeButton}
        >
          <Text style={styles.likeText}>Like</Text>
        </TouchableOpacity>
        <Text style={styles.likesCount}>{item.likes} Likes</Text>
      </View>

      <Text style={styles.commentsTitle}>Comentarios:</Text>

      <View style={styles.commentsBox}>
        <FlatList
          data={item.comments}
          renderItem={({ item }) => (
            <Text style={styles.commentText}>{item}</Text>
          )}
          keyExtractor={(index) => index.toString()}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu comentario"
        value={comment}
        onChangeText={setComment}
      />
      <Button
        title="Agregar comentario"
        onPress={() => handleAddComment(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f5f5f5",
  },
  postContainer: {
    backgroundColor: "white",
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postContent: {
    fontSize: 14,
    color: "#666",
  },
  moreOptionsIcon: {
    width: 20,
    height: 20,
  },
  postContentContainer: {
    backgroundColor: "#f1f5f9",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  postDescription: {
    color: "black",
    fontSize: 14,
  },
  largeImage: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    borderRadius: "2%",
  },
  interactionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  likeButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  likeText: {
    color: "white",
  },
  likesCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  commentsTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "bold",
  },
  commentsBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  commentText: {
    fontSize: 14,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
  },
});
