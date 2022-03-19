import React , { useState } from 'react';
import { ScrollView,
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,Image,FlatList } from 'react-native';

image={uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_UsXeaMLKMUNyEcEXZ6cOtI2iwU68bpzyQ&usqp=CAU"};

function AddList(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: enteredGoal }
      ]);
      
      setEnteredGoal('');
  };

  //For removing Goal Item 
  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

    return (
        <ImageBackground source={image}
        style={styles.backImage}>
            <View style={styles.container}>
                <View style={{
                            backgroundColor:"#AFEEEE",
                            width:"100%",
                            height:150,
                }}>
                <Text style={styles.textadd}>You can Add list of Items from here</Text>
                </View>

            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Search"
                            style={styles.input}
                            onChangeText={goalInputHandler}
                            value={enteredGoal}
                        />
                        
                         <TouchableOpacity onPress={addGoalHandler.bind(this, enteredGoal)}>                    
                                
                                <Image style={styles.imageButtonlogo1}
                                       source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABHR0f4+Pjc3Nzy8vL7+/tPT0/MzMykpKSoqKiHh4f19fVjY2NLS0vf39/U1NSVlZUsLCxYWFhzc3N/f3/Dw8Pn5+dfX1+NjY20tLRoaGiXl5cTExM3Nzfs7OweHh4mJiavr6++vr4LCwswMDC61V6SAAADy0lEQVR4nO2di1LiQBBFHYUQkEeQh2gCouD//+IuxdYqazLTPclW30nd8wPeU5GZNMlc7u4IIYQQQgi5ZVHkeV48W8f4PwyqnfvLuRz3THO4fHL/cphk1rG64+WH3vVKjq2DdURe73fhfWEdrguqZsHfnKzjtWfjFXRuYh2wLY8BQederSO24yMo6FxuHbINC4Ggc0PrmC34uQvWMbKOGc9EJJjwgpqdhYbv1kljGQsF011PZZ/CCwfrqHEUYkHnBtZhowhv9l+8WIeN4qgwfLIOG8NUIehcirOiZ2iqIcVbN+l2fyXFESM0Nt2ysY4bQakyLK3jRrALa31jZx03gpHKMMX54l5leG8dNwIa0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQn7nKcG4Vc3Cq1rPV/F7PfK8y3Ef9jdVsXZ3iexmmr7pDIXaUr9MIv8XaOreKjbYNZpiW34XNg0ZQUoWAh+LQe3oX8MpSKqhb55FYywQP1jlbMJMIprJF1CM4FK473IrHNiT4Zp2wNaHNP9Vl9IvHvl/C0EVsaFZLCv+u+G4drwM+fYID63Sd4Bun5J05yPjKClfW4TrBd7Zf3gqEjKcKZmidrSOaC+CeraN1RPO8L6vIw6d5Me3HZuHr1aJhKjQb9v9z2IfJ4oLnu1NNxRouZ8/8pHtehIpvuOjDeOj/wk3XIoeKb7bIrMN1gvdxm65GDhPvjN+LHTHw9KIHM3DgC9P0L2KwgVHTHAtJuP885UdPTlQrnfagL3qCmPK2L6zN3lrnjEb8ZpWmiRsJ0RPgK29JDhmVXPAuxfdNRtq3v6aV7sU0Y+bBp9s1ZKeZdW4hx5f4t/eKyXp1wP1uY/85Kpfb9r/ikj1EkCnfoI37I63d2tD/d4RpSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfEYqw5F13Ah2KkNftxMqug7N0jpuBLqD78HTu4Dout8m1nEj0J3TzK3jRqCrRoupHDdHI3i0DhuFZqkJ1KqCojkTXliHjUN+btHTdAiNvLHI15mDjHg1PduelGyB9CKmuN3/QSaY6qfwgmw5jT+IDYDk/1TQt4JM+Ei/oOsfm5BimnczN/hrmRJeRr/wjFH75qbRpMiaLmOqtzI1DJc/m8IP42TvZOoZVN/WnHM51v4CVSI8F3meFz2VI4QQQgghLfgFpLRSoOw1LQoAAAAASUVORK5CYII="}}
                                        //source={{uri:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4eYDH74IZRY69eCkYUpnnpyYNxIYzdMvOg&usqp=CAU "}}
                                />
                        </TouchableOpacity >
                    </View>
                    <FlatList   //List
                        keyExtractor={(item, index) => item.id}
                        data={courseGoals}
                       
                        //Goal Item
                        renderItem={itemData => (

                        <TouchableOpacity  onLongPress={removeGoalHandler.bind(this,itemData.item.id)}>
                            <View style={styles.listItem}>
                                <Text onDelete={()=> console.log('Does that work?')}>{itemData.item.value}</Text>
                      
                            </View>
                    
                        </TouchableOpacity>
                         )}
                
                    />
                    </View>


                        <View style={styles.ButtonContainer}>  
                
                                <TouchableOpacity style={styles.createBTN}>                    
                                        <Text style={styles.CreateTxt}
                                            >
                                            Create
                                        </Text>
                                </TouchableOpacity >

                                <TouchableOpacity style={styles.back}>
                                    <Text style={styles.backBtn}>
                                        BACK
                                    </Text>
                                </TouchableOpacity> 
                        </View>
                 </ScrollView>        

          </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    backImage:{
        flex:1,
    },
    container:{

        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
    
    }, 
    textadd:{
        padding:25,
        fontSize:30,
        fontWeight:"bold",
        color:"black",  
  
    }, 
    screen: {
        padding: 50,
        paddingLeft:20,
        paddingRight:20,
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        fontSize:20,
        color:"#fff"
      },
      imageButtonlogo1:{
        width: 40,
        height: 40,
      },
    
      listItem:{
        color:"#fff",
        padding:10,
        backgroundColor:"transparent",
        borderColor:"skyblue",
        borderWidth:1,
        marginVertical:5

      },
    
      ButtonContainer:{
        flexDirection:"column",
        alignItems:"center",
        top:80
    
       
      },
      createBTN:{
          backgroundColor:"#4169E1",
          padding:20,
          width:"50%",
          borderRadius:10,
          
      },
      CreateTxt:{
          color:"#fff",
          fontSize:20,
          fontWeight:"bold",
          textAlign:"center",
          
      },
      back:{
        paddingLeft:300,
        paddingTop:100,
        
      },
      backBtn:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
      },

    
})

export default AddList;