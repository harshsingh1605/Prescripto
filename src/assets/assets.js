import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Rajesh Sharma",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Sharma is dedicated to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, Mumbai",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Priya Iyer",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Iyer specializes in women’s health and is committed to providing personalized and empathetic care.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, Delhi",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sneha Kapoor",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Kapoor focuses on skincare and treatments, aiming to improve the quality of life of her patients.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, Bangalore",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Karthik Reddy",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Reddy is passionate about ensuring the well-being and development of children through quality care.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, Hyderabad",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Anjali Mehta",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Mehta is experienced in diagnosing and treating neurological disorders with a patient-centered approach.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Chennai",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Arjun Gupta",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Gupta combines expertise with compassion to provide effective neurological care.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Pune",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Pooja Singh",
    image: doc7,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Singh emphasizes preventive care and holistic treatment for her patients.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, Kolkata",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Ritu Verma",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Verma provides specialized care to ensure women’s health at every stage of life.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, Jaipur",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Kavita Nair",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Nair focuses on diagnosing and treating skin conditions, ensuring a personalized approach.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, Ahmedabad",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Rohit Malhotra",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Malhotra is committed to providing comprehensive healthcare for children.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, Lucknow",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Neha Desai",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Desai is highly skilled in treating a range of neurological conditions.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Chandigarh",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Aman Joshi",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Joshi employs the latest medical advancements to treat his patients effectively.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Coimbatore",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Simran Kaur",
    image: doc13,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Kaur is dedicated to providing quality medical care tailored to individual needs.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, Bhopal",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Vikram Acharya",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Acharya ensures compassionate care for women’s health concerns.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, Surat",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Anusha Menon",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Menon focuses on providing expert skincare solutions with a personalized approach.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, Thiruvananthapuram",
    },
  },
  {
    _id: "doc1",
    name: "Dr. Anandi Sharma",
    image: doc15,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Menon focuses on providing expert skincare solutions with a personalized approach.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, Thiruvananthapuram",
    },
  },
];
