import React from 'react'
import { client } from '../lib/sanity';
import { BookData } from '../lib/interface';
import BookCard from '@/components/BookCard/BookCard';
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation';

async function getProductData () {
  const query = `*[_type == 'books']`
  const data = await client.fetch(query, { cache: "no-cache" });
  return data;
}
const BookPage = async () => {
  const data = (await getProductData()) as BookData[];
  return (
    <div>
      <ScrollAnimation>
        <div className='bg-white pl-32 pt-10 grid md:grid-cols-3 pb-10'>
          {data.map((book) => (<BookCard key={book._id} book={book} />))}
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default BookPage
