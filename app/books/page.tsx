import React from 'react'
import { client } from '../lib/sanity';
import { BookData } from '../lib/interface';
import BookCard from '@/components/BookCard/BookCard';
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation';
import Ebooks from '@/components/Ebooks/Ebooks';

async function getProductData() {
  try {
    const query = `*[_type == 'books']`
    const data = await client.fetch(query, { cache: "no-cache" });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const BookPage = async () => {
  try {
    const data = (await getProductData()) as BookData[];
    return (
      <div>
        <ScrollAnimation>
          <div className='bg-white grid md:grid-cols-3'>
            {data.map((book) => (<BookCard key={book._id} book={book} />))}
          </div>
          <Ebooks />
        </ScrollAnimation>
      </div>
    );
  } catch (error) {
    console.error("Error in BookPage component:", error);
    return <div>Error loading the book data</div>;
  }
}

export default BookPage;
