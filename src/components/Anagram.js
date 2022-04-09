import React, { useEffect, useState } from "react";
import {
  Header,
  Container,
  Input,
  Label,
  Main,
  SearchResult,
  Counter,
  NotFoundText,
  FoundText,
  NotificationContainer,
} from "./Styles";

const Anagram = (props) => {
  const [sortedArray, setSortedArray] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    sortWordsArray(props.data);
  }, [props.data]);

  useEffect(() => {
    let sortedInputWord = sortInputWord();
    findNumberOfAnagram(sortedArray, sortedInputWord);
  }, [inputWord]);

  const sortWordsArray = (array) => {
    let sorted = array.map((word) => {
      return word.split("").sort().join("");
    });

    setSortedArray([...sorted]);
  };

  const onHandleChange = (e) => {
    setInputWord(e.target.value);
  };

  const sortInputWord = () => {
    if (inputWord) {
      let sortedWord = inputWord.toLowerCase().split("").sort().join("");
      return sortedWord;
    }
  };

  const findNumberOfAnagram = (array, word) => {
    if (word) {
      let count = 0;
      array.forEach((element) => {
        if (element === word.toString()) {
          count = count + 1;
        }
      });
      setCounter(count);
    }
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
          onChange={onHandleChange}
          value={inputWord}
        />
      </Main>
      <NotificationContainer>
        {counter === 0 && inputWord === "" ? (
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
