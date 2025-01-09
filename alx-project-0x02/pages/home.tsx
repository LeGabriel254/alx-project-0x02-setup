import React from 'react'
import Card from '@/components/common/Card';

const Home:React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card 
        title="Getting Started" 
        content="Learn how to set up your project and start building amazing things." 
      />
      <Card 
        title="Advanced Techniques" 
        content="Explore advanced patterns and best practices for scalable code." 
      />
      <Card 
        title="Community Support" 
        content="Join our community forums and collaborate with other developers." 
      />
      <Card 
        title="Documentation" 
        content="Find comprehensive guides and API references for your tools." 
      />
      <Card 
        title="Deployment" 
        content="Learn how to deploy your project to production effortlessly." 
      />
      <Card 
        title="Feedback" 
        content="We value your feedback. Help us improve by sharing your thoughts!" 
      />
    </div>
  );
};

export default Home;