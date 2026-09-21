/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  PageSection, 
  ProfileData, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem, 
  ProjectItem, 
  BlogPostItem, 
  PhotoItem 
} from './types';
import { 
  initialProfile, 
  initialExperiences, 
  initialEducation, 
  initialCertifications, 
  initialProjects, 
  initialBlogPosts, 
  initialPhotos 
} from './data/initialData';

import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { BiographySection } from './components/BiographySection';
import { HRExperienceSection } from './components/HRExperienceSection';
import { GameDevITSection } from './components/GameDevITSection';
import { HospitalitySection } from './components/HospitalitySection';
import { AcademicCertificationsSection } from './components/AcademicCertificationsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BlogSection } from './components/BlogSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { ResumeViewer } from './components/ResumeViewer';
import { ContactSection } from './components/ContactSection';
import { EditModal } from './components/EditModal';
import { GoogleSitesHelper } from './components/GoogleSitesHelper';
import { Footer } from './components/Footer';

export default function App() {
  // Navigation State
  const [currentSection, setCurrentSection] = useState<PageSection>('home');

  // Core Data States with LocalStorage Persistence (v2 with authentic image data)
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('omar_faruque_profile_v2');
      return saved ? JSON.parse(saved) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [experiences, setExperiences] = useState<ExperienceItem[]>(() => {
    try {
      const saved = localStorage.getItem('omar_faruque_experiences_v2');
      return saved ? JSON.parse(saved) : initialExperiences;
    } catch {
      return initialExperiences;
    }
  });

  const [education] = useState<EducationItem[]>(initialEducation);
  const [certifications] = useState<CertificationItem[]>(initialCertifications);
  
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('omar_faruque_projects_v2');
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [blogPosts, setBlogPosts] = useState<BlogPostItem[]>(() => {
    try {
      const saved = localStorage.getItem('omar_faruque_blogs_v2');
      return saved ? JSON.parse(saved) : initialBlogPosts;
    } catch {
      return initialBlogPosts;
    }
  });

  const [photos, setPhotos] = useState<PhotoItem[]>(() => {
    try {
      const saved = localStorage.getItem('omar_faruque_photos_v2');
      return saved ? JSON.parse(saved) : initialPhotos;
    } catch {
      return initialPhotos;
    }
  });

  // Modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isGoogleSitesHelperOpen, setIsGoogleSitesHelperOpen] = useState(false);

  // Sync back to local storage
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('omar_faruque_profile_v2', JSON.stringify(updated));
    } catch (e) {
      console.warn("Storage quota exceeded or unavailable", e);
    }
  };

  const handleResetDefaults = () => {
    setProfile(initialProfile);
    setExperiences(initialExperiences);
    setProjects(initialProjects);
    setBlogPosts(initialBlogPosts);
    setPhotos(initialPhotos);
    try {
      localStorage.removeItem('omar_faruque_profile_v2');
      localStorage.removeItem('omar_faruque_experiences_v2');
      localStorage.removeItem('omar_faruque_projects_v2');
      localStorage.removeItem('omar_faruque_blogs_v2');
      localStorage.removeItem('omar_faruque_photos_v2');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleAddPost = (newPost: BlogPostItem) => {
    const updated = [newPost, ...blogPosts];
    setBlogPosts(updated);
    try {
      localStorage.setItem('omar_faruque_blogs_v2', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleAddPhoto = (newPhoto: PhotoItem) => {
    const updated = [newPhoto, ...photos];
    setPhotos(updated);
    try {
      localStorage.setItem('omar_faruque_photos_v2', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const navigateTo = (section: PageSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white antialiased flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={navigateTo}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenGoogleSitesHelper={() => setIsGoogleSitesHelperOpen(true)}
        onOpenResumeModal={() => navigateTo('resume')}
      />

      {/* Main Page Routing Views */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {currentSection === 'home' && (
          <div className="space-y-12">
            <HomeHero
              profile={profile}
              onNavigate={navigateTo}
              onOpenResumeModal={() => navigateTo('resume')}
            />
            {/* Embedded overview of Biography on Home */}
            <BiographySection
              profile={profile}
              onNavigate={navigateTo}
            />
          </div>
        )}

        {currentSection === 'biography' && (
          <BiographySection
            profile={profile}
            onNavigate={navigateTo}
          />
        )}

        {currentSection === 'hr-leadership' && (
          <HRExperienceSection
            experiences={experiences}
          />
        )}

        {currentSection === 'game-dev' && (
          <GameDevITSection />
        )}

        {currentSection === 'hospitality' && (
          <HospitalitySection
            hospitalityExps={experiences.filter(e => e.category === 'hospitality')}
          />
        )}

        {currentSection === 'academic-certs' && (
          <AcademicCertificationsSection
            education={education}
            certifications={certifications}
          />
        )}

        {currentSection === 'portfolio' && (
          <PortfolioSection
            projects={projects}
          />
        )}

        {currentSection === 'blog' && (
          <BlogSection
            posts={blogPosts}
            onAddPost={handleAddPost}
          />
        )}

        {currentSection === 'photos' && (
          <PhotoGallerySection
            photos={photos}
            onAddPhoto={handleAddPhoto}
          />
        )}

        {currentSection === 'resume' && (
          <ResumeViewer
            profile={profile}
            experiences={experiences}
            education={education}
            certifications={certifications}
          />
        )}

        {currentSection === 'contact' && (
          <ContactSection
            profile={profile}
          />
        )}
      </main>

      {/* Global Modals */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefaults={handleResetDefaults}
      />

      <GoogleSitesHelper
        isOpen={isGoogleSitesHelperOpen}
        onClose={() => setIsGoogleSitesHelperOpen(false)}
      />

      {/* Footer */}
      <Footer
        profile={profile}
        onNavigate={navigateTo}
        onOpenResumeModal={() => navigateTo('resume')}
      />
    </div>
  );
}
