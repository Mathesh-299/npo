import { User2 } from 'lucide-react';
import React from 'react';
// import PRO from '../assets/img/PRO.jpg';

const About = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-indigo-50 to-indigo-100">
        {/* Profile Image Section */}
        <div className="w-full flex justify-center items-center py-10">
          {/* <img src={PRO} alt="pro" className="w-[80%] h-auto rounded-lg shadow-2xl border-4 border-white" /> */}
        </div>

        {/* Vision Section */}
        <div className="w-full flex flex-col items-center py-16 bg-white shadow-lg rounded-lg mx-auto my-10 max-w-7xl">
          <div className="w-[70%] flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-indigo-800 mb-8">VISION</h2>
            <div className="w-full flex justify-between gap-8">
              <div className="w-[30%] p-6 bg-indigo-50 shadow-md rounded-xl text-lg font-semibold">
                Work as a catalyst in bringing sustainable change in the lives of lesser privileged children and families with a life-cycle approach of development.
              </div>
              <div className="w-[30%] p-6 bg-indigo-50 shadow-md rounded-xl text-lg font-semibold">
                Enable the civil society across the world to engage proactively in the change process through the philosophy of civic driven change.
              </div>
              <div className="w-[30%] p-6 bg-indigo-50 shadow-md rounded-xl text-lg font-semibold">
                Adopt the highest standards of governance to emerge as a leading knowledge and technology-driven, innovative, and scalable development institution.
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="w-full flex flex-col items-center py-16 bg-indigo-50 shadow-lg rounded-lg mx-auto max-w-7xl">
          <div className="w-[70%] flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">MISSION</h2>
            <div className="w-[85%] p-6 bg-white shadow-md rounded-lg text-lg font-semibold leading-relaxed text-center">
              Foundation aims to empower underprivileged children, youth, and women through education, healthcare, and livelihood programs. It links corporate competitiveness with social initiatives while promoting good governance and civic driven change.
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="w-full flex flex-col items-center py-16 bg-indigo-100 shadow-lg rounded-lg mx-auto max-w-7xl">
          <div className="w-[70%] flex flex-col items-start gap-6">
            <h2 className="text-4xl font-extrabold text-indigo-800">HOW WE WORK</h2>
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-3 text-indigo-600">Social Venture Philanthropy</h3>
              <p className="text-lg font-semibold leading-relaxed">
                Social Venture Philanthropy (SVP) is an innovative model based on venture capital. The foundation identifies and implements development projects through credible organizations, focusing on scalability and sustainability while fostering leadership and accountability.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-3 text-indigo-600">Outreach</h3>
              <p className="text-lg font-semibold leading-relaxed">
                The Foundation implements development interventions directly, ensuring engagement for sustained outcomes, particularly in remote rural areas, partnering with local stakeholders for greater impact.
              </p>
            </div>
          </div>
        </div>

        {/* Supporters Section */}
        <div className="w-full flex flex-col items-center py-16 bg-white shadow-lg rounded-lg mx-auto max-w-7xl">
          <div className="w-[70%] flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">SUPPORTERS</h2>
            <div className="flex justify-around w-full gap-6">
              {['AKASH A', 'AKASHKUMAR S', 'DILIPKUMAR S', 'MATHESH M'].map((name, idx) => (
                <div key={idx} className="flex flex-col items-center bg-indigo-200 shadow-md p-6 rounded-lg w-[20%] transform hover:scale-105 transition-transform">
                  <User2 className="w-16 h-16 mb-4 text-indigo-600" />
                  <div className="text-center font-semibold text-indigo-800">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
