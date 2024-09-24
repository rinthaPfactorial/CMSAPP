"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Project } from "./interfaces";
import { Work } from "@/payload-types";

interface ProjectContextProps {
  projects: Work[];
  appliedFilter: string;
  filteredProjects: Project[];
  sort: boolean;
  setAppliedFilter: Dispatch<SetStateAction<string>>;
  setFilteredProjects: Dispatch<SetStateAction<Project[]>>;
  setSort: Dispatch<SetStateAction<boolean>>;
  singleProject: Project | null;
  setSingleProject: Dispatch<SetStateAction<Project | null>>;
}

const ProjectsContext = createContext<ProjectContextProps>({
  projects: [] as Work[],
  appliedFilter: "all",
  filteredProjects: [] as Project[],
  sort: false,
  setAppliedFilter: () => {},
  setFilteredProjects: () => {},
  setSort: () => {},
  singleProject: null,
  setSingleProject: () => {},
});

// ProjectsProvider component to manage and expose context values
const ProjectsProvider = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Work[]; // Update to Work[]
}) => {
  const [projects, setProjects] = useState(data);
  const [appliedFilter, setAppliedFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [sort, setSort] = useState(false);
  const [singleProject, setSingleProject] = useState<Work | null>(null); // Update to Work | null

  useEffect(() => {
    const filtered = applyFilters(projects, appliedFilter);
    setFilteredProjects(filtered);
  }, [appliedFilter, projects]);

  useEffect(() => {
    if (sort) {
      const sorted = [...projects].sort((a, b) => a.priority - b.priority); // Use 'priority' field
      setFilteredProjects(sorted);
      setProjects(sorted);
    }
  }, [sort]);

  const applyFilters = (data: Work[], filterValues: string) => {
    if (filterValues === "all") {
      return data;
    }

    return data.filter((project) =>
      project.technologies.some((tech) => filterValues === tech.trim())
    );
  };

  const value = {
    projects,
    appliedFilter,
    filteredProjects,
    sort,
    setAppliedFilter,
    setFilteredProjects,
    setSort,
    singleProject,
    setSingleProject,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};


// Custom hook to consume the ProjectsContext
const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};

export { ProjectsProvider, useProjects };
