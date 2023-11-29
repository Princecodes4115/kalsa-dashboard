import React from "react";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const TransactionHistory = dynamic(() => import("./TransactionsHistory"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="bg-white">
      <Layout>
        <TransactionHistory />
      </Layout>
    </div>
  );
};

export default page;
