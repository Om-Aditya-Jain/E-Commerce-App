import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => { 
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://source.unsplash.com/random/1920x1080/?clothes,sale" alt="Sale" />
                <button>
                    <Link className='link' to="/products/4">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://source.unsplash.com/random/1920x1080/?clothes,women" alt="Women" />
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://source.unsplash.com/random/1920x1080/?clothes,new" alt="New Season" />
                <button>
                    <Link className='link' to="/products/3">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://source.unsplash.com/random/1920x1080/?clothes,men" alt="Men" />
                <button>
                    <Link className='link' to="/products/2">Men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://source.unsplash.com/random/1920x1080/?clothes,accessories" alt="Accessories" />
                <button>
                    <Link className='link' to="/products/5">Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://source.unsplash.com/random/1920x1080/?shoes" alt="Shoes" />
                <button>
                    <Link className='link' to="/products/6">Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories