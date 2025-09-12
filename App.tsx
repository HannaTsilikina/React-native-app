import { Image, StyleSheet,  View } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors } from './shared/constants'
import { Button } from './shared/Button/Button';


export default function App() {


  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode='contain' source={require('./assets/logo.png')} />
      <View style={styles.inputs}>
        <Input placeholder='Email' />
        <Input placeholder='Пароль' isPassword />
        <Button text='Войти'/>
                {/* <Button title='Войти' /> */}
      </View>
      {/* <Button title='Восстановить пароль' /> */}

    </View>
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
