import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/projects/hello-here-p.png';

const jobify = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />

        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Hello Here</h2>
          <h3>
            React JS / NestJS / MS SQL Server / Azure / Docker / Kubernetes /
            Terraform / CI/CD / Elasticsearch / Kibana / Grafana / Prometheus
          </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <Link href='/#projects' className='m-auto flex justify-center'>
          <p className='underline cursor-pointer m-auto'>Back</p>
        </Link>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            HelloHere is a PropTech startup based in Mallorca, Spain,
            revolutionizing the real estate market with its AI-powered platform.
            Leveraging advanced technology, HelloHere offers a comprehensive
            property database, reportedly 3.2 times larger than that of the
            leading platform Idealista, enabling users to find their ideal
            property swiftly. The platform integrates features such as AI-driven
            property matching, real-time data updates, and a social media
            marketplace, enhancing the property search experience for buyers and
            providing agents with innovative tools to reach a broader audience.
            <br />
            <br />
            Here is my contribution to the project:
            <br />
            <br />
            ⭐️ Led a development team of 5+ engineers to build and scale a
            high-performance event-driven microservices system using RabbitMQ,
            reducing inter-service latency by 45% and improving scalability.
            <br />
            ⭐️ Implemented Cypress for automated end-to-end testing, reducing
            manual effort by 60% and enhancing reliability.
            <br />
            ⭐️ Integrated Redis for distributed caching, reducing database load
            by 50% and accelerating data retrieval times.
            <br />
            ⭐️ Integrated Pinecone for vector search, enabling 95%+ accurate
            similarity queries and reducing search latency by 60%.
            <br />
            ⭐️ Refactored mid-scale applications into cleaner, modular
            codebases, following DI, KISS, DRY, etc principles, resulting in a
            50% improvement in code maintainability and scalability.
            <br />
            ⭐️ Mentored 4+ junior developers, improving team efficiency and
            reducing onboarding time by 40% through structured training and code
            reviews.
          </p>

          <a
            href='https://hellodata.hellohere.to/sign-in'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default jobify;
