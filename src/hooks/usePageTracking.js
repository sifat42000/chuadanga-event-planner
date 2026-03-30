import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/pixel";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location.pathname]);
}