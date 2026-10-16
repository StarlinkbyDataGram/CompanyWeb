import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";
import Header from "@/components/site/Header";
import Picture from "@/components/site/Picture";
import Footer from "@/components/site/Footer";
import Analytics from "@/components/Analytics";
import Index from "./pages/Index";
import { lazyNamed, lazyRoute } from "@/lib/lazy-route";
import { INDUSTRY_LANDING_PATHS, REGIONAL_LANDING_PATHS } from "@/data/landing/landing-paths";

const ChatBot = lazy(() => import("@/components/site/ChatBot"));

const About = lazyRoute(() => import("./pages/About"));
const Services = lazyRoute(() => import("./pages/Services"));
const Blog = lazyRoute(() => import("./pages/Blog"));
const Contact = lazyRoute(() => import("./pages/Contact"));
const Support = lazyRoute(() => import("./pages/Support"));
const Products = lazyRoute(() => import("./pages/Products"));
const ProductDetail = lazyRoute(() => import("./pages/ProductDetail"));
const ServiceDetail = lazyRoute(() => import("./pages/ServiceDetail"));
const NotFound = lazyRoute(() => import("./pages/NotFound"));
const Privacy = lazyRoute(() => import("./pages/Privacy"));
const Terms = lazyRoute(() => import("./pages/Terms"));
const FaqPage = lazyRoute(() => import("./pages/FaqPage"));
const LocationsIndex = lazyRoute(() => import("./pages/LocationsIndex"));
const LocationsAll = lazyRoute(() => import("./pages/LocationsAll"));
const LocationDetail = lazyRoute(() => import("./pages/LocationDetail"));
const StarlinkGuideNigeria = lazyRoute(() => import("./pages/StarlinkGuideNigeria"));
const Gallery = lazyRoute(() => import("./pages/Gallery"));
const OurWork = lazyRoute(() => import("./pages/OurWork"));
const BlogPost = lazyRoute(() => import("./pages/BlogPost"));
const AdminLogin = lazyRoute(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazyRoute(() => import("./pages/admin/AdminDashboard"));
const AdminProducts = lazyRoute(() => import("./pages/admin/AdminProducts"));
const AdminTestimonials = lazyRoute(() => import("./pages/admin/AdminTestimonials"));
const AdminFAQ = lazyRoute(() => import("./pages/admin/AdminFAQ"));
const AdminBlog = lazyRoute(() => import("./pages/admin/AdminBlog"));
const ProtectedRoute = lazyRoute(() => import("./components/admin/ProtectedRoute"));

const IndustryLandingByPath = lazyNamed(
  () => import("./pages/landing/LandingRoutePages"),
  "IndustryLandingByPath",
);
const RegionalLandingByPath = lazyNamed(
  () => import("./pages/landing/LandingRoutePages"),
  "RegionalLandingByPath",
);

const queryClient = new QueryClient();

function useDeferredWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;
    // The snapshot is taken with this agent and must match the first hydrated render.
    if (typeof navigator !== "undefined" && navigator.userAgent.includes("ReactSnap")) return;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setReady(true);
    };
    const onPointer = () => finish();
    const onKey = () => finish();
    window.addEventListener("pointerdown", onPointer, { once: true, passive: true });
    window.addEventListener("keydown", onKey, { once: true });
    const armIdle = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => finish(), { timeout: 2000 });
      } else {
        window.setTimeout(finish, 200);
      }
    };
    if (document.readyState === "complete") armIdle();
    else window.addEventListener("load", armIdle, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("load", armIdle);
    };
  }, [ready]);

  return ready;
}

