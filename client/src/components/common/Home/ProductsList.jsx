import { NativeSelect } from '@mantine/core'
import { Container } from '@mantine/core'

import { FilterList } from 'iconoir-react'
import ProductCard from '../../ProductCard'
import { useEffect, useState } from 'react'
import productApi from '../../../api/productApi'
const ProductsList = () => {
  const [products, setProducts] = useState([])

  const allProducts = async () => {
    try {
      const res = await productApi.getAllProducts()
      setProducts(res.products)
    } catch (error) {}
  }

  useEffect(() => {
    allProducts()
  }, [])

  return (
    <Container className=" mb-28">
      <div className="flex flex-row justify-between mb-6">
        <p className=" text-gray-500 font-medium text-xl">New Products</p>
        <NativeSelect
          placeholder="Pick a hashtag"
          data={['React', 'Angular', 'Svelte', 'Vue']}
          icon={<FilterList width="1rem" />}
        />
      </div>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-md:gap-3">
        {products.map((item) => (
          <ProductCard
            item={item}
            key={item._id}
            id={item._id}
            title={item.name}
            image={item.image}
            price={item.price}
            brand={item.brand}
            availability={item.availability}
            // category={item.category}
          />
        ))}
      </div>
    </Container>
  )
}

export default ProductsList

// <div key={item.id} className="bg-gray-100 p-1">
//             <div className=" h-60 w-full overflow-hidden">
//               {' '}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="object-cover w-full mb-2"
//               />
//             </div>
//             <div className="flex flex-col justify-start">
//               <h2 className="text-lg font-medium text-left">{item.name}</h2>
//               <p className="text-gray-500 text-left">${item.price}</p>
//             </div>
//           </div>