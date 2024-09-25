// import React from "react";

// eslint-disable-next-line react/prop-types
const ServiceCards = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-orange-100 hover:text-black transition duration-300 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        quisquam. Earum dignissimos temporibus neque, consequuntur cum id quia
        explicabo quam maiores laudantium, ea rem. Sequi delectus hic
        repudiandae velit nulla.
      </p>
    </div>
  );
};

export default ServiceCards;
