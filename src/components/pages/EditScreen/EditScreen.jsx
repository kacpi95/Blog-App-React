import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../../features/PostForm/PostForm';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost, getPostsById } from '../../../redux/postsRedux';

export default function EditScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector((state) => getPostsById(state, id));

  function handleSubmit(postData) {
    dispatch(editPost({ ...postData, id }));
    navigate('/');
  }

  return (
    <PostForm
      action={handleSubmit}
      actionText='Edit'
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
}
