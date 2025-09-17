import { Alert, Image, StyleSheet, View } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors } from './shared/constants'
import { Button } from './shared/Button/Button';
import { CustomAlert } from './shared/CustomAlert/CustomAlert';
import { useState } from 'react';


export default function App() {
const [error, setError]=useState<string|null>(null)
  const handlePress = () => {
    setError('Неверный логин и пароль')
    setTimeout(()=>setError(null), 4000)
    
  }

  return (<>
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode='contain' source={require('./assets/logo.png')} />
      <View style={styles.inputs}>
        <Input placeholder='Email' />
        <Input placeholder='Пароль' isPassword />
        <Button text='Войти' onPress={handlePress} />
      </View>
      {/* <Button title='Восстановить пароль' /> */}

    </View>
    <CustomAlert error={error} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    padding: 16,
    gap: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%'


  },
  logo: {
    width: 220
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    width: 280,
  },


});
