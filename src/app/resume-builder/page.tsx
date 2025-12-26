"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {/* Form - Full width on mobile, half on desktop */}
          <div className="col-span-1 lg:col-span-3">
            <ResumeForm />
          </div>
          {/* Preview - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:col-span-3 lg:block">
            <Resume />
          </div>
        </div>
      </main>
    </Provider>
  );
}
