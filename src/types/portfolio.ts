export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  color: string;
  link: string;
}

export interface FilterOption {
  id: string;
  label: string;
}