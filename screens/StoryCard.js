import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize'
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};


export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this.loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (

        <View style={styles.container}>

          <View style={styles.cardcontainer}>
            <Image source={require("../assets/story_image_1.png")} style={styles.image} />
          </View>


          <View style={styles.textcontainer}>
            <Text style={styles.title}>{this.props.story.title}</Text>
            <Text style={styles.author}>{this.props.story.author}</Text>
            <Text style={styles.description}>{this.props.story.description}</Text>
          </View>


          <View style={styles.likecontainer}>

            <View style={styles.likebutton}>
            <Ionicons name={"heart"} size={RFValue(35)} color={'yellow'} />
            <Text style={styles.likenumbers}>100m</Text>
            </View >
          </View>


        </View>



      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardcontainer: {
    margin: RFValue(35),
    backgroundColor: "limeyellow",
    borderRadius: RFValue(35)
  },
  image: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  textcontainer: {
    paddingLeft: RFValue(35),
    justifyContent: "center"
  },
  likecontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(35),
    
  },
  likebutton: {
    width: RFValue(35),
    height: RFValue(35),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: RFValue(35)
  },
  title: {
    fontSize: RFValue(35),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  author: {
    fontSize: RFValue(35),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  description: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 35,
    color: "white",
    paddingTop: RFValue(35)
  },
  likenumbers: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(35),
  },
})