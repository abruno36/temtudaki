import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
export default function Cadastrar({navigation}) {

    function cadastrarServico(){
      navigation.navigate("CadastroServico")
    }

    function cadastrarProduto(){
      navigation.navigate("CadastroProduto")
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>O que você quer cadastrar?</Text>
        <Button
            title="Cadastrar Serviço"
            onPress={() => cadastrarServico()}
            icon={{
              name: "child",
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
              marginTop: 10,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 100,
              marginVertical: 10,
            }}
          />
        <Button
            title="Cadastrar Produto"
            onPress={() => cadastrarProduto()}
            icon={{
              name: "shopping-bag",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "green",
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
       
       
      </View>
    );
  }