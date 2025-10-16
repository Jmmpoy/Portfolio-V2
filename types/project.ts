export interface Project {
  id: string;
  name: string;
  year: string;
  role?: string;
  tags: string[];
  description?: {
    firstPart?: string;
    secondPart?: string;
  };
  color?: string;
  link: string;
  coverImage: string;
  coverVideo?: string;
  secondaryImage?: string;
  thirdImage?: string;
  fourthImage?: string;
  fifthImage?: string;
  sixthImage?: string;
  seventhImage?: string;
}
