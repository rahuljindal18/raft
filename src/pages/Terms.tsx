import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Page Title & Breadcrumb */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/terms/1920/1080?blur=10" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-6xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">raFT Consulting</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Terms & Conditions</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="mb-8">Welcome to Raft Consulting!</p>
            <p className="mb-8">
              These terms and conditions outline the rules and regulations for the use of Raft Consulting’s Website, located at <a href="https://raftconsulting.in/" className="text-green-600 hover:underline">https://raftconsulting.in/</a>.
            </p>
            <p className="mb-8">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Raft Consulting if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p className="mb-8">
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>

            <h3 className="text-2xl font-bold text-[#1c1c1c] mt-12 mb-6">Cookies</h3>
            <p className="mb-8">
              We employ the use of cookies. By accessing Raft Consulting, you agreed to use cookies in agreement with the Raft Consulting’s Privacy Policy.
            </p>
            <p className="mb-8">
              Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>

            <h3 className="text-2xl font-bold text-[#1c1c1c] mt-12 mb-6">License</h3>
            <p className="mb-8">
              Unless otherwise stated, Raft Consulting and/or its licensors own the intellectual property rights for all material on Raft Consulting. All intellectual property rights are reserved. You may access this from Raft Consulting for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Republish material from Raft Consulting</li>
              <li>Sell, rent or sub-license material from Raft Consulting</li>
              <li>Reproduce, duplicate or copy material from Raft Consulting</li>
              <li>Redistribute content from Raft Consulting</li>
            </ul>

            <p className="mb-8">
              This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.
            </p>

            <p className="mb-8">
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Raft Consulting does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Raft Consulting,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Raft Consulting shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>

            <p className="mb-8">
              Raft Consulting reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>

            <h3 className="text-2xl font-bold text-[#1c1c1c] mt-12 mb-6">Hyperlinking to our Content</h3>
            <p className="mb-4">The following organizations may link to our Website without prior written approval:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
              <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1c1c1c] mt-12 mb-6">iFrames</h3>
            <p className="mb-8">
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>

            <h3 className="text-2xl font-bold text-[#1c1c1c] mt-12 mb-6">Content Liability</h3>
            <p className="mb-8">
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>

            <h3 className="text-2xl font-bold text-[#1c1c1c] mt-12 mb-6">Disclaimer</h3>
            <p className="mb-8">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p className="mb-8">
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
            </p>
            <p className="mb-8">
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
