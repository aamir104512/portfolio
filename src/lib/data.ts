//! Morsety User App
import {
  carAdvisersImages,
  morsetyImages,
  morsetyBusinessImages,
} from "@/assets/images";

interface ProjectModule {
  title: string;
  description: string;
  screenshots: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
  modules: ProjectModule[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CarAdvisers Mobile App",
    description:
      "A cross-platform auto marketplace for buying, selling, and auctioning vehicles. Features real-time chat, bidding, advanced search, car inspections, multi-user roles, and payment integration. Built with React Native, Redux Toolkit, WebSockets, and Firebase.",
    image: carAdvisersImages.splash.header,
    skills: [
      "Firebase",
      "Payment Gateway",
      "Web-Sockets",
      "Redux Toolkit",
      "Charts",
    ],
    modules: [
      {
        title: "Home",
        description:
          "Explore a vast marketplace for cars, bikes, and auto parts with an intuitive and dynamic home screen. Stay updated with featured listings, trending vehicles, and personalized recommendations for a seamless browsing experience.",
        screenshots: [
          carAdvisersImages.home.screen1,
          carAdvisersImages.home.screen2,
          carAdvisersImages.home.screen3,
          carAdvisersImages.home.screen4,
          carAdvisersImages.home.screen5,
          carAdvisersImages.home.screen6,
          carAdvisersImages.home.screen7,
          carAdvisersImages.home.screen8,
          carAdvisersImages.home.screen9,
          carAdvisersImages.home.screen10,
          carAdvisersImages.home.screen11,
          carAdvisersImages.home.screen12,
          carAdvisersImages.home.screen13,
          carAdvisersImages.home.screen14,
          carAdvisersImages.home.screen15,
          carAdvisersImages.home.screen16,
          carAdvisersImages.home.screen17,
          carAdvisersImages.home.screen18,
          carAdvisersImages.home.screen19,
          carAdvisersImages.home.screen20,
          carAdvisersImages.home.screen21,
          carAdvisersImages.home.screen22,
          carAdvisersImages.home.screen23,
          carAdvisersImages.home.screen24,
          carAdvisersImages.home.screen25,
          carAdvisersImages.home.screen26,
          carAdvisersImages.home.screen27,
          carAdvisersImages.home.screen28,
          carAdvisersImages.home.screen29,
          carAdvisersImages.home.screen30,
          carAdvisersImages.home.screen31,
          carAdvisersImages.home.screen32,
          carAdvisersImages.home.screen33,
          carAdvisersImages.home.screen34,
          carAdvisersImages.home.screen35,
          carAdvisersImages.home.screen36,
        ],
      },
      {
        title: "Account",
        description:
          "A comprehensive account management system catering to users, dealers, staff, and workshops. Access personalized dashboards with advanced ad view and profile view charts, track transaction history, and manage notifications. Edit account details, monitor activity, and optimize your experience with detailed insights and real-time updates for all user types.",
        screenshots: [
          carAdvisersImages.account.screen1,
          carAdvisersImages.account.screen2,
          carAdvisersImages.account.screen3,
          carAdvisersImages.account.screen4,
          carAdvisersImages.account.screen5,
          carAdvisersImages.account.screen6,
          carAdvisersImages.account.screen7,
          carAdvisersImages.account.screen8,
          carAdvisersImages.account.screen9,
          carAdvisersImages.account.screen10,
          carAdvisersImages.account.screen11,
          carAdvisersImages.account.screen12,
          carAdvisersImages.account.screen13,
          carAdvisersImages.account.screen14,
          carAdvisersImages.account.screen15,
          carAdvisersImages.account.screen16,
          carAdvisersImages.account.screen17,
          carAdvisersImages.account.screen18,
          carAdvisersImages.account.screen19,
          carAdvisersImages.account.screen20,
          carAdvisersImages.account.screen21,
          carAdvisersImages.account.screen22,
          carAdvisersImages.account.screen23,
          carAdvisersImages.account.screen24,
          carAdvisersImages.account.screen25,
          carAdvisersImages.account.screen26,
          carAdvisersImages.account.screen27,
          carAdvisersImages.account.screen28,
          carAdvisersImages.account.screen29,
          carAdvisersImages.account.screen30,
          carAdvisersImages.account.screen31,
          carAdvisersImages.account.screen32,
          carAdvisersImages.account.screen33,
          carAdvisersImages.account.screen34,
          carAdvisersImages.account.screen35,
          carAdvisersImages.account.screen36,
          carAdvisersImages.account.screen37,
        ],
      },
      {
        title: "Auth",
        description:
          "Secure login and registration system with social media integration",
        screenshots: [
          carAdvisersImages.auth.screen1,
          carAdvisersImages.auth.screen2,
          carAdvisersImages.auth.screen3,
          carAdvisersImages.auth.screen4,
          carAdvisersImages.auth.screen5,
          carAdvisersImages.auth.screen6,
          carAdvisersImages.auth.screen7,
          carAdvisersImages.auth.screen8,
          carAdvisersImages.auth.screen9,
          carAdvisersImages.auth.screen10,
          carAdvisersImages.auth.screen11,
          carAdvisersImages.auth.screen12,
          carAdvisersImages.auth.screen13,
          carAdvisersImages.auth.screen14,
          carAdvisersImages.auth.screen15,
          carAdvisersImages.auth.screen16,
        ],
      },
      {
        title: "Details",
        description:
          "Get in-depth insights into vehicle listings with high-quality images, detailed specifications, pricing, and seller information. Engage with sellers via real-time chat, place bids, and explore financing options for a smooth buying experience.",
        screenshots: [
          carAdvisersImages.details.screen1,
          carAdvisersImages.details.screen2,
          carAdvisersImages.details.screen3,
          carAdvisersImages.details.screen4,
          carAdvisersImages.details.screen5,
          carAdvisersImages.details.screen6,
          carAdvisersImages.details.screen7,
          carAdvisersImages.details.screen8,
          carAdvisersImages.details.screen9,
          carAdvisersImages.details.screen10,
          carAdvisersImages.details.screen11,
          carAdvisersImages.details.screen12,
          carAdvisersImages.details.screen13,
          carAdvisersImages.details.screen14,
          carAdvisersImages.details.screen15,
          carAdvisersImages.details.screen16,
          carAdvisersImages.details.screen17,
          carAdvisersImages.details.screen18,
          carAdvisersImages.details.screen19,
          carAdvisersImages.details.screen20,
          carAdvisersImages.details.screen21,
          carAdvisersImages.details.screen22,
          carAdvisersImages.details.screen23,
          carAdvisersImages.details.screen24,
          carAdvisersImages.details.screen25,
          carAdvisersImages.details.screen26,
          carAdvisersImages.details.screen27,
          carAdvisersImages.details.screen28,
          carAdvisersImages.details.screen29,
          carAdvisersImages.details.screen30,
          carAdvisersImages.details.screen31,
          carAdvisersImages.details.screen32,
          carAdvisersImages.details.screen33,
          carAdvisersImages.details.screen34,
          carAdvisersImages.details.screen35,
          carAdvisersImages.details.screen36,
          carAdvisersImages.details.screen37,
          carAdvisersImages.details.screen38,
          carAdvisersImages.details.screen39,
          carAdvisersImages.details.screen40,
        ],
      },
      {
        title: "Messages",
        description:
          "Communicate effortlessly with sellers and buyers through real-time messaging. Share images, videos, and documents, while staying updated with notifications, typing indicators, and read receipts for a seamless and interactive chat experience.",
        screenshots: [
          carAdvisersImages.messages.screen1,
          carAdvisersImages.messages.screen2,
          carAdvisersImages.messages.screen3,
        ],
      },
      {
        title: "My Ads",
        description:
          "Manage your posted ads with ease. View, edit, and activate pending ads, feature your listings for better visibility, and track performance with detailed analytics. Keep track of sold ads, monitor views and call inquiries, and optimize your listings for maximum exposure and success.",
        screenshots: [
          carAdvisersImages.myAds.screen1,
          carAdvisersImages.myAds.screen2,
          carAdvisersImages.myAds.screen3,
          carAdvisersImages.myAds.screen4,
          carAdvisersImages.myAds.screen5,
          carAdvisersImages.myAds.screen6,
          carAdvisersImages.myAds.screen7,
          carAdvisersImages.myAds.screen8,
          carAdvisersImages.myAds.screen9,
          carAdvisersImages.myAds.screen10,
          carAdvisersImages.myAds.screen11,
          carAdvisersImages.myAds.screen12,
          carAdvisersImages.myAds.screen13,
          carAdvisersImages.myAds.screen14,
          carAdvisersImages.myAds.screen15,
        ],
      },
      {
        title: "Post an Ad",
        description:
          "Easily post your car, bike, or auto parts ads, rent or buy armoured cars with a user-friendly interface. Upload images, provide detailed descriptions, set prices, and manage other listing details. Enjoy a seamless process for creating high-quality, attractive ads that reach potential buyers instantly.",
        screenshots: [
          carAdvisersImages.postAds.screen1,
          carAdvisersImages.postAds.screen2,
          carAdvisersImages.postAds.screen3,
          carAdvisersImages.postAds.screen4,
          carAdvisersImages.postAds.screen5,
          carAdvisersImages.postAds.screen6,
          carAdvisersImages.postAds.screen7,
          carAdvisersImages.postAds.screen8,
          carAdvisersImages.postAds.screen9,
        ],
      },
      {
        title: "Products and Services",
        description:
          "Explore a wide range of specialized services including car inspections, auction sheet verification, and unique offerings like 'Sell My Car', 'Buy Me a Car', and 'Auction My Car'. Additionally, find services for electric vehicles, armored cars, and more to ensure a comprehensive automotive experience tailored to your needs.",
        screenshots: [
          carAdvisersImages.products.screen1,
          carAdvisersImages.products.screen2,
          carAdvisersImages.products.screen3,
          carAdvisersImages.products.screen4,
          carAdvisersImages.products.screen5,
          carAdvisersImages.products.screen6,
          carAdvisersImages.products.screen7,
          carAdvisersImages.products.screen8,
          carAdvisersImages.products.screen9,
          carAdvisersImages.products.screen10,
          carAdvisersImages.products.screen11,
          carAdvisersImages.products.screen12,
          carAdvisersImages.products.screen13,
          carAdvisersImages.products.screen14,
          carAdvisersImages.products.screen15,
          carAdvisersImages.products.screen16,
          carAdvisersImages.products.screen17,
          carAdvisersImages.products.screen18,
          carAdvisersImages.products.screen19,
        ],
      },
      {
        title: "Search",
        description:
          "Find your perfect vehicle with advanced search filters and pagination. Narrow down your options using criteria like price, make, model, location, and more. Enjoy a fast, responsive experience with infinite scrolling and easy navigation through extensive vehicle listings.",
        screenshots: [
          carAdvisersImages.search.screen1,
          carAdvisersImages.search.screen2,
          carAdvisersImages.search.screen3,
          carAdvisersImages.search.screen4,
          carAdvisersImages.search.screen5,
          carAdvisersImages.search.screen6,
          carAdvisersImages.search.screen7,
          carAdvisersImages.search.screen8,
          carAdvisersImages.search.screen9,
          carAdvisersImages.search.screen10,
          carAdvisersImages.search.screen11,
          carAdvisersImages.search.screen12,
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Morsety",
    description:
      "A salon booking app for scheduling beauty services and purchasing related products. Features Google Maps integration, social logins, real-time notifications, and secure payments. Built with React Native, TypeScript, Redux Toolkit, Google Maps, and WebSockets.",
    image: morsetyImages.splash.header,
    skills: [
      "Redux Toolkit",
      "Push Notifications",
      "Social Logins",
      "Payment Gateway",
    ],
    modules: [
      {
        title: "Onboarding",
        description:
          "A visually engaging onboarding experience that introduces users to the app's key features. With smooth animations and intuitive navigation, users quickly learn how to explore salons, book services, and enhance their beauty experience effortlessly.",
        screenshots: [
          morsetyImages.onboarding.screen1,
          morsetyImages.onboarding.screen2,
          morsetyImages.onboarding.screen3,
        ],
      },
      {
        title: "Auth",
        description:
          "Seamless authentication with secure OTP verification. Users can sign up, log in, and manage their accounts effortlessly using phone number authentication.",
        screenshots: [
          morsetyImages.auth.screen1,
          morsetyImages.auth.screen2,
          morsetyImages.auth.screen3,
          morsetyImages.auth.screen4,
          morsetyImages.auth.screen5,
          morsetyImages.auth.screen6,
          morsetyImages.auth.screen7,
        ],
      },
      {
        title: "Home",
        description:
          "Discover top-rated salons, explore beauty services, and stay updated with real-time weather insights. The beautifully designed UI ensures a smooth and engaging experience, making it easy to find and book your desired services.",
        screenshots: [
          morsetyImages.home.screen6,
          morsetyImages.home.screen1,
          morsetyImages.home.screen2,
          morsetyImages.home.screen3,
          morsetyImages.home.screen4,
          morsetyImages.home.screen7,
        ],
      },
      {
        title: "Saloon Details",
        description:
          "View in-depth salon profiles with high-quality images, service lists, pricing, and customer reviews. Easily check availability, book appointments, and navigate to the salon with integrated maps for a seamless booking experience.",
        screenshots: [
          morsetyImages.details.screen1,
          morsetyImages.details.screen8,
          morsetyImages.details.screen2,
          morsetyImages.details.screen3,
          morsetyImages.details.screen4,
          morsetyImages.details.screen5,
          morsetyImages.details.screen6,
          morsetyImages.details.screen7,
        ],
      },
      {
        title: "Saloon Booking",
        description:
          "A seamless and intuitive booking experience where users can select their preferred salon, choose services, pick a staff member, and find available time slots. Users can also add beauty products to their order, provide personal details, and confirm their booking—all in a smooth, step-by-step process.",
        screenshots: [
          morsetyImages.booking.screen1,
          morsetyImages.booking.screen2,
          morsetyImages.booking.screen3,
          morsetyImages.booking.screen4,
          morsetyImages.booking.screen5,
          morsetyImages.booking.screen6,
          morsetyImages.booking.screen7,
          morsetyImages.booking.screen8,
          morsetyImages.booking.screen9,
        ],
      },
      {
        title: "Search",
        description:
          "Find the perfect salon or service with a powerful search experience. Users can search normally or explore salons directly on the map. Save favorite salons for quick access and enjoy a hassle-free booking journey.",
        screenshots: [
          morsetyImages.search.screen5,
          morsetyImages.search.screen1,
          morsetyImages.search.screen2,
          morsetyImages.search.screen3,
          morsetyImages.search.screen4,
          morsetyImages.search.screen6,
          morsetyImages.search.screen7,
        ],
      },
      {
        title: "Messages",
        description:
          "Stay connected with real-time messaging powered by WebSockets. Enjoy seamless conversations with features like image and video sharing, typing indicators, and read receipts—ensuring a smooth and interactive chat experience.",
        screenshots: [
          morsetyImages.messages.screen1,
          morsetyImages.messages.screen2,
          morsetyImages.messages.screen3,
          morsetyImages.messages.screen4,
          morsetyImages.messages.screen5,
        ],
      },
      {
        title: "Account",
        description:
          "Manage your profile effortlessly with the account module. Users can update their personal details, view and edit their wishlist, and customize their experience with multi-language support—ensuring a personalized and seamless app journey.",
        screenshots: [
          morsetyImages.account.screen1,
          morsetyImages.account.screen4,
          morsetyImages.account.screen5,
          morsetyImages.account.screen6,
          morsetyImages.account.screen2,
          morsetyImages.account.screen3,
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Morsety Business",
    description:
      "A salon management app for handling appointments, services, and product sales, with a dedicated tablet mode. Includes Google Maps integration, social logins, real-time updates, and payment processing. Built with React Native, TypeScript, Redux Toolkit, Google Maps and WebSockets.",
    image: morsetyBusinessImages.splash.header,
    skills: [
      "Redux Toolkit",
      "Push Notifications",
      "Social Logins",
      "Payment Gateway",
    ],
    modules: [
      {
        title: "Feed & Stories",
        description: "Interactive feed with stories and rich media support",
        screenshots: [
          "https://placehold.co/360x640/png",
          "https://placehold.co/360x640/png",
        ],
      },
      {
        title: "Chat System",
        description: "Real-time messaging with media sharing capabilities",
        screenshots: [
          "https://placehold.co/360x640/png",
          "https://placehold.co/360x640/png",
        ],
      },
    ],
  },
];
