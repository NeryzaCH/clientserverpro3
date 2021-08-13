export interface UserResult {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

/*interface Support {
  url: string;
  text: string;
}*/

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}