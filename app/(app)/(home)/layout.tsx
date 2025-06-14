import { getPayload } from "payload";
import configPromise from "@/payload.config";

import { SearchFilters } from "@/components/search-filters";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Category } from "@/payload-types";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // If we have a depth of 1, we get the category as a Category Type
    pagination: false,
    where: {
      parent: {
        exists: false,
      }, // https://localhost:3000/admin
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));


  console.log({ "data": data }, { "formattedData": formattedData });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
