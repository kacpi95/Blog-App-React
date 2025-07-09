import { Container, Button, Form } from 'react-bootstrap';
import Title from '../../common/Title/Title';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PostForm({ action, actionText, ...props }) {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(
    props.publishedDate ? new Date(props.publishedDate) : null
  );

  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  function handleSubmit(e) {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  }

  return (
    <Container className='mt-4'>
      <Title>Add post</Title>
      <Form onSubmit={handleSubmit} className='mt-4'>
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter title'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='author'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder='Enter author name'
          />
        </Form.Group>

        <Form.Group
          className='mb-3 d-flex flex-column'
          controlId='publishedDate'
        >
          <Form.Label>PublishedDate</Form.Label>
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
            dateFormat='MM/dd/yyyy'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='shortDescription'>
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={2}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder='Enter short description'
          />
        </Form.Group>

        <Form.Group className='mb-4' controlId='content'>
          <Form.Label>Main Content</Form.Label>
          <ReactQuill theme='snow' value={content} onChange={setContent} />
          {/* <Form.Control
            as='textarea'
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Enter main content'
          /> */}
        </Form.Group>

        <div className='mb-4'>
          <Button variant='primary' type='submit'>
            {actionText}
          </Button>
        </div>
      </Form>
    </Container>
  );
}
