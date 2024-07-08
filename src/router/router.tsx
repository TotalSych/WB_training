import { AsyncPage } from "pages/async";
import { PromisePage } from "pages/promise";
import { SettingsPage } from "pages/settings";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import { mockRepos } from "types";
import { FormPage } from "pages/form";

export const ConfiguredRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/async" />} />
      <Route path={PATHS.ASYNC} element={<AsyncPage repos={mockRepos} />} />
      <Route path={PATHS.PROMISE} element={<PromisePage repos={mockRepos} />} />
      <Route path={PATHS.SETTINGS} element={<SettingsPage />} />
      <Route path={PATHS.FORM} element={<FormPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
