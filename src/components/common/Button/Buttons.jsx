import { Button } from 'react-bootstrap';

export default function Buttons({ children, onClick }) {
  return (
    <Button onClick={onClick} className='m-4'>
      {children}
    </Button>
  );
}
