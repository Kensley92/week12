import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  //Binding the function with class
    const [option, setOption] = useState();
    const [votes, setVotes] = useState(false);


    function increaseExcitingVote(value){
      setOption('exciting');
      setVotes(true);
    }
    function increaseChillVote(value){
      setOption('chill');
      setVotes(true);
    }

    function increaseRedVote(value){
      setOption('red');
      setVotes(true);
    }
    function increaseBlueVote(value){
      setOption('blue');
      setVotes(true);
    }

    function increaseCarVote(value){
      setOption('car');
      setVotes(true);
    }
    function increasePlaneVote(value){
      setOption('plane');
      setVotes(true);
    }




    return (
     
        <View style={styles.container}>
        { votes ? (
          <View style={styles.container}>
                      <Text>You voted for {option}!</Text>
          </View>
          
        ) : (
            <View>
             <Text style={styles.headerText}>Week 12</Text>
            
            <Text style={styles.headerText}>Do you like to be around exciting people or chill people?</Text>
            <Card>
              <Button title="Exciting People" onPress={(value) => (increaseExcitingVote('exciting'))}/>
            </Card>
            <Card>
              <Button title="Chill People" onPress={(value) => (increaseChillVote('chill'))}/>
            </Card>
            <Card.Divider/>
            
            <Text style={styles.headerText}>Which color do you prefer?</Text>
            <Card>
              <Button title="Red" onPress={(value) => (increaseRedVote('red'))}/>
            </Card>
            <Card>
              <Button title="Blue" onPress={(value) => (increaseBlueVote('blue'))}/>
            </Card>
            <Card.Divider/>
          
            <Text style={styles.headerText}>Would you travel by car or plane?</Text>
            <Card>
              <Button title="Travel by Car" onPress={(value) => (increaseCarVote('car'))}/>
            </Card>
            <Card>
              <Button title="Travel by Plane" onPress={(value) => (increasePlaneVote('plane'))}/>
            </Card>
            <Card.Divider/>

            </View>
        )
        }
         </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbf4ff",
    }
    
    ,
  headerText: {
    
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"


  }})



