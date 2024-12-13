import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardContent, Typography, CircularProgress, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faMusic } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";
import "./ProjectDetails.css"; // Make sure to create and style this CSS file
import Minibrowser from "./minibrowser";
import { ProjectCache } from '../api/projectCache';
export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const webUrl = import.meta.env.VITE_WEBURL;
  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Try cache first
        const cachedProject = ProjectCache.getProjectById(id);
        if (cachedProject) {
          setProject(cachedProject);
          setLoading(false);
          return;
        }
  
        // Fallback to API
        const projects = await ProjectCache.getProjects();
        const projectData = projects.find(p => p._id === id);
        if (projectData) {
          setProject(projectData);
        } else {
          setError('Project not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <div id="project-details-container" data-aos="fade-up">
      <div id="project-details-grid">
        <div id="project-video-container">
          <iframe
            src={project.videoLink}
            title="Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
            muted
          ></iframe>
        </div>
        <div id="project-text-container">
          <Typography variant="h4" component="div" id="project-title">
            {project.title}
          </Typography>
          <Typography variant="body1" gutterBottom id="project-date">
            <strong>
              {new Date(project.startDate).toLocaleDateString()} -{" "}
              {new Date(project.endDate).toLocaleDateString()}
            </strong>
           
          </Typography>
          {/* <Minibrowser src = {project.websiteLink} title= {project.title}/> */}
          <Box
            display="flex"
            flexWrap="wrap"
            gap={1}
            mb={2}
            id="project-technologies"
          >
            {project.technologiesUsed.map((technology, index) => (
              <Box key={index} component="span" className="project-technology">
                {technology}
              </Box>
            ))}
          </Box>
          <CardContent id="project-links">
            {project.websiteLink && (
              <Typography variant="body2" className="project-link">
                <FontAwesomeIcon icon={faGlobe} className="project-icon" />
                <a href={project.websiteLink} className="project-link-text">
                  Visit Website
                </a>
              </Typography>
            )}
            {project.githubLink && (
              <Typography variant="body2" className="project-link">
                <FontAwesomeIcon icon={faGithub} className="project-icon" />
                <a href={project.githubLink} className="project-link-text">
                  View on GitHub
                </a>
              </Typography>
            )}
          </CardContent>
          {project.audioLink && (
            <div className="audio-player-container">
              <iframe
                style={{ width: "100%", height: "160" }}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src= {`${project.audioLink}&auto_play=false
&hide_related=false
&show_comments=false
&show_user=false
&show_reposts=false
&show_teaser=false
&visual=false
&show_artwork=true
&hide_logo=true
&buying=false
&sharing=false
&liking=false
&download=false
&single_active=false
&link_color=%234285F4 
&theme_color=%23999999  // sets the theme color to a neutral blue
&color=%23999999  // sets the color scheme to a neutral blue
&show_playcount=false  // hides the play count
&show_duration=false  // hides the track duration
&show_username=false  // hides the username
&username_display=false  // hides the username display
&avatar_display=false  // hides the avatar display
&description_display=false  // hides the track description
&tag_display=false  // hides the track tags
&genre_display=false  // hides the track genre
&license_display=false  // hides the track license information
&buy_button_display=false  // hides the buy button
&download_button_display=false  // hides the download button
& repost_button_display=false  // hides the repost button
&comment_button_display=false  // hides the comment button
&like_button_display=false  // hides the like button
&share_button_display=false  // hides the share button`}
                className="audio-iframe"
              ></iframe>
            </div>
          )}
          <Typography
  variant="body1"
  id="project-details-description"
>
  <div
    className="des-font"
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(project.description),
    }}
  />
</Typography>

        </div>
      </div>
    </div>
  );
}
