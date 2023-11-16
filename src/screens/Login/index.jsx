import { styles } from './styles'
import Logo from "../../assets/logo.png"
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'


export const Login = () => {

    return (
        <View style = {styles.container}> 

             <Image style = {styles.logo}
                source = {Logo}
            /> 

            <TextInput
                placeholder="Telefone, nome de usuário ou email"
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                style={styles.input}
                secureTextEntry={true}              
            />   

            <TouchableOpacity activeOpacity={0.6} style={styles.botaoLogin}>
                <Text style={styles.textoBotaoLogin}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.divisor}>
                <View style={styles.linhaDivisor}></View>
                <Text style={styles.textoDivisor}>OU</Text>
                <View style={styles.linhaDivisor}></View>
            </View>

            <TouchableOpacity activeOpacity={0.6} style={styles.botaoLoginFacebook}>
                <FontAwesome5 name="facebook" size={25} color="#399FFF"/>
                <Text style={styles.textoBotaoLoginFacebook}>Entrar com o Facebook</Text>
            </TouchableOpacity>  

            <View style={styles.esqueceuSenha}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.esqueceuSenhaTexto}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cadastrarContainer}>
                <Text style={styles.naoPossuiConta}>Não tem uma conta? </Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.cadastreSeBotao}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}



