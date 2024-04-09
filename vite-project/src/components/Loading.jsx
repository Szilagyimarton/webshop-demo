import './Loading.css'
import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <div className='loading'>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default Loading