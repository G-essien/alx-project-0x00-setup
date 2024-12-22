
import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
      <div>
      <h1 className="text-xl font-extralight">Welcome to Our Landing Page</h1>
        <Card title="Beautiful House 1" />
        <Card title="Stunning Villa 2" />
        <Card title="Modern Apartment 3" />
      </div>
    );
  };
  
  export default Landing;
  