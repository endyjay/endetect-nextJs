import React from 'react'
import { IconType } from 'react-icons'

interface Product {
  title: string
  icon: IconType
}

interface ProductsListProps {
  products: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 p-6 pt-[40px]">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center"
        >
          <div className="text-4xl mb-4 text-[#3a3a3a]">
            <product.icon />
          </div>
          <h6 className=" text-center font-[600]! text-[#3a3a3a]">{product.title}</h6>
        </div>
      ))}
    </div>
  )
}

export default ProductsList