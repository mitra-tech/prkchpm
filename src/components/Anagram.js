import React, { useState } from "react";
import { Header, Container, Input, Label, Button, Main } from "./Styles";

const Anagram = (props) => {
  //Input Value
  const [inputValue, setInputValue] = useState("");

  // counter
  // const [counter, setCounter] = useState(0);

  // sorted input value state
  const [sortedWord, setSortedWord] = useState("");

  // sorted input value state
  const [sortedArray, setSortedArray] = useState([]);

  // const sortedArray = [];
  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Sorting input word
  const sortWord = (word) => {
    setSortedWord(word.split("").sort().join(""));
  };

  // generating new array that each element is sorted alphabetically
  const sortArray = (array) => {
    const sortedArray = array.map((word) => {
      return word.split("").sort().join("");
    });
    console.log(sortedArray);
  };
  console.log(sortedWord);

  // comparing two words
  const findAnagram = () => {
    // sortedArray.forEach(() => {
    // })
  };

  // button handler
  const onAnagramFinder = () => {
    sortArray(props.data);
    sortWord(inputValue);
  };

  return (
    <Container>
      <Header>Park Champ</Header>
      <Main>
        <Label> enter a word</Label>
        <Input type="text" id="word" name="word" onInput={onHandleChange} />
        <Button onClick={onAnagramFinder}>
          <p>Submit</p>
        </Button>
      </Main>
      <h1>{`counter matches were found in your search`}</h1>
    </Container>
  );
};

export default Anagram;

//  // props.data.forEach((word) => {
//   const sortedWords = word.split("").sort().join("");
//   console.log(sortedWords);
//   sortedArray.push(sortedWords);
// });

// sortedArray.forEach((word, count = 0) => {
//   if (inputWord === word) {
//     count += 1;
//     setCounter(count);
//   }
// });
// let count = 0;

// if (inputValue.length !== word.length) {
//   console.log("invalid word");
//   return;
// }

// let word1 = word.split("").sort().join("");
//   console.log(word1);

//   if (word1 === word2) {
//     counter += 1;
//     console.log(`There are ${counter} matches`);
//   } else {
//     console.log("words are diffrent");
//   }
