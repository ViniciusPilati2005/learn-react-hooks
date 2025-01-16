import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "@/utils/queries-config";

const queryClient = new QueryClient(queryClientConfig);

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col flex-1 h-full">
        <Outlet />
        {/* <Toaster /> */}
      </div>
    </QueryClientProvider>
  ),
});
