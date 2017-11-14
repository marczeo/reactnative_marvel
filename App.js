import React, {Component} from 'react';
import {View, Text, StatusBar, FlatList, Image} from 'react-native';
import {Header} from './components';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      personajes:null
    };
  }


  componentDidMount(){
    fetch('https://gateway.marvel.com/v1/public/characters?ts=10&apikey=8c30873c7d8444c3c4d78eaad6c668f1&hash=90e1eb97264a9e3313b4bf4da56d4b36')
    .then((response)=>{
      return response.json()
    }).then((responseJSON)=>{
      //console.log(responseJSON);
      this.setState({personajes: responseJSON.data.results});
      console.log(this.state.personajes);
    });
  };

  render(){
    return (      
      <View style={styles.container}>
        <StatusBar backgroundColor='#2d295b' />
        <Header title="Marvel" />
        <FlatList
          data={this.state.personajes}
          renderItem={({item}) => (
            <View>
            <Image
            style={{width: 50, height: 50}}
            source={{uri:item.thumbnail.path+"."+item.thumbnail.extension}}
            />
            <Text>{item.name}</Text>
            </View>
            )}
        />
      </View>
    );
  }
}

const styles={
  container: {
        flex:1,
      }
};

export default App;