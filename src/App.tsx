/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Register from "./pages/Register";
import CurrentOpenings from "./pages/CurrentOpenings";
import CareersAtRaft from "./pages/CareersAtRaft";
import RecruitmentSolutions from "./pages/RecruitmentSolutions";
import OutsourcedStaffing from "./pages/OutsourcedStaffing";
import LearningAndDevelopment from "./pages/LearningAndDevelopment";
import AccountingCompliances from "./pages/AccountingCompliances";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us/" element={<About />} />
          <Route path="our-solutions/" element={<Solutions />} />
          <Route path="recruitment-solutions/" element={<RecruitmentSolutions />} />
          <Route path="outsourced-staffing/" element={<OutsourcedStaffing />} />
          <Route path="learning-and-development/" element={<LearningAndDevelopment />} />
          <Route path="accounting-compliances/" element={<AccountingCompliances />} />
          <Route path="register-with-us/" element={<Register />} />
          <Route path="contact-us/" element={<ContactUs />} />
          <Route path="privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="terms/" element={<Terms />} />
          {/* <Route path="current-openings/" element={<CurrentOpenings />} /> */}
          <Route path="careers-at-raft/" element={<CareersAtRaft />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



