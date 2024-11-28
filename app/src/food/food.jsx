import React from "react";
import { useState } from "react";
import products from '../assets/fake-data/products'
import ProductCard from "../home/productcard"
import Common from './comon'
import './food.css'
function Food(){
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("default");
    const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "ascending") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "descending") {
        return b.title.localeCompare(a.title);
      }
      if (sortOption === "high-price") {
        return b.price - a.price;
      }
      if (sortOption === "low-price") {
        return a.price - b.price;
      }
      return 0; // Default: No sorting
    });
    return(
        <div>
            <Common title="All Foods"/>
            <section className="mb-5">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mt-5">
                        <div className="search__widget d-flex align-items-center justify-content-between ">
                            <input type="text" placeholder="I'm looking for...." value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}/>
                                <span><i className="ri-search-line"></i></span>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                    <div className="sorting__widget text-end">
                        <select
                        className="w-50"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        >
                        <option value="default">Default</option>
                        <option value="ascending">Alphabetically, A-Z</option>
                        <option value="descending">Alphabetically, Z-A</option>
                        <option value="high-price">High Price</option>
                        <option value="low-price">Low Price</option>
                        </select>
                    </div>
                    </div>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Food;