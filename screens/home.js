import React,{useState} from 'react';
import {StyleSheet,View, Text, FlatList, TouchableOpacity,Modal, TouchableWithoutFeedback, Keyboard}  from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
export default function Home({navigation}){
     const [reviews, setReview] = useState([
         {
             title: 'Motor Racing', rating:5, body:'Motoracing is a fast-paced, 3D motocross racing game sport. Rev your bike and be ready for the ride of your life.', key: '1'
         },
         {
            title: 'Police Supercars Racing', rating:4, body:'Police Supercars Racing is a race to maintain peace. Step on the accelerator and engage your nitro. Be at the crime scene before the criminals slips away.', key: '2'
        },
        {
            title: 'Dirt Bikes Super Racing', rating:3, body:'Dirt Bikes Super Racing takes you on a bike race filled with tricks and speed. Perform stunts that defy the law of physics in this motocross race.', key: '3'
        },
        {
            title: 'Spider Solitaire', rating:4, body:'Play this popular classic solitaire card game, Spider Solitaire and challenge your skills and luck.', key: '4'
        },
        {
            title: 'Crazy Monster Trucks', rating:3, body:'Crazy Monster Trucks brings you challenging obstacle courses and several unlockable monster trucks to try out.', key: '5'
        },
        {
            title: 'Spidermania Solitaire', rating:2, body:'Play Spidermania Solitaire and treat yourself to one of the best Spider Solitaire games around!', key: '6'
        },
        {
            title: 'The Far Kingdoms Elements', rating:4, body:'The Far Kingdoms Elements is a unique combination of hidden object and match-3 games', key: '7'
        },
        {
            title: 'Survival horror', rating:3, body:'Survival horror games like Resident Evil use mature themes and subject matter to portray grisly and gruesome settings (many of these games use blood and gore and are intended only for mature audiences). Such titles deliver nail-biting excitement amplified by a key game mechanic: limited resources like ammunition or finite weapons', key: '8'
        },
        {
            title: 'Hangman', rating:3, body:'Hangman is a classic word game for two players. One player thinks of a word and writes down dashes to represent the number of letters. The other guesses letters of the alphabet. Correct letters are inserted into the word; incorrect letters result in another segment of the “hangman” being drawn', key: '9'
        },
        {
            title: 'Word searches', rating:4, body:'A word search has a grid (often 10×10 or more) filled with letters, and a number of words written alongside or beneath the grid. The person completing the word search needs to find those words within the grid.', key: '10'
        },
        {
            title: 'Bulls and Cows', rating:4, body:'This game, which can also be called “Mastermind” or “Jotto” involves one player thinking up a secret word of a set number of letters. The second player guesses a word; the first player tells them how many letters match in the right position (bulls) and how many letters are correct but in the wrong position (cows).', key: '11'
        },
        {
            title: 'Pass the Bomb', rating:2, body:'It’s very simple to play: you deal a card for the round pass a “bomb” around the table and when it goes off, the person holding it loses. Before you can pass the bomb on during your turn, you need to come up with a word that contains the letters on the card', key: '12'
        },
        {
            title: 'Apples to Apples', rating:5, body:'Apples to Apples has red cards (with the name of a person, place, thing, etc) and green cards (with two different descriptions): the player with a green card selects one of the descriptions, and others have to choose a card from their hand of red cards. The judge for that game decides which red card best matches the description', key: '13'
        },
        {
            title: 'Letter Tycoon', rating:5, body:'In this game, you have a hand of 7 cards which you can use in conjunction with the 3 “community cards” to create a valuable word. It’s a more strategic game than some others, with aspects of finance (like patents and royalties) involved too – if you’re a budding tycoon, you might really enjoy it.', key: '14'
        },
        {
            title: 'Dungeons and Dragons', rating:3, body:'Although you might never have played Dungeons and Dragons, I’m sure you’ve heard of this classic roleplaying game that’s been around since 1974 and is now onto is 5th edition. It takes rather longer to get to grips with than a board or card game: to play, you need a “Dungeon Master” (essentially the storyteller of the game) and at least two players (who each control a character), plus rulebooks and a lot of different dice.', key: '15'
        },

     ]);
      const [modelOpen, setModalOpen] = useState(false);
      const addReview = (review) => {
          review.key = Math.random().toString();
           setReview((currentReviews)=> {
               return [review, ...currentReviews]
           })
           setModalOpen(false);
      }
     return (
        <View style={globalStyles.container}>
         <Modal visible={modelOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
          <MaterialIcons name="close" style={{...styles.modalToggle, ... styles.modalClose}}   size={24}   onPress={() => setModalOpen(false)}/>
            <ReviewForm  addReview={addReview}/>
          </View>
          </TouchableWithoutFeedback>
         </Modal>

         <MaterialIcons name="add"   style={styles.modalToggle}   size={24}   onPress={() => setModalOpen(true)}/>
          <FlatList  
             data={reviews}
             renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item) }>
                <Card>
                    <Text style={globalStyles.titleText}> 
                      {item.title}
                    </Text>
                    </Card>
                </TouchableOpacity>
             )}
          />
         </View>
        
    )
}


const styles = StyleSheet.create({
    modalContent: {
      flex:1
    },
    modalToggle:{
     marginBottom:10,
     borderWidth:1,
     borderColor: '#f2f2f2',
     borderRadius: 10,
     alignSelf: 'center'
    },
    modalClose:{
        marginBottom:0,
        marginTop:20
    }
})
