import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle2, Circle, Calculator, FileText, Briefcase, Landmark, ShieldCheck } from "lucide-react";

export default function AccountingCompliances() {
  const accountingSolutions = [
    {
      title: "Book keeping",
      description: "General ledger accounting, accounts reconciliation & consolidation, management reporting, inter-company transactions, interim /annual financial statements, project/product accounting, fixed asset accounting."
    },
    {
      title: "Receivables and Payables Accounting",
      description: "Billing, credit and collection management & analysis, purchase order management, contract management, payment authorization, cost accounting and vendor management."
    },
    {
      title: "Compliance Management & Statutory Reporting",
      description: "Financial statements preparation under Indian GAAP, US GAAP, financial budgeting, Compliance with Reserve Bank of India, FEMA, Registrar of Companies (MCA) guidelines. Compliance with income tax, provident fund, ESI, labour laws and all applicable statutes."
    },
    {
      title: "Corporate Finance",
      description: "Cash/Treasury management, cash receipts & collection management, bank reconciliation, credit management & analysis."
    },
    {
      title: "Tax Returns",
      description: "Return preparation, document organization on web server, upload processed data to client, access scans via web browser."
    },
    {
      title: "Vendor TDS Outsourcing",
      description: "Vendor TDS, checking bills, Calculation of TDS, reconciliation of TDS, generation & dispatch of certificates, deposit of quarterly returns, maintenance of TDS certificate details & dispatch."
    },
    {
      title: "Employee TDS Outsourcing",
      description: "Obtaining declarations, updating of declaration on a monthly basis, deposit of TDS after compilation, deposit of quarterly return, issue of Form 16 part B, checking investment proof, interaction with employees."
    },
    {
      title: "Virtual CFO",
      description: "Managing local operations for overseas clients, thus enabling them to take advantage of the legal and regulatory environment, timely financial reporting, regular monitoring of ongoing operations, local disbursement payment processing, professional accounting and payroll services."
    }
  ];

  const gstFeatures = [
    "GST is a single window to taxes on goods and services and will be with a regime to be charged on destination principal and credit of input will be availed once value addition is achieved.",
    "Important to understand difference between current tax structure and proposed GST operations",
    "GST is defined as \"any tax on supply of goods and services other than on alcohol for human consumption\".",
    "Basically GST is a value added tax, which will be levied at all points in supply chain, where the deliverable changes hands, with a privilege to avail credit for any tax paid on input received for use in creating such supply.",
    "GST Subsumes – VAT or sales tax, Central Sales tax, Entertainment tax, Service Tax, Central Excise Duty, Purchase Tax, Octroi etc.",
    "GST will work in 2 parts – Intra State and Inter State (IGST) and Intra State is further divided into two parts i.e. Central GST (CGST) and State GST (SGST).",
    "Exceptions on Applicability of GST - Alcohol for Human Consumption, Electricity, Real Estate, Petroleum Products, Tobacco Products."
  ];

  const gstOffers = [
    "Registration under Goods and Services Tax Act",
    "Maintenance of Books and Accounts as per GST Laws",
    "Preparation and filing of returns",
    "Assistance in calculation and depositing GST",
    "Audit of Books in purview of GST Laws"
  ];

  const payrollServices = [
    "Maintaining Master database of all employees.",
    "Entering/uploading attendance data, increment and changes in salary.",
    "Salary structure creation on the basis of Company norms.",
    "Entering deduction of loan.",
    "Updating Tax Deducted at Source and other deductions.",
    "Processing of payroll.",
    "Salary, payment, cost to the company and employee count reconciliation",
    "Generation of reports/returns."
  ];

  const businessSetup = [
    "Company Incorporation – Wholly Owned Subsidiary or Joining Venture",
    "Limited Liability Partnership",
    "Liaison Office",
    "Branch Office",
    "Necessary registrations under Shops and Establishment Act, Companies Act, Labour Welfare Fund, GST, Income Tax, PF, ESI, etc.",
    "Regular Accounting and Payroll Outsourcing",
    "Concurrent Audits",
    "Internal Audits",
    "Taxation Audits",
    "PF Trust Management"
  ];

  const taxAssessees = [
    "Individuals", "Corporates", "Firms", "Association of Persons", "Body of Individuals", "Societies", "Trusts"
  ];

  const advisoryServices = [
    "Entry Strategy for setting up Business in India",
    "Corporate Advisory Services",
    "Corporate Law Services",
    "Business Strategy",
    "Finance",
    "Management Assurance Services"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/accounting/1920/1080?blur=10" 
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
            Accounting Compliances
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Accounting Compliances</span>
          </nav>
        </div>
      </section>

      {/* Accounting Solutions */}
      <section id="accounting" className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#1c1c1c] tracking-tight mb-4 uppercase">Accounting Solutions</h2>
            <div className="w-20 h-1 bg-green-500"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accountingSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-[#1c1c1c] border-l-4 border-green-500 pl-4">{solution.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GST Section */}
      <section id="goods" className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-[#1c1c1c] tracking-tight mb-4 uppercase">Goods and Service Tax</h2>
                <div className="w-20 h-1 bg-green-500"></div>
              </div>
              <div className="space-y-4">
                {gstFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1c1c1c] mb-8">What We Offer:</h3>
              <div className="space-y-6">
                {gstOffers.map((offer, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-[#1c1c1c] font-bold">{offer}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-green-50 border-l-4 border-green-500">
                <p className="text-green-800 text-sm italic">
                  "GST is defined as any tax on supply of goods and services other than on alcohol for human consumption."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payroll Processing */}
      <section id="payroll" className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/payroll/800/600" 
                alt="Payroll" 
                className="w-full h-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#1c1c1c] p-12 hidden xl:block">
                <Calculator className="w-12 h-12 text-green-500 mb-4" />
                <p className="text-white text-xl font-bold">Efficiency & Accuracy</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-[#1c1c1c] tracking-tight mb-4 uppercase">Payroll Processing</h2>
                <div className="w-20 h-1 bg-green-500"></div>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Payroll processing is a challenging task because of volume, complexity and legislation. We offer lower costs, better efficiency and reliable online payroll processing and tax calculation services.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {payrollServices.map((service, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Circle className="w-2 h-2 text-green-500 fill-green-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-600 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Setup */}
      <section id="business" className="py-24 bg-[#1c1c1c] text-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight uppercase">Business Setup in India</h2>
              <p className="text-white/60 leading-relaxed">
                India being developing country and having more business prospects, foreigner see India as a flourishing market. We provide legal existence options via Liaison Office, Branch Office or Wholly Owned Subsidiary.
              </p>
              <div className="space-y-4">
                {businessSetup.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <Briefcase className="w-4 h-4 text-green-500 group-hover:text-white" />
                    </div>
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-sm backdrop-blur-sm border border-white/10">
              <Landmark className="w-16 h-16 text-green-500 mb-8" />
              <h3 className="text-2xl font-bold mb-6">Strategic Entry</h3>
              <p className="text-white/60 mb-8">
                We provide a single window facility for all related services, ensuring a smooth transition and setup for your business in the Indian market.
              </p>
              <Link to="/contact-us" className="inline-flex items-center gap-2 text-green-500 font-bold hover:gap-4 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Compliances */}
      <section id="tax" className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#1c1c1c] tracking-tight uppercase">Tax Compliances</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[#1c1c1c]">Assessees We Serve:</h4>
              <div className="flex flex-wrap gap-3">
                {taxAssessees.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-bold rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed pt-4">
                We handle all kinds of services under Direct Taxation, covering Salary, House Property, Business & Profession, Capital Gains, etc.
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="p-10 bg-gray-50 border-b-4 border-green-500 space-y-6">
                <ShieldCheck className="w-10 h-10 text-green-500" />
                <h4 className="text-xl font-bold text-[#1c1c1c]">Legal & Financial Consulting</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Valuable consultancy services that play an integral role in decision-making and negotiation processes.
                </p>
              </div>
              <div className="p-10 bg-gray-50 border-b-4 border-green-500 space-y-6">
                <FileText className="w-10 h-10 text-green-500" />
                <h4 className="text-xl font-bold text-[#1c1c1c]">Advisory Services</h4>
                <ul className="space-y-2">
                  {advisoryServices.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1c1c1c] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Streamline your compliances today.</h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Focus on your core business while we handle the complexities of accounting and statutory requirements.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact-us/" 
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm transition-all shadow-2xl"
            >
              Get Professional Advice
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
