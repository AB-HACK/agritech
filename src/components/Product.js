"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategoty] = useState("All");

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const products = [
    {
      id: 101,
      name: "Organic Tomatoes",
      category: "Vegetables",
      price: 3500,
      currency: "NGN",
      description: "Fresh organic tomatoes from local farms.",
      imageUrl:
        "https://images.pexels.com/photos/28039617/pexels-photo-28039617/free-photo-of-tomatoes-in-a-basket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "kg",
    },
    {
      id: 102,
      name: "Bananas",
      category: "Fruits",
      price: 1200,
      currency: "NGN",
      description: "Sweet, organic bananas from tropical regions.",
      imageUrl:
        "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 103,
      name: "Whole Milk",
      category: "Dairy",
      price: 2500,
      currency: "NGN",
      description: "Fresh whole milk from grass-fed cows.",
      imageUrl:
        "https://images.pexels.com/photos/6803752/pexels-photo-6803752.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "liter",
    },
    {
      id: 104,
      name: "Basmati Rice",
      category: "Grains",
      price: 5000,
      currency: "NGN",
      description: "Premium quality basmati rice.",
      imageUrl:
        "https://images.pexels.com/photos/8108170/pexels-photo-8108170.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 105,
      name: "Maize",
      category: "Grains",
      price: 2000,
      currency: "NGN",
      description: "Organic, non-GMO maize kernels.",
      imageUrl:
        "https://images.pexels.com/photos/27097352/pexels-photo-27097352/free-photo-of-close-up-of-abundance-of-corn.jpeg?auto=compress&cs=tinysrgb&w=800",
      unit: "kg",
    },
    {
      id: 106,
      name: "Spinach",
      category: "Vegetables",
      price: 500,
      currency: "NGN",
      description: "Fresh green spinach leaves, rich in nutrients.",
      imageUrl:
        "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "bunch",
    },
    {
      id: 107,
      name: "Groundnut Oil",
      category: "Oils",
      price: 7000,
      currency: "NGN",
      description: "Pure groundnut oil for cooking and frying.",
      imageUrl:
        "https://images.pexels.com/photos/5056853/pexels-photo-5056853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "litre",
    },
    {
      id: 108,
      name: "Cassava Flour",
      category: "Flour",
      price: 1800,
      currency: "NGN",
      description: "High-quality cassava flour for various recipes.",
      imageUrl:
        "https://images.pexels.com/photos/7543161/pexels-photo-7543161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "kg",
    },
    {
      id: 109,
      name: "Palm Oil",
      category: "Oils",
      price: 4500,
      currency: "NGN",
      description: "Rich and nutritious palm oil, ideal for cooking.",
      imageUrl:
        "https://images.pexels.com/photos/220989/pexels-photo-220989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "litre",
    },
    {
      id: 110,
      name: "Soybeans",
      category: "Legumes",
      price: 3000,
      currency: "NGN",
      description: "High-protein soybeans, perfect for meals and processing.",
      imageUrl:
        "https://images.pexels.com/photos/3735181/pexels-photo-3735181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "kg",
    },
    {
      id: 111,
      name: "Honey",
      category: "Sweeteners",
      price: 2500,
      currency: "NGN",
      description: "Pure, raw honey from organic sources.",
      imageUrl:
        "https://images.pexels.com/photos/1872902/pexels-photo-1872902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "litre",
    },
    {
      id: 112,
      name: "Carrots",
      category: "Vegetables",
      price: 800,
      currency: "NGN",
      description: "Fresh and crunchy carrots, rich in vitamins.",
      imageUrl:
        "https://images.pexels.com/photos/2663464/pexels-photo-2663464.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 113,
      name: "Ginger",
      category: "Spices",
      price: 1000,
      currency: "NGN",
      description: "Fresh ginger, perfect for cooking and tea.",
      imageUrl:
        "https://images.pexels.com/photos/128403/pexels-photo-128403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "kg",
    },
    {
      id: 114,
      name: "Yam",
      category: "Vegetables",
      price: 4000,
      currency: "NGN",
      description: "Premium tubers of yam, perfect for various meals.",
      imageUrl:
        "https://images.pexels.com/photos/159619/pexels-photo-159619.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "tuber",
    },
    {
      id: 115,
      name: "Coconut Oil",
      category: "Oils",
      price: 6000,
      currency: "NGN",
      description: "Pure virgin coconut oil for cooking and skin care.",
      imageUrl:
        "https://images.pexels.com/photos/209555/pexels-photo-209555.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "litre",
    },
  ];
  const filteredProducts =
    selectedProduct &&
    products.filter((product) => product.category === selectedProduct.category);

  // const filteredProducts = selectedProduct
  //   ? selectedCategory
  //   : products.filter((product) => product.category === selectedCategory);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((items) => (
        <div
          key={items.id}
          className="p-2 rounded-lg m-2 border-2 border-secondary flex flex-col items-center "
        >
          <Image
            alt="product Image"
            src={items.imageUrl}
            width={200}
            height={100}
            className="h-24 w-28 rounded-md"
          />
          <p>{items.name}</p>
          <p>#{items.price}</p>
          <button
            className="rounded-lg bg-primary hover:bg-secondary ease-in px-5 py-2 mt-2 text-white"
            onClick={() => openModal(items)}
          >
            More
          </button>
        </div>
      ))}
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          closeModal={closeModal}
          filteredProducts={filteredProducts}
        />
      )}
    </div>
  );
}

export default Product;
