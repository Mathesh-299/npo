// src/components/ShelterProvider.js
import React from 'react';

const Shelter = () => {
    const providers = [
        {
            id: 1,
            name: "Anna Nagar Home for the Elderly",
            location: "Chennai, Tamil Nadu",
            description: "A compassionate home dedicated to providing care and support for elderly individuals in need.",
            donationLink: "../pages/Donation.jsx",
            contact: "info@annanagarhome.org",
            history: "Established in 2015, this home has served over 150 seniors, providing them with love and care.",
            impact: "90% of residents report improved quality of life.",
        },
        {
            id: 2,
            name: "Bharathi Home for the Aged",
            location: "Coimbatore, Tamil Nadu",
            description: "A shelter offering healthcare and emotional support for senior citizens.",
            donationLink: "#",
            contact: "info@bharathihome.org",
            history: "Founded in 2017, we have provided services to over 120 seniors.",
            impact: "85% of residents feel more secure and cared for.",
        },
        {
            id: 3,
            name: "Sakthi Rehabilitation Center",
            location: "Madurai, Tamil Nadu",
            description: "Supporting individuals in need of rehabilitation and recovery.",
            donationLink: "#",
            contact: "contact@sakthicenter.org",
            history: "In operation since 2016, helping over 80 individuals regain their independence.",
            impact: "75% of our clients have successfully reintegrated into society.",
        },
        {
            id: 4,
            name: "Grace Home for Women",
            location: "Chennai, Tamil Nadu",
            description: "Providing a safe haven for women facing domestic issues and violence.",
            donationLink: "#",
            contact: "info@gracehome.org",
            history: "Established in 2018, serving over 200 women and children.",
            impact: "95% of residents report feeling safe and supported.",
        },
        {
            id: 5,
            name: "Balaji Children’s Home",
            location: "Tiruchirappalli, Tamil Nadu",
            description: "Providing shelter, education, and care for underprivileged children.",
            donationLink: "#",
            contact: "info@balajihome.org",
            history: "Founded in 2010, we have supported over 300 children.",
            impact: "80% of our children excel in their education.",
        },
        {
            id: 6,
            name: "Hope Shelter",
            location: "Vellore, Tamil Nadu",
            description: "A temporary shelter providing basic needs for homeless individuals.",
            donationLink: "#",
            contact: "contact@hopeshelter.org",
            history: "In operation since 2019, assisting over 100 individuals annually.",
            impact: "70% of clients secure permanent housing within a year.",
        },
        {
            id: 7,
            name: "Peace Haven",
            location: "Chennai, Tamil Nadu",
            description: "Focused on mental health and wellbeing support.",
            donationLink: "#",
            contact: "support@peacehaven.org",
            history: "Serving the community since 2018, with over 500 beneficiaries.",
            impact: "88% of our clients report improved mental health.",
        },
        {
            id: 8,
            name: "Udhavum Ullangal",
            location: "Kanyakumari, Tamil Nadu",
            description: "Assisting individuals with disabilities to lead fulfilling lives.",
            donationLink: "#",
            contact: "info@udhavumullangal.org",
            history: "In operation since 2015, helping over 150 individuals.",
            impact: "65% of clients gain employment or vocational training.",
        },
        {
            id: 9,
            name: "Anbu Illam",
            location: "Tirunelveli, Tamil Nadu",
            description: "A home providing care and support for abandoned children.",
            donationLink: "#",
            contact: "info@anbuillam.org",
            history: "Founded in 2016, we have sheltered over 250 children.",
            impact: "90% of children placed in adoptive homes successfully.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-blue-300 py-8 px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Support Our Shelter Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {providers.map((provider) => (
                    <div
                        key={provider.id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 border-l-4 border-green-500"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{provider.name}</h3>
                        <p className="text-gray-600"><strong>Location:</strong> {provider.location}</p>
                        <p className="text-gray-700 mt-2">{provider.description}</p>
                        <p className="text-gray-600 mt-4"><strong>Contact:</strong> {provider.contact}</p>
                        <p className="text-gray-600"><strong>History:</strong> {provider.history}</p>
                        <p className="text-gray-600"><strong>Impact:</strong> {provider.impact}</p>
                        <a
                            href={provider.donationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gradient-to-l transition-all duration-300"
                        >
                           <button>Donate Now </button> 
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shelter;
