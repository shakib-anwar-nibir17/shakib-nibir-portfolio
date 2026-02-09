"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/database/Projects';
import AnimateText from '@/components/AnimateText';
import { SiGithub } from 'react-icons/si';
import { FiArrowLeft, FiExternalLink, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="underline text-primary">Back to Projects</Link>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 py-10 dark:text-light">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-16">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 font-medium hover:text-primary transition-colors group"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <Link 
            href={project.github} 
            target="_blank"
            className="p-2 rounded-full border border-dark/20 dark:border-light/20 hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark transition-all"
          >
            <SiGithub className="text-xl" />
          </Link>
          <Link 
            href={project.link} 
            target="_blank"
            className="flex items-center gap-2 p-2 px-6 rounded-full bg-dark dark:bg-light text-light dark:text-dark font-bold hover:shadow-lg transition-all"
          >
            <span>Live Site</span>
            <FiExternalLink />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-16 lg:gap-0">
        {/* Left Side: Info */}
        <div className="col-span-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary dark:text-primaryDark text-xl font-bold uppercase tracking-widest"
          >
            {project.type}
          </motion.span>
          <AnimateText 
            text={project.title} 
            className="text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-black mb-12 text-left"
          />
        </div>

        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 relative h-[600px] lg:h-[400px] sm:h-[300px] w-full rounded-3xl overflow-hidden border border-dark/10 dark:border-light/10 shadow-3xl mb-16"
        >
          <Image 
            src={project.img} 
            alt={project.title} 
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content Grid */}
        <div className="col-span-7 lg:col-span-12 space-y-12">
          <section>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FiLayers className="text-primary" />
              About Project
            </h3>
            <p className="text-xl lg:text-lg leading-relaxed text-dark/80 dark:text-light/80 text-justify">
              {project.description || project.summary}
            </p>
          </section>

          {project.features && (
            <section>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FiCheckCircle className="text-primary" />
                Key Features
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                {project.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Side: Sidebar */}
        <aside className="col-span-5 lg:col-span-12 space-y-12">
          <div className="p-8 rounded-3xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiCode className="text-primary" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((t, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full bg-light dark:bg-dark border border-dark/20 dark:border-light/20 text-sm font-bold shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl border-2 border-dashed border-dark/20 dark:border-light/20 flex flex-col items-center justify-center text-center">
            <h4 className="text-xl font-bold mb-4">Want to see the code?</h4>
            <div className="flex flex-col gap-3 w-full">
               <Link 
                href={project.github} 
                target="_blank"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-dark text-light dark:bg-light dark:text-dark font-bold hover:scale-[1.02] transition-transform"
               >
                 <SiGithub fontSize={20} />
                 Client Repository
               </Link>
               {project.github_server && (
                 <Link 
                  href={project.github_server} 
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-dark dark:border-light font-bold hover:scale-[1.02] transition-transform"
                 >
                   <SiGithub fontSize={20} />
                   Server Repository
                 </Link>
               )}
            </div>
          </div>
        </aside>
      </div>

      {/* Suggest Next Project */}
      <div className="mt-32 pt-16 border-t border-dark/10 dark:border-light/10 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
        <div className="flex gap-4">
           {projects.slice(0, 3).map(p => (
             p.slug !== project.slug && (
               <Link key={p.id} href={`/projects/${p.slug}`} className="group relative w-24 h-24 rounded-2xl overflow-hidden border border-dark/10">
                 <Image src={p.img} alt={p.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                 <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-[10px] text-white font-bold text-center px-1">{p.title}</span>
                 </div>
               </Link>
             )
           ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
