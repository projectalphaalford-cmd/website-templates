import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TemplatePage from './pages/TemplatePage';

// Import template data from organized subfolders
import * as tuitionCenter from './templates/tuition-center/data';
import * as danceAcademy from './templates/dance-academy/data';
import * as school from './templates/school/data';
import * as stationery from './templates/stationery/data';
import * as restaurant from './templates/restaurant/data';
import * as gym from './templates/gym/data';
import * as medicalClinic from './templates/medical-clinic/data';
import * as salon from './templates/salon/data';
import * as clothingStore from './templates/clothing-store/data';
import * as electronics from './templates/electronics/data';

const templates = {
  'tuition-center': tuitionCenter,
  'dance-academy': danceAcademy,
  'school': school,
  'stationery': stationery,
  'restaurant': restaurant,
  'gym': gym,
  'medical-clinic': medicalClinic,
  'salon': salon,
  'clothing-store': clothingStore,
  'electronics': electronics,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Home />} />
      {Object.entries(templates).map(([id, data]) => (
        <Route
          key={id}
          path={`/template/${id}`}
          element={<TemplatePage data={data} />}
        />
      ))}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-zinc-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-zinc-300">404</h1>
              <p className="mt-4 text-lg text-zinc-600">Template not found</p>
              <a href="/" className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white">
                Back to Home
              </a>
            </div>
          </div>
        }
      />
    </Routes>
  );
}
