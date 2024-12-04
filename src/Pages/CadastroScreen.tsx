import { useState } from 'react';
import React from 'react-native';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Index() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    const cadastro = () => {
        alert('nome');
        alert('email')
        alert('Senha')
    
    return (
        <View className='pt-50 h-full w-full flex justify-center items-center'>
    
            <Image source={require('../Assets/interLogo.png')}/>
        
            <TextInput 
            placeholder= "Seu nome..." 
            onChangeText={text=>setNome(text)} />

            <TextInput placeholder= "Seu email..." 
            onChangeText={text=>setEmail(text)} />
        
            <TextInput secureTextEntry= {true} 
            placeholder= "Sua Senha..." 
            onChangeText={text=>setSenha(text)} />

            <TouchableOpacity onPress={()=>cadastro()}>
                <Text >CADASTRAR!</Text>
            </TouchableOpacity>
        </View>
    );
  }
};


