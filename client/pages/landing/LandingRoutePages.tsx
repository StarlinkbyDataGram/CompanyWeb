import { Link } from "react-router-dom";
import IndustryLandingPage from "./IndustryLandingPage";
import RegionalLandingPage from "./RegionalLandingPage";
import { getIndustryPageByPath } from "@/data/landing/industry-pages";
import { getRegionalPageByPath } from "@/data/landing/regional-pages";
import { Button } from "@/components/ui/button";

function LandingNotFound() {
  return (
    <div className="container py-20">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Button asChild className="mt-6">
        <Link to="/">Back home</Link>
      </Button>
    </div>
  );
}

export function IndustryLandingRoute() {
  const { pathname } = window.location;
  const config = getIndustryPageByPath(pathname);
  if (!config) return <LandingNotFound />;
  return <IndustryLandingPage config={config} />;
}

export function RegionalLandingRoute() {
  const { pathname } = window.location;
  const config = getRegionalPageByPath(pathname);
  if (!config) return <LandingNotFound />;
  return <RegionalLandingPage config={config} />;
}

/** Wrapper when route path is explicit in App.tsx */
export function IndustryLandingByPath({ path }: { path: string }) {
  const config = getIndustryPageByPath(path);
  if (!config) return <LandingNotFound />;
  return <IndustryLandingPage config={config} />;
}

export function RegionalLandingByPath({ path }: { path: string }) {
  const config = getRegionalPageByPath(path);
  if (!config) return <LandingNotFound />;
  return <RegionalLandingPage config={config} />;
}
