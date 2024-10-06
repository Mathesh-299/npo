import React from 'react';
// import PRO from '../assets/img/PRO.jpg'
import { User2 } from 'lucide-react';
const About = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="w-full h-full flex justify-center items-center">
          {/* <img src={PRO} alt="pro" className="w-[80%] h-full" /> */}
        </div>
        <div className="w-full h-[80%] flex justify-center items-start">
          <div className="w-[70%] h-[100%] flex justify-center items-center flex-col">
            <div className="h-[10%] w-[90%] flex justify-start items-center font-bold text-3xl">
              VISION :
            </div>
            <div className="h-[70%] w-full flex justify-center items-center gap-10 text-justify">
              <div className="w-[25%] h-[70%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg">
                <div className="w-[90%] h-[80%]">
                  Work as a catalyst in bringing sustainable change in the lives of lesser privileged children and families with a life-cycle approach of development
                </div>
              </div>
              <div className="w-[25%] h-[70%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg">
                <div className="w-[90%] h-[80%]">
                  Enable the civil society across the world to engage proactively in the change process through the philosophy of civic driven change
                </div>
              </div>
              <div className="w-[25%] h-[70%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg">
                <div className="w-[90%] h-[80%]">
                  Adopt highest standards of governance to emerge as a leading knowledge and technology driven, innovative and scalable development institution
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='w-full h-[60%] flex justify-center items-start'>
          <div className="w-[70%] h-full flex justify-start items-center flex-col gap-10">
            <div className="h-[10%] w-[90%] flex justify-start items-center font-bold text-3xl ">
              MISSION
            </div>
            <div className="h-[60%] w-[85%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
              <div className="w-[95%]">
                Foundation is to empower underprivileged children, youth and women through relevant education, innovative healthcare and market-focused livelihood programmes.Foundation is to deploy best possible methodology and technology for achieving ideal SROI (social return on investment), to practice and promote good governance. To link business competitiveness of the corporate with social development initiatives; also to sensitize privileged children, youth and citizens in general to promote Civic Driven Change.
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[100%] flex justify-center items-start'>
          <div className="w-[70%] h-full flex justify-start items-center flex-col gap-5">
            <div className="h-[10%] w-[90%] flex justify-start items-center font-bold text-3xl ">
              HOW WE WORK
            </div>
            <div className="h-[10%] w-[80%] flex justify-start items-center font-bold text-2xl ">
              Social Venture Philanthropy
            </div>
            <div className="h-[60%] w-[100%] flex justify-center items-center font-semibold text-xl text-justify">
              <div className="w-[75%]">
                Social Venture Philanthropy (SVP) is an innovative model based on the business concept of venture capital. Under SVP,Foundation identifies and implements its development projects through credible community based organizations. We also handhold and build capacities of these organizations, focusing on achieving scalability and sustainability, creating a culture of leadership and excellence and inculcating a deep sense of accountability among them
              </div>
            </div>
            <div className="h-[10%] w-[80%] flex justify-start items-center font-bold text-2xl ">
              Outreach
            </div>
            <div className="h-[70%] w-[100%] flex justify-center items-start font-semibold text-xl text-justify">
              <div className="w-[75%]">
                Under Outreach model, Foundation implements the development interventions directly as it requires intensive and professional engagement for a wider and sustained outcome. While working in remote rural areas, we realized that an intensive on-ground intervention is needed, which might be beyond the capacity of community based organizations and hence, we directly implement such projects, liaising with local community stakeholders for better social return on investment
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[50%] flex justify-center items-start'>
          <div className="w-[70%] h-full flex justify-start items-center flex-col">
            <div className="h-[10%] w-[90%] flex justify-center items-center font-bold text-3xl ">
              SUPPORTERS
            </div>
            <div className="h-[70%] w-[90%] flex justify-center items-center gap-5">
              <div className="h-[60%] w-[20%] flex justify-center items-center flex-col shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
                <div className="w-full h-[80%] flex justify-center items-center"><User2 className='w-full h-[50%]' /></div>
                <div className="w-full h-[10%] flex justify-center items-center">AKASH A</div>
              </div>
              <div className="h-[60%] w-[20%] flex justify-center items-center flex-col shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
                <div className="w-full h-[80%] flex justify-center items-center"><User2 className='w-full h-[50%]' /></div>
                <div className="w-full h-[10%] flex justify-center items-center">AKASHKUMAR S</div>
              </div>
              <div className="h-[60%] w-[20%] flex justify-center items-center flex-col shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
                <div className="w-full h-[80%] flex justify-center items-center"><User2 className='w-full h-[50%]' /></div>
                <div className="w-full h-[10%] flex justify-center items-center">DILIPKUMAR S</div>
              </div>
              <div className="h-[60%] w-[20%] flex justify-center items-center flex-col shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
                <div className="w-full h-[80%] flex justify-center items-center"><User2 className='w-full h-[50%]' /></div>
                <div className="w-full h-[10%] flex justify-center items-center">MATHESH M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;