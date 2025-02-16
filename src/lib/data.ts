//! Morsety User App
import { morsetyImages, morsetyBusinessImages } from "@/assets/images";

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
    image: "https://placehold.co/600x400/png",
    skills: [
      "Firebase",
      "Payment Gateway",
      "WebSockets",
      "Redux Toolkit",
      "Charts",
    ],
    modules: [
      {
        title: "User Authentication",
        description:
          "Secure login and registration system with social media integration",
        screenshots: [
          "https://placehold.co/360x640/png",
          "https://placehold.co/360x640/png",
        ],
      },
      {
        title: "Restaurant Browse",
        description:
          "Browse restaurants with filters, search, and real-time updates",
        screenshots: [
          "https://placehold.co/360x640/png",
          "https://placehold.co/360x640/png",
        ],
      },
      {
        title: "Order Tracking",
        description: "Real-time order tracking with live map updates",
        screenshots: [
          "https://placehold.co/360x640/png",
          "https://placehold.co/360x640/png",
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
          morsetyImages.details.screen8,
          morsetyImages.details.screen1,
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
