import React, { useEffect, useState } from "react";
import {
  Header,
  Container,
  Input,
  Label,
  Button,
  Main,
  SearchResult,
  Counter,
  NotFoundText,
  FoundText,
  NotificationContainer,
} from "./Styles";

const Anagram = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(0);
  const [sortedInputWord, setSortedInputWord] = useState("");
  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    sortArrayWords(props.data);
  });

  useEffect(() => {
    findAnagram(sortedArray, sortedInputWord);
  }, [sortedInputWord]);

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  const sortInputWord = (word) => {
    if (word) {
      setSortedInputWord(word.split("").sort().join(""));
    } else {
      console.log("Word is not matched!");
    }
  };

  const sortArrayWords = (array) => {
    let sorted = array.map((word) => {
      return word.split("").sort().join("");
    });

    setSortedArray([...sorted]);
  };

  const findAnagram = (array, word) => {
    let count = 0;
    array.forEach((element) => {
      if (element === word.toString()) {
        count = count + 1;
      }
    });
    setCounter(count);
  };

  return (
    <Container>
      <Header>Anagram Finder</Header>
      <Main>
        <Label>Enter a word: </Label>

        <Input
          placeholder=" Enter a word..."
          type="text"
          id="word"
          name="word"
          onInput={onHandleChange}
        />

        <Button onClick={() => sortInputWord(inputValue)}>
          <p>Find</p>
        </Button>
      </Main>
      <NotificationContainer>
        {counter > 0 ? (
          <SearchResult>
            <Counter>{counter}</Counter>
            <FoundText> anagram/s found in your search.</FoundText>
          </SearchResult>
        ) : (
          <NotFoundText style={{ color: "red" }}>
            Nothing found! Please try another word...
          </NotFoundText>
        )}
      </NotificationContainer>
    </Container>
  );
};

export default Anagram;
