import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import PDFViewer from './utils/PDFViewer';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   // 'Courses',
//   // 'References',
// ];

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Resume = () => {
  const pdfUrl = `${PUBLIC_URL}/pdfs/resume/Kaijun Zhu-Resume.pdf`;

  return (
    <Main
      title="Resume"
      description="Kaijun Zhu's Resume."
    >
      <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <PDFViewer url={pdfUrl} />
      </div>
    </Main>
  );
};

export default Resume;
