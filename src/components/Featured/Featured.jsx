import "./Featured.scss"
import Card from '../Card/Card'
import useFetch from "../../hooks/useFetch"

const Featured = ({type}) => {

    const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    // console.log(data);
  return (
    <div className='featured'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis modi a dolorum, nisi aspernatur consequuntur earum explicabo culpa dicta amet sequi nobis eos qui et omnis placeat perspiciatis iure.</p>
        </div>
        <div className="bottom">
            {error ? "Something went wrong !" : loading ? "loading..." : data?.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default Featured