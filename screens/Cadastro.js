import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, CheckBox, Text, Button } from "react-native-elements";
import styles from "../style/MainStyle";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [isSelected, setSelected] = useState(false);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorNome, setErrorNome] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorTelefone, setErrorTelefone] = useState(null);

  const validar = () => {
      let error = false
      setErrorEmail(null)
      setErrorNome(null)
      setErrorCpf(null)
      setErrorTelefone(null)
      if(email == null){
        setErrorEmail("Preencha seu e-mail corretamente")
        error = true
      }
      if(nome == null){
        setErrorNome("Preencha seu nome")
        error = true
      }
      if(cpf == null){
        setErrorCpf("Preencha seu CPF")
        error = true
      }
      if(telefone == null){
        setErrorTelefone("Preencha seu telefone")
        error = true
      }

      return !error
  };

  const salvar = () => {
    if (validar()) {
      console.log("Salvou");
    }
  };

  return (
    <View style={styles.container}>
     
      <Text style={styles.text} h4>
        Cadastre-se
      </Text>
      <Input
        placeholder=" E-mail"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        errorMessage={errorEmail}
      />
      <Input
        placeholder="Nome"
        onChangeText={(value) => {
              setNome(value)
              setErrorNome(null)}}
        errorMessage={errorNome}/>
      <Input
        placeholder="CPF"
        keyboardType="number-pad"
        onChangeText={(value) => setCpf(value)}
        errorMessage={errorCpf}
      />
      <Input
        placeholder="Telefone"
        keyboardType="phone-pad"
        onChangeText={(value) => setTelefone(value)}
        errorMessage={errorTelefone}
      />

      <CheckBox
        title="Aceito os termos de uso"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
      />
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

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#ddd",
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
});
