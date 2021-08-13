export interface VinylResult {
    data: Vinyl[];
  }
  
  /*interface Support {
    url: string;
    text: string;
  }*/
  
  export interface Vinyl {
    id: number;
    namealbum: string;
    artist: string;
    publication: string;
    gender: string;
    avatar: string;
  }