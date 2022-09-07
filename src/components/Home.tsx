import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <div className="w-100 text-center">
      <h1 className="text-danger m-5">Troy Italian/Indian Restaurant</h1>
      <Link to='/order'><button className="btn btn-lg btn-primary m-5">Order Now</button></Link>
    </div>
    </>
  )
}

export default Home