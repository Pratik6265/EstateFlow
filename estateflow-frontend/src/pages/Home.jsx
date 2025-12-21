import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Find, Manage & Sell Properties  
              <span className="text-emerald-400"> Smarter</span>
            </h1>

            <p className="mt-5 text-lg text-blue-100">
              EstateFlow helps you manage properties, tenants, and deals
              effortlessly — all in one platform.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/login"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Started
              </Link>

              <Link
                to="/properties"
                className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition"
              >
                Browse Properties
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="Real Estate"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Properties", value: "2,500+" },
            { label: "Active Clients", value: "1,200+" },
            { label: "Cities Covered", value: "45+" },
            { label: "Successful Deals", value: "3,800+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {stat.value}
              </h3>
              <p className="text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Properties
          </h2>
          <Link
            to="/properties"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1572120360610-d971b9b78825"
                alt="Property"
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  Modern Family House
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Bhopal, Madhya Pradesh
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-emerald-600 font-bold text-lg">
                    ₹75,00,000
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to grow your real estate business?
          </h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join EstateFlow today and manage properties, clients, and deals
            with complete confidence.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-8 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-medium transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
