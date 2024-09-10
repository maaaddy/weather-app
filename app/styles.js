import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%'
      },
      weatherInfo: {
        fontSize: 20,
        marginVertical: 5,
        fontWeight: 'bold',
        padding: 5,
      },
      textbox: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        fontSize: 16,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      weatherText: {
        fontSize: 16,
        marginVertical: 5,
        fontWeight: 'bold',
        alignItems: 'center',
        padding: 5,
      },
      weatherText2: {
        fontSize: 16,
        marginVertical: 5,
        alignItems: 'center',
        padding: 5,
      },
      link: {
        marginTop: 15,
        paddingVertical: 15,
      },
      linkText: {
        fontSize: 14,
        color: '#2e78b7',
      },
});
