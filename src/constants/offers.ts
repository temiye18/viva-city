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
