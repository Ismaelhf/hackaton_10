import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MainMenuTab from '../navigation/MainMenuTab';
import {Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
  //   const item = route.params.item.item;
  // console.warn(item.title);
  return (
    <>
      <View style={styles.body}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri:
                'https://img.freepik.com/vector-gratis/logo-cafe-artistico_23-2147500594.jpg?size=338&ext=jpg',
            }}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>welcome</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <MainMenuTab navigation={navigation} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EEE2CA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 150,
    height: 150,
  },
  button: {
    backgroundColor: '#BA8B5D',
    width: 150,
    height: 45,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default Welcome;
