import Image from "next/image";

const TaxiPrices = () => {
  // Array of ticket data
  const tickets = [
    {
      from: { name: "Mykonos Airport", icon: "/airport-icon.png" },
      to: { name: "Mykonos Port", icon: "/port-icon.png" },
      distance: { km: "5 KM", duration: "15 MINS", arrow: "/dotted-line-arrow.png" },
      price: { type: "ECON", amount: "€ 36" },
    },
    {
      from: { name: "Mykonos Airport", icon: "/airport-icon.png" },
      to: { name: "Mykonos Beach", icon: "/beach-icon.png" },
      distance: { km: "7 KM", duration: "20 MINS", arrow: "/dotted-line-arrow.png" },
      price: { type: "ECON", amount: "€ 40" },
    },
    {
      from: { name: "Mykonos Port", icon: "/port-icon.png" },
      to: { name: "Mykonos Town", icon: "/town-icon.png" },
      distance: { km: "3 KM", duration: "10 MINS", arrow: "/dotted-line-arrow.png" },
      price: { type: "ECON", amount: "€ 25" },
    },
    {
      from: { name: "Mykonos Airport", icon: "/airport-icon.png" },
      to: { name: "Super Paradise Beach", icon: "/paradise-icon.png" },
      distance: { km: "8 KM", duration: "25 MINS", arrow: "/dotted-line-arrow.png" },
      price: { type: "ECON", amount: "€ 50" },
    },
  ];

  return (
    <section className="bg-white px-4 py-8 md:px-12">
      {/* Heading */}
      <h1 className="text-center text-xl md:text-2xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Mykonos taxi prices
        </span>{" "}
        and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          distance
        </span>{" "}
        for popular routes and hotspots
      </h1>

      {/* Table */}
      <div className="mt-6 border rounded-lg shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-4 text-center bg-gray-100 font-semibold py-2 text-sm">
          <div>
            <Image
              src="/from-icon.png"
              alt="From Icon"
              width={24}
              height={24}
              className="mx-auto"
            />
            <span>From</span>
          </div>
          <div>
            <Image
              src="/distance-icon.png"
              alt="Distance Icon"
              width={24}
              height={24}
              className="mx-auto"
            />
            <span>Distance</span>
          </div>
          <div>
            <Image
              src="/to-icon.png"
              alt="To Icon"
              width={24}
              height={24}
              className="mx-auto"
            />
            <span>To</span>
          </div>
          <div>
            <Image
              src="/price-icon.png"
              alt="Price Icon"
              width={24}
              height={24}
              className="mx-auto"
            />
            <span>Price</span>
          </div>
        </div>

        {/* Rows */}
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 items-center text-center py-4 border-t text-sm ${
              index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"
            } shadow-sm`}
          >
            {/* From */}
            <div className="flex items-center justify-center gap-2">
              <Image
                src={ticket.from.icon}
                alt={ticket.from.name}
                width={24}
                height={24}
              />
              <span>{ticket.from.name}</span>
            </div>

            {/* Distance */}
            <div className="flex flex-col items-center">
              <span className="text-blue-600 font-bold">{ticket.distance.km}</span>
              <Image
                src={ticket.distance.arrow}
                alt="Dotted Arrow"
                width={60}
                height={10}
              />
              <span>{ticket.distance.duration}</span>
            </div>

            {/* To */}
            <div className="flex items-center justify-center gap-2">
              <Image
                src={ticket.to.icon}
                alt={ticket.to.name}
                width={24}
                height={24}
              />
              <span>{ticket.to.name}</span>
            </div>

            {/* Price */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500">{ticket.price.type}</span>
              <span className="text-blue-600 font-bold text-lg">
                {ticket.price.amount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
          See prices & book instantly
        </button>
      </div>
    </section>
  );
};

export default TaxiPrices;
