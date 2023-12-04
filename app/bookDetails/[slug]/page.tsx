import { client } from "@/app/lib/sanity";
import BookDetailContent from "@/components/BookDetailContent/BookDetailContent";

async function getBookData(slug: string) {
  try {
    const query = `*[_type == 'books' && slug.current == '${slug}'][0]{
      name,
      details,
      'image': image.asset->url,
      price,
      slug,
      _id
    }`;
    const data = await client.fetch(query);
    if (!data) {
      throw new Error("Book data not found");
    }

    return data;
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}
const BookDetails = async ({ params }: { params: { slug: string } }) => {
  try {
    const { slug } = params;
    const bookData = await getBookData(slug);
    return (
      <div>
        {bookData && <BookDetailContent bookData={bookData} />}
      </div>
    );
  } catch (error) {
    console.error("Error in BookDetails component:", error);
    return <div>Error loading book details</div>;
  }
};

export default BookDetails;
