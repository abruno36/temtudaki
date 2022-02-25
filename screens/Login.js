import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";
import styles from '../style/MainStyle';

export default function Login({navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const entrar = () => {
      navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
      })
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
       <StatusBar
            barStyle = "light-content"
            hidden = {false}
            color="#fff"
            backgroundColor = "#0066CC"
            translucent = {false}
            networkActivityIndicatorVisible = {true}
        />
      <Text style={styles.text} h4>
        Entrar no TemTudaki
      </Text>
      <Input
        placeholder=" email@address.com.br"
        keyboardType="email-address"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(value) => setEmail(value)}
      />

      <Input
        placeholder=" Sua senha"
        secureTextEntry={true}
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={(value) => setPassword(value)}
      />

      <Button
        title="Entrar"
        onPress={() => entrar()}
        icon={{
          name: "check",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "rgba(90, 154, 230, 1)",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

      <Button
        title="Cadastrar"
        onPress={() => cadastrar()}
        icon={{
          name: "user",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "rgba(90, 154, 230, 1)",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
}
