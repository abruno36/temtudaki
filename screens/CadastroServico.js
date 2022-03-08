import React, { useState } from 'react';
import { Alert } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import servicoService from '../Services/ServicoService';
import styles from '../style/MainStyle';


export default function CadastroServico({navigation}) {
  const [titulo, setTitulo] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [errorTitulo, setErrorTitulo] = useState(null)
  const [errorDescricao, setErrorDescricao] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const validar = () => {
    let error = false
    setErrorTitulo(null)
    setErrorDescricao(null)
    
    if (!titulo || titulo.length < 5 ){
      setErrorTitulo("Título obrigatório e deve ser maior que 5")
      error = true
    }

    if (!descricao || descricao.length < 20 ){
      setErrorDescricao("Descrição obrigatória e deve ser maior que 20")
      error = true
    }

    return !error
  }

  const cancelar = () => {
       navigation.navigate("Cadastrar")
  
  }

  const salvar = () => {
    if (validar()){
      setLoading(true)
      
      let data = {
        titulo: titulo,
        descricao: descricao        
      }
      
      servicoService.cadastrar(data)
      .then((response) => {
        setLoading(false)
        Alert.alert(response.data.mensagem)
        setTitulo(null)
        setDescricao(null)
      })
      .catch((error) => {
        setLoading(false)
        Alert.alert("Erro", "Houve um erro inesperado")
      })
    }
  }

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[styles.container]}
        keyboardVerticalOffset={80}>
      <ScrollView style={{width: "100%"}}>
           
      <Input
        style={{marginTop: 60}}
        placeholder="Título do serviço"
        onChangeText={value => {
            setTitulo(value)
            setErrorTitulo(null)
        }}
        errorMessage={errorTitulo}        
        />
      
      <Input
        placeholder="Descreva o serviço para explicar melhor"
        onChangeText={value => {
            setDescricao(value)
            setErrorDescricao(null)
        }}
        errorMessage={errorDescricao}        
        />

    { isLoading && 
      <Text>Carregando...</Text>
    }

    { !isLoading && 
      <>
       <Button
            title="Salvar"
            onPress={() => salvar()}
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
              marginTop: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 100,
              marginVertical: 10,
            }}
          />
        <Button
            title="Cancelar"
            onPress={() => cancelar()}
            icon={{
              name: "stop",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(220,20,60, 1)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 30,
              marginTop: 2,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 100,
              marginVertical: 10,
            }}
          />
      </>
    }

      </ScrollView>
      </KeyboardAvoidingView>
    );
  }