const AppContent = () => {
  const location = useLocation();
  const widgetsReady = useDeferredWidget();
  // First paint / hydration must stay fully opaque. Animate only on later client navigations.
  const firstPathRef = useRef(location.pathname);
  const [motionNav, setMotionNav] = useState(false);

  useEffect(() => {
    if (location.pathname !== firstPathRef.current) {
      setMotionNav(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={motionNav ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={motionNav ? { opacity: 0, y: -20 } : undefined}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={motionNav ? "page-animate" : undefined}
          >
            <Suspense fallback={null}>
              <Routes location={location}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                {INDUSTRY_LANDING_PATHS.map((path) => (
                  <Route
                    key={path}
                    path={path}
                    element={<IndustryLandingByPath path={path} />}
                  />
                ))}
                {REGIONAL_LANDING_PATHS.map((path) => (
                  <Route
                    key={path}
                    path={path}
                    element={<RegionalLandingByPath path={path} />}
                  />
                ))}
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/support" element={<Support />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/locations" element={<LocationsIndex />} />
                <Route path="/locations/all" element={<LocationsAll />} />
                <Route path="/locations/kano" element={<Navigate to="/locations/niger-delta" replace />} />
                <Route path="/locations/:slug" element={<LocationDetail />} />
                <Route path="/guide/starlink-nigeria" element={<StarlinkGuideNigeria />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <ProtectedRoute>
                      <AdminProducts />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/testimonials"
                  element={
                    <ProtectedRoute>
                      <AdminTestimonials />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/faq"
                  element={
                    <ProtectedRoute>
                      <AdminFAQ />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/blog"
                  element={
                    <ProtectedRoute>
                      <AdminBlog />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {widgetsReady ? <FloatingContact /> : null}
      {widgetsReady ? (
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      ) : null}
    </>
  );
};

// ─── Floating WhatsApp / Call Button ─────────────────────────────────────────
const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "fixed bottom-20 right-5 lg:bottom-5 lg:left-5 lg:right-auto z-50 flex flex-col items-end lg:items-start gap-3"
      }
    >
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="group relative flex items-center gap-2"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.span className="absolute right-full mr-2 lg:right-auto lg:mr-0 lg:left-full lg:ml-2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                WhatsApp
              </motion.span>
              <motion.a
                href="https://wa.me/2349060976424?text=Hello%20Datagram%2C%20I%27d%20like%20to%20get%20connected."
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:brightness-110 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat on WhatsApp"
              >
                <Picture src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" sizes="24px" />
              </motion.a>
            </motion.div>

            <motion.div
              className="group relative flex items-center gap-2"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            >
              <motion.span className="absolute right-full mr-2 lg:right-auto lg:mr-0 lg:left-full lg:ml-2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                Call Us
              </motion.span>
              <motion.a
                href="tel:+2349060976424"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:brightness-110 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Call us"
              >
                <Phone className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        className="group relative flex items-center gap-2"
        initial={{ scale: 0 }}
        animate={{ scale: open ? 1 : [1, 1.08, 1] }}
        transition={
          open
            ? { duration: 0.3 }
            : { delay: 1, duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {open ? (
          <span className="absolute right-full mr-2 lg:right-auto lg:mr-0 lg:left-full lg:ml-2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Hide
          </span>
        ) : (
          <span className="absolute right-full mr-2 lg:right-auto lg:mr-0 lg:left-full lg:ml-2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white shadow-lg opacity-100 transition-opacity duration-200 pointer-events-none">
            24/7 Support
          </span>
        )}

        <motion.button
          onClick={() => setOpen(!open)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:brightness-110"
          whileHover={{ scale: open ? 1.05 : 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={open ? "Close contact options" : "Open contact options"}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Analytics />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root")!;
const app = <App />;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  const globalAny = window as Window & { __APP_ROOT__?: ReturnType<typeof createRoot> };
  if (!globalAny.__APP_ROOT__) {
    globalAny.__APP_ROOT__ = createRoot(rootElement);
    if (import.meta.hot) {
      import.meta.hot.dispose(() => {
        try {
          globalAny.__APP_ROOT__?.unmount();
          globalAny.__APP_ROOT__ = undefined;
        } catch {
          /* ignore */
        }
      });
    }
  }
  globalAny.__APP_ROOT__!.render(app);
}
