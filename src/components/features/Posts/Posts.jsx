import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux/';
import Buttons from '../../common/Button/Buttons';
import Title from '../../common/Title/Title';

export default function Posts() {
  const posts = useSelector(getAllPosts);

  return (
    <Container>
      <Title>All posts</Title>
      <Row className='d-flex flex-wrap justify-content-start'>
        {posts.map((post) => (
          <Col key={post.id} xs={12} sm={6} md={4} className='mb-4'>
            <Card className='h-100 shadow-sm'>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <strong>Author:</strong> {post.author}
                </Card.Text>
                <Card.Subtitle className='mb-2'>
                  <strong>Published</strong> {post.publishedDate}
                </Card.Subtitle>
                <Card.Text>{post.shortDescription}</Card.Text>
              </Card.Body>
              <Buttons>Read more</Buttons>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
