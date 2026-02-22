import { BugReportForm } from "@/components/adminCatgory/categoryCreate";
import { Card } from "@/components/ui/card";
import { createCategory } from "@/service/admin";
import React from "react";

const CategoryCreatePage = async () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Category</h1>
      <BugReportForm />
    </div>
  );
};

export default CategoryCreatePage;
