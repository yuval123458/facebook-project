import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = ({ searchHandler }) => {
  const [text, setText] = useState("");

  console.log(text);
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search by publisher name..."
        aria-label="Search"
        aria-describedby="basic-addon2"
        onChange={(e) => searchHandler(e)}
      />
      <Button variant="outline-secondary" id="button-addon2">
        <img
          className="rounded-circle"
          style={{ width: "25px", marginRight: "0" }}
          src="https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY="
        />
      </Button>
    </InputGroup>
  );
};
export default Search;
