import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExploreScreen } from "./features";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExploreScreen />
    </QueryClientProvider>
  );
}

export default App;
