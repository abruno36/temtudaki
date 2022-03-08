import React, { useState, useEffect  } from "react";
import { StyleSheet, StatusBar, Alert, Image } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from '../style/MainStyle';
import usuarioService from "../Services/UsuarioService";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const [isLoading, setLoading] = useState(false);
  const [isLoadingToken, setLoadingToken] = useState(true)

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
      let data = {
      username: email,
      password: password
      };
      usuarioService
        .login(data)
        .then((response) => {
          setLoading(false);
          navigation.reset({
              index: 0,
              routes: [{name: "Principal"}]
          })
        })
        .catch((error) => {
          setLoading(false)
          Alert.alert("Usuário não existe!")
          //showDialog("Erro!", "Houve um erro inesperado", "ERRO!");
      })
    }
  }

  const logarComToken = (token) => {
    setLoadingToken(true)
    let data = {
      token: token
    }
    
    usuarioService.loginComToken(data)
    .then((response) => {
      setLoadingToken(false)
      navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
      })
    })
    .catch((error) => {
      setLoadingToken(false)      
    })
  }

  const cadastrar = () => {
    
      navigation.navigate("Cadastro")
    
  }

  useEffect(() => {
    AsyncStorage.getItem("TOKEN").then((token) => {
      logarComToken(token)
    })
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, specificStyle.specificContainer]}
      keyboardVerticalOffset={80}>

      
      { isLoadingToken && 
        <Text>Só um minutinho...</Text> 
      }
      
      { !isLoadingToken && 
      <>
      <ScrollView style={{ width: "100%" }}>
       <StatusBar
            barStyle = "light-content"
            hidden = {false}
            color="#fff"
            backgroundColor = "#0066CC"
            translucent = {false}
            networkActivityIndicatorVisible = {true}
        />
      <Image style={styles.img} source={require('../assets/logo.png')}/>
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

      {isLoading && <ActivityIndicator/>}

      {!isLoading &&
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
            backgroundColor: "rgba(44, 191, 154, 1)",
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
      }

      <Button
        title="Criar conta gratuita"
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
          backgroundColor: "rgba(44, 191, 154, 1)",
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
     </>
    }
    
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
