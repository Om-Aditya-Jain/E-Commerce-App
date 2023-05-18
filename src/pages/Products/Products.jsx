import React, { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch"

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [subCategory, setSubCategory] = useState([]);

  const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange=(e)=>{
    const isChecked = e.target.checked;
    const value = e.target.value;
    setSubCategory(isChecked?[...subCategory,value]:subCategory.filter((item)=>item !== value))
  }
  console.log(subCategory)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=>(
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}          
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price {"{Lowest First}"}</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name="price" onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price {"{Highest First}"}</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://source.unsplash.com/random/1920x1080/?men" alt="Men" className="catImg" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCategory={subCategory}/>
      </div>
    </div>
  )
}

export default Products