/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Animated,
  FlatList,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {carouselData} from '../resource/functions/data/carouselData';
import Carousel from '../componenst/Carousel/Carousel';

import {productData} from '../resource/functions/data/productData';
import ProductSlider from '../componenst/ProductSlider/ProductSlider';

// import {categorySliderData} from '../resource/functions/data/categorySliderData';
// import CategorySlider from '../components/CategorySlider/CategorySlider';

import MainMenuTab from '../navigation/MainMenuTab';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
// const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.body}> */}
        <Text style={styles.title}>Promo for you</Text>
        <View style={{flex: 0.6}}>
          <Carousel data={carouselData} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Recommendation</Text>
          <ProductSlider navigation={navigation} data={productData} />
        </View>
        {/* <Text>home</Text> */}
        {/* </ScrollView> */}
      </SafeAreaView>
      <MainMenuTab navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#EEE2CA',
  },
  title: {
    fontSize: 25,
    marginTop: 15,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
});

export default Home;
