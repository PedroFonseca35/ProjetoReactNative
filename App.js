import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {

   
  const [nome, setNome] = useState() //nome-Verifica o Treino Com o TextInput
  const [aux, setAux] = useState(false) //auxiliar liga e desliga o fundo da tela
  const [corDeFundo, setCorDeFundo] = useState() //seta a cor de fundo
  
  const [ligado1, setLigado1] = useState(false) //ligado determina o tipo de treino com o TextInput
  const [ligado2, setLigado2] = useState(false) //Verifica o que foi digitado
  const [ligado3, setLigado3] = useState(false)

  const clickBotao = () => { //código do aux e do corDeFundo
    setAux(!aux)
      if (aux == true){
        setCorDeFundo('#C2D705')
      } else {
        setCorDeFundo('#ffffff')
      }
  }

  const clickInput = () => { //Função TextInput para validar o que foi digitado
    if (nome == 'Treino A' || nome == 'Treino a'){
      setLigado1(true)
    } else {
      setLigado1(false)
    }
    if (nome == 'Treino B' || nome == 'Treino b'){
      setLigado2(true)
    } else {
      setLigado2(false)
    }
    if (nome == 'Treino C' || nome == 'Treino c'){
      setLigado3(true)
    } else {
      setLigado3(false)
    }
  }

  const [aux2, setAux2] = useState(false)

  //Treino A
  
  const clickOpacity = () => {
    setAux2(!aux2)
    if (aux2 == false){
      setCards([
        { card: 'Hipertrofia superiores', key: 1 },
        { card: '5 X 6-8 reps – Intervalo 1’ a 1’15”', key: 2 },
        { card: '5 X 6-8 reps – Intervalo 1’ a 1’15”', key: 3 },
        { card: '3 X 8-10 reps – Intervalo 45” a 1’', key: 4 },
        { card: '5 X 6-8 reps – Intervalo 1’ a 1’15”', key: 5 },
        { card: '3 X 8-10 reps – Intervalo 45” a 1’', key: 6 },
        { card: '5 X 6-8 reps – Intervalo 1’ a 1’15”', key: 7 },
        { card: '5 X 6-8 reps – Intervalo 1’ a 1’15”', key: 8 },
      ])
    } else if (aux2 == true) {
      setCards([
        { card: 'Treino A', key: 1 },
        { card: 'Rosca direta', key: 2 },
        { card: 'Supino', key: 3 },
        { card: 'Supino inclinado halteres', key: 4 },
        { card: 'Barra fixa ou graviton', key: 5 },
        { card: 'Remada baixa', key: 6 },
        { card: 'Desenvolvimento', key: 7 },
        { card: 'Mergulho', key: 8 },
      ])
    }    
  }

  const [cards, setCards] = useState([ //const que cria os cards inciais da FlatList
    { card: 'Treino A', key: 1 },
    { card: 'Rosca direta', key: 2 },
    { card: 'Supino', key: 3 },
    { card: 'Supino inclinado halteres', key: 4 },
    { card: 'Barra fixa ou graviton', key: 5 },
    { card: 'Remada baixa', key: 6 },
    { card: 'Desenvolvimento', key: 7 },
    { card: 'Mergulho', key: 8 },
  ])

  //Treino B
  
  const clickOpacity2 = () => {
    setAux2(!aux2)
    if (aux2 == false){
      setCards2([
        { card: 'Hipertrofia ombros e costas', key: 1 },
        { card: '5 X 8-10 reps – Intervalo 45” a 1’', key: 2 },
        { card: '4 X 8-10 reps – Intervalo 45” a 1’', key: 3 },
        { card: '3 X 8-10 reps – Intervalo 45” a 1’', key: 4 },
        { card: '4 X 8-10 reps – Intervalo 45” a 1’', key: 5 },
        { card: '3 X 8-10 reps – Intervalo 45” a 1’', key: 6 },
        { card: '3 X 8-10 reps – Intervalo 45” a 1’', key: 7 },
        { card: '3 X 8-10 reps – Intervalo 45” a 1’', key: 8 },
      ])
    } else if (aux2 == true) {
      setCards2([
        { card: 'Treino B', key: 1 },
        { card: 'Barra fixa ou graviton', key: 2 },
        { card: 'Remada baixa no triângulo', key: 3 },
        { card: 'Puxada alta', key: 4 },
        { card: 'Rosca alternada', key: 5 },
        { card: 'Rosca direta no cabo', key: 6 },
        { card: 'Abdominal crunch máquina', key: 7 },
        { card: 'Abdominal oblíquo máquina', key: 8 },
      ])
    }    
  }

  const [cards2, setCards2] = useState([ //const que cria os cards inciais da FlatList
    { card: 'Treino B', key: 1 },
    { card: 'Barra fixa ou graviton', key: 2 },
    { card: 'Remada baixa no triângulo', key: 3 },
    { card: 'Puxada alta', key: 4 },
    { card: 'Rosca alternada', key: 5 },
    { card: 'Rosca direta no cabo', key: 6 },
    { card: 'Abdominal crunch máquina', key: 7 },
    { card: 'Abdominal oblíquo máquina', key: 8 },
  ])

  //Treino C

  const clickOpacity3 = () => {
    setAux2(!aux2)
    if (aux2 == false){
      setCards3([
        { card: 'Hipertrofia inferiores', key: 1 },
        { card: '5 X 4-6 reps – Intervalo 1’ a 1’30”', key: 2 },
        { card: '4 X 4-6 reps – Intervalo 1’ a 1’30”', key: 3 },
        { card: '4 X 8-10 reps – Intervalo 45’ a 1’', key: 4 },
        { card: '3 X 8-10 reps – Intervalo 45’ a 1’', key: 5 },
        { card: '4 X 8-10 reps – Intervalo 45” a 1’', key: 6 },
        { card: '4 X 8-10 reps – Intervalo 45” a 1’', key: 7 },
        { card: '3 X 8-10 reps – Intervalo 45” a 1’', key: 8 },
      ])
    } else if (aux2 == true) {
      setCards3([
        { card: 'Treino C', key: 1 },
        { card: 'Agachamento', key: 2 },
        { card: 'Stiff', key: 3 },
        { card: 'Avanço', key: 4 },
        { card: 'Leg Press', key: 5 },
        { card: 'Panturrilha', key: 6 },
        { card: 'Abdominal crunch máquina', key: 7 },
        { card: 'Abdominal oblíquo máquina', key: 8 },
      ])
    }    
  }

  const [cards3, setCards3] = useState([ //const que cria os cards inciais da FlatList
    { card: 'Treino C', key: 1 },
    { card: 'Agachamento', key: 2 },
    { card: 'Stiff', key: 3 },
    { card: 'Avanço', key: 4 },
    { card: 'Leg Press', key: 5 },
    { card: 'Panturrilha', key: 6 },
    { card: 'Abdominal crunch máquina', key: 7 },
    { card: 'Abdominal oblíquo máquina', key: 8 },
  ])

  return (
    <View style={styles.container} backgroundColor={corDeFundo}>
      <StatusBar style="auto" />
      <ScrollView>

      <View style={styles.Perfil} /* Perfil */>
      <View style={styles.justicado}>
        <FontAwesome name="user-circle-o" size={60} color="black" />
        <View style={styles.lateral}>
          <Text style={styles.TextoBold}>Nome do usuário</Text>        
          <Text style={styles.TextoBaixo}>email@gmail.com</Text>
        </View>
      </View>
        <MaterialCommunityIcons name="login" size={40} color="black" />
      </View>

      <View style={styles.botao} /* Botão Liga e desliga fundo */>
        <Button title={'MUDAR FUNDO'} onPress={clickBotao}></Button>
      </View>

      <View style={styles.centro} /* TextInput de verificação de Texto */>
        <Text style={styles.h1}>Introdução ao Treino ABC</Text>
        <Text style={styles.p1}>Para saber sobre cada treino, digite: Treino A | Treino B | Treino C</Text>
        <View style={styles.bloco}>
          <TextInput onKeyPress={clickInput} style={styles.input} placeholder='Ex: Treino A' onChangeText={setNome}/>
          <FontAwesome name="search" size={18} color="#515151" margin={20}/>
        </View>
      </View>

      { /* Se ligado true ativa os cards iniciais */
        ligado1 ?
        <View style={styles.espacamento}>
          <FlatList style={styles.Flat}
          numColumns={2}
          keyExtractor={( item ) => item.key}
          data={cards}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={item.key} /* Clicar no botão troca o texto setando um aux2 true|falso */
                onPress={() => clickOpacity(item.key)}>
                  {
                    aux2 ?
                    <Text style={styles.blocos}>{item.card}</Text>
                    :
                    <Text style={styles.blblocos}>{item.card}</Text>
                  }
                                  
            </TouchableOpacity>
          )}>
          </FlatList>
        </View>
        :
        <Text></Text>
      }
      {
        ligado2 ?
        <View style={styles.espacamento}>
          <FlatList style={styles.Flat}
          numColumns={2}
          keyExtractor={( item ) => item.key}
          data={cards2}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={item.key} /* Clicar no botão troca o texto setando um aux2 true|falso */
                onPress={() => clickOpacity2(item.key)}>
                  {
                    aux2 ?
                    <Text style={styles.blocos}>{item.card}</Text>
                    :
                    <Text style={styles.blblocos}>{item.card}</Text>
                  }
                                  
            </TouchableOpacity>
          )}>
          </FlatList>
        </View>
        :
        <Text></Text>
      }
      {
        ligado3 ?
        <View style={styles.espacamento}>
          <FlatList style={styles.Flat}
          numColumns={2}
          keyExtractor={( item ) => item.key}
          data={cards3}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={item.key} /* Clicar no botão troca o texto setando um aux2 true|falso */
                onPress={() => clickOpacity3(item.key)}>
                  {
                    aux2 ?
                    <Text style={styles.blocos}>{item.card}</Text>
                    :
                    <Text style={styles.blblocos}>{item.card}</Text>
                  }
                                  
            </TouchableOpacity>
          )}>
          </FlatList>
        </View>
        :
        <Text></Text>
      }

      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Perfil: {
    width: '100%',    
    flexDirection: 'row',
    marginTop: '5%',
    borderRadius: 8,
    backgroundColor: '#EBEBEB',
    marginBottom: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  justicado: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lateral: {
    marginLeft: 10,
  },
  TextoBold: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  TextoBaixo: {
    color: '#8F8F8F',
  },
  h1: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  centro: {
    alignItems: 'center',
  },
  p1: {
    marginTop: 10,
    fontSize: 12,
    color: '#8F8F8F',
  },
  input: {
    padding: 8,
    marginLeft: 12,
    width: '70%',
  },
  bloco: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#777',
    width: '40%',
    margin: 10,
    borderRadius: 8,
  },
  botao: {
    width: 130,
    left: '3%',
  },
  blocos: {
    width: 160,
    height: 100,
    margin: 15,
    borderRadius: 8,
    backgroundColor: '#294D6F',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  blblocos: {
    width: 160,
    height: 100,
    margin: 15,
    borderRadius: 8,
    backgroundColor: '#294D6F',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  centroBlocos: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  espacamento: {
    width: '100%',
    alignItems: 'center',
  }
});
