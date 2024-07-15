import { AsyncPage } from "pages/async";
import { FormPage } from "pages/form";
import { PromisePage } from "pages/promise";
import { SettingsPage } from "pages/settings";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";

export const ConfiguredRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/async" />} />
      <Route path={PATHS.ASYNC} element={<AsyncPage />} />
      <Route path={PATHS.PROMISE} element={<PromisePage />} />
      <Route path={PATHS.SETTINGS} element={<SettingsPage />} />
      <Route path={PATHS.FORM} element={<FormPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
