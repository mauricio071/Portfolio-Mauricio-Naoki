export interface ProjectType {
  name: string;
  type: string;
  imgName: string;
  projectVideo: string;
  width: string;
  description: string;
  technologies: string[];
  url: string;
  repository: string;
}

export interface ProjectModalType {
  isOpen: boolean;
  projectName: string;
  projectType: string;
  projectImage: string;
  projectVideo: string;
  projectWidth: string;
  projectDescription: string;
  projectTechnologies: string[];
  projectUrl: string;
  projectRepository: string;
}
