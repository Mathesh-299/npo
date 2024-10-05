// src/components/EducationProvider.js
import React from 'react';

const Education = () => {
    const providers = [
        {
            id: 1,
            name: "Vidya Foundation",
            location: "Chennai, Tamil Nadu",
            description: "Dedicated to providing quality education and scholarships to underprivileged children.",
            donationLink: "#",
            contact: "support@vidyafoundation.org",
            history: "Founded in 2015, Vidya Foundation has supported over 2,000 students in pursuing their education.",
            impact: "80% of our scholarship recipients have successfully completed their higher education.",
        },
        {
            id: 2,
            name: "Teach for Tamil Nadu",
            location: "Madurai, Tamil Nadu",
            description: "A movement aimed at providing education to children in rural areas through dedicated volunteers.",
            donationLink: "#",
            contact: "info@teachfortamilnadu.org",
            history: "Established in 2018, impacting the lives of over 5,000 children.",
            impact: "Increased enrollment rates in partner schools by 60%.",
        },
        {
            id: 3,
            name: "Learning Tree Academy",
            location: "Coimbatore, Tamil Nadu",
            description: "Focuses on providing free tutoring and educational resources to low-income students.",
            donationLink: "#",
            contact: "contact@learningtreeacademy.org",
            history: "Since 2016, we have helped over 1,500 students improve their academic performance.",
            impact: "90% of our students have shown significant improvements in their grades.",
        },
        {
            id: 4,
            name: "Kalam Educational Trust",
            location: "Tirunelveli, Tamil Nadu",
            description: "A nonprofit that offers vocational training and skill development programs for youth.",
            donationLink: "#",
            contact: "info@kalamtrust.org",
            history: "Founded in 2017, we have trained over 1,000 youth in various skills.",
            impact: "75% of our graduates have secured employment in their field of training.",
        },
        {
            id: 5,
            name: "Smart Start School",
            location: "Puducherry (Serving Tamil Nadu)",
            description: "Providing quality preschool education to children from disadvantaged backgrounds.",
            donationLink: "#",
            contact: "info@smartstartschool.org",
            history: "Founded in 2019, we have enrolled over 300 children in our programs.",
            impact: "Enhanced early childhood education access in our community.",
        },
        {
            id: 6,
            name: "Youth Empowerment Network",
            location: "Vellore, Tamil Nadu",
            description: "Empowering youth through education and leadership training.",
            donationLink: "#",
            contact: "support@yen.org",
            history: "Since 2018, we have engaged over 2,500 youth in educational programs.",
            impact: "Improved leadership skills and confidence among participants.",
        },
        {
            id: 7,
            name: "Future Leaders Academy",
            location: "Kanyakumari, Tamil Nadu",
            description: "Focused on providing mentorship and educational resources for aspiring leaders.",
            donationLink: "#",
            contact: "info@futureleadersacademy.org",
            history: "Established in 2020, helping over 500 students achieve their academic goals.",
            impact: "Created a network of support for youth pursuing leadership roles.",
        },
        {
            id: 8,
            name: "Global Citizens School",
            location: "Chennai, Tamil Nadu",
            description: "Promoting global citizenship education among school children.",
            donationLink: "#",
            contact: "info@globalcitizensschool.org",
            history: "Founded in 2021, we have enrolled over 400 students.",
            impact: "Fostering awareness and empathy among students.",
        },
        {
            id: 9,
            name: "Skill Up Academy",
            location: "Tiruppur, Tamil Nadu",
            description: "Providing skill development and training programs to empower youth for better job opportunities.",
            donationLink: "../pages/Donation.jsx",
            contact: "info@skillupacademy.org",
            history: "In operation since 2019, training over 800 individuals annually.",
            impact: "80% of our trainees have found jobs or started their own businesses.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-blue-300 py-8 px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Support Our Education Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {providers.map((provider) => (
                    <div
                        key={provider.id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 border-l-4 border-green-500"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{provider.name}</h3>
                        <p className="text-gray-600 mb-2"><strong>Location:</strong> {provider.location}</p>
                        <p className="text-gray-700 mb-4">{provider.description}</p>
                        <div className="border-t border-gray-300 mt-4 mb-4"></div>
                        <p className="text-gray-600 mb-1"><strong>Contact:</strong> {provider.contact}</p>
                        <p className="text-gray-600 mb-1"><strong>History:</strong> {provider.history}</p>
                        <p className="text-gray-600 mb-4"><strong>Impact:</strong> {provider.impact}</p>
                        <a
                            href={provider.donationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gradient-to-l transition-all duration-300"
                        >
                            Donate Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
