/* eslint-disable react/prop-types */

import { formatDate } from "../utils/formatDate";

const Card = ({ retreat }) => (
  <div className="bg-secondary shadow-md rounded-lg p-4">
    <img
      src={retreat.image}
      alt={retreat.title}
      className="w-full lg:w-3/5 h-48 object-cover rounded-md"
    />
    <h2 className="text-xl font-semibold mt-2">{retreat.title}</h2>
    <p>{retreat.description}</p>
    <p className="mt-2">Date: {formatDate(retreat.date, retreat.duration)}</p>
    <p>Location: {retreat.location}</p>
    <p>
      <strong>Price: ${retreat.price}</strong>
    </p>
  </div>
);

export default Card;
