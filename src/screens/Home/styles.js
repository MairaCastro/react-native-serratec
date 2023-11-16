import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },   

    header: {
        marginTop: 40,
        height: 56,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',  
        paddingHorizontal: 10,   
    },

    botoesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    stories: {
        height: 115,
        alignContent: 'center',
        width: '100%',
        paddingLeft: 10,
        paddingVertical: 10,
    },

    storiesCard: {
        alignContent: 'center',
        marginRight: 14,  
    },

    storiesCardImage: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: '#F7B55A',
        borderRadius: 50,        
    },

    content: {
        width: '100%',
        marginBottom: 20,
    },

    contentHeader: { 
        marginTop: 25,
        width: '100%',          
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,             
    },

    contentHeaderLeft: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    contentHeaderFoto: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#fff",
    },

    contentHeaderText: {
        color: "#000",
    },

    contentImage: {
        width: "100%",
        height: 355,
    },

    contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  contentFooterText: {
    color: "#000",

  },
  contentFooterTexts: {
    paddingLeft: 10,
    gap: 10,
  },

  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },

  contentFooterText3: {
    fontSize: 10,
  },

  containerTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
  },

  tab: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

})