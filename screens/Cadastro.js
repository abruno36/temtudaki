import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, CheckBox, Text, Button } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInputMask } from "react-native-masked-text";
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

  const [isLoading, setLoading] = useState(false);

  const [visibleDialog, setVisibleDialog] = useState(false);
  const [titulo, setTitulo] = useState(null);
  const [mensagem, setMensagem] = useState(null);
  const [tipo, setTipo] = useState(null);

  let cpfField = null;
  let telefoneField = null;

  const showDialog = (titulo, mensagem, tipo) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };

  const hideDialog = (status) => {
    setVisibleDialog(status);
  };
  const validar = () => {
    let error = false;
    setErrorEmail(null);
    setErrorCpf(null);
    setErrorNome(null);
    setErrorTelefone(null);

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu E-MAIL corretamente");
      error = true;
    }
    if (nome == null) {
      setErrorNome("Preencha seu NOME corretamente");
      error = true;
    }
    if (!cpfField.isValid()){
      setErrorCpf("Preencha seu CPF corretamente")
      error = true
    }
    if (telefone == null) {
      setErrorTelefone("Preencha seu TELEFONE corretamente");
      error = true;
    }

    return !error;
  };

  const salvar = () => {
    if (validar()) {
      
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, specificStyle.specificContainer]}
      keyboardVerticalOffset={80}
    >
      <ScrollView style={{ width: "100%" }}>
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
            setNome(value);
            setErrorNome(null);
          }}
          errorMessage={errorNome}
        />
        <View style={styles.containerMask}>
          <TextInputMask
            type={"cpf"}
            value={cpf}
            onChangeText={(value) => {
              setCpf(value);
              setErrorCpf(null);
            }}
            placeholder="CPF"
            keyboardType="number-pad"
            style={styles.maskedInput}
            ref={(ref) => cpfField = ref}
            eturnKeyType="done"
            onChangeText={(value) => setCpf(value)}
        />
        </View>
        <Text style={styles.errorMessage}>{errorCpf}</Text>

        <View style={styles.containerMaskFone}>
          <TextInputMask
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            placeholder="Telefone"
            keyboardType="phone-pad"
            returnKeyType="done"
            style={styles.maskedInput}
            ref={(ref) => telefoneField = ref}
            onChangeText={(value) => setTelefone(value)}
          />
        </View>
        <Text style={styles.errorMessage}>{errorTelefone}</Text>

        <View style={styles.checkboxContainer}>
        <CheckBox
          title="Aceito os termos de uso"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="red"
          checked={isSelected}
          onPress={() => setSelected(!isSelected)}
        />
        </View>
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
            marginTop: 10,
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
    marginTop: 30,
  },
});
