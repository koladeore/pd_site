import { client } from "@/app/lib/sanity";
import BookDetailContent from "@/components/BookDetailContent/BookDetailContent";

async function getBookData(slug: string) {
  const query = `*[_type == 'books' && slug.current == '${slug}'][0]{
    name,
    details,
    'image': image.asset->url,
    price,
    slug
  }`;
  const data = await client.fetch(query);
  return data;
}
const BookDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const bookData = await getBookData(slug);
  return (
   <div>
      {bookData && <BookDetailContent bookData={bookData}/>}
   </div>
  );
};

export default BookDetails;
