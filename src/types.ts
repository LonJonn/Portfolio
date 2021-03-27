export type ProjectMetadata = {
  title: string;
  description: string;
  year: number;
  cover_image: string;
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
};
