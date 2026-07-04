import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TemplatePage from './pages/TemplatePage';

// Import all template data
import * as tuitionCenter from './data/tuition-center';
import * as danceAcademy from './data/dance-academy';
import * as school from './data/school';
import * as gym from './data/gym';
import * as restaurant from './data/restaurant';
import * as cafe from './data/cafe';
import * as stationery from './data/stationery';
import * as medicalClinic from './data/medical-clinic';
import * as salon from './data/salon';
import * as clothingStore from './data/clothing-store';
import * as electronics from './data/electronics';
import * as realEstate from './data/real-estate';
import * as travelAgency from './data/travel-agency';
import * as photography from './data/photography';
import * as portfolio from './data/portfolio';

const templates = {
  'tuition-center': tuitionCenter,
  'dance-academy': danceAcademy,
  'school': school,
  'gym': gym,
  'restaurant': restaurant,
  'cafe': cafe,
  'stationery': stationery,
  'medical-clinic': medicalClinic,
  'salon': salon,
  'clothing-store': clothingStore,
  'electronics': electronics,
  'real-estate': realEstate,
  'travel-agency': travelAgency,
  'photography': photography,
  'portfolio': portfolio,
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
