import { Link } from 'react-router-dom'

const home = () => {
  return (
    <>
    <div>Welcome to Home</div>
    
    <Link to='/user-edit'>User Edit</Link> &nbsp; &nbsp;
    <Link to='/user-details'>User Details</Link> <br /><br />
    <Link to='/login'>Back</Link>
    </>
  )
}

export default home