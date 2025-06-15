export type Skill = {
  id?: string;
  name: string;
  category: string;
  icon: string[];
};

export type TProject = {
  id?: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  frontendGithubRepoLink?: string;
  backendGithubRepoLink?: string;
  imageUrl: string[];
  createdAt: string;
};

export type TBlog = {
  id: string;
  title:string
  content:string
  coverImage:string[]
  createdAt:string
}