import React from 'react';

export default class Network extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,dataSource:0}
  }

  testApi(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
       
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        });
        return responseJson;
      })
      .catch((error) =>{
        console.error(error);
      });
      
  }



  render(){
    return(
     <div>
       <span>some </span>
     </div>
    );
  }
}