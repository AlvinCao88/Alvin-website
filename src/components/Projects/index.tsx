import { ProjectAccordion } from '@/components/ProjectAccordion';

export default function Projects() {
  const projectTabs: TabInfo[] = [
    {
      name: 'Dispose It Right',
      link: 'https://project1.com',
      description: 'An eco-friendly waste disposal app.',
    },
    {
      name: 'Fake:It',
      link: 'https://project2.com',
      description: 'An AI tool to detect fake news.',
    },
    {
      name: 'Safe Haven/Go Here',
      link: 'https://project3.com',
      description: 'A community support app for safe spaces.',
    },
  ];

  return (
    <div id="Projects" className="flex flex-col items-center pt-10 pb-10">
      <p className="font-title text-5xl mb-5">Projects</p>
      <div>LAST UPDATED: 2024</div>

      <div className="flex flex-col items-center w-full mt-5">
        {projectTabs.map((tab, index) => (
          <ProjectAccordion
            key={index}
            name={tab.name}
            link={tab.link}
            image={tab.image}
            description={tab.description}
          />
        ))}
      </div>
    </div>
  );
}
