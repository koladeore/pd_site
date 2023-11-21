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
export interface DetailsAudioData {
  description: string;
  title: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  audioFile: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    _type: 'file';
  };
  _id: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  youtubeUrl: string;
}