import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import './Project.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
// import { textDecoration } from '@chakra-ui/react';
import { ProjectCache } from '../api/projectCache';
export default function Projects({ limit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const webUrl = import.meta.env.VITE_WEBURL;

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsData = await ProjectCache.getProjects();
        const projectsToShow = projectsData.filter(project => project.show === true);
        setProjects(projectsToShow);
      } catch (err) {
        console.error('Project fetch error:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsData();
  }, [webUrl]);

  function createMarkup(html) {
    const fontStyle = `font-family: 'Montserrat', sans-serif !important;`;
    const sanitizedHtml = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'br'],
      ALLOWED_ATTR: ['style', 'class']
    });
    return { __html: `<div style="${fontStyle}">${sanitizedHtml}</div>` };
  }

  if (error) {
    return (
      <div className='container-Projects'>
        <div className="error-container">
          <h3>Oops! {error}</h3>
          <div className="error-actions">
            <a 
              href="https://github.com/sahil0902?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="github-fallback"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='container-Projects' data-aos="fade-up">
      <h4 className='title'>Projects</h4>
      <div className='card-container'>
        {loading ? (
          Array.from(new Array(limit)).map((_, index) => (
            <Card key={index} sx={{ maxWidth: 400, marginTop: '1rem' }}>
              <Skeleton variant="rectangular" width={400} height={225} />
              <CardContent>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="80%" />
              </CardContent>
              <CardActions>
                <Skeleton variant="rectangular" width="30%" height={30} />
                <Skeleton variant="rectangular" width="30%" height={30} />
              </CardActions>
            </Card>
          ))
        ) : (
          projects.slice(0, limit).map((project) => (
            <Card key={project._id} className="card" id="CardMedia" sx={{ maxWidth: 400, marginTop: '1rem' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  id={`video-${project._id}`}
                  src={project.videoLink}
                  title="Cloudinary video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                  muted
                ></iframe>
              </div>
              <CardContent>
                <Link to={`/project/${project._id}`}>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography gutterBottom component="div">
                    <b>{new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}</b>
                  </Typography>
                </Link>
                <Typography variant="body2" className='description'>
                  <Link to={`/project/${project._id}`}>
                    <div dangerouslySetInnerHTML={createMarkup(project.description)} />
                  </Link>
                </Typography>
                <div className="skill-container">
                  {project.technologiesUsed.map((technology, i) => (
                    <div key={i} className="skill-chip">{technology}</div>
                  ))}
                </div>
              </CardContent>
              <CardActions>
                {project.websiteLink && (
                  <div className="website-icon-container">
                    <div className="website-icon">
                      <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                        <LanguageSharpIcon id="web" style={{ fontSize: 20 }} />Website
                      </a>
                    </div>
                  </div>
                )}
                {project.githubLink && (
                  <div className="website-icon-container">
                    <div className="website-icon">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20, marginTop: '0.2rem' }} />Github
                      </a>
                    </div>
                  </div>
                )}
              </CardActions>
            </Card>
          ))
        )}
      </div>
      {limit && projects.length > limit && (
        <Link to="/projects"><span className='showMore'>Show More</span></Link>
      )}
    </div>
  );
}

Projects.propTypes = {
  limit: PropTypes.number,
};