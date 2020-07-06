import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 0,
    //flexBasis: 0,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  messageArea: {
    flexGrow: 2,
    flexShrink: 0,
    //flexBasis: 0,
    backgroundColor: '#51a6e2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  buttonGroup: {
    flexGrow: 3,
    //flexShrink: 0,
    //flexBasis: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',

  },
  backButtonGroup: {
    flexGrow: 1,
    //flexShrink: 0,
    //flexBasis: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '2%',
    //width: '90%'
  },
  button: {
    //flexGrow: 1, //
    //flexShrink: 0, //
    minHeight: 200, //
    fontSize: 17,
    margin: 5,
  },
  inputField: {
    //flexDirection: 'row',
    //flexGrow: 1,
    flexShrink: 1, //
    minWidth: '90%',
    margin: 10,
    borderWidth: 3,
    borderColor: '#ddd' ,
    backgroundColor: '#eee',
    textAlign: 'center'
  },
  text: {
    //flexGrow: 1,
    flexShrink: 1, //
    justifyContent: 'space-around', //
    fontSize: 17,
  },
  icons: {
    fontSize: 30,
  },
  horizontal: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    width: '75%',
    color: '#51a6e2',
  },
})

const mdStyle = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})

export {styles, mdStyle}
