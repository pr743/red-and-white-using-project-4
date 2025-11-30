import React, { useState } from "react";

function Footer() {
  const sections = [
    {
      title: "About Us",
      items: [
        {
          label: "Our Company",
          link: "https://www.starbucks.com/about-us/",
        },
        {
          label: "Our Coffee",
          link: "https://about.starbucks.com/stories/category/coffee-products/coffee/",
        },
        {
          label: "About Starbucks",
          link: "https://about.starbucks.com/",
        },
        {
          label: "Starbucks Archive",
          link: "https://about.starbucks.com/history/",
        },
        {
          label: "Investor Relations",
          link: "https://investor.starbucks.com/",
        },
        {
          label: "Customer Service",
          link: "https://customerservice.starbucks.com/",
        },
        {
          label: "Contact Us",
          link: "https://www.starbucks.com/contact/",
        },
      ],
    },
    {
      title: "Careers",
      items: [
        {
          label: "Culture and Values",
          link: "https://careers.starbucks.com/culture/",
        },
        {
          label: "Belonging at Starbucks",
          link: "https://about.starbucks.com/stories/category/belonging-at-starbucks/",
        },
        {
          label: "College Achievement Plan",
          link: "https://careers.starbucks.com/benefits/education/",
        },
        {
          label: "Alumni Community",
          link: "https://alumni.starbucks.com/login/",
        },
        {
          label: "U.S. Careers",
          link: "https://careers.starbucks.com/",
        },
        {
          label: "International Careers",
          link: "https://careers.starbucks.com/discover-opportunities/international-careers/",
        },
      ],
    },
    {
      title: "Social Impact",
      items: [
        {
          label: "Communities",
          link: "https://about.starbucks.com/stories/category/people-impact/communities/",
        },
        {
          label: "Starbucks Foundation",
          link: "https://about.starbucks.com/the-starbucks-foundation/",
        },
        {
          label: "Sustainability",
          link: "https://about.starbucks.com/stories/category/people-impact/sustainability/",
        },
        {
          label: "Environmental & Social Impact Reporting",
          link: "https://about.starbucks.com/annual-impact-report/",
        },
      ],
    },
    {
      title: "For Business Partners",
      items: [
        {
          label: "Landlord Support Center",
          link: "https://www.starbucks.com/business/landlord-faq/",
        },
        {
          label: "Suppliers",
          link: "https://www.starbucks.com/business/suppliers/",
        },
        {
          label: "Corporate Gift Card Sales",
          link: "https://www.starbuckscardb2b.com/s/",
        },
        {
          label: "Office & Foodservice Coffee",
          link: "https://www.nestlecoffeepartnerssl.com/",
        },
      ],
    },
    {
      title: "Order and Pick Up",
      items: [
        {
          label: "Order on the App",
          link: "https://www.starbucks.com/rewards/mobile-apps/",
        },
        {
          label: "Order on the Web",
          link: "https://www.starbucks.com/menu",
        },
        {
          label: "Delivery",
          link: "https://www.starbucks.com/stores-and-ordering/delivery/",
        },
        {
          label: "Order & Pick Up Options",
          link: "https://www.starbucks.com/stores-and-ordering/",
        },
        {
          label: "Explore Coffee for Home",
          link: "https://athome.starbucks.com/",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="w-full bg-gray-200 py-12 px-6 md:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
        {sections.map((section, idx) => (
          <div key={idx} className="md:block">
            <button
              className="w-full flex justify-between items-center font-bold text-lg mb-2 md:mb-4 md:hidden"
              onClick={() => toggle(idx)}
            >
              {section.title}

              <span
                className={`inline-block transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            <ul
              className={`text-gray-600 space-y-2 overflow-hidden transition-max-height duration-300 md:max-h-full ${
                openIndex === idx ? "max-h-96" : "max-h-0"
              }`}
            >
              <h3 className="font-bold text-lg mb-2 hidden md:block">
                {section.title}
              </h3>
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="hover:text-black block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="my-8 border-b border-gray-400"></div>
      <div className="flex gap-5 text-3xl text-gray-700">
        <a href="https://open.spotify.com/user/starbucks" target="_blank">
          <i className="fa-brands fa-spotify hover:text-black"></i>
        </a>
        <a href="https://www.facebook.com/Starbucks" target="_blank">
          <i className="fa-brands fa-facebook hover:text-black"></i>
        </a>
        <a href="https://www.pinterest.com/starbucks/" target="_blank">
          <i className="fa-brands fa-pinterest hover:text-black"></i>
        </a>
        <a href="https://www.instagram.com/starbucks" target="_blank">
          <i className="fa-brands fa-instagram hover:text-black"></i>
        </a>
        <a href="https://www.youtube.com/starbucks" target="_blank">
          <i className="fa-brands fa-youtube hover:text-black"></i>
        </a>{" "}
        <a href="https://twitter.com/starbucks" target="_blank">
          <i className="fa-brands fa-x-twitter hover:text-black"></i>
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-700 mt-4">
        <a
          href="https://www.starbucks.com/terms/privacy-notice/"
          className="hover:underline"
        >
          Privacy Notice
        </a>
        <a
          href="https://www.starbucks.com/consumer-health-data-privacy-notice/"
          className="hover:underline"
        >
          Consumer Health Privacy Notice
        </a>
        <a
          href="https://www.starbucks.com/terms/starbucks-terms-of-use/"
          className="hover:underline"
        >
          Terms of Use
        </a>
        <a
          href="https://www.starbucks.com/personal-information"
          className="hover:underline"
        >
          Do Not Sell or Share My Personal Information
        </a>
        <a
          href="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf"
          className="hover:underline"
        >
          CA Supply Chain Act
        </a>
        <a
          href="https://www.starbucks.com/about-us/accessibility/"
          className="hover:underline"
        >
          Accessibility
        </a>
        <p className="hover:underline cursor-pointer">Cookie Preferences</p>
      </div>

      <p className="text-gray-700 text-sm mt-4">
        © 2025 Starbucks Coffee Company. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
