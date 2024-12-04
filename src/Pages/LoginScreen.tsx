import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    }
  };

  return (
  
      <View className='pt-50 h-full w-full flex justify-center items-center'>
        <Image source={require('../Assets/interLogo.png')}
        />


        <Text className="text-2xl mb-6 ">Welcome</Text>

        <TextInput
          className="h-12 bg-white border border-gray-300 mb-4 px-4 rounded"
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          className=" h-12 bg-white border border-gray-300 mb-4 px-4 rounded"
          placeholder="Senha"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity className="bg-pink-500 py-3 px-6 rounded" onPress={handleLogin}>
          <Text className="text-white text-lg">Entrar</Text>
        </TouchableOpacity>
       </View>
  );
};

export default LoginScreen;
