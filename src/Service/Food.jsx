// src/components/FoodProvider.js
import React from 'react';

const Food = () => {
    const providers = [
        {
            id: 1,
            name: "Feed Tamil Nadu",
            location: "Coimbatore, Tamil Nadu",
            description: "A nonprofit organization focused on eliminating hunger by distributing free meals to the underprivileged.",
            donationLink: "#",
            contact: "support@feedtn.org",
            history: "Founded in 2018, Feed Tamil Nadu has provided over 1 million meals to those in need.",
            impact: "Successfully organized multiple food drives and community kitchens.",
        },
        {
            id: 2,
            name: "Annai Sathiya Food Bank",
            location: "Chennai, Tamil Nadu",
            description: "Providing nutritious meals to homeless and low-income families through community kitchens.",
            donationLink: "#",
            contact: "info@annaisathiya.org",
            history: "In operation since 2016, serving over 250 families daily.",
            impact: "Helped reduce food insecurity in several neighborhoods.",
        },
        {
            id: 3,
            name: "Namma Ooru Unavagam",
            location: "Madurai, Tamil Nadu",
            description: "A grassroots initiative to provide meals to the needy in urban and rural areas.",
            donationLink: "#",
            contact: "contact@nammaooru.org",
            history: "Founded in 2019, distributing over 500,000 meals to date.",
            impact: "Engaged community volunteers to help serve meals.",
        },
        {
            id: 4,
            name: "Akshaya Patra Foundation",
            location: "Tirupati, Andhra Pradesh (Serving Tamil Nadu)",
            description: "Providing mid-day meals to children in government schools to eliminate hunger and promote education.",
            donationLink: "#",
            contact: "info@akshayapatra.org",
            history: "Founded in 2000, serving over 1.8 million children daily across India.",
            impact: "Increased school attendance and improved child health.",
        },
        {
            id: 5,
            name: "Food for Thought",
            location: "Vellore, Tamil Nadu",
            description: "Fighting hunger by providing hot meals to street dwellers and those in need.",
            donationLink: "#",
            contact: "support@foodforthought.org",
            history: "Started in 2020, serving approximately 300 meals a day.",
            impact: "Increased awareness about food waste and hunger issues.",
        },
        {
            id: 6,
            name: "Kottai Vasal Food Distribution",
            location: "Tiruchirappalli, Tamil Nadu",
            description: "Distributing food packets to the underprivileged and organizing community meals.",
            donationLink: "#",
            contact: "info@kottaivsal.org",
            history: "Founded in 2021, serving over 100 families each week.",
            impact: "Collaborated with local businesses for food donations.",
        },
        {
            id: 7,
            name: "Sadhana Food Initiative",
            location: "Kanyakumari, Tamil Nadu",
            description: "Providing free meals and grocery packs to low-income families during emergencies.",
            donationLink: "#",
            contact: "info@sadhanainitiative.org",
            history: "In operation since 2018, helping over 1,000 families during the pandemic.",
            impact: "Strengthened community support networks.",
        },
        {
            id: 8,
            name: "Vazhvum Unavu",
            location: "Chennai, Tamil Nadu",
            description: "Working to ensure food security for vulnerable populations through awareness and meal distribution.",
            donationLink: "#",
            contact: "support@vazhvumunavu.org",
            history: "Founded in 2020, successfully delivered meals during natural disasters.",
            impact: "Created a sustainable model for food distribution.",
        },
        {
            id: 9,
            name: "Ezhuthu Food Services",
            location: "Tirunelveli, Tamil Nadu",
            description: "Serving hot meals and groceries to those in need while promoting local farmers.",
            donationLink: "#",
            contact: "info@ezhuthuservices.org",
            history: "Established in 2019, with a focus on healthy and organic food options.",
            impact: "Supported local farmers and reduced food waste.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-blue-300 py-8 px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Support Our Food Providers</h2>
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
                            Donate Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
