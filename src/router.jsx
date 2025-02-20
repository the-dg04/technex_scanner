import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TechnexScanner from "./TechnexScanner";
import EventSelector from "./EventSelector";

export default function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <EventSelector /> },
    { path: "/scan/:event_name", element: <TechnexScanner /> },
  ]);
  return <RouterProvider router={router} />;
}
