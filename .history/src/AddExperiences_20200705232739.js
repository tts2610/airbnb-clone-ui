import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Col } from "react-bootstrap";
import { TagInput } from "reactjs-tag-input";
import axios from "axios";

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
  const [location, setLocation] = useState("");
  useEffect(() => {
    dispatch({ type: "ADDNAVIGATOR", payload: { url: "" } });
  });
  const onTagsChanged = (tags) => {
    setTags(tags);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let submitTags = tags.map((e) => e.displayValue);
    var formData = new FormData();
    for (const key of Object.keys(images)) {
      formData.append("images", images[key]);
    }
    formData.append("title", title);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("price", price);
    formData.append("languages", languageConvert[language]);
    submitTags.forEach((element) => {
      formData.append("tags", element);
    });

    formData.append("location", location);

    const headers = {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN)}`,
    };

    axios
      .post(process.env.REACT_APP_ADD_EXP, formData, { headers: headers })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <Container>
      <Form>
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
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control onChange={(e) => setLocation(e.target.value)} type="text" value={location} placeholder="Enter Location" />
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

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
