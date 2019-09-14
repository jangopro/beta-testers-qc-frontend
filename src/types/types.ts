export interface Props {
  project: ProjectProps;
}

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  creator: CreatorProps;
}

interface CreatorProps {
  name: string;
}

export interface ProjectsProps {
  projects: Data;
}

interface Data {
  data: [ProjectProps];
}
