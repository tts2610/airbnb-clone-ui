import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Col, Spinner } from "react-bootstrap";
import { TagInput } from "reactjs-tag-input";
import axios from "axios";
import { useParams } from "react-router-dom";

const languageConvert = {
  Vietnameses: "vi",
  Korean: "ko",
  English: "en",
};

export default function AddExperiences() {
  const dispatch = useDispatch();
  let { expId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [language, setLanguage] = useState("Vietnameses");
  const [duration, setDuration] = useState(60);
  const [price, setPrice] = useState(1);
  const [images, setImages] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [groupSize, setGroupSize] = useState(5);

  const [exp, setExp] = useState()
  useEffect(() => {
    dispatch({ type: "ADDNAVIGATOR", payload: { url: "" } });
    axios.get(process.env.REACT_APP_GET_EXP + `/${expId}`).then((res) =>  setExp(res.data.data.experience));
  }, [expId]);
}
  
  const clearForm = () => {
    setTitle("");
    setDescription("");
    setTags([]);
    setLanguage("");
    setDuration("60");
    setPrice(1);
    setImages("");
    setLocation("");
  };
  const onTagsChanged = (tags) => {
    setTags(tags);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    if (!title || !description || !duration || !price || !language || !images || !location || !groupSize) {
      alert("please fill in all required field!");
      setisLoading(false);
      return;
    }

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
    formData.append("groupSize", groupSize);
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
        alert("added new exp successfully");
        setisLoading(false);
        clearForm();
      })
      .catch((err) => alert("Opps! Unauthorized"));
  };
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              Title<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder="Enter Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              Languages<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control as="select" onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option>Vietnameses</option>
              <option>Korean</option>
              <option>English</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              Location<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control onChange={(e) => setLocation(e.target.value)} type="text" value={location} placeholder="Enter Location" />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Row style={{ marginBottom: "-31px", marginTop: "23px" }}>
            <div>
              Tags<span style={{ color: "red" }}>*</span>:
            </div>
            <TagInput tags={tags} onTagsChanged={onTagsChanged} />
          </Form.Row>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>
              Duration(minutes)<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control value={duration} onChange={(e) => setDuration(e.target.value)} type="number" min="60" placeholder="Duration" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>
              Price<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="1" placeholder="Price" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>
              Group Size<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control value={groupSize} onChange={(e) => setGroupSize(e.target.value)} type="number" min="1" placeholder="Group Size" />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>
            Description<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows="3" />
        </Form.Group>
        <Form.Group>
          <Form.File label="Experience images*" onChange={(e) => setImages(e.target.files)} multiple />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          {isLoading && <Spinner className="mr-2" as="span" animation="border" size="sm" role="status" aria-hidden="true" />}Submit
        </Button>
      </Form>
    </Container>
  );
}
