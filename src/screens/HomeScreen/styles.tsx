import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    marginHorizontal: 15,
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  addProductWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    paddingHorizontal: 10,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 30,
  },
});

export default styles;
