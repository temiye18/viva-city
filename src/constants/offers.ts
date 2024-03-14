import {
  OfferImageOne,
  OfferImageTwo,
  OfferImageThree,
} from "../assets/images";

import { Performance, Visibility, Help } from "../assets/svgs";

type Offer = {
  id: string;
  tag: string;
  link?: string;
  title: string;
  description: string;
  image: string;
};

export const offers: Offer[] = [
  {
    id: "o1",
    tag: "Ticket Scanning",
    link: "Download the app",
    title:
      "Scan all ticket purchases at the event venue without any additional cost.",
    description:
      "The application automatically generates QR codes. To utilize this feature, simply create a scanner account, assign an event to it, and users can effortlessly log in to initiate the scanning process.",
    image: OfferImageOne,
  },
  {
    id: "o2",
    tag: "Escrow System",
    title:
      "We have implemented an escrow system that enables trust, provides an efficient ways of selling event tickets.",
    description:
      "Funds are available for withdrawal within 2 days of sales, ensuring satisfaction for both event organizers and attendees. This system also enables secure refunds for organizers in case of cancellations.",
    image: OfferImageTwo,
  },
  {
    id: "o3",
    tag: "Event Promotion",
    link: "Start promotion",
    title:
      "Get Visibility and Sales for your events  on vivacity with sponsored ads",
    description:
      "Sponsored event help you promote your event to most suitable buyers, at the most attractive locations (Search Page, Category Page and event Page) on vivacity app.",
    image: OfferImageOne,
  },
  {
    id: "o4",
    tag: "Instant Payout",
    link: "Withdraw funds now",
    title:
      "We have implemented an escrow system that enables trust, provides an efficient ways of selling event tickets.",
    description:
      "Funds are available for withdrawal within 2 days of sales, ensuring satisfaction for both event organizers and attendees. This system also enables secure refunds for organizers in case of cancellations.",
    image: OfferImageThree,
  },
];

type More = {
  id: string;
  title: string;
  description: string;
  icon: any;
};
export const more: More[] = [
  {
    id: "m1",
    title: "Increase your Visibility",
    description:
      "Get an opportunity to showcase your products on the top of the search and ",
    icon: Visibility,
  },
  {
    id: "m2",
    title: "Business Performance",
    description: "Keep your finger on the pulse of your business",
    icon: Performance,
  },
  {
    id: "m3",
    title: "Self Service Campaigns",
    description:
      "Have complete control over your campaign with options to select your own bids and budgets",
    icon: Help,
  },
];

type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "f1",
    question: "What is escrow system ?",
    answer:
      "An escrow system is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It helps to ensure the security and transparency of transactions, particularly in scenarios where there is a lack of trust between the buyer and the seller.",
  },
  {
    id: "f2",
    question: "What documents do I need to open a  business organizer account?",
    answer:
      "An escrow system is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It helps to ensure the security and transparency of transactions, particularly in scenarios where there is a lack of trust between the buyer and the seller.",
  },
  {
    id: "f3",
    question: "Is there a fee for opening an account?",
    answer:
      "An escrow system is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It helps to ensure the security and transparency of transactions, particularly in scenarios where there is a lack of trust between the buyer and the seller.",
  },
  {
    id: "f4",
    question: "Is vivacity safe?",
    answer:
      "An escrow system is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It helps to ensure the security and transparency of transactions, particularly in scenarios where there is a lack of trust between the buyer and the seller.",
  },
  {
    id: "f5",
    question: "Can a personal bank account be used for business?",
    answer:
      "An escrow system is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It helps to ensure the security and transparency of transactions, particularly in scenarios where there is a lack of trust between the buyer and the seller.",
  },
  {
    id: "f6",
    question: "How do i promote my event ?",
    answer:
      "An escrow system is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It helps to ensure the security and transparency of transactions, particularly in scenarios where there is a lack of trust between the buyer and the seller.",
  },
  {
    id: "f7",
    question: "How do I access my fund after sales ?",
    answer:
      "An escrow system is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It helps to ensure the security and transparency of transactions, particularly in scenarios where there is a lack of trust between the buyer and the seller.",
  },
];
