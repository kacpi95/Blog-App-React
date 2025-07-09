import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import { Container, Card, Button, ButtonGroup, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import { useState } from 'react';
import { dateToStr } from '../../../utils/dateToStr';

export default function Post() {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const post = useSelector((state) => getPostsById(state, id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function handleEdit(id) {
    navigate(`/post/edit/${id}`);
  }
  function handleRemove(e) {
    e.preventDefault();
    dispatch(removePost(id));
    navigate('/');
  }

  if (!post) {
    return (
      <Container className='mt-4'>
        <p>Post not found</p>
      </Container>
    );
  }
  return (
    <Container className='mt-4'>
      <Card className='shadow m-5'>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            <strong>Author:</strong> {post.author}
          </Card.Text>
          <Card.Subtitle className='mb-2'>
            <strong>Published:</strong>
            {dateToStr(new Date(post.publishedDate))}
          </Card.Subtitle>
          <Card.Text as='div'>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Card.Text>
          <div className='d-flex justify-content-end mt-3'>
            <ButtonGroup size='sm'>
              <Button
                onClick={() => handleEdit(post.id)}
                variant='success'
                className='me-2'
              >
                Edit
              </Button>
              <Button onClick={handleShow} variant='danger'>
                Delete
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
