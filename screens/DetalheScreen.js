import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  useColorScheme,
} from 'react-native';

export default function DetalhesScreen({ navigation }) {
  const pressionaFAB = () => {
    navigation.navigate('Contatos');
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 18, }}>
        <Text>titulo principal da noticia</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            height: 100,
            width: 100,
            marginBottom: 18,
          }}
          source={require('../assets/img_login.jpg')}
        />
      </View>
      <View style={{ paddingLeft: 20, marginBottom: 18, }}>     
        <Text style={{}}>descricao da noticia inteira ou a informacao completa </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    flexDirection: 'column',
    padding: 8,
  },
});
