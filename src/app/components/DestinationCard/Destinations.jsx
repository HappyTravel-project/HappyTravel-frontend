"use client";
import DestinationCard from "./DestinationCard";
import { filterData } from "@/app/utils/filterData";

const Destinations = ({ destinations, query }) => {

  const filteredData = filterData(destinations, query);

  return (
    <div>
      {filteredData.length > 0 ? <DestinationCard data={filteredData} /> : <DestinationCard data={destinations.data} />}
    </div>
  );
};

export default Destinations;
