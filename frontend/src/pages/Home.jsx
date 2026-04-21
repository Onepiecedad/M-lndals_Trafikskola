import React, { useState } from "react";
import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Marquee from "../components/site/Marquee";
import Packages from "../components/site/Packages";
import Lessons from "../components/site/Lessons";
import Courses from "../components/site/Courses";
import About from "../components/site/About";
import Instructors from "../components/site/Instructors";
import Testimonials from "../components/site/Testimonials";
import FAQ from "../components/site/FAQ";
import Contact from "../components/site/Contact";
import Footer from "../components/site/Footer";
import BookingDialog from "../components/site/BookingDialog";

export default function Home() {
  const [booking, setBooking] = useState({ open: false, item: null });

  const openBooking = (item = null) => setBooking({ open: true, item });
  const closeBooking = () => setBooking({ open: false, item: null });

  return (
    <div className="bg-[var(--mts-cream)] text-[var(--mts-ink)]">
      <Navbar onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <Marquee />
        <Packages onBook={openBooking} />
        <Lessons onBook={openBooking} />
        <Courses onBook={openBooking} />
        <About />
        <Instructors />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BookingDialog
        open={booking.open}
        item={booking.item}
        onClose={closeBooking}
      />
    </div>
  );
}
