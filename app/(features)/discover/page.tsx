import CarouselSection from "./components/carousel-section";
import { columns, Job } from "./components/columns";
import { DataTable } from "./components/data-table";

async function getJobs() {
  return fetch("http://localhost:4000/api/jobs", { method: "GET" });
}

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export default async function Discover() {
  const data = await (await getJobs()).json();
  const indexes = Array(5)
    .fill(0)
    .map(() => {
      return getRandomIntInclusive(0, data.length);
    });

  return (
    <div className="w-full h-full flex-col flex items-center container py-6 gap-6">
      <div className="flex flex-col gap-2 w-full md:max-w-2xl lg:max-w-3xl">
        {/* <h1 className="font-semibold text-2xl">Spotlight</h1> */}
        <CarouselSection indexes={indexes} data={data} />
      </div>
      <div className="w-full md:max-w-2xl lg:max-w-3xl">
        <h1 className="font-semibold text-2xl">Discover</h1>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
