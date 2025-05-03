import configPromise from '@payload-config'

// https://localhost:3000/admin

import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
      config: configPromise,
    })
  
    const data = await payload.find({
      collection: "categories",
    })
  
  return (
    <div className="flex flex-col gap-y-4 p-2">
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
