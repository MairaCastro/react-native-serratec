import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
   },

   logo: {
      marginTop: 25,
      marginBottom: 25,
   },

   input: {
      width: 300,
      height: 42,
      backgroundColor: '#F4F3F3',
      marginBottom: 20,
      padding: 8,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'E0E0E0',

   },

   esqueceuSenha: {
      marginTop: 25,
      width: 300,
      alignItems: 'center',
   },

   esqueceuSenhaTexto: {
      color: '#474A51',
   },

   botaoLogin: {
      marginTop: 25,
      backgroundColor: '#399FFF',
      width: 300,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,

   },

   textoBotaoLogin: {
      color: '#fff',
      fontSize: 16,
   },

   botaoLoginFacebook: {
      flexDirection: 'row',
      marginTop: 25,
      alignItems: 'center',
      gap: 10,
   },

   textoBotaoLoginFacebook: {
      color: '#399FFF',
   },

   divisor: {
      marginTop: 25,
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
   },

   linhaDivisor: {
      height: 2,
      backgroundColor: '#EFEDED',
      width: 120,
      borderRadius: 5
   },

   textoDivisor: {
      marginHorizontal: 3
   },

   cadastrarContainer: {
      flexDirection: 'row',
      gap: 5,
      marginTop: 40,
   },

   naoPossuiConta: {
      color: '#474A51'
   },

   cadastreSeBotao: {
      color: '#399FFF',
      fontWeight: 'bold'
   }



})