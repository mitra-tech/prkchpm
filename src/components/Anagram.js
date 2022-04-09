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
  const [inputWord, setInputWord] = useState("");
  const [counter, setCounter] = useState(0);
  const [sortedInputWord, setSortedInputWord] = useState("");
  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    sortWordsArray(props.data);
  }, [props.data]);

  useEffect(() => {
    findAnagram(sortedArray, sortedInputWord);
  }, [sortedInputWord]);

  const onHandleChange = (e) => {
    setInputWord(e.target.value);
  };

  const sortInputWord = () => {
    if (inputWord) {
      let sortedWord = inputWord.split("").sort().join("");
      setSortedInputWord(sortedWord);
    }
    setInputWord("");
  };

  const sortWordsArray = (array) => {
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
          value={inputWord}
        />

        <Button onClick={sortInputWord}>
          <p>Find</p>
        </Button>
      </Main>
      <NotificationContainer>
        {counter === 0 && sortedInputWord === "" ? (
          ""
        ) : counter > 0 ? (
          <SearchResult>
            <Counter>{counter}</Counter>
            <FoundText> anagram/s found.</FoundText>
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
