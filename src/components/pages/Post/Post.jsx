import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import { Container, Card, Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';

export default function Post() {
  const { id } = useParams();
  const post = useSelector((state) => getPostsById(state, id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleEdit(id) {
    navigate(`/post/edit/${id}`);
  }
  function handleRemove(e) {
    e.preventDefault();
    dispatch(removePost(id));
    navigate('/');
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
            <strong>Published:</strong> {post.publishedDate}
          </Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
          <div className='d-flex justify-content-end mt-3'>
            <ButtonGroup size='sm'>
              <Button
                onClick={() => handleEdit(post.id)}
                variant='success'
                className='me-2'
              >
                Edit
              </Button>
              <Button onClick={handleRemove} variant='danger'>
                Delete
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
