import projectsData from '../data/projects.json';

const CACHE_KEY = 'cached_projects';
const CACHE_TIMESTAMP_KEY = 'projects_cache_timestamp';
const CACHE_DURATION = 24 * 60 * 60 * 1000;

export const ProjectCache = {
  async getProjects() {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    const now = new Date().getTime();

    if (cachedData && timestamp && (now - parseInt(timestamp) < CACHE_DURATION)) {
      return JSON.parse(cachedData);
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_WEBURL}/projects/render`);
      const projects = response.data;
      this.updateCache(projects, now);
      return projects;
    } catch (error) {
      // Return local data if API fails
      return projectsData;
    }
  },

  updateCache(projects, timestamp) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(projects));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, timestamp.toString());
  },

  getProjectById(id) {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const projects = JSON.parse(cachedData);
      return projects.find(p => p._id === id);
    }
    // Fallback to local data
    return projectsData.find(p => p._id === id);
  }
};