import DesignSystemPage from "@/modules/design-system/views/DesignSystemPage/DesignSystemPage";
import { notFound } from "next/navigation";

export default function DesignSystem() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <DesignSystemPage />;
}
