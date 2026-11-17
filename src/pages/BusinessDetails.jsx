import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BackButton from "@/component/ux/backButton";

const STORE_TYPES = [
  "Restaurant",
  "Cafe",
  "Buffet restaurant",
  "Takeout restaurant",
  "Sushi restaurant",
  "Hotel",
  "Bakery",
  "Pastry shop",
  "Supermarket",
  "Beverage shop",
  "Butcher shop",
  "Fruit & vegetable store",
  "Flower & plant store",
  "Other",
];

const EMPTY = {
  name: "",
  type: "",
  street: "",
  zip: "",
  city: "",
  country: "",
};

const inputClass =
  "w-full h-[3rem] bg-white text-[#374151] px-4 focus:outline-0";
const labelClass = "block text-white text-base md:text-lg text-md mb-2";
const sectionClass = "text-white font-bold text-lg md:text-xl mt-6 mb-3";

const BusinessDetails = ({ onBack, onNext, initialData }) => {
  const [form, setForm] = useState(initialData || EMPTY);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext?.({
      name: form.name.trim(),
      type: form.type,
      street: form.street.trim(),
      zip: form.zip.trim(),
      city: form.city.trim(),
      country: form.country.trim(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[26.5rem] mx-auto lg:mx-0 mt-[2rem]"
    >
      {onBack && <BackButton onClick={onBack} />}

      <h2 className="text-white font-bold text-2xl text-center mt-4">
        Add your business details
      </h2>
      <p className="text-white text-base md:text-lg text-center mt-2">
        Please provide your business details below.
      </p>

      {/* Business details */}
      <h3 className={sectionClass}>Business details</h3>

      <label className={labelClass}>Business name</label>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
        className={inputClass}
      />

      <label className={`${labelClass} mt-5`}>Store type</label>
      <div className="relative">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className={`${inputClass} appearance-none pe-12 cursor-pointer`}
        >
          <option value="" disabled />
          {STORE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          className="absolute end-4 top-1/2 -translate-y-1/2 text-black pointer-events-none"
        />
      </div>

      {/* Business address */}
      <h3 className={sectionClass}>Business address</h3>

      <label className={labelClass}>Street name and number</label>
      <input
        name="street"
        type="text"
        value={form.street}
        onChange={handleChange}
        required
        className={inputClass}
      />

      <div className="grid grid-cols-2 gap-4 mt-5">
        <div>
          <label className={labelClass}>Zip code</label>
          <input
            name="zip"
            type="text"
            inputMode="numeric"
            value={form.zip}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>City</label>
          <input
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      <label className={`${labelClass} mt-5`}>Country</label>
      <input
        name="country"
        type="text"
        value={form.country}
        onChange={handleChange}
        required
        className={inputClass}
      />

      <button
        type="submit"
        className="w-full mt-8 mb-4 h-[3.2rem] rounded-xl bg-[#68D698] text-white font-bold text-lg cursor-pointer hover:opacity-90 transition"
      >
        Next
      </button>
    </form>
  );
};

export default BusinessDetails;
