import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Col } from "react-bootstrap";
import { TagInput } from "reactjs-tag-input";

const languageConvert = {
  Vietnameses: "vi",
  Korean: "ko",
  English: "en",
};

export default function AddExperiences() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [language, setLanguage] = useState("Vietnameses");
  const [duration, setDuration] = useState(60);
  const [price, setPrice] = useState(1);
  const [images, setImages] = useState("");
  useEffect(() => {
    dispatch({ type: "ADDNAVIGATOR", payload: { url: "" } });
  });
  const onTagsChanged = (tags) => {
    setTags(tags);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description, tags, language, duration, price, images);
    const exp = {
      title: title,
      description: description,
      duration: duration,
      price: price,
      languages: languageConvert[language],
      images: images,
      tags: tags,
    };
    console.log(exp);
  };
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder="Enter Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Languages</Form.Label>
            <Form.Control as="select" onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option>Vietnameses</option>
              <option>Korean</option>
              <option>English</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Row style={{ marginBottom: "-31px", marginTop: "23px" }}>
            <div>Tags:</div>
            <TagInput tags={tags} onTagsChanged={onTagsChanged} />
          </Form.Row>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Duration(minutes)</Form.Label>
            <Form.Control value={duration} onChange={(e) => setDuration(e.target.value)} type="number" min="60" placeholder="Duration" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Price</Form.Label>
            <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="1" placeholder="Price" />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows="3" />
        </Form.Group>
        <Form.Group>
          <Form.File label="Experience images" onChange={(e) => setImages(e.target.files)} multiple />
        </Form.Group>

        {/* <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row> */}

        {/* <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
