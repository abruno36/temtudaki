import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from '../style/MainStyle';

export default function Login({navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const [isLoading, setLoading] = useState(false);

  const [visibleDialog, setVisibleDialog] = useState(false);
  const [titulo, setTitulo] = useState(null);
  const [mensagem, setMensagem] = useState(null);
  const [tipo, setTipo] = useState(null);

  const showDialog = (titulo, mensagem, tipo) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };

  const validar = () => {
    let error = false;
    setErrorEmail(null);
    setErrorPassword(null);
    
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu E-MAIL corretamente");
      error = true;
    }
    if (password == null) {
      setErrorPassword("Preencha sua PASSWORD corretamente");
      error = true;
    }

    return !error;
  };
  
  const entrar = () => {
    if (validar()) {
        navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
      })
    }
  }

  const cadastrar = () => {
    if (validar()) {
      navigation.navigate("Cadastro")
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, specificStyle.specificContainer]}
      keyboardVerticalOffset={80}
    >
      <ScrollView style={{ width: "100%" }}>
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
        placeholder=" E-mail"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        errorMessage={errorEmail}
      />

      <Input
        placeholder=" Sua senha"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        errorMessage={errorPassword}
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
          marginHorizontal: 85,
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
          marginHorizontal: 85,
          marginVertical: 10,
        }}
      />
     </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#ddd",
    padding: 10,
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
});
