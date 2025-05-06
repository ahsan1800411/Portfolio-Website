import Image from 'next/image';
import helloHere from '../public/projects/hello-here.png';
import repairdesk from '../public/projects/repairdesk.png';

export default function WorkExperience() {
  const experiences = [
    {
      company: 'Hello Here',
      position: 'Software Engineer',
      duration: 'July 2024 - Present',
      contributions: [
        'Led a development team of 5+ engineers to build and scale a high-performance event-driven microservices system using RabbitMQ, reducing inter-service latency by 45% and improving scalability.',
        'Implemented Cypress for automated end-to-end testing, reducing manual effort by 60% and enhancing reliability.',
        'Integrated Redis for distributed caching, reducing database load by 50% and accelerating data retrieval times.',
        'Integrated Pinecone for vector search, enabling 95%+ accurate similarity queries and reducing search latency by 60%.',
        'Refactored mid-scale applications into cleaner, modular codebases, following DI, KISS, DRY, etc principles, resulting in a 50% improvement in code maintainability and scalability.',
        'Mentored 4+ junior developers, improving team efficiency and reducing onboarding time by 40% through structured training and code reviews.',
      ],
      technologies: [
        'React',
        'NestJS',
        'TypeScript',
        'Azure',
        'RabbitMQ',
        'Redis',
        'Pinecone',
        'Cypress',
        'Docker',
        'Elasticsearch',
        'Kubernetes',
      ],
    },
    {
      company: 'RepairDesk',
      position: 'Software Engineer',
      duration: 'October 2022 - July 2024',

      contributions: [
        'Developed Appointments Pro, a versatile website widget that increased appointment scheduling efficiency by 50%, allowing customers to obtain accurate quotes and schedule appointments with ease.',
        'Developed OrderSync app, an automated system for creating purchase orders and managing inventory, resulting in significant time and cost savings while maintaining accurate financial records.',
        'Developed the Rewards app as a comprehensive ecosystem for repair business growth, providing exclusive offers, content, and rewards, along with the vendor discounts, to increase revenue.',
        'Spearheaded the development of a successful Marketplace app by seamlessly integrating Magento 2 vendor APIs, enabling customers to create orders through popular sites like MobileSentrix, Parts4Cells, and others.',
      ],
      technologies: [
        'Vue.js',
        'NestJS',
        'TypeScript',
        'MongoDB',
        'DynamoDB',
        'AWS',
        'Docker',
        'CI/CD',
        'Kubernetes',
      ],
    },
  ];

  return (
    <section className='py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Work Experience
          </h2>
          <p className='text-lg text-gray-600'>
            My professional journey so far:
          </p>
        </div>

        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <div key={index} className='relative pl-8 sm:pl-32 py-6 group'>
              <div className='flex'>
                <div className='flex flex-col items-center w-40 relative mt-5'>
                  <span className='inline-flex items-center justify-center text-xs font-semibold uppercase w-48 h-6 p-10  whitespace-nowrap mb-3 text-emerald-600 bg-emerald-100 rounded-full'>
                    {exp.duration}
                  </span>

                  <div className='flex-1 w-1 bg-gray-300 rounded-full'></div>
                </div>

                <div className='flex-1 pl-8'>
                  <div className='text-xl font-bold text-gray-900 flex items-center gap-2'>
                    <Image
                      src={
                        exp.company === 'Hello Here' ? helloHere : repairdesk
                      }
                      alt={exp.company}
                      className='object-contain w-10 h-10'
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className='text-gray-700 font-semibold mb-2'>
                    {exp.position}
                  </div>

                  {exp.contributions && (
                    <ul className='list-disc list-inside space-y-2 mb-4 text-gray-600'>
                      {exp.contributions.map((contribution, idx) => (
                        <li key={idx} className='ml-4'>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
