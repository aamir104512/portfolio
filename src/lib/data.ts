//! Morsety User App
import {
  carAdvisersImages,
  morsetyImages,
  morsetyBusinessImages,
  shipSmart,
  inspections,
  yappedImages,
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
  appStoreLink?: string;
  playStoreLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CarAdvisers Mobile App",
    description:
      "A cross-platform auto marketplace for buying, selling, and auctioning vehicles. Features real-time chat, bidding, advanced search, car inspections, multi-user roles, and payment integration. Built with React Native, Redux Toolkit, WebSockets, and Firebase.",
    image: carAdvisersImages.splash.header,
    appStoreLink:
      "https://apps.apple.com/us/app/car-advisers-buy-sell-cars/id6743527421",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.caradvisers",
    skills: [
      "JavaScript",
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
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.morsety.customers",
    skills: [
      "TypeScript",
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
    title: "ShipSmart",
    description:
      "A powerful shipment and package management app designed for seamless logistics. Track and manage incoming and outgoing shipments via boats or planes, scan barcodes and QR codes, and stay updated with real-time shipment status. Built with React Native Expo, TypeScript, and Redux Toolkit, featuring WebSockets for live updates and an intuitive interface for efficient package handling.",
    image: shipSmart.splash.header,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.goshipsmart.ssmapp&hl=en_GB",
    appStoreLink:
      "https://apps.apple.com/us/app/shipsmart-save-on-shipping/id6742982591",
    skills: [
      "Expo",
      "TypeScript",
      "Expo Router",
      "Redux Toolkit",
      "Social Logins",
    ],
    modules: [
      {
        title: "Auth",
        description:
          "Secure and seamless authentication with a password strength meter, real-time validations, and Google login integration. Ensuring a smooth onboarding experience with strong security measures for hassle-free access to the ShipSmart platform.",
        screenshots: [
          shipSmart.auth.screen3,
          shipSmart.auth.screen4,
          shipSmart.auth.screen5,
          shipSmart.auth.screen6,
          shipSmart.auth.screen7,
          shipSmart.auth.screen8,
          shipSmart.auth.screen9,
          shipSmart.auth.screen10,
          shipSmart.auth.screen11,
          shipSmart.auth.screen12,
          shipSmart.auth.screen13,
          shipSmart.auth.screen14,
          shipSmart.auth.screen15,
          shipSmart.auth.screen16,
          shipSmart.auth.screen17,
          shipSmart.auth.screen18,
          shipSmart.auth.screen19,
          shipSmart.auth.screen1,
          shipSmart.auth.screen2,
        ],
      },
      {
        title: "Shipments",
        description:
          "Easily track and manage your shipments with real-time status updates. Monitor shipments at every stage, from packing and transit to delivery. View detailed shipment information, including origin, transport mode, and estimated arrival. Add new shipments, edit details, and delete records effortlessly for complete control over your logistics.",
        screenshots: [
          shipSmart.shipments.screen1,
          shipSmart.shipments.screen2,
          shipSmart.shipments.screen3,
          shipSmart.shipments.screen4,
          shipSmart.shipments.screen5,
          shipSmart.shipments.screen6,
          shipSmart.shipments.screen7,
          shipSmart.shipments.screen8,
          shipSmart.shipments.screen9,
          shipSmart.shipments.screen10,
          shipSmart.shipments.screen11,
          shipSmart.shipments.screen12,
          shipSmart.shipments.screen13,
          shipSmart.shipments.screen14,
          shipSmart.shipments.screen15,
          shipSmart.shipments.screen16,
        ],
      },
      {
        title: "Packages",
        description:
          "Stay in control of your packages with a comprehensive tracking system. View, add, edit, and delete packages while monitoring their real-time status, from processing and transit to delivery. Get detailed insights into each package.",
        screenshots: [
          shipSmart.packages.screen1,
          shipSmart.packages.screen2,
          shipSmart.packages.screen3,
          shipSmart.packages.screen4,
          shipSmart.packages.screen5,
          shipSmart.packages.screen6,
          shipSmart.packages.screen7,
          shipSmart.packages.screen8,
          shipSmart.packages.screen9,
          shipSmart.packages.screen10,
          shipSmart.packages.screen11,
          shipSmart.packages.screen12,
          shipSmart.packages.screen13,
          shipSmart.packages.screen14,
          shipSmart.packages.screen15,
          shipSmart.packages.screen16,
        ],
      },
      {
        title: "Addresses",
        description:
          "Easily manage your saved addresses for quick and hassle-free shipments. Add, edit, and delete addresses while organizing them with advanced filtering options. Ensure accurate deliveries by storing multiple addresses for a seamless shipping experience.",
        screenshots: [
          shipSmart.addresses.screen1,
          shipSmart.addresses.screen2,
          shipSmart.addresses.screen3,
        ],
      },
      {
        title: "Admin Shipments",
        description:
          "Streamline shipment management with real-time tracking and barcode scanning. Admins can view, edit, and update shipment statuses across different stages, from processing to final delivery. Quickly scan package barcodes for efficient tracking, verify shipment details, and ensure smooth logistics operations with a powerful shipment management system.",
        screenshots: [
          shipSmart.adminShipments.screen1,
          shipSmart.adminShipments.screen2,
          shipSmart.adminShipments.screen3,
          shipSmart.adminShipments.screen4,
          shipSmart.adminShipments.screen5,
          shipSmart.adminShipments.screen6,
          shipSmart.adminShipments.screen7,
          shipSmart.adminShipments.screen8,
          shipSmart.adminShipments.screen9,
          shipSmart.adminShipments.screen10,
          shipSmart.adminShipments.screen11,
        ],
      },
      {
        title: "Admin Packages",
        description:
          "Efficiently manage and monitor all packages with advanced filtering options. Admins can view package details, track their status, and sort shipments based on different criteria, ensuring smooth logistics operations and quick access to essential package information.",
        screenshots: [
          shipSmart.adminPackages.screen1,
          shipSmart.adminPackages.screen2,
          shipSmart.adminPackages.screen3,
        ],
      },
      {
        title: "Inventory",
        description:
          "Keep track of all shipments and packages with a comprehensive inventory management system. View detailed shipment and package statuses, including confirmation status and transit progress. Quickly scan barcodes to update records, verify shipments, and maintain accurate inventory logs with a structured list view for efficient logistics management.",
        screenshots: [
          shipSmart.inventory.screen1,
          shipSmart.inventory.screen2,
          shipSmart.inventory.screen3,
          shipSmart.inventory.screen4,
          shipSmart.inventory.screen5,
          shipSmart.inventory.screen6,
          shipSmart.inventory.screen7,
        ],
      },
      {
        title: "Account",
        description:
          "Manage your account with ease. View and update personal details, billing information, and security settings. Change passwords, update contact details, and ensure your account is always up to date for a seamless administrative experience.",
        screenshots: [
          shipSmart.account.screen1,
          shipSmart.account.screen2,
          shipSmart.account.screen3,
          shipSmart.account.screen4,
          shipSmart.account.screen5,
          shipSmart.account.screen6,
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Morsety Business",
    description:
      "A salon management app for handling appointments, services, and product sales, with a dedicated tablet mode. Includes Google Maps integration, social logins, real-time updates, and payment processing. Built with React Native, TypeScript, Redux Toolkit, Google Maps and WebSockets.",
    image: morsetyBusinessImages.splash.header,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.morsety.business",
    skills: [
      "TypeScript",
      "Redux Toolkit",
      "Push Notifications",
      "Social Logins",
      "Payment Gateway",
    ],
    modules: [
      {
        title: "Home",
        description:
          "Manage your salon business with ease. View all your salon branches and scheduled appointments in a single, intuitive dashboard. Filter through appointments with an interactive calendar, and stay organized with real-time updates and notifications for a streamlined business experience.",
        screenshots: [
          morsetyBusinessImages.home.screen1,
          morsetyBusinessImages.home.screen2,
          morsetyBusinessImages.home.screen3,
          morsetyBusinessImages.home.screen4,
        ],
      },
      {
        title: "Auth",
        description:
          "Easily create a business account or reset your password. The authentication module ensures secure sign-up with essential business information, helping salon owners get started quickly and access their salon management tools with ease.",
        screenshots: [
          morsetyBusinessImages.auth.screen1,
          morsetyBusinessImages.auth.screen2,
          morsetyBusinessImages.auth.screen3,
          morsetyBusinessImages.auth.screen4,
          morsetyBusinessImages.auth.screen5,
          morsetyBusinessImages.auth.screen6,
          morsetyBusinessImages.auth.screen7,
          morsetyBusinessImages.auth.screen8,
          morsetyBusinessImages.auth.screen9,
          morsetyBusinessImages.auth.screen10,
          morsetyBusinessImages.auth.screen11,
          morsetyBusinessImages.auth.screen12,
          morsetyBusinessImages.auth.screen13,
        ],
      },
      {
        title: "Branches",
        description:
          "Effortlessly add and manage salon branches with comprehensive details including address, map location, operating hours, and more. Customize each branch by adding available services, assigning staff, managing products, and overseeing reviews. Keep your salon's information up-to-date and organized for an optimized business experience.",
        screenshots: [
          morsetyBusinessImages.branches.screen1,
          morsetyBusinessImages.branches.screen2,
          morsetyBusinessImages.branches.screen3,
          morsetyBusinessImages.branches.screen4,
          morsetyBusinessImages.branches.screen5,
          morsetyBusinessImages.branches.screen6,
          morsetyBusinessImages.branches.screen7,
          morsetyBusinessImages.branches.screen8,
          morsetyBusinessImages.branches.screen9,
          morsetyBusinessImages.branches.screen10,
          morsetyBusinessImages.branches.screen11,
          morsetyBusinessImages.branches.screen12,
          morsetyBusinessImages.branches.screen13,
          morsetyBusinessImages.branches.screen14,
          morsetyBusinessImages.branches.screen15,
          morsetyBusinessImages.branches.screen16,
          morsetyBusinessImages.branches.screen17,
          morsetyBusinessImages.branches.screen18,
          morsetyBusinessImages.branches.screen19,
          morsetyBusinessImages.branches.screen20,
          morsetyBusinessImages.branches.screen21,
          morsetyBusinessImages.branches.screen22,
        ],
      },
      {
        title: "Bookings",
        description:
          "Efficiently manage all salon bookings with an intuitive system. View, update, and track appointments in real-time. Easily filter bookings by date, service, or staff, and ensure a smooth experience for both clients and staff. Stay organized with automatic reminders, status updates, and booking management tools.",
        screenshots: [
          morsetyBusinessImages.bookings.screen1,
          morsetyBusinessImages.bookings.screen2,
          morsetyBusinessImages.bookings.screen3,
          morsetyBusinessImages.bookings.screen4,
          morsetyBusinessImages.bookings.screen5,
          morsetyBusinessImages.bookings.screen6,
          morsetyBusinessImages.bookings.screen7,
          morsetyBusinessImages.bookings.screen8,
          morsetyBusinessImages.bookings.screen9,
          morsetyBusinessImages.bookings.screen10,
        ],
      },
      {
        title: "Account",
        description:
          "Manage your salon's business profile with ease. View and update your business information, customize notification preferences, and switch between multiple languages for a personalized experience. Stay in control of your account settings and notifications to optimize your business operations.",
        screenshots: [
          morsetyBusinessImages.account.screen1,
          morsetyBusinessImages.account.screen2,
          morsetyBusinessImages.account.screen3,
          morsetyBusinessImages.account.screen4,
          morsetyBusinessImages.account.screen5,
          morsetyBusinessImages.account.screen6,
          morsetyBusinessImages.account.screen7,
        ],
      },
    ],
  },
  {
    id: 5,
    title: "CarAdvisers Inspections",
    description:
      "An advanced car inspection app for inspectors to assess vehicle conditions, covering interior, exterior, electronics, damages, and tires. Inspectors can view scheduled inspections, create new ones, and manage detailed criteria. Features include draft-saving, a session timer that pauses when the app is in the background, and structured data management.",
    image: inspections.splash.header,
    skills: ["React Native", "JavaScript", "Redux Toolkit", "Axios"],
    modules: [
      {
        title: "Splash and Auth",
        description:
          "Simple login flow for inspectors to access their scheduled inspections.",
        screenshots: [inspections.auth.screen1, inspections.auth.screen2],
      },
      {
        title: "Home",
        description:
          "Inspectors can view their scheduled inspections at a glance. The home screen provides a clear list of assigned tasks with quick access to start, view, or manage inspections. Includes real-time updates, calendar integration, and easy navigation to streamline daily workflows.",
        screenshots: [
          inspections.home.screen1,
          inspections.home.screen2,
          inspections.home.screen3,
          inspections.home.screen4,
          inspections.home.screen5,
        ],
      },
      {
        title: "Create Inspection",
        description:
          "Easily initiate new vehicle inspections by entering user details and selecting the car to be inspected. Inspectors can efficiently record inspection points for interior, exterior, electronics, damages, tires, and more, with support for saving progress as a draft and resuming inspections seamlessly.",
        screenshots: [
          inspections.createInspection.screen1,
          inspections.createInspection.screen2,
          inspections.createInspection.screen3,
          inspections.createInspection.screen4,
          inspections.createInspection.screen5,
          inspections.createInspection.screen6,
          inspections.createInspection.screen7,
          inspections.createInspection.screen8,
          inspections.createInspection.screen9,
        ],
      },
      {
        title: "Inspection Menu",
        description:
          "Enable car inspectors to perform detailed vehicle inspections by selecting from multiple inspection categories, including interior, exterior, electronics, damages, tires, and more. The module supports adding notes, capturing images, and marking inspection points. Inspectors can review selections and submit the final inspection report, ensuring accurate and comprehensive vehicle assessments.",
        screenshots: [
          inspections.inspectionMenu.screen1,
          inspections.inspectionMenu.screen2,
          inspections.inspectionMenu.screen3,
          inspections.inspectionMenu.screen4,
          inspections.inspectionMenu.screen19,
          inspections.inspectionMenu.screen5,
          inspections.inspectionMenu.screen6,
          inspections.inspectionMenu.screen7,
          inspections.inspectionMenu.screen8,
          inspections.inspectionMenu.screen9,
          inspections.inspectionMenu.screen10,
          inspections.inspectionMenu.screen11,
          inspections.inspectionMenu.screen12,
          inspections.inspectionMenu.screen13,
          inspections.inspectionMenu.screen14,
          inspections.inspectionMenu.screen15,
          inspections.inspectionMenu.screen16,
          inspections.inspectionMenu.screen17,
          inspections.inspectionMenu.screen18,
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Yapped",
    description:
      "A social book reading and event management platform that connects readers through shared reading experiences. Features include creating and joining reading events, real-time discussions, user authentication, and profile management. Built with React Native, Expo, TypeScript, and Firebase.",
    image: yappedImages.splash.header,
    skills: [
      "Expo",
      "React Native",
      "TypeScript",
      "Expo Router",
      "Redux Toolkit",
      "Firebase",
      "Social Authentication",
    ],
    modules: [
      {
        title: "Authentication",
        description:
          "Comprehensive authentication system with email/password login, and password recovery. Features secure account creation, email verification, and a seamless forgot password flow, ensuring a robust and user-friendly security experience.",
        screenshots: [
          yappedImages.auth.screen2,
          yappedImages.auth.screen3,
          yappedImages.auth.screen4,
          yappedImages.auth.screen1,
        ],
      },
      {
        title: "Home Feed",
        description:
          "Dynamic home screen showcasing ongoing and upcoming reading events. Users can discover new books, browse trending events, and see activity from their network. Features infinite scrolling, real-time updates, and quick access to join or create new reading events.",
        screenshots: [
          yappedImages.home.screen1,
          yappedImages.home.screen8,
          yappedImages.home.screen7,
          yappedImages.home.screen2,
          yappedImages.home.screen3,
          yappedImages.home.screen4,
          yappedImages.home.screen5,
          yappedImages.home.screen6,
        ],
      },
      {
        title: "Book Creation",
        description:
          "Intuitive interface for creating and managing reading events. Users can set up new books with details like title, description, start date, and member limits. Includes member filtering capabilities, ensuring efficient group formation while maintaining active user participation.",
        screenshots: [
          yappedImages.bookcreation.screen5,
          yappedImages.bookcreation.screen2,
          yappedImages.bookcreation.screen3,
          yappedImages.bookcreation.screen4,
          yappedImages.bookcreation.screen1,
        ],
      },
      {
        title: "User Profile",
        description:
          "Personalized profile management system where users can view their reading history, manage ongoing events, and customize their account settings. Includes features for editing profile information, changing passwords, and managing account preferences with a clean, intuitive interface.",
        screenshots: [
          yappedImages.account.screen5,
          yappedImages.account.screen1,
          yappedImages.account.screen2,
          yappedImages.account.screen3,
          yappedImages.account.screen4,
        ],
      },
    ],
  },
];
