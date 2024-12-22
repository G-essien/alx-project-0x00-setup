
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

const Landing: React.FC = () => {
    return (
      <div>
      <h1 className="text-xl font-extralight">Welcome to Our Landing Page</h1>
        <Card title="Beautiful House 1" />
        <Card title="Stunning Villa 2" />
        <Card title="Modern Apartment 3" />
        <Card />
        <Pill title="Top Villa" />
        <Button title="Small Button" style="bg-blue-500 rounded-sm" />
        <Button title="Medium Button" style="bg-green-500 rounded-md" />
        <Button title="Large Button" style="bg-red-500 rounded-full" />
        <Card />
      </div>
    );
  };
  
  export default Landing;
  