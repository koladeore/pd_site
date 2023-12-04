export interface AudioData {
  title: string;
  file: string;
  image: string;
  youtubeUrl: string;
 description: string;
 slug: {
    current: string;
  };
}
export interface BookData{
   _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  image: string;
  details: string;
}
