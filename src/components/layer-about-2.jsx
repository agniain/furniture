import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';

const LayerAbout2 = () => {
  const team = [
    { name: 'Jet', position: 'Product Designer', profile: <AccountCircleIcon className="text-5xl" /> },
    { name: 'John', position: 'Marketing Specialist', profile: <AccountCircleIcon className="text-5xl" /> },
    { name: 'Nico', position: 'Sales Manager', profile: <AccountCircleIcon className="text-5xl" /> },
  ];

  return (
    <div className="mb-10">
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-3xl text-amber-900 font-bold">Meet Our Team</p>
        <p className="text-amber-900 font-semibold">Get to know the talented team behind our products!</p>           
      </div>   
      <div className="flex flex-col items-center justify-center py-5 md:py-10">
        <div className="flex space-x-4">
          {team.map((member, index) => (
            <div key={index} className="w-60 md:w-72 md:ml-10">
              <div className="border p-2 text-center"> 
                <p className="font-semibold text-amber-900 py-6">{member.profile}</p>
                <p className="text-lg text-amber-700">{member.name}</p>
                <p className="mb-8">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className=" ml-11 mb- 3font-bold text-amber-600">Discover</p>
      <div className="flex flex-col md:flex-row ml-10 pb-6">
            <div className="md:w-1/2 text-amber-900">
                <p className="mb-16 text-4xl font-bold">Our Journey and Achievments</p>
                <button className="ml-20 bg-amber-800 text-slate-100 py-1 px-2 md:py-2 md:px-4 hover:bg-amber-700">
                    Learn More
                </button>
                <button className="ml-10 border border-amber-800 text-amber-900 py-1 px-2 md:py-2 md:px-4 hover:bg-amber-600">
                    Sign up &gt;
                </button>
            </div>                   
            <div className="md:w-1/2 ml-5">
                <p className="mt-3 text-amber-900 font-bold"> <CircleIcon />        Milestones Overview</p>
                <p className="ml-8 text-amber-700">Experience our journey through the years, from humble beginnings to industry leaders.</p>
                <p className="mt-3 text-amber-900 font-bold"> <CircleIcon />        Key Achievments</p>
                <p className="ml-8 text-amber-700">Explore our notable accomplishments and milestones that have shaped our sussess.</p>
                <p className="mt-3 text-amber-900 font-bold"> <CircleIcon />        Company Growth</p>
                <p className="ml-8 text-amber-700">Discover how we have grown and evolved over the years to meet customer's needs.</p>
                <p className="mt-3 text-amber-900 font-bold"> <CircleIcon />        Innovation</p>
                <p className="ml-8 text-amber-700">Learn about our innovative solutions that have revolutionized the furniture industry.</p>
            </div>
        </div> 
    </div>
  );
};

export default LayerAbout2;